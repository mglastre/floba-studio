"use strict";
"use client";

import { useState } from "react";
import { Check, Minus } from "lucide-react";
import BookingModal from "./BookingModal";

const features = [
    { name: "Ideal para", key: "ideal" },
    { name: "Contenido", key: "content" },
    { name: "Tiempo Entrega", key: "delivery" },
    { name: "Formato", key: "format" },
    { name: "Personalización", key: "customization" },
    { name: "Revisión", key: "revision" },
    { name: "Revisión Adicional", key: "extraRevision" },
    { name: "Audio", key: "audio" },
    { name: "Precio Sugerido", key: "price", isPrice: true },
];

const packs = [
    {
        name: "AI Virtual Revive",
        ideal: "Inmuebles usados o vacíos (Captaciones rápidas).",
        content: "6 Renders de amoblamiento virtual sobre fotos reales.",
        delivery: "24 - 48 hs",
        format: "Alta Definición (Horizontal + Vertical).",
        customization: "Selección estándar de materiales y muebles.",
        revision: null, // Empty in image
        extraRevision: "-",
        audio: "-",
        price: "(Pack 4x USD 150)",
        highlight: false,
        subtitle: "Velocidad y Eficiencia"
    },
    {
        name: "Essential Portfolio",
        ideal: "Inmuebles nuevos/usados que buscan destacar.",
        content: "10 Renders de amoblamiento virtual sobre fotos reales + 1 Video Render",
        delivery: "3 a 5 días hábiles.",
        format: "4K Ultra HD (Horizontal + Vertical).",
        customization: "Premium Custom: Iluminación y materiales a medida.",
        revision: "1 revisión de materiales/muebles.",
        extraRevision: "Revisión adicional: USD 25",
        audio: "Música + FX de ambiente",
        price: "USD 260",
        highlight: false,
        subtitle: "Equilibrio Perfecto"
    },
    {
        name: "Hyper-Motion Experience",
        ideal: "Desarrollos Premium y Lanzamientos.",
        content: "15 Renders 4K de amoblamiento virtual + Video Reel 4K (30s)",
        delivery: "7 a 10 días hábiles.",
        format: "4K Ultra HD (Horizontal + Vertical).",
        customization: "Elite Custom: Diseño de autor y marketing emocional.",
        revision: "2 revisión de materiales/muebles.",
        extraRevision: "Revisión adicional: USD 25",
        audio: "Narrativa Pro: Música + FX + Guion para locución IA.",
        price: "USD 490",
        highlight: true,
        subtitle: "Máximo Impacto"
    },
    {
        name: "Ecosystem Experience",
        ideal: "Edificios, Barrios y Masterplans.",
        content: "30 Renders + 2 Videos Reel + Video Drone 60s + Tour 360°.",
        delivery: "15 a 20 días hábiles.",
        format: "Master Kit (Todos los formatos + 360°).",
        customization: "Trazabilidad Total: Identidad visual coherente en todo el proyecto.",
        revision: "Soporte continuo durante el proyecto.",
        extraRevision: "Revisión adicional: USD 25",
        audio: "Campaña Completa: Música + FX + Locución Premium.",
        price: "Consultar (Aprox. USD 1.500+)",
        highlight: false,
        subtitle: "Solución Total"
    },
];

export default function Packs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPackName, setSelectedPackName] = useState<string | null>(null);

    const handleOpenModal = (packName: string) => {
        setSelectedPackName(packName);
        setIsModalOpen(true);
    };

    return (
        <section id="pricing" className="py-12 bg-packbg px-4 md:px-12 border-y border-subtle relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-2">Planes Integrales</h2>
                    <p className="font-sans text-sm text-gray-500 uppercase tracking-widest">Transparencia y Calidad desde el primer pixel</p>
                </div>

                {/* Desktop View (Table) */}
                <div className="hidden md:block overflow-x-auto pb-4">
                    <table
                        className="w-full text-left border-collapse min-w-[900px]"
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <thead>
                            <tr className="border-b border-subtle">
                                <th className="p-4 font-serif text-lg text-gray-400 font-normal w-1/4">Características</th>
                                {packs.map((pack, i) => (
                                    <th
                                        key={pack.name}
                                        className={`p-3 text-center transition-colors duration-300 ${hoveredIndex === i ? "bg-white" : ""
                                            }`}
                                        onMouseEnter={() => setHoveredIndex(i)}
                                    >
                                        <span className="font-serif text-xl block mb-1">{pack.name}</span>
                                        <div className="block font-sans text-[10px] text-gray-400 font-normal uppercase tracking-widest leading-tight">{pack.subtitle}</div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, idx) => (
                                <tr key={feature.key} className="border-b border-subtle/50 group">
                                    <td className="p-2 py-3 font-sans text-sm text-gray-600 font-medium">
                                        {feature.name}
                                    </td>
                                    {packs.map((pack, i) => (
                                        <td
                                            key={i}
                                            className={`p-2 py-3 text-center font-sans text-sm text-gray-500 transition-colors duration-300 ${hoveredIndex === i ? "bg-white" : ""
                                                } ${feature.isPrice ? "text-xl text-black font-medium" : ""}`}
                                            onMouseEnter={() => setHoveredIndex(i)}
                                        >
                                            {typeof pack[feature.key as keyof typeof pack] === 'boolean' ? (
                                                pack[feature.key as keyof typeof pack] ? <Check size={18} className="mx-auto text-black" /> : <Minus size={18} className="mx-auto text-gray-300" />
                                            ) : (
                                                pack[feature.key as keyof typeof pack]
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            {/* CTA Row */}
                            <tr>
                                <td className="p-4"></td>
                                {packs.map((pack, i) => (
                                    <td
                                        key={i}
                                        className={`p-3 text-center transition-colors duration-300 ${hoveredIndex === i ? "bg-white" : ""
                                            }`}
                                        onMouseEnter={() => setHoveredIndex(i)}
                                    >
                                        <button
                                            onClick={() => handleOpenModal(pack.name)}
                                            className="w-full border border-black px-6 py-3 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
                                        >
                                            Elegir Pack
                                        </button>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Mobile View (Cards) */}
                <div className="md:hidden grid gap-8">
                    {packs.map((pack, i) => (
                        <div key={i} className="bg-white p-8 border border-subtle shadow-sm flex flex-col gap-6">
                            <div className="text-center border-b border-subtle pb-6">
                                <h3 className="font-serif text-2xl mb-1">{pack.name}</h3>
                                <p className="font-sans text-xs text-gray-400 uppercase tracking-widest">{pack.subtitle}</p>
                            </div>

                            <div className="space-y-4">
                                {features.map((feature) => (
                                    <div key={feature.key} className="flex justify-between items-center text-sm">
                                        <span className="text-gray-500">{feature.name}</span>
                                        <span className="font-medium text-right">
                                            {typeof pack[feature.key as keyof typeof pack] === 'boolean' ? (
                                                pack[feature.key as keyof typeof pack] ? <Check size={16} /> : <Minus size={16} className="text-gray-300" />
                                            ) : (
                                                <span className={feature.isPrice ? "text-lg" : ""}>{pack[feature.key as keyof typeof pack]}</span>
                                            )}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => handleOpenModal(pack.name)}
                                className="w-full bg-black text-white py-4 text-xs uppercase tracking-widest mt-4 hover:bg-accent transition-colors"
                            >
                                Elegir Pack
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                selectedPack={selectedPackName}
            />
        </section>
    );
}
