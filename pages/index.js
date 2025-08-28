import { motion } from "framer-motion";
import { Mail, Phone, Users, Activity, ClipboardList, HeartPulse, Briefcase, GraduationCap, FileText } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-red-600 text-white py-20 px-6 text-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-bold mb-4">
          PEPS – Performance Prévention Santé
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-lg md:text-2xl max-w-2xl mx-auto mb-8">
          Prévenir les TMS, améliorer le bien-être au travail
        </motion.p>
        <motion.a whileHover={{ scale: 1.05 }} href="#formations" className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-2xl shadow-lg">
          Découvrir nos formations
        </motion.a>
      </section>

      {/* Statistiques */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Pourquoi agir contre les TMS ?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Activity, text: "61% des maladies professionnelles en France sont des TMS" },
            { icon: Users, text: "9 salariés sur 10 déclarent des douleurs liées aux TMS" },
            { icon: HeartPulse, text: "Première cause d’arrêts longue durée et de handicap" },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.2 }} viewport={{ once: true }} className="bg-white shadow-md rounded-2xl p-6 text-center">
              <item.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Moyens */}
      <section id="moyens" className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Moyens</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ClipboardList, title: "Analyse des postes", text: "Études ergonomiques et adaptation des postes de travail." },
              { icon: Activity, title: "Étirements", text: "Séances adaptées pour soulager les articulations." },
              { icon: Users, title: "Relaxation collective", text: "Moments de bien-être pour réduire le stress." },
              { icon: Briefcase, title: "Gestes et postures", text: "Formation pratique pour limiter les risques de TMS." },
              { icon: GraduationCap, title: "Référents internes", text: "Accompagnement pour créer vos relais santé." },
              { icon: FileText, title: "Supports personnalisés", text: "Plaquettes explicatives adaptées à chaque poste." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.2 }} viewport={{ once: true }} className="bg-white shadow-md rounded-2xl p-6">
                <item.icon className="w-10 h-10 text-blue-900 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formations */}
      <section id="formations" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Formations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">Public concerné</h3>
            <p>Salariés, encadrants, managers : nos formations s’adressent à tous.</p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">Objectifs</h3>
            <p>Apprendre à s’auto-protéger, soulager les articulations et prévenir durablement les TMS.</p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">Contenu</h3>
            <p>Notions d’anatomie, exercices pratiques, sensibilisation aux TMS, questionnaire final.</p>
          </div>
        </div>
      </section>

      {/* Qui sommes-nous */}
      <section id="about" className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Qui sommes-nous ?</h2>
          <p className="text-lg leading-relaxed">
            PEPS est dirigé par <strong>Moctar TRAORE</strong>, diplômé en STAPS et titulaire d’un Master 2 en modélisation 3D et ingénierie sportive.
            Son expérience en centre de rééducation et ses travaux sur les lombalgies chroniques font de lui un expert reconnu de la prévention TMS.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contactez-nous</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Coordonnées */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-blue-900" />
              <span>06 16 49 80 96</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-red-600" />
              <span>contact@peps76.com</span>
            </div>
            <p>SIRET : 52314854200013</p>
            <p>Entreprise individuelle – Gérant : Moctar TRAORE</p>
          </div>

          {/* Formulaire */}
          <form className="bg-white shadow-md rounded-2xl p-6 space-y-4">
            <input type="text" placeholder="Votre nom" className="w-full border rounded-lg px-4 py-2" />
            <input type="email" placeholder="Votre email" className="w-full border rounded-lg px-4 py-2" />
            <textarea placeholder="Votre message" rows="4" className="w-full border rounded-lg px-4 py-2"></textarea>
            <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700">
              Envoyer
            </button>
          </form>
        </div>
      </section>

      {/* Mentions légales */}
      <footer className="bg-blue-900 text-white py-8 px-6 text-center">
        <p className="text-sm max-w-4xl mx-auto">
          © 2025 PEPS – Performance Prévention Santé. Tous droits réservés.<br />
          Les informations personnelles collectées sont destinées exclusivement à un usage interne et ne seront en aucun cas cédées à des tiers.
        </p>
      </footer>
    </main>
  );
}

