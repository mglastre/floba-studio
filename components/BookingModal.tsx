"use strict";
"use client";

import { useState, useEffect } from "react";
import { X, Send, Link as LinkIcon, Phone, Mail, User, Building2, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedPack: string | null;
}

export default function BookingModal({ isOpen, onClose, selectedPack }: BookingModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        details: "",
        imageLink: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

    // Reset form when modal opens
    useEffect(() => {
        if (isOpen) {
            setFormData({ name: "", company: "", email: "", phone: "", details: "", imageLink: "" });
            setStatus({ type: null, message: '' });
        }
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: null, message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, selectedPack }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: '¡Solicitud enviada con éxito! Revisa tu correo.' });
                setTimeout(() => {
                    onClose();
                }, 3000);
            } else {
                throw new Error(data.message || 'Error al enviar la solicitud.');
            }
        } catch (error: any) {
            console.error("Error submitting form:", error);
            setStatus({
                type: 'error',
                message: error.message || 'Hubo un error. Por favor, intenta nuevamente.'
            });
        } finally {
            setLoading(false);
        }
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
                                            Empresa o Inmobiliaria
                                        </label>
                                        <div className="relative">
                                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-accent focus:ring-0 outline-none text-sm transition-all rounded"
                                                placeholder="Nombre de la empresa"
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
                                            Detalles del Proyecto
                                        </label>
                                        <div className="relative">
                                            <FileText className="absolute left-3 top-3 text-gray-400" size={16} />
                                            <textarea
                                                name="details"
                                                maxLength={300}
                                                value={formData.details}
                                                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-accent focus:ring-0 outline-none text-sm transition-all rounded resize-none min-h-[80px]"
                                                placeholder="Breve descripción (Máx. 300 caracteres)"
                                            />
                                        </div>
                                        <div className="text-[10px] text-gray-400 text-right">
                                            {formData.details.length}/300
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
                                        disabled={loading}
                                        className="w-full bg-black text-white py-4 mt-6 uppercase tracking-[0.2em] text-xs font-medium hover:bg-accent transition-colors flex items-center justify-center gap-2 group rounded disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span>{loading ? "Enviando..." : "Enviar Solicitud"}</span>
                                        {!loading && <Send size={14} className="group-hover:translate-x-1 transition-transform" />}
                                    </button>

                                    {status.message && (
                                        <div className={`text-xs text-center p-2 rounded ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                            {status.message}
                                        </div>
                                    )}

                                    <p className="text-[10px] text-gray-400 text-center leading-tight pt-2">
                                        No se aceptan imágenes adjuntas por este medio. Por favor, proporcione un enlace de descarga (Drive, Dropbox, etc.).
                                    </p>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
