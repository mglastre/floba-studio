import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
    subsets: ["latin"],
    variable: "--font-bodoni",
    display: "swap",
});

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    display: "swap",
});

export const metadata: Metadata = {
    title: "FLOBA STUDIO | Arquitectura & Emoción",
    description: "Visualización de alta gama e Inteligencia Artificial para el mercado inmobiliario de lujo.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className={`${bodoni.variable} ${manrope.variable}`}>
            <body className="antialiased selection:bg-[#C5B358] selection:text-white">
                {children}
            </body>
        </html>
    );
}
