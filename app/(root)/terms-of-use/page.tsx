import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termes et conditions | Symbiose Web Solutions',
  description: 'Consultez les termes et conditions d’utilisation du site et des services de Symbiose Web Solutions.',
  openGraph: {
    title: 'Termes et conditions | Symbiose Web Solutions',
    description: 'Informations légales sur l’utilisation de nos services et de notre site web.',
    url: 'https://symbioseweb.com/terms-of-use',
    siteName: 'Symbiose Web Solutions',
    type: 'website',
    locale: 'fr_CA',
  }
}

const TermsOfUsePage = () => {
  return (
    <main className="nav-padding max-w-4xl mx-auto px-6 py-12 text-black-500">
      <h1 className="text-3xl font-bold mb-6">Termes et conditions d’utilisation</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptation des conditions</h2>
        <p>
          En accédant au site <strong>symbioseweb.com</strong> ou en utilisant nos services,
          vous acceptez d’être lié par les présentes conditions d’utilisation, toutes les lois et
          réglementations applicables, et vous convenez que vous êtes responsable du respect
          de toute loi locale en vigueur.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Modifications</h2>
        <p>
          Symbiose Web Solutions se réserve le droit de modifier les présentes conditions à tout moment.
          En continuant à utiliser le site après la publication de modifications, vous acceptez ces nouvelles conditions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Propriété intellectuelle</h2>
        <p>
          Tous les contenus présents sur ce site (textes, images, code, logos, etc.) sont la propriété exclusive
          de Symbiose Web Solutions ou de ses partenaires. Toute reproduction ou redistribution est strictement interdite sans autorisation écrite préalable.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Utilisation autorisée</h2>
        <p>
          Vous vous engagez à utiliser ce site uniquement à des fins légales et à ne pas porter atteinte aux droits
          de tiers ni entraver l’utilisation normale du site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Limitation de responsabilité</h2>
        <p>
          Symbiose Web Solutions ne pourra être tenu responsable de tout dommage direct ou indirect résultant de l’utilisation
          ou de l’incapacité d’utiliser le site ou ses services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Droit applicable</h2>
        <p>
          Les présentes conditions sont régies par les lois en vigueur dans la province de Québec, Canada. Tout litige sera soumis aux tribunaux compétents du district de Richelieu.
        </p>
      </section>

      <section className="mt-8 text-sm text-gray-500">
        Dernière mise à jour : {new Date().toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
      </section>
    </main>
  )
}

export default TermsOfUsePage
