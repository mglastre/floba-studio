"use strict";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Packs from "@/components/Packs";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <Pillars />
            <Packs />
            <Portfolio />
            <Resources />
            <FAQ />
            <Footer />
        </main>
    );
}
