export default function MoyensPage() {
  return (
    <section className="section">
      <div className="container py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-peps-blue mb-6">Nos Moyens</h1>
        <p className="text-lg text-slate-700 max-w-3xl">
          Des équipements modernes, des outils numériques et un accompagnement expert
          pour garantir des résultats mesurables en performance, prévention et santé.
        </p>

        <div className="grid-autofill mt-10">
          <div className="card card-hover p-6">
            <h3 className="text-xl font-semibold text-peps-blue mb-2">Matériel de pointe</h3>
            <p className="text-slate-700">
              Appareils d’évaluation, capteurs, matériel sportif et médical conforme aux standards pro.
            </p>
          </div>
          <div className="card card-hover p-6">
            <h3 className="text-xl font-semibold text-peps-blue mb-2">Outils numériques</h3>
            <p className="text-slate-700">
              Plateformes de suivi, tableaux de bord, rapports d’impact, accompagnement data-driven.
            </p>
          </div>
          <div className="card card-hover p-6">
            <h3 className="text-xl font-semibold text-peps-blue mb-2">Méthodes & protocoles</h3>
            <p className="text-slate-700">
              Protocoles validés, routines, ateliers, et référentiels qualité pour un déploiement maîtrisé.
            </p>
          </div>
          <div className="card card-hover p-6">
            <h3 className="text-xl font-semibold text-peps-blue mb-2">Équipe d’experts</h3>
            <p className="text-slate-700">
              Intervenants qualifiés (prévention TMS, sport-santé, ergonomie) au service de vos objectifs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
