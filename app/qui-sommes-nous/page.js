"use client";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";


export default function EquipePage() {
return (
<div className="py-16 px-6 max-w-5xl mx-auto">
<SectionHeader title="Qui sommes‑nous ?" subtitle="PEPS – Entreprise individuelle dirigée par Moctar TRAORÉ" />
<div className="grid md:grid-cols-2 gap-8 mt-10">
<div className="card p-6">
<h3 className="text-xl font-semibold">Parcours</h3>
<ul className="mt-3 space-y-2 list-disc pl-5 text-slate-700">
<li>Licence STAPS.</li>
<li>Master 2 (modélisation 3D / ingénierie sportive).</li>
<li>Expérience en centre de rééducation.</li>
<li>Mémoire portant sur la lombalgie chronique.</li>
</ul>
</div>
<div className="card p-6">
<h3 className="text-xl font-semibold">Domaines d'intervention</h3>
<p className="mt-3 text-slate-700">
Prévention des TMS, ergonomie de terrain, gestes et postures, étirements adaptés, sensibilisation et formation des équipes.
</p>
</div>
</div>
</div>
);
}
