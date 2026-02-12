"use strict";
"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-dark">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                >
                    {/* Intento cargar con doble extensión por si acaso, y luego la normal */}
                    <source src="/videos/portada.mp4.MP4" type="video/mp4" />
                    <source src="/videos/portada.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-6 sm:px-8 md:px-12 pt-32 md:pt-48">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="font-serif text-4xl min-[375px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white tracking-tight mb-6 drop-shadow-xl leading-[1.1] max-w-[95vw]"
                    style={{ fontSize: 'clamp(2.5rem, 12vw, 7rem)' }}
                >
                    ARQUITECTURA.<br />
                    <span className="text-white/60">EMOCIÓN.</span><br />
                    FUTURO.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    className="font-serif text-white/95 text-base sm:text-lg md:text-xl italic max-w-2xl mb-6 leading-relaxed drop-shadow-md px-4"
                >
                    "Una idea en palabras puede ser fuerte, pero se convierte en historia cuando se transforma en imagen. Y es ahí donde empieza a construir futuro."
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                >
                    <Link
                        href="#services"
                        className="group flex items-center gap-3 px-8 py-3 border border-white/30 text-white text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
                    >
                        Descubrir Más
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 2, duration: 1 },
                    y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <ArrowDown className="text-white/50 w-6 h-6" strokeWidth={1} />
            </motion.div>
        </section>
    );
}
