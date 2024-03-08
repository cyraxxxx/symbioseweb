import Link from 'next/link'

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

export default Footer