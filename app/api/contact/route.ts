import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, company, email, phone, details, imageLink, selectedPack } = body;

        // Check for required environment variables
        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.error("❌ Error: Faltan las variables de entorno para SMTP (SMTP_HOST, SMTP_USER, SMTP_PASS)");
            return NextResponse.json({
                success: false,
                message: "Configuración incompleta en el servidor. Por favor, asegúrese de agregar las Variables de Entorno (SMTP_HOST, USER, PASS) en el panel de Vercel/Hosting."
            }, { status: 500 });
        }

        // Generate a unique ID (PA + timestamp last 6 digits for brevity/uniqueness)
        const timestamp = Date.now().toString();
        const uniqueId = `PA${timestamp.slice(-6)}`;

        // Configure Nodemailer Transporter
        // NOTE: These environment variables must be set in the deployment platform (Vercel, etc.)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // 1. Email to Admin
        const adminMailOptions = {
            from: `"Floba Studio" <hola@flobastudio.com>`, // Sender address
            to: "hola@flobastudio.com", // Admin address
            subject: `Nueva Solicitud: ${selectedPack} - ${uniqueId}`,
            text: `
                Nueva solicitud de pack recibida.
                ID: ${uniqueId}
                Pack: ${selectedPack}

                Nombre: ${name}
                Empresa: ${company}
                Email: ${email}
                Teléfono: ${phone}
                Detalles: ${details}
                Link Imágenes: ${imageLink || "No proporcionado"}
            `,
            html: `
                <h2>Nueva solicitud recibida</h2>
                <p><strong>ID:</strong> ${uniqueId}</p>
                <p><strong>Pack:</strong> ${selectedPack}</p>
                <hr />
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Empresa:</strong> ${company}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Teléfono:</strong> ${phone}</p>
                <p><strong>Detalles:</strong><br/>${details}</p>
                <p><strong>Link Imágenes:</strong> ${imageLink || "No proporcionado"}</p>
            `
        };

        // 2. Auto-reply to User
        const userMailOptions = {
            from: `"Floba Studio" <hola@flobastudio.com>`,
            to: email,
            subject: `Confirmación de solicitud – ${uniqueId}`,
            text: `
Hola, ${name}:

Confirmamos la recepción de su solicitud correspondiente al ${uniqueId}, junto con toda la información proporcionada.

En un plazo estimado de 24 a 48 horas le estaremos enviando la información necesaria para iniciar el proyecto, así como los medios de pago disponibles.

Ante cualquier duda o consulta adicional, puede comunicarse con nosotros vía WhatsApp al +54 9 11 0000-0000.

Muchas gracias por confiar en nosotros.

Atentamente,
Equipo Floba Studio
            `,
            // HTML version can be same as text or slightly styled
            html: `
<p>Hola, <strong>${name}</strong>:</p>

<p>Confirmamos la recepción de su solicitud correspondiente al <strong>${uniqueId}</strong>, junto con toda la información proporcionada.</p>

<p>En un plazo estimado de 24 a 48 horas le estaremos enviando la información necesaria para iniciar el proyecto, así como los medios de pago disponibles.</p>

<p>Ante cualquier duda o consulta adicional, puede comunicarse con nosotros vía WhatsApp al +54 9 11 0000-0000.</p>

<p>Muchas gracias por confiar en nosotros.</p>

<p>Atentamente,<br/>
Equipo Floba Studio</p>
            `
        };

        // Send emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);

        return NextResponse.json({ success: true, message: "Emails sent successfully", id: uniqueId });

    } catch (error: any) {
        console.error("❌ Error en el servidor al enviar emails:", error);
        return NextResponse.json({
            success: false,
            message: error.message || "Error interno del servidor",
            details: error.toString()
        }, { status: 500 });
    }
}
