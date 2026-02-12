"use strict";
import { BookOpen, Camera, TrendingUp } from "lucide-react";
import Image from "next/image";

const articles = [
    {
        icon: Camera,
        image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop",
        title: "Mejora la calidad de tus fotos en 5 pasos",
        excerpt: "Descubre técnicas profesionales para capturar espacios arquitectónicos que enamoren a primera vista.",
        content: [
            {
                subtitle: "1. Iluminación Natural es tu Mejor Aliada",
                text: "Fotografía siempre durante el día, preferiblemente en la mañana (9-11am) o tarde (3-5pm) cuando la luz es suave y cálida. Abre todas las cortinas y ventanas para aprovechar la luz natural. Evita usar flash directo."
            },
            {
                subtitle: "2. Despeja y Organiza el Espacio",
                text: "Retira objetos personales, cables visibles y elementos que distraigan. Un espacio limpio y ordenado se ve más amplio y profesional. Menos es más en fotografía inmobiliaria."
            },
            {
                subtitle: "3. Mantén la Cámara a la Altura Correcta",
                text: "Fotografía a la altura del pecho (aproximadamente 1.5m del suelo). Esta perspectiva es la más natural y evita distorsiones. Usa un trípode o apoya el celular en una superficie estable."
            },
            {
                subtitle: "4. Captura Ángulos Amplios",
                text: "Ubícate en las esquinas de la habitación para mostrar la mayor cantidad de espacio posible. Usa el modo gran angular de tu cámara o celular para capturar más del ambiente."
            },
            {
                subtitle: "5. Ajusta el Balance de Blancos",
                text: "Asegúrate de que los colores se vean naturales. Si las fotos salen muy amarillas o azules, ajusta el balance de blancos en la configuración de tu cámara o móvil."
            }
        ]
    },
    {
        icon: Camera,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        title: "Aprovecha al máximo las funciones de tu móvil",
        excerpt: "Tu smartphone tiene todo lo necesario para crear fotografías de nivel profesional si sabes cómo usarlo.",
        content: [
            {
                subtitle: "Modo HDR (Alto Rango Dinámico)",
                text: "Activa el HDR cuando fotografíes habitaciones con ventanas. Esta función combina varias exposiciones para mostrar detalles tanto en las áreas iluminadas como en las sombras, evitando fotos 'quemadas' o muy oscuras."
            },
            {
                subtitle: "Cuadrícula de Composición",
                text: "Activa la cuadrícula (grid) en la configuración de tu cámara. Usa la 'regla de los tercios' para posicionar elementos importantes en las intersecciones de las líneas. Mantén las líneas horizontales (pisos, techos) perfectamente niveladas."
            },
            {
                subtitle: "Modo Panorámico para Espacios Amplios",
                text: "Usa el modo panorámico para capturar jardines, terrazas o espacios muy amplios. Muévete lentamente y mantén el teléfono estable. Esta función es ideal para mostrar la amplitud de exteriores."
            },
            {
                subtitle: "Edición Básica Integrada",
                text: "Usa las herramientas de edición de tu móvil para ajustar brillo, contraste y saturación. Sube ligeramente el brillo (+10-20%) y la nitidez. Evita filtros exagerados que distorsionen los colores reales."
            },
            {
                subtitle: "Fotografía en Máxima Resolución",
                text: "Configura tu cámara para tomar fotos en la máxima resolución disponible. Esto te permitirá recortar o redimensionar sin perder calidad. Libera espacio en tu teléfono antes de la sesión fotográfica."
            }
        ]
    },
    {
        icon: TrendingUp,
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
        title: "5 razones por las que tus fotos pueden ayudarte a vender más rápido",
        excerpt: "El 90% de los compradores buscan propiedades online primero. Tus fotos son tu primera (y a veces única) oportunidad.",
        content: [
            {
                subtitle: "1. La Primera Impresión es Digital",
                text: "El 90% de los compradores comienza su búsqueda en internet. Si tus fotos no los capturan en los primeros 3 segundos, pasarán a la siguiente propiedad. Fotos profesionales generan hasta 3 veces más consultas que fotos amateur."
            },
            {
                subtitle: "2. Justifican el Precio de Venta",
                text: "Propiedades con fotografías de alta calidad justifican precios más altos. Los compradores perciben espacios bien fotografiados como más valiosos y mejor mantenidos. La inversión en buenas fotos se traduce en mejor ROI."
            },
            {
                subtitle: "3. Reducen el Tiempo en el Mercado",
                text: "Propiedades con fotos profesionales se venden hasta un 32% más rápido que aquellas con fotos de baja calidad. Menos tiempo en el mercado significa menos gastos de mantenimiento y mayor poder de negociación."
            },
            {
                subtitle: "4. Filtran Compradores Serios",
                text: "Fotos de calidad atraen a compradores realmente interesados y cualificados. Reducen visitas innecesarias de personas que 'solo estaban curioseando'. Esto ahorra tiempo tanto al vendedor como al agente."
            },
            {
                subtitle: "5. Generan Conexión Emocional",
                text: "Las personas compran con emoción primero, y justifican con lógica después. Fotos bien hechas permiten que los compradores se 'vean viviendo ahí'. Esta conexión emocional es el factor decisivo en la mayoría de las ventas."
            }
        ]
    }
];

export default function Resources() {
    return (
        <section id="recursos" className="py-24 md:py-32 bg-gray-50 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-4">Recursos</h2>
                    <p className="font-sans text-sm text-gray-500 uppercase tracking-widest">
                        Guías prácticas para maximizar el impacto de tus fotografías
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, idx) => (
                        <article key={idx} className="bg-white rounded shadow-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                            {/* Image */}
                            <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <article.icon size={18} className="text-accent" strokeWidth={1.5} />
                                    <span className="text-xs uppercase tracking-widest text-gray-400">Guía</span>
                                </div>

                                <h3 className="font-serif text-xl md:text-2xl mb-3 leading-tight">
                                    {article.title}
                                </h3>

                                <p className="font-sans text-sm text-gray-600 mb-4 leading-relaxed">
                                    {article.excerpt}
                                </p>

                                {/* Article Content */}
                                <div className="space-y-4 border-t border-gray-100 pt-4 mt-4">
                                    {article.content.map((section, i) => (
                                        <div key={i} className="space-y-1">
                                            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-foreground">
                                                {section.subtitle}
                                            </h4>
                                            <p className="font-sans text-xs text-gray-600 leading-relaxed">
                                                {section.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <button className="mt-6 w-full border border-gray-200 px-6 py-3 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                                    <BookOpen size={14} />
                                    <span>Leer Completo</span>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
