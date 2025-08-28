import { ArrowRight } from "lucide-react";


export default function CTA() {
return (
<section className="py-16">
<div className="max-w-6xl mx-auto px-6">
<div className="card p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-peps.blue to-slate-900 text-white">
<div>
<h3 className="text-2xl md:text-3xl font-bold">Prêts à réduire les TMS et à booster le bien‑être ?</h3>
<p className="mt-2 text-white/90">Contactez‑nous pour construire une prévention durable adaptée à vos métiers.</p>
</div>
<a href="/contact" className="btn-primary bg-white text-peps.blue hover:opacity-90">
Nous contacter <ArrowRight className="w-4 h-4" />
</a>
</div>
</div>
</section>
);
}
