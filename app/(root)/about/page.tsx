/* import React from 'react'

export default function AboutPage() {
  return (
    <main className="nav-padding text-black-500 max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">À propos</h1>
      <p className="text-lg leading-relaxed">
        Bienvenue chez Symbiose Web Solutions. Nous sommes une équipe passionnée par la création d’expériences numériques innovantes.
      </p>
      <p className="mt-4 text-lg">
        Notre mission est de transformer vos idées en solutions web performantes, accessibles et durables.
      </p>
    </main>
  )
} */

  import React from 'react'

// SEO metadata
export const metadata = {
  title: 'À propos | Symbiose Web Solutions',
  description: 'Découvrez Symbiose Web Solutions : notre mission, nos valeurs et notre équipe passionnée dédiée à la création de solutions web performantes et durables.',
  keywords: ['Symbiose Web Solutions', 'agence web', 'développement web', 'expérience utilisateur', 'SEO', 'solutions numériques'],
  openGraph: {
    title: 'À propos | Symbiose Web Solutions',
    description: 'Découvrez qui nous sommes et ce qui rend Symbiose unique dans le domaine du web.',
    url: 'https://symbioseweb.com/about', // remplace par ton vrai domaine
    siteName: 'Symbiose Web Solutions',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <main className="nav-padding text-black-500 max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">À propos de Symbiose Web Solutions</h1>

      <section className="mb-10">
        <p className="text-lg leading-relaxed">
          Chez <strong>Symbiose Web Solutions</strong>, nous croyons en la puissance du numérique pour transformer les idées en expériences concrètes. Basés au Québec, nous accompagnons les entreprises, entrepreneurs et créateurs dans leur croissance digitale grâce à des solutions web sur mesure.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Notre mission</h2>
        <p className="text-lg leading-relaxed">
          Créer des plateformes web performantes, accessibles et durables, qui respectent les standards modernes en matière de design, d’expérience utilisateur (UX) et de référencement naturel (SEO).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Nos valeurs</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li><strong>Créativité</strong> – proposer des designs uniques adaptés à chaque client.</li>
          <li><strong>Transparence</strong> – une communication claire, honnête et continue.</li>
          <li><strong>Accessibilité</strong> – concevoir des interfaces inclusives pour tous les utilisateurs.</li>
          <li><strong>Performance</strong> – optimiser chaque ligne de code pour la rapidité et l’efficacité.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Notre équipe</h2>
        <p className="text-lg leading-relaxed">
          Notre équipe est composée de développeurs, designers, stratèges SEO et spécialistes UX/UI qui unissent leurs compétences pour livrer des projets alignés sur vos objectifs d’affaires.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Pourquoi choisir Symbiose ?</h2>
        <p className="text-lg leading-relaxed">
          Parce que nous allions la rigueur technique à la sensibilité artistique. Nous comprenons que chaque projet est unique et mérite une attention personnalisée, de la conception à la mise en ligne.
        </p>
      </section>
    </main>
  )
}