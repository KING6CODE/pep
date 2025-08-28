"use client";
import SectionHeader from "@/components/SectionHeader";


export default function MentionsPage() {
return (
<div className="py-16 px-6 max-w-4xl mx-auto">
<SectionHeader title="Mentions légales" subtitle="Informations légales & protection des données" />
<div className="prose prose-slate max-w-none card p-6">
<p><strong>Éditeur :</strong> PEPS – Entreprise individuelle (TRAORÉ Moctar). Contact : contact@peps76.com – 06 16 49 80 96.</p>
<p><strong>Propriété intellectuelle :</strong> les contenus (textes, documents) sont protégés. Toute reproduction et création de liens profonds sont soumises à autorisation préalable.</p>
<p><strong>Données personnelles :</strong> conformité à la loi Informatique & Libertés. Droit d'accès, de modification et d'opposition via l'éditeur. Les données de formulaire sont traitées pour la gestion des demandes.</p>
<p><strong>Responsabilité :</strong> l'éditeur n'est pas responsable des dommages consécutifs à la consultation du site ou à l'utilisation de liens externes.</p>
</div>
</div>
);
}
