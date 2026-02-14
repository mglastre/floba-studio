"use strict";
"use client";

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

const projects = [
    {
        title: "Renovación de Comedor",
        before: "/portfolio/antes-1.jpg",
        after: "/portfolio/despues-1.jpg",
        tags: ["Interiorismo", "Renderizado Fotorrealista"]
    },
    {
        title: "Transformación de Cocina",
        before: "/portfolio/antes-2.jpg",
        after: "/portfolio/despues-2.jpg",
        tags: ["Arquitectura", "Diseño Moderno"]
    },
    {
        title: "Rediseño de Espacios",
        before: "/portfolio/antes-3.jpg",
        after: "/portfolio/despues-3.jpg",
        tags: ["Estética", "Ambiente Cálido"]
    },
    {
        title: "Vivienda Contemporánea",
        before: "/portfolio/antes-4.jpg",
        after: "/portfolio/despues-4.jpg",
        tags: ["Minimalismo", "Luz Natural"]
    },
    {
        title: "Refugio Urbano",
        before: "/portfolio/antes-5.jpeg",
        after: "/portfolio/despues-5.jpg",
        tags: ["Confort", "Texturas"]
    },
    {
        title: "Skyline Suite",
        before: "/portfolio/antes-6.jpg",
        after: "/portfolio/despues-6.jpg",
        tags: ["Lujo", "Vistas Panorámicas"]
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 md:py-32 bg-white px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-4">Transformación Visual</h2>
                    <p className="font-sans text-sm text-gray-500 uppercase tracking-widest">
                        Desliza para ver la magia
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group bg-white rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            {/* Before/After Slider */}
                            <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100">
                                <ReactCompareSlider
                                    itemOne={
                                        <ReactCompareSliderImage
                                            src={project.before}
                                            alt="Antes"
                                            style={{ objectFit: 'cover' }}
                                            onLoad={() => console.log(`Loaded before: ${project.before}`)}
                                            onError={() => console.error(`Error loading before: ${project.before}`)}
                                        />
                                    }
                                    itemTwo={
                                        <ReactCompareSliderImage
                                            src={project.after}
                                            alt="Después"
                                            style={{ objectFit: 'cover' }}
                                            onLoad={() => console.log(`Loaded after: ${project.after}`)}
                                            onError={() => console.error(`Error loading after: ${project.after}`)}
                                        />
                                    }
                                    className="w-full h-full"
                                    handle={
                                        <div className="w-0.5 h-full bg-accent relative shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-accent bg-white flex items-center justify-center shadow-lg">
                                                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                                            </div>
                                        </div>
                                    }
                                />

                                {/* Labels */}
                                <div className="absolute top-4 left-4 text-white text-xs font-sans uppercase tracking-widest pointer-events-none mix-blend-difference opacity-80">
                                    Antes
                                </div>
                                <div className="absolute top-4 right-4 text-white text-xs font-sans uppercase tracking-widest pointer-events-none mix-blend-difference opacity-80">
                                    Después
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="font-serif text-xl md:text-2xl mb-3 tracking-tight">
                                    {project.title}
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-sans text-gray-500 border border-gray-200 rounded-full hover:border-accent hover:text-accent transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
