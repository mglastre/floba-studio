"use strict";
import { Box, Film, Layers, Sparkles } from "lucide-react";

const pillars = [
    {
        icon: Sparkles,
        title: "AI Virtual Revive",
        description: "Porque una casa vacía es una oportunidad. Le devolvemos el alma para que el comprador diga: 'Acá quiero vivir'.",
    },
    {
        icon: Layers,
        title: "Essential Portfolio",
        description: "Tributo a la arquitectura. Cada detalle brilla para generar confianza desde el primer clic.",
    },
    {
        icon: Film,
        title: "Hyper-Motion Experience",
        description: "Nuestra obra maestra. Cine en 4K que transporta a tus clientes a su futuro hogar.",
    },
    {
        icon: Box,
        title: "Ecosystem Experience",
        description: "Desde el render hasta el drone. Construimos la identidad visual de un legado.",
    },
];

export default function Pillars() {
    return (
        <section id="services" className="py-24 md:py-32 bg-white px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <p className="font-sans text-gray-600 text-sm md:text-base max-w-3xl mx-auto text-center mb-6 md:mb-8 leading-loose px-4">
                    Trabajamos cada proyecto como una historia visual, entendiendo primero la intención, el contexto y la emoción que se quiere transmitir. A partir de ahí, combinamos criterio arquitectónico, sensibilidad estética y precisión técnica para transformar ideas abstractas en imágenes que se sienten reales, coherentes y deseables desde el primer vistazo.
                </p>

                <h2 className="font-serif text-3xl md:text-4xl text-center mb-16 md:mb-20 tracking-tight">Nuestras Propuestas</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="group flex flex-col gap-6">
                            <div className="h-12 w-12 flex items-center justify-start text-foreground/80 group-hover:text-accent transition-colors duration-300">
                                <pillar.icon strokeWidth={1} className="w-8 h-8" />
                            </div>

                            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                                {pillar.title}
                            </h3>

                            <p className="font-sans text-sm leading-loose text-gray-500">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}
