import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ShieldCheck, Dumbbell, ClipboardList, GraduationCap, Users, FileText, CheckCircle2, ArrowUp, Target, Settings, Briefcase } from "lucide-react";

/**
 * PEPS – Performance Prévention Santé
 * Version reconstituée en une seule page React (.js) pour déploiement sur Vercel
 * -------------------------------------------------------------
 * Ce composant représente une synthèse fidèle des contenus visibles dans les
 * captures fournies (texte mis en page + mentions légales + coordonnées).
 *
 * Intégration rapide sur Vercel (Next.js):
 *   1) Créez un nouveau projet Next.js (ou utilisez votre repo existant)
 *   2) Placez ce fichier dans `app/page.js` (Next 13+) OU dans `pages/index.js` (Next <13)
 *   3) Assurez-vous d'avoir Tailwind configuré (https://tailwindcss.com/docs/guides/nextjs)
 *   4) Pushez sur GitHub, connectez le repo à Vercel.
 *
 * Si vous préférez CRA/Vite: placez ce composant comme `App.js`.
 * -------------------------------------------------------------
 */

const Section = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="scroll-mt-24 max-w-5xl mx-auto px-4 py-12">
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 md:p-10 border border-slate-200"
    >
      <div className="flex items-center gap-3 mb-6">
        {Icon && (
          <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600/10 to-rose-600/10">
            <Icon className="w-6 h-6" aria-hidden />
          </div>
        )}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      </div>
      <div className="prose prose-slate max-w-none">
        {children}
      </div>
    </motion.div>
  </section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1 text-sm font-medium">
    {children}
  </span>
);

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-extrabold tracking-tight">{value}</div>
    <div className="text-sm text-slate-600">{label}</div>
  </div>
);

export default function PepsSite() {
  const nav = [
    { id: "accueil", label: "Accueil" },
    { id: "objectif", label: "Notre objectif" },
    { id: "moyens", label: "Moyens" },
    { id: "formations", label: "Les formations PEPS" },
    { id: "quisommesnous", label: "Qui sommes-nous ?" },
    { id: "contact", label: "Contact" },
    { id: "mentions", label: "Mentions légales" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-white text-slate-900">
      {/* Barre de navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#accueil" className="flex items-baseline gap-2 font-black tracking-tight">
            <span className="text-2xl leading-none">PEPS</span>
            <span className="text-xs md:text-sm text-slate-600">Performance Prévention Santé</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="px-3 py-2 rounded-xl text-sm hover:bg-slate-100"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Héro */}
      <section id="accueil" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.08),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(225,29,72,0.08),transparent_35%)]" />
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-col items-start md:items-center text-left md:text-center gap-6">
              <Badge>Prévention durable et efficace</Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Performance • Prévention • Santé
              </h1>
              <p className="max-w-3xl text-lg md:text-xl text-slate-700">
                PEPS accompagne les organisations pour prévenir les <strong>Troubles Musculo-Squelettiques (TMS)</strong>,
                améliorer les conditions de travail et favoriser la santé durable des salariés.
              </p>
              <div className="grid grid-cols-3 gap-4 w-full md:w-auto">
                <Stat value="TMS" label="enjeu majeur de santé au travail" />
                <Stat value="> 60%" label="part des maladies professionnelles*" />
                <Stat value="Gain" label="productivité & climat social" />
              </div>
              <p className="text-xs text-slate-500">* Indication historique mentionnée sur la copie d'écran : part dominante des TMS dans les maladies professionnelles en France (env. 2005).</p>
              <div className="flex items-center gap-3">
                <a href="#contact" className="px-5 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700">Nous contacter</a>
                <a href="#formations" className="px-5 py-3 rounded-2xl border border-slate-300 font-semibold hover:bg-slate-50">Voir les formations</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notre objectif */}
      <Section id="objectif" title="Notre objectif" icon={Target}>
        <div className="space-y-4">
          <p>
            Réduire l'impact des TMS et des risques professionnels par une action de prévention structurée, centrée sur
            l'auto-protection, l'analyse du travail réel et la montée en compétences des équipes. PEPS agit pour une
            <strong> prévention durable et efficace</strong> au service des salariés et de l'entreprise.
          </p>
          <ul className="list-disc pl-6">
            <li>Diminuer le stress, les accidents et les arrêts de travail.</li>
            <li>Améliorer la productivité et la qualité du service rendu.</li>
            <li>Fluidifier les relations hiérarchiques et le travail en équipe.</li>
            <li>Installer des réflexes de protection corporelle au quotidien.</li>
          </ul>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl border border-slate-200">
              <div className="font-semibold">C'est un gain pour l'entreprise</div>
              <p className="text-sm text-slate-600">Moins d'accidents, plus d'efficacité, meilleur climat social.</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200">
              <div className="font-semibold">Approche globale</div>
              <p className="text-sm text-slate-600">Du repérage des risques à l'accompagnement des pratiques.</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200">
              <div className="font-semibold">Multi-publics</div>
              <p className="text-sm text-slate-600">Salariés, encadrants, référents internes.</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200">
              <div className="font-semibold">Évaluation</div>
              <p className="text-sm text-slate-600">Questionnaire et bilan en fin de formation.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Moyens */}
      <Section id="moyens" title="Moyens" icon={Settings}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-semibold">Formations & actions</h3>
            <ul className="list-disc pl-6">
              <li>Relaxation en groupe, étirements et mobilisation douce.</li>
              <li>Analyse des postes et des gestes de travail (réalité du terrain).</li>
              <li>Gestes et postures, port de charges et protections articulaires.</li>
              <li>Sensibilisation aux TMS et aux facteurs de risque.</li>
            </ul>
            <h3 className="font-semibold mt-4">Outils et supports</h3>
            <ul className="list-disc pl-6">
              <li>Plaquettes individualisées par poste (rappels gestes/repères).</li>
              <li>Activités physiques adaptées au contexte professionnel.</li>
              <li>Accompagnement des référents internes.</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">Bénéfices attendus</h3>
            <ul className="list-disc pl-6">
              <li>Réduction durable des douleurs et des TMS.</li>
              <li>Amélioration de la mobilité, du confort et de l'efficacité.</li>
              <li>Meilleure appropriation des bonnes pratiques par les équipes.</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge><ShieldCheck className="w-4 h-4 mr-1" /> Prévention</Badge>
              <Badge><Dumbbell className="w-4 h-4 mr-1" /> Activité adaptée</Badge>
              <Badge><ClipboardList className="w-4 h-4 mr-1" /> Suivi & bilans</Badge>
            </div>
          </div>
        </div>
      </Section>

      {/* Formations */}
      <Section id="formations" title="Les formations PEPS" icon={GraduationCap}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold">Publics visés</h3>
            <p>Formations ouvertes à <strong>tous publics</strong> : salariés, managers, équipes de prévention, référents internes.</p>
            <h3 className="font-semibold">Objectifs pédagogiques</h3>
            <ul className="list-disc pl-6">
              <li>Apprendre à s'auto-protéger et à économiser ses articulations.</li>
              <li>Identifier les facteurs de risques TMS sur son poste.</li>
              <li>Intégrer des étirements adaptés et des pauses actives.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Contenus & modalités</h3>
            <ul className="list-disc pl-6">
              <li>Apports théoriques sur les TMS (anatomie & physiologie utiles).</li>
              <li>Exercices pratiques en situation de travail.</li>
              <li>Supports mémo par gestes/postes, plan d'action personnalisable.</li>
              <li>Questionnaire final et évaluation de satisfaction.</li>
            </ul>
            <div className="flex items-center gap-2 text-green-700">
              <CheckCircle2 className="w-5 h-5" />
              <span>Évaluation des acquis en fin de formation</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Qui sommes-nous ? */}
      <Section id="quisommesnous" title="Qui sommes-nous ?" icon={Users}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p>
              <strong>PEPS</strong> est porté par <strong>Moctar TRAORÉ</strong> (entreprise individuelle), intervenant en prévention
              et formateur. Parcours et compétences mentionnés sur la copie d'écran :
            </p>
            <ul className="list-disc pl-6">
              <li>Licence STAPS.</li>
              <li>Master 2 (modélisation 3D / ingénierie sportive).</li>
              <li>Expérience en centre de rééducation.</li>
              <li>Mémoire portant sur la lombalgie chronique.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-slate-200">
              <div className="font-semibold flex items-center gap-2"><Briefcase className="w-4 h-4" /> Domaines d'intervention</div>
              <p className="text-sm text-slate-700 mt-1">
                Prévention des TMS, ergonomie de terrain, gestes et postures, étirements adaptés, sensibilisation
                et formation des équipes.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200">
              <div className="font-semibold flex items-center gap-2"><Users className="w-4 h-4" /> Publics accompagnés</div>
              <p className="text-sm text-slate-700 mt-1">Salariés, managers, services de prévention, référents.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" icon={Mail}>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <p className="text-lg font-semibold">Entreprise individuelle PEPS</p>
            <p>
              Gérant : <strong>TRAORÉ Moctar</strong><br />
              SIRET : <strong>523 148 542 00013</strong>
            </p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4" /><a className="underline" href="mailto:contact@peps76.com">contact@peps76.com</a></p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4" /><a className="underline" href="tel:+33616498096">06 16 49 80 96</a></p>
            <p className="text-sm text-slate-600">Secteur : prévention des TMS en entreprise, formations gestes & postures.</p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Votre message a été simulé côté client. Branchez un endpoint API pour l'envoi."); }}
            className="space-y-4"
            aria-label="Formulaire de contact"
          >
            <div>
              <label className="block text-sm mb-1" htmlFor="name">Nom *</label>
              <input id="name" required className="w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="email">Email *</label>
              <input type="email" id="email" required className="w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="message">Message *</label>
              <textarea id="message" required rows={5} className="w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <button type="submit" className="w-full md:w-auto px-5 py-3 rounded-2xl bg-rose-600 text-white font-semibold shadow hover:bg-rose-700">
              Envoyer le message
            </button>
            <p className="text-xs text-slate-500">* Champs obligatoires</p>
            {/*
              Pour un envoi réel sur Vercel :
              - Créez un endpoint (ex: app/api/contact/route.js) qui envoie un email (Resend, SMTP, etc.)
              - Remplacez l'alert par un fetch POST vers /api/contact
            */}
          </form>
        </div>
      </Section>

      {/* Mentions légales */}
      <Section id="mentions" title="Mentions légales" icon={FileText}>
        <div className="space-y-4 text-sm">
          <p><strong>Éditeur :</strong> PEPS – Entreprise individuelle (TRAORÉ Moctar). Contact : <a className="underline" href="mailto:contact@peps76.com">contact@peps76.com</a> – <a className="underline" href="tel:+33616498096">06 16 49 80 96</a>.</p>
          <p><strong>Propriété intellectuelle :</strong> les contenus (textes, documents) sont protégés. Toute reproduction et toute création de liens profonds sont soumises à autorisation préalable de l'éditeur.</p>
          <p><strong>Données personnelles :</strong> traitement conforme à la loi Informatique & Libertés. Vous disposez d'un droit d'accès, de modification et d'opposition. Pour l'exercer, contactez l'éditeur. Les données formulaires ne sont conservées qu'au besoin du traitement des demandes.</p>
          <p><strong>Responsabilité :</strong> l'éditeur ne saurait être tenu responsable des dommages directs ou indirects (y compris virus) consécutifs à la consultation du site ou à l'utilisation de liens externes.</p>
          <p className="text-slate-500">Texte reconstitué d'après les captures : formulation synthétique et respectueuse du sens des mentions observées.</p>
        </div>
      </Section>

      {/* Pied de page */}
      <footer className="border-t border-slate-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} PEPS – Performance Prévention Santé</p>
          <div className="flex items-center gap-3">
            <a href="#mentions" className="text-sm underline">Mentions légales</a>
            <a href="#contact" className="text-sm underline">Contact</a>
          </div>
        </div>
        <a href="#accueil" className="fixed bottom-4 right-4 p-3 rounded-full bg-white border border-slate-200 shadow hover:bg-slate-50" aria-label="Revenir en haut">
          <ArrowUp className="w-5 h-5" />
        </a>
      </footer>
    </main>
  );
}
