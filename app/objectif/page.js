"use client";
}


// =========================
// FILE: app/formations/page.js
// =========================
"use client";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, ClipboardList, CheckCircle2 } from "lucide-react";


export default function FormationsPage() {
const modules = [
{ icon: ShieldCheck, title: "Sensibilisation TMS", points: ["Comprendre les mécanismes", "Identifier les facteurs de risques", "Repères simples pour agir"] },
{ icon: ClipboardList, title: "Gestes & postures", points: ["Application sur postes réels", "Réglages et manutention", "Auto‑protection"] },
{ icon: GraduationCap, title: "Référents internes", points: ["Rôle & posture du référent", "Animation prévention", "Suivi et indicateurs"] },
];


return (
<div className="py-16 px-6 max-w-7xl mx-auto">
<SectionHeader title="Les formations PEPS" subtitle="Des parcours concrets, mesurables et adaptés à vos métiers" />
<div className="mt-10 grid lg:grid-cols-3 gap-6">
{modules.map((m, i) => (
<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card p-6">
<m.icon className="w-10 h-10 text-peps.red" />
<h3 className="mt-3 text-xl font-semibold">{m.title}</h3>
<ul className="mt-3 space-y-2 text-slate-700 list-disc pl-5">
{m.points.map((p, idx) => <li key={idx}>{p}</li>)}
</ul>
<div className="mt-4 flex items-center gap-2 text-green-700">
<CheckCircle2 className="w-5 h-5" />
<span>Évaluation des acquis en fin de session</span>
</div>
</motion.div>
))}
</div>
</div>
);
}
