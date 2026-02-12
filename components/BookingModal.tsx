"use strict";
"use client";

import { useState, useEffect } from "react";
import { X, Send, Link as LinkIcon, Phone, Mail, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedPack: string | null;
}

export default function BookingModal({ isOpen, onClose, selectedPack }: BookingModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        imageLink: "",
    });

    // Reset form when modal opens
    useEffect(() => {
        if (isOpen) {
            setFormData({ name: "", email: "", phone: "", imageLink: "" });
        }
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // WhatsApp Message Construction
        const imageLinkText = formData.imageLink ? formData.imageLink : "(No proporcionado)";
        const message = encodeURIComponent(
            `¡Hola! Quiero contratar el *${selectedPack}*\\n\\n` +
            `*Mis Datos:*\\n` +
            `👤 Nombre: ${formData.name}\\n` +
            `📧 Email: ${formData.email}\\n` +
            `📱 Teléfono: ${formData.phone}\\n` +
            `🔗 Imágenes: ${imageLinkText}`
        );

        // Log for debugging
        console.log("📤 Enviando formulario:", { selectedPack, ...formData });

        // Open WhatsApp (opens WhatsApp web/app with pre-filled message)
        window.open(`https://wa.me/?text=${message}`, "_blank");

        // Close modal after brief delay to ensure WhatsApp opens
        setTimeout(() => {
            onClose();
        }, 300);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal Container - Centered */}
                    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="w-full max-w-lg max-h-[90vh] bg-white shadow-2xl rounded border border-gray-200 flex flex-col overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header - Fixed */}
                            <div className="flex justify-between items-start p-6 md:p-8 border-b border-gray-100 flex-shrink-0 bg-white">
                                <div className="pr-4">
                                    <h3 className="text-xl md:text-2xl font-serif tracking-tight">Solicitar Pack</h3>
                                    <p className="text-accent text-xs md:text-sm uppercase tracking-widest font-medium mt-1">
                                        {selectedPack}
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors border border-gray-300 bg-white"
                                    aria-label="Cerrar"
                                >
                                    <X size={20} className="text-gray-700" />
                                </button>
                            </div>

                            {/* Form - Scrollable */}
                            <div className="flex-1 overflow-y-auto p-6 md:p-8">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-sans uppercase tracking-wider text-gray-500 ml-1">
                                            Nombre y Apellido
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-accent focus:ring-0 outline-none text-sm transition-all rounded"
                                                placeholder="Ej: Juan Pérez"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-sans uppercase tracking-wider text-gray-500 ml-1">
                                            Email
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-accent focus:ring-0 outline-none text-sm transition-all rounded"
                                                placeholder="tu@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-sans uppercase tracking-wider text-gray-500 ml-1">
                                            Teléfono
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-accent focus:ring-0 outline-none text-sm transition-all rounded"
                                                placeholder="+54 9 11..."
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-sans uppercase tracking-wider text-gray-500 ml-1">
                                            Enlace a Imágenes
                                        </label>
                                        <div className="relative">
                                            <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                            <input
                                                type="text"
                                                name="imageLink"
                                                value={formData.imageLink}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-accent focus:ring-0 outline-none text-sm transition-all rounded"
                                                placeholder="Google Drive, Dropbox, WeTransfer..."
                                            />
                                        </div>
                                        <p className="text-[10px] text-gray-400 ml-1">
                                            Opcional: Pega aquí la carpeta con tus archivos.
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-black text-white py-4 mt-6 uppercase tracking-[0.2em] text-xs font-medium hover:bg-accent transition-colors flex items-center justify-center gap-2 group rounded"
                                    >
                                        <span>Enviar Solicitud</span>
                                        <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
