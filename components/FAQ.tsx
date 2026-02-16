"use strict";
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "¿Cuál es el flujo de trabajo para iniciar un proyecto?",
        answer: "El proceso comienza con la recepción de la documentación técnica (planos en formato CAD/PDF) o material fotográfico de referencia. Una vez validado el alcance del pack seleccionado y acreditado el anticipo correspondiente, se da inicio a la fase de producción.",
    },
    {
        question: "¿Qué requisitos deben cumplir las fotografías para el servicio de AI Virtual Revive?",
        answer: "Para garantizar resultados de alta fidelidad, es indispensable que las fotografías sean capturadas en alta resolución y con una iluminación natural óptima. Recomendamos encuadres limpios que permitan apreciar la volumetría real del espacio. En caso de detectar que el material no posee la nitidez necesaria, nos comunicaremos de inmediato para solicitar nuevo material antes de procesar el pedido.",
    },
    {
        question: "¿Cuáles son los plazos de entrega estipulados?",
        answer: "Los tiempos de respuesta varían según la complejidad técnica. El servicio AI Virtual Revive cuenta con un plazo de 24 a 48 horas hábiles. Para proyectos que requieran modelado volumétrico y narrativa cinematográfica (Essential e Hyper-Motion), el cronograma oscila entre los 3 y 10 días hábiles tras la validación del material de origen.",
    },
    {
        question: "¿Quién define el estilo de la decoración y el mobiliario?",
        answer: "Salvo indicación específica o manual de marca provisto por el cliente, FLOBA STUDIO aplica un criterio de curaduría profesional basado en tendencias actuales de diseño (Estética Contemporánea/Orgánica).",
    },
    {
        question: "¿Cómo se gestionan las revisiones y cambios de diseño?",
        answer: "Cada paquete incluye una instancia de revisión para ajustes de materialidad, mobiliario o iluminación. Aquellas modificaciones que impliquen cambios en la morfología estructural o en el diseño arquitectónico original, una vez iniciada la etapa de renderizado, serán presupuestadas como adicionales.",
    },
    {
        question: "¿Cuáles son los medios de pago y vigencia de presupuestos?",
        answer: "Operamos mediante transferencia bancaria, pagos en efectivo y activos digitales (USDT). Las cotizaciones tienen una validez de 7 días corridos desde su emisión. La modalidad estándar requiere un anticipo del 50% para el inicio de tareas y el 50% restante contra entrega.",
    },
    {
        question: "¿En qué formatos se entregan los activos visuales?",
        answer: "Se proveen piezas en alta definición (4K según el pack) duplicadas en dos formatos: horizontal (proporción estándar para portales inmobiliarios) y vertical (proporción 9:16) optimizadas para redes sociales y dispositivos móviles.",
    },
];

const terms = [
    {
        title: "1. Calidad del Material de Origen",
        content: "La viabilidad técnica de los servicios está sujeta a la calidad del material provisto. FLOBA STUDIO se reserva el derecho de rechazar archivos con ruido digital, desenfoque o subexposición severa que comprometa la integridad del renderizado.",
    },
    {
        title: "2. Propiedad y Derechos de Uso",
        content: "El cliente adquiere los derechos de uso comercial de las piezas finales. El estudio conserva el derecho de exhibir el material en su portfolio profesional y canales de difusión, salvo acuerdo explícito de confidencialidad previo.",
    },
    {
        title: "3. Entrega de Archivos Fuente",
        content: "Los honorarios corresponden a la entrega de productos terminados (.JPG / .MP4).",
    },
    {
        title: "4. Limitación de Responsabilidad Técnica",
        content: "Las visualizaciones generadas tienen un fin estrictamente comercial y publicitario. No constituyen documentos técnicos de construcción, planos de obra o ingeniería, y no deben ser utilizados como tales.",
    },
    {
        title: "5. Protocolo de Finalización y Resguardo",
        content: "Las versiones finales sin marcas de agua se liberarán únicamente tras la acreditación total del saldo. El estudio garantiza el resguardo de los archivos en servidor por un período de 90 días posteriores a la entrega; pasado este plazo, la disponibilidad del material no está garantizada.",
    },
    {
        title: "6. Política de Cancelación",
        content: "Dada la reserva de capacidad de procesamiento de hardware y las horas de modelado inicial, el anticipo del 50% posee carácter no reembolsable en caso de rescisión del proyecto por causas ajenas al estudio.",
    },
    {
        title: "7. Responsabilidad sobre Derechos de Imagen y Autoría",
        content: "El cliente manifiesta y garantiza que posee todos los derechos, licencias y permisos necesarios sobre el material fotográfico o planos provistos a FLOBA STUDIO para la ejecución del servicio. El cliente asume la responsabilidad total ante cualquier reclamo de terceros derivado de la infracción de derechos de autor o propiedad intelectual. FLOBA STUDIO actúa como un mero procesador de material y se deslinda de cualquier responsabilidad legal por el uso de imágenes cuya autoría no pertenezca al contratante.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [openTermIndex, setOpenTermIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-white px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-serif mb-12 text-center tracking-tight">Preguntas Frecuentes</h2>

                <div className="space-y-4 mb-24">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-subtle pb-4">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between py-4 text-left group"
                            >
                                <span className="font-serif text-lg md:text-xl text-foreground group-hover:text-accent transition-colors pr-8">
                                    {faq.question}
                                </span>
                                <span className="text-foreground/50 group-hover:text-accent transition-transform duration-300 flex-shrink-0">
                                    {openIndex === index ? <Minus size={20} strokeWidth={1} /> : <Plus size={20} strokeWidth={1} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-6 pt-2 font-sans text-sm leading-relaxed text-gray-500">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <h2 id="terms" className="text-2xl font-serif mb-12 text-center tracking-tight text-gray-400">Términos y Condiciones de Servicio</h2>

                <div className="space-y-4">
                    {terms.map((term, index) => (
                        <div key={index} className="border-b border-subtle pb-4">
                            <button
                                onClick={() => setOpenTermIndex(openTermIndex === index ? null : index)}
                                className="w-full flex items-center justify-between py-4 text-left group"
                            >
                                <span className="font-serif text-base md:text-lg text-foreground/80 group-hover:text-accent transition-colors pr-8">
                                    {term.title}
                                </span>
                                <span className="text-foreground/50 group-hover:text-accent transition-transform duration-300 flex-shrink-0">
                                    {openTermIndex === index ? <Minus size={18} strokeWidth={1} /> : <Plus size={18} strokeWidth={1} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openTermIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-6 pt-2 font-sans text-xs md:text-sm leading-relaxed text-gray-500">
                                            {term.content}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
