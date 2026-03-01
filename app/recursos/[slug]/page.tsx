import { articles } from "../../../data/resources";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { Metadata } from "next";

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const article = articles.find((a) => a.slug === params.slug);

    if (!article) {
        return {
            title: "Artículo no encontrado | Floba Studio",
        };
    }

    return {
        title: `${article.title} | Floba Studio Recursos`,
        description: article.excerpt,
    };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
    const article = articles.find((a) => a.slug === params.slug);

    if (!article) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header / Nav */}
            <header className="bg-white border-b border-gray-100 py-4 px-6 md:px-12 sticky top-0 z-50">
                <div className="max-w-4xl mx-auto w-full">
                    <Link
                        href="/#recursos"
                        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors"
                    >
                        <ArrowLeft size={16} />
                        <span>Volver a Recursos</span>
                    </Link>
                </div>
            </header>

            <article className="flex-grow w-full max-w-4xl mx-auto bg-white shadow-sm md:my-8 md:rounded-lg overflow-hidden pb-16">
                {/* Hero Image */}
                <div className="relative h-64 md:h-96 w-full">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/20" />

                    <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded shadow-sm flex items-center gap-2">
                        <article.icon size={16} className="text-[#C5B358]" />
                        <span className="text-xs font-bold uppercase tracking-widest text-black">Guía</span>
                    </div>
                </div>

                {/* Content Container */}
                <div className="px-6 py-12 md:px-16 md:py-16">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                        <Clock size={16} />
                        <span className="uppercase tracking-widest text-xs">{article.readTime}</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-serif text-black leading-tight mb-8">
                        {article.title}
                    </h1>

                    <p className="text-xl md:text-2xl font-sans text-gray-600 mb-12 leading-relaxed font-light">
                        {article.excerpt}
                    </p>

                    <div className="w-16 h-px bg-[#C5B358] mb-12" />

                    <div className="space-y-12">
                        {article.content.map((section, idx) => (
                            <section key={idx} className="space-y-4">
                                <h2 className="text-xl md:text-2xl font-sans font-bold text-black tracking-wide">
                                    {section.subtitle}
                                </h2>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-sans">
                                    {section.text}
                                </p>
                            </section>
                        ))}
                    </div>

                    {/* CTA Bottom */}
                    <div className="mt-20 p-8 bg-gray-50 rounded text-center border border-gray-100">
                        <h3 className="font-serif text-2xl mb-4">¿Listo para llevar tus renders al siguiente nivel?</h3>
                        <p className="text-gray-600 mb-6 text-sm">Contáctanos para descubrir cómo podemos ayudarte a vender más rápido y a mejor precio.</p>
                        <a
                            href="https://wa.me/5491156379421?text=Hola%20Te%20escribo%20desde%20la%20web,%20Me%20gustaria%20que%20me%20puedas%20brindar%20m%C3%A1s%20informaci%C3%B3n%20de%20los%20servicios%20de%20FlobaStudio."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#25D366] text-white px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-[#128C7E] transition-colors rounded shadow-sm"
                        >
                            Contactar por WhatsApp
                        </a>
                    </div>
                </div>
            </article>

            {/* Related Articles Section */}
            <section className="w-full max-w-4xl mx-auto px-6 mb-24 md:px-0">
                <div className="border-t border-gray-200 pt-12">
                    <h3 className="font-serif text-2xl mb-8">Sigue leyendo</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {articles
                            .filter((a) => a.slug !== article.slug)
                            .map((relatedArticle, idx) => (
                                <Link
                                    key={idx}
                                    href={`/recursos/${relatedArticle.slug}`}
                                    className="group flex gap-4 p-4 rounded bg-white shadow-sm hover:shadow-md border border-gray-100 hover:border-[#C5B358]/30 transition-all duration-300"
                                >
                                    <div className="relative h-20 w-20 shrink-0 bg-gray-200 rounded overflow-hidden hidden sm:block">
                                        <Image
                                            src={relatedArticle.image}
                                            alt={relatedArticle.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="flex items-center gap-1.5 mb-1.5 text-gray-400 group-hover:text-[#C5B358] transition-colors">
                                            <relatedArticle.icon size={12} />
                                            <span className="text-[10px] uppercase font-bold tracking-widest">{relatedArticle.readTime}</span>
                                        </div>
                                        <h4 className="font-sans text-sm font-bold text-gray-900 group-hover:text-black line-clamp-2 leading-tight">
                                            {relatedArticle.title}
                                        </h4>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
