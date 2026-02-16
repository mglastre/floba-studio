"use strict";
import Link from "next/link";
import { Instagram, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

                <h2 className="font-serif text-3xl md:text-4xl max-w-2xl leading-tight mb-12">
                    "En Floba Studio no hacemos solo imágenes. Nada vende más que la emoción de sentirse en casa."
                </h2>

                <div className="w-full h-px bg-white/10 my-12" />

                <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 text-xs font-sans text-gray-400 uppercase tracking-widest">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                        <Link href="https://www.instagram.com/flobastudio/" target="_blank" className="hover:text-white transition-colors">Instagram</Link>
                        <Link href="mailto:hola@flobastudio.com" className="hover:text-white transition-colors">Email</Link>
                        <Link href="#faq" className="hover:text-white transition-colors">Preguntas Frecuentes</Link>
                        <Link href="#terms" className="hover:text-white transition-colors">Términos y Condiciones</Link>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-1">
                        <div>Buenos Aires — Miami</div>
                        <div>© 2026 Flobastudio. All rights reserved.</div>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                aria-label="Contactar por WhatsApp"
            >
                <MessageCircle size={32} strokeWidth={1.5} />
            </a>
        </footer>
    );
}
