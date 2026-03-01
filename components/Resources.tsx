"use client";
import { BookOpen, Camera, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

import { articles } from "../data/resources";
import Link from "next/link";

export default function Resources() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            // Adjust scroll distance as needed based on card width + gap
            const scrollAmount = direction === "left" ? -420 : 420;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section id="recursos" className="py-24 md:py-32 bg-gray-50 px-6 md:px-12">
            <div className="max-w-7xl mx-auto relative px-4 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-4">Recursos</h2>
                    <p className="font-sans text-sm text-gray-500 uppercase tracking-widest">
                        Guías prácticas para maximizar el impacto de tus fotografías
                    </p>
                </div>

                {/* Navigation Arrows (Desktop) */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-[55%] -translate-y-1/2 z-30 bg-white border border-gray-100 p-3 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 hidden md:flex text-[#C5B358] hover:text-black"
                    aria-label="Anterior"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-[55%] -translate-y-1/2 z-30 bg-white border border-gray-100 p-3 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 hidden md:flex text-[#C5B358] hover:text-black"
                    aria-label="Siguiente"
                >
                    <ChevronRight size={24} />
                </button>

                <div
                    ref={scrollContainerRef}
                    className="group flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-8 px-4 -mx-4 hide-scrollbar"
                >
                    {articles.map((article, idx) => (
                        <article key={idx} className="flex-none w-[85vw] md:w-[400px] snap-center bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-700 hover:!scale-[1.02] hover:!opacity-100 group-hover:scale-[0.98] group-hover:opacity-50 relative flex flex-col cursor-pointer border border-gray-100 hover:border-[#C5B358]/30 z-10 hover:z-20 hover:shadow-2xl">
                            <Link href={`/recursos/${article.slug}`} target="_blank" className="flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-[#C5B358] focus:ring-offset-2">
                                {/* Image */}
                                <div className="relative h-48 w-full overflow-hidden bg-gray-200 shrink-0">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                                        <article.icon size={12} className="text-[#C5B358]" />
                                        {article.readTime}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-grow flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-xs uppercase tracking-widest text-[#C5B358]">Guía</span>
                                        </div>

                                        <h3 className="font-serif text-xl md:text-2xl mb-3 leading-tight text-foreground transition-colors">
                                            {article.title}
                                        </h3>

                                        <p className="font-sans text-sm text-gray-600 mb-6 leading-relaxed line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                    </div>

                                    {/* Action Button */}
                                    <div className="mt-auto w-full border border-gray-200 hover:border-black px-6 py-3 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                                        <BookOpen size={14} />
                                        <span>Leer Completo</span>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
