/* import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="text-black-500 flex-between body-text w-full gap-y-10 border-dotted border-t border-black-500 bg-white-100 px-20 py-12 max-md:flex-col">
      <p>Copyright © Symbiose Web Solutions | Tous droits réservés</p>

      <div className="flex gap-x-9">
        <Link href="/terms-of-use">Termes et conditions</Link>
        <Link href="/privacy-policy">Politique de confidentialité</Link>
      </div>
    </footer>
  )
}

export default Footer */

import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-black-500 body-text w-full border-dotted border-t border-black-500 bg-white-100 px-6 py-12 sm:px-20">
      <div className="flex-between flex-wrap gap-y-6 max-md:flex-col">
        {/* Copyright */}
        <p>
          © {currentYear} Symbiose Web Solutions. Tous droits réservés.
        </p>

        {/* Footer navigation */}
        <nav aria-label="Liens de bas de page">
          <ul className="flex gap-x-8">
            <li>
              <Link href="/terms-of-use" className="hover:underline">
                Termes et conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer