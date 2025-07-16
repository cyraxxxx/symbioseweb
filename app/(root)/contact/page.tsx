/* import React from 'react'

export default function ContactPage() {
  return (
    <main className="nav-padding text-black-500 max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-lg mb-6">N’hésitez pas à nous écrire. Nous vous répondrons rapidement.</p>

      <form className="space-y-4">
        <input className="w-full border p-2 rounded" type="text" placeholder="Votre nom" required />
        <input className="w-full border p-2 rounded" type="email" placeholder="Votre email" required />
        <textarea className="w-full border p-2 rounded" rows={5} placeholder="Votre message" required></textarea>
        <button type="submit" className="bg-blue text-white px-6 py-2 rounded">
          Envoyer
        </button>
      </form>
    </main>
  )
} */

  import React from 'react'
import Script from 'next/script'

// SEO metadata
export const metadata = {
  title: 'Contact | Symbiose Web Solutions',
  description: 'Contactez Cyril Robert de Symbiose Web Solutions à Mont-Saint-Hilaire pour toute demande de projet web. Réponse rapide par téléphone ou courriel.',
  keywords: ['Symbiose Web Solutions', 'Contact', 'Développement Web', 'Cyril Robert', 'Mont-Saint-Hilaire', 'Agence web', 'Formulaire contact'],
  openGraph: {
    title: 'Contact | Symbiose Web Solutions',
    description: 'Besoin d’un site web ou d’un accompagnement numérique ? Contactez Cyril Robert dès maintenant.',
    url: 'https://symbioseweb.com/contact',
    siteName: 'Symbiose Web Solutions',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD Microdata for Local Business SEO */}
      <Script type="application/ld+json" id="contact-jsonld">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Symbiose Web Solutions",
          url: "https://symbioseweb.com",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-514-293-1609",
            contactType: "Customer Service",
            email: "cyril.symbiose@gmail.com",
            areaServed: "CA",
            availableLanguage: ["French", "English"]
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "311 rue Blain",
            addressLocality: "Mont-Saint-Hilaire",
            addressRegion: "QC",
            postalCode: "J3H 3B4",
            addressCountry: "CA"
          }
        })}
      </Script>

      <main className="nav-padding text-black-500 max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Contact</h1>
        <p className="text-lg mb-6">Pour toute question ou demande de collaboration, n’hésitez pas à nous contacter. Nous vous répondrons rapidement.</p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Coordonnées</h2>
          <p><strong>Nom :</strong> Cyril Robert</p>
          <p><strong>Adresse :</strong> 311 rue Blain, Mont-Saint-Hilaire, QC, J3H 3B4</p>
          <p><strong>Téléphone :</strong> <a className="text-blue underline" href="tel:5142931609">514-293-1609</a></p>
          <p><strong>Courriel :</strong> <a className="text-blue underline" href="mailto:cyril.symbiose@gmail.com">cyril.symbiose@gmail.com</a></p>
          <p><strong>Site web :</strong> <a className="text-blue underline" href="https://symbioseweb.com" target="_blank">symbioseweb.com</a></p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Formulaire de contact</h2>
          <form className="space-y-4">
            <input
              className="w-full border border-gray-300 p-2 rounded"
              type="text"
              placeholder="Votre nom"
              required
              aria-label="Nom"
            />
            <input
              className="w-full border border-gray-300 p-2 rounded"
              type="email"
              placeholder="Votre email"
              required
              aria-label="Email"
            />
            <textarea
              className="w-full border border-gray-300 p-2 rounded"
              rows={5}
              placeholder="Votre message"
              required
              aria-label="Message"
            ></textarea>
            <button
              type="submit"
              className="bg-blue text-white px-6 py-2 rounded hover:bg-blue-dark transition"
            >
              Envoyer
            </button>
          </form>
        </section>
      </main>
    </>
  )
}
