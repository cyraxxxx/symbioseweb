import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Symbiose Web Solutions',
  description: 'Découvrez comment Symbiose Web Solutions protège vos données personnelles et respecte votre vie privée.',
  openGraph: {
    title: 'Politique de confidentialité | Symbiose Web Solutions',
    description: 'Nous nous engageons à protéger vos informations personnelles conformément aux lois du Québec et du Canada.',
    url: 'https://symbioseweb.com/privacy-policy',
    siteName: 'Symbiose Web Solutions',
    type: 'website',
    locale: 'fr_CA',
  }
}

const PrivacyPolicyPage = () => {
  return (
    <main className="nav-padding max-w-4xl mx-auto px-6 py-12 text-black-500">
      <h1 className="text-3xl font-bold mb-6">Politique de confidentialité</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Chez <strong>Symbiose Web Solutions</strong>, la confidentialité de vos données est une priorité.
          Cette politique explique quelles informations nous collectons, comment nous les utilisons
          et comment nous assurons leur protection.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Données collectées</h2>
        <p>
          Nous pouvons collecter les informations suivantes :
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Nom et prénom</li>
          <li>Adresse courriel</li>
          <li>Numéro de téléphone</li>
          <li>Adresse IP et données de navigation</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Utilisation des données</h2>
        <p>
          Les données collectées sont utilisées pour :
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Répondre à vos demandes et messages</li>
          <li>Personnaliser nos services et communications</li>
          <li>Améliorer notre site web et nos outils</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Partage des données</h2>
        <p>
          Vos informations personnelles ne sont jamais vendues ni louées. Elles peuvent être partagées avec des fournisseurs de services
          de confiance uniquement dans le cadre de la gestion de notre site ou de nos communications.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Sécurité</h2>
        <p>
          Nous utilisons des mesures techniques et organisationnelles pour protéger vos données contre tout accès non autorisé,
          divulgation, altération ou destruction.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Vos droits</h2>
        <p>
          Conformément aux lois en vigueur, vous avez le droit d’accéder à vos données, de les corriger, de les supprimer
          ou de vous opposer à leur traitement.
          Pour exercer ces droits, contactez-nous à&nbsp;
          <a href="mailto:cyril.symbiose@gmail.com" className="underline text-blue">
            cyril.symbiose@gmail.com
          </a>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Cookies</h2>
        <p>
          Notre site peut utiliser des cookies pour améliorer l’expérience utilisateur. Vous pouvez configurer votre
          navigateur pour refuser les cookies ou être alerté lorsqu’ils sont utilisés.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Modifications</h2>
        <p>
          Cette politique peut être mise à jour occasionnellement. Toute modification sera publiée sur cette page
          avec la date de la dernière mise à jour.
        </p>
      </section>

      <section className="mt-8 text-sm text-gray-500">
        Dernière mise à jour : {new Date().toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
      </section>
    </main>
  )
}

export default PrivacyPolicyPage
