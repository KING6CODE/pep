"use client";
import SectionHeader from "@/components/SectionHeader";
import { Mail, Phone } from "lucide-react";


export default function ContactPage() {
const onSubmit = (e) => {
e.preventDefault();
alert("Message envoyé (simulation). Branchez /api/contact pour l'envoi réel.");
};


return (
<div className="py-16 px-6 max-w-6xl mx-auto">
<SectionHeader title="Contact" subtitle="Écrivez‑nous, répondons rapidement" />
<div className="grid md:grid-cols-2 gap-10 mt-10">
<div className="card p-6 space-y-4">
<p className="flex items-center gap-3"><Phone className="w-5 h-5 text-peps.blue" /> <a href="tel:+33616498096" className="underline">06 16 49 80 96</a></p>
<p className="flex items-center gap-3"><Mail className="w-5 h-5 text-peps.red" /> <a href="mailto:contact@peps76.com" className="underline">contact@peps76.com</a></p>
<p>SIRET : 523 148 542 00013</p>
<p>Entreprise individuelle – Gérant : Moctar TRAORÉ</p>
</div>
<form onSubmit={onSubmit} className="card p-6 space-y-4">
<div>
<label className="block text-sm mb-1" htmlFor="name">Nom *</label>
<input id="name" required className="w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-peps.sky" />
</div>
<div>
<label className="block text-sm mb-1" htmlFor="email">Email *</label>
<input type="email" id="email" required className="w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-peps.sky" />
</div>
<div>
<label className="block text-sm mb-1" htmlFor="message">Message *</label>
<textarea id="message" rows={5} required className="w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-peps.sky" />
</div>
<button className="btn-primary w-full md:w-auto">Envoyer</button>
<p className="text-xs text-slate-500">* Champs obligatoires</p>
</form>
</div>
</div>
);
}
