import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-500 bg-blue text-white-100">

        <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">

        <Link href="/">
          {/* <Image src='/symbiose-web-solutions-logo.svg' width={55} height={40} alt='Symbiose Web Solutions logo' /> */}
          <Image src='/logo.png' width={180} height={90} alt='Symbiose Web Solutions logo' />

        </Link>

        <Image 
          src="/hamburger-menu.svg"
          width={30}
          height={30}
          alt="Hamburger menu"
          className="block md:hidden text-black-500"
        />

<ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
  <li>
    <Link
    href="https://symbioseweb.com"
    target="_blank"
    className="text-white-100 bg-green whitespace-nowrap rounded-lg px-8 py-2.5 capitalize"
    >
    Accueil
    </Link>
  </li>
          <li className="body-text !font-medium">
            <Link
              href="#"
              target="_blank"
            >
              À Propos
            </Link>
          </li>
          <li className="body-text !font-medium">
            <Link
              href="#"
              target="_blank"
            >
              Portfolio
            </Link>
          </li>
          <li className="body-text !font-medium">
            <Link
              href="#"
              target="_blank"
            >
              Contact
            </Link>
          </li>
        </ul>


        </div>

    </nav>
  )
}

export default Navbar