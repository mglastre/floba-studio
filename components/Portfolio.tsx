"use strict";
"use client";

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

const projects = [
    {
        title: "Nordic Light Loft",
        image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop",
        tags: ["Scandinavian", "Functional Elegance"]
    },
    {
        title: "Redwood Horizon",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        tags: ["Timber Architecture", "Nature Immersion"]
    },
    {
        title: "Atelier Noir",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
        tags: ["Monochrome", "Industrial Chic"]
    },
    {
        title: "Noir Cultura Studio",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop",
        tags: ["Artistic", "Urban Minimalism"]
    },
    {
        title: "Maison Éclat Studio",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        tags: ["Statement Lighting", "Brand Experience"]
    },
    {
        title: "Concrete Poetry",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
        tags: ["Brutalist", "Raw Texture"]
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
                                        <div
                                            className="w-full h-full bg-cover bg-center grayscale"
                                            style={{ backgroundImage: `url(${project.image})` }}
                                        />
                                    }
                                    itemTwo={
                                        <div
                                            className="w-full h-full bg-cover bg-center"
                                            style={{ backgroundImage: `url(${project.image})` }}
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
