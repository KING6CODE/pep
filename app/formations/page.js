export default function FormationsPage() {
  return (
    <section className="section">
      <div className="container py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-peps-blue mb-6">Nos Formations</h1>
        <p className="text-lg text-slate-700 max-w-3xl">
          Des programmes conçus pour transmettre les bonnes pratiques de prévention,
          de santé et de performance, adaptés à vos équipes.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="card card-hover p-6">
            <h2 className="text-2xl font-semibold text-peps-blue mb-3">Prévention & TMS</h2>
            <p className="text-slate-700">
              Postures, gestes, organisation des postes, routines et échauffements ciblés.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="/contact" className="btn-primary">Nous contacter</a>
              <a href="#" className="btn-outline">Programme</a>
            </div>
          </div>

          <div className="card card-hover p-6">
            <h2 className="text-2xl font-semibold text-peps-blue mb-3">Performance durable</h2>
            <p className="text-slate-700">
              Énergie, récupération, mobilité, renforcement, nutrition et hygiène de vie.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="/contact" className="btn-primary">Nous contacter</a>
              <a href="#" className="btn-outline">Programme</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
