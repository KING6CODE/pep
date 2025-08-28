import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-peps-blue font-bold text-lg mb-3">PEPS</h3>
          <p className="text-slate-600">
            Performance – Prévention – Santé. Nous accompagnons les organisations
            et les individus vers un mieux-être durable.
          </p>
        </div>
        <div>
          <h4 className="text-slate-900 font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-slate-700">
            <li><Link className="hover:underline" href="/">Accueil</Link></li>
            <li><Link className="hover:underline" href="/moyens">Moyens</Link></li>
            <li><Link className="hover:underline" href="/formations">Formations</Link></li>
            <li><Link className="hover:underline" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-900 font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-slate-700">
            <li>Email : contact@peps.fr</li>
            <li>Tél : 01 23 45 67 89</li>
            <li><Link className="text-peps-blue hover:opacity-80" href="/mentions">Mentions légales</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="container py-4 text-sm text-slate-500">
          © {new Date().getFullYear()} PEPS — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
