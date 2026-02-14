"use client";

import { useState, useEffect } from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

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
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    // Lock scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedProject]);

    return (
        <section id="portfolio" className="py-24 md:py-32 bg-white px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-4">Transformación Visual</h2>
                    <p className="font-sans text-sm text-gray-500 uppercase tracking-widest">
                        Desliza y haz clic para ampliar
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group bg-white rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            {/* Before/After Slider Container */}
                            <div
                                className="relative h-64 md:h-72 overflow-hidden bg-gray-100 cursor-zoom-in"
                                onClick={() => setSelectedProject(project)}
                            >
                                <ReactCompareSlider
                                    itemOne={
                                        <ReactCompareSliderImage
                                            src={project.before}
                                            alt="Antes"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    }
                                    itemTwo={
                                        <ReactCompareSliderImage
                                            src={project.after}
                                            alt="Después"
                                            style={{ objectFit: 'cover' }}
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

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                                        <Maximize2 size={14} className="text-accent" />
                                        <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-black">Ampliar</span>
                                    </div>
                                </div>

                                {/* Static Labels */}
                                <div className="absolute top-4 left-4 text-white text-[10px] font-sans uppercase tracking-widest pointer-events-none mix-blend-difference opacity-80">
                                    Antes
                                </div>
                                <div className="absolute top-4 right-4 text-white text-[10px] font-sans uppercase tracking-widest pointer-events-none mix-blend-difference opacity-80">
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

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-md"
                        />

                        {/* Close Button */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-6 right-6 z-[110] p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white border border-white/20"
                        >
                            <X size={24} />
                        </motion.button>

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-6xl aspect-[4/3] md:aspect-video bg-gray-900 rounded overflow-hidden shadow-2xl z-[105]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ReactCompareSlider
                                itemOne={
                                    <ReactCompareSliderImage
                                        src={selectedProject.before}
                                        alt="Antes"
                                        style={{ objectFit: 'cover' }}
                                    />
                                }
                                itemTwo={
                                    <ReactCompareSliderImage
                                        src={selectedProject.after}
                                        alt="Después"
                                        style={{ objectFit: 'cover' }}
                                    />
                                }
                                className="w-full h-full"
                                handle={
                                    <div className="w-1 h-full bg-accent relative shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-accent bg-white flex items-center justify-center shadow-2xl">
                                            <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                                        </div>
                                    </div>
                                }
                            />

                            {/* Info Overlay */}
                            <div className="absolute bottom-0 inset-x-0 p-8 pt-20 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                                <h3 className="text-white font-serif text-2xl md:text-4xl tracking-tight mb-2">
                                    {selectedProject.title}
                                </h3>
                                <div className="flex gap-2">
                                    {selectedProject.tags.map((tag, i) => (
                                        <span key={i} className="text-white/60 text-xs font-sans uppercase tracking-widest">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
