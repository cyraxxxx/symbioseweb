/* import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-500 bg-blue text-white-100">

        <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">

        <Link href="/">
          <Image src='/logo.png' width={180} height={90} alt='Symbiose Web Solutions logo' />

        </Link>

        <Image 
          src="/hamburger-menu.svg"
          width={30}
          height={30}
          alt="Hamburger menu"
          className="block md:hidden text-white-100 bg-white-100 rounded-full p-1"
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

export default Navbar */

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav
      role="navigation"
      aria-label="Menu principal"
      className="fixed top-0 z-50 w-full border-b-2 border-black-500 bg-blue text-white-100"
    >
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        {/* Logo */}
        <Link href="/" aria-label="Page d'accueil">
          <Image
            src="/logo.png"
            width={180}
            height={90}
            alt="Logo de Symbiose Web Solutions"
            priority
          />
        </Link>

        {/* Hamburger menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden bg-white-100 rounded-full p-1"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Ouvrir le menu de navigation"
        >
          <Image
            src="/hamburger-menu.svg"
            width={30}
            height={30}
            alt="Icône du menu"
          />
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-x-10">
          <li>
            <Link
              href="/"
              className="text-white-100 bg-green whitespace-nowrap rounded-lg px-8 py-2.5 capitalize"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/about" className="body-text !font-medium">
              À Propos
            </Link>
          </li>
          <li>
            <Link href="/#searchbar" scroll={true} className="body-text !font-medium">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="body-text !font-medium">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <ul
          id="mobile-menu"
          className="flex flex-col items-center gap-y-4 bg-blue text-white-100 py-6 md:hidden w-full"
        >
          <li>
            <Link
              href="/"
              className="text-white-100 bg-green whitespace-nowrap rounded-lg px-8 py-2.5 capitalize"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/about" className="body-text !font-medium">
              À Propos
            </Link>
          </li>
          <li>
            <Link href="/#searchbar" scroll={true} className="body-text !font-medium">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="body-text !font-medium">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
