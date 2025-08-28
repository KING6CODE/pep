"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import CTA from "@/components/CTA";
import FeatureCard from "@/components/FeatureCard";


export default function Home() {
const features = [
{
title: "Prévention durable",
text: "Instaurer des réflexes d'auto‑protection et une culture prévention.",
},
{
title: "Approche terrain",
text: "Analyse du travail réel, gestes et postures en situation.",
},
{
title: "Mesure & suivi",
text: "Questionnaires, bilans et plan d'action pour des effets durables.",
},
];


return (
<div>
{/* HERO */}
<section className="section relative overflow-hidden">
<div className="relative isolate bg-gradient-to-br from-peps.blue via-slate-900 to-black text-white">
<div className="max-w-7xl mx-auto px-6 pt-24 pb-20">
<motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-black tracking-tight">
Performance • Prévention • Santé
</motion.h1>
<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl">
PEPS accompagne les organisations pour prévenir les <strong>Troubles Musculo‑Squelettiques (TMS)</strong>, améliorer
les conditions de travail et renforcer le bien‑être durable des équipes.
</motion.p>
<div className="mt-8 flex flex-wrap gap-3">
<a href="/formations" className="btn-primary">Découvrir nos formations</a>
<a href="/contact" className="btn-outline">Nous contacter</a>
</div>


{/* Badges */}
<div className="mt-12 grid sm:grid-cols-3 gap-4">
{["Réduction des arrêts", "Productivité accrue", "Climat social apaisé"].map((t, i) => (
<div key={i} className="card p-5 flex items-center gap-3">
<CheckCircle2 className="w-5 h-5 text-peps.sky" />
<span className="font-medium">{t}</span>
</div>
))}
</div>
</div>
</div>
</section>


{/* AVANTAGES */}
<section className="py-20 px-6 max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Pourquoi agir contre les TMS ?</h2>
<div className="grid-autofill">
{features.map((f, i) => (
<FeatureCard key={i} title={f.title} text={f.text} />
))}
</div>
</section>


<CTA />
</div>
);
}
