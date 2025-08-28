export default function HomePage() {
  return (
    <section className="section">
      <div className="container py-20 text-center">
        <span className="badge mb-5">Performance • Prévention • Santé</span>
        <h1 className="hero-title text-peps-blue mb-5">
          Bienvenue chez <span className="text-peps-orange">PEPS</span>
        </h1>
        <p className="hero-subtitle max-w-2xl mx-auto mb-10">
          Des solutions concrètes pour améliorer le bien-être et l’efficacité au travail comme au quotidien.
        </p>

        <div className="flex justify-center gap-4">
          <a href="/moyens" className="btn-primary">Découvrir nos Moyens</a>
          <a href="/formations" className="btn-outline">Voir nos Formations</a>
        </div>

        {/* 3 cartes d’accroche */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="card card-hover p-6 text-left">
            <h3 className="text-xl font-semibold text-peps-blue mb-2">Prévention</h3>
            <p className="text-slate-700">Réduisez les risques TMS et améliorez la qualité de vie au travail.</p>
          </div>
          <div className="card card-hover p-6 text-left">
            <h3 className="text-xl font-semibold text-peps-blue mb-2">Performance</h3>
            <p className="text-slate-700">Optimisez l’engagement et la productivité avec des méthodes éprouvées.</p>
          </div>
          <div className="card card-hover p-6 text-left">
            <h3 className="text-xl font-semibold text-peps-blue mb-2">Santé</h3>
            <p className="text-slate-700">Accompagnement durable par des experts et outils de suivi intelligents.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
