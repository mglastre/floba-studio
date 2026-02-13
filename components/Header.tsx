"use strict";
"use client";

import Link from "next/link";
import { MoveRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

export default function Header() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${scrolled || mobileMenuOpen ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent text-white"
                    }`}
            >
                <div className="flex items-center gap-2">
                    <Link href="/" className={`text-2xl font-serif tracking-tight ${scrolled || mobileMenuOpen ? "text-foreground" : "text-white"}`}>
                        FLOBA STUDIO
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className={`hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium ${scrolled ? "text-foreground/80" : "text-white/90"}`}>
                    <Link href="#services" className="hover:text-accent transition-colors">Servicios</Link>
                    <Link href="#portfolio" className="hover:text-accent transition-colors">Portfolio</Link>
                    <Link href="#faq" className="hover:text-accent transition-colors">FAQ</Link>
                    <Link href="#recursos" className="hover:text-accent transition-colors">Recursos</Link>
                </nav>

                <div className="hidden md:flex">
                    <Link
                        href="https://wa.me/"
                        target="_blank"
                        className={`group flex items-center gap-2 px-5 py-2 text-xs uppercase tracking-widest border transition-all duration-300 ${scrolled
                            ? "border-black text-black hover:bg-black hover:text-white"
                            : "border-white text-white hover:bg-white hover:text-black"
                            }`}
                    >
                        <span>Planes</span>
                        <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1} />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden p-2 ${scrolled || mobileMenuOpen ? "text-foreground" : "text-white"}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col items-center gap-8"
                    >
                        <nav className="flex flex-col items-center gap-8 text-sm uppercase tracking-[0.2em] font-medium text-foreground">
                            <Link href="#services" onClick={() => setMobileMenuOpen(false)}>Servicios</Link>
                            <Link href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
                            <Link href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
                            <Link href="#recursos" onClick={() => setMobileMenuOpen(false)}>Recursos</Link>
                        </nav>

                        <Link
                            href="https://wa.me/"
                            target="_blank"
                            onClick={() => setMobileMenuOpen(false)}
                            className="group flex items-center gap-2 px-8 py-3 text-xs uppercase tracking-widest border border-black text-black hover:bg-black hover:text-white transition-all duration-300"
                        >
                            <span>Planes</span>
                            <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1} />
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
