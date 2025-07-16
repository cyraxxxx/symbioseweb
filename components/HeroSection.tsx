/* "use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full">
      

<div className="flex-center relative w-full flex-col text-center">
                <Image src="/symbiose-web-solutions.svg" alt="Symbiose Web Solutions" className="w-full text-black-500"
                width={450}
                height={300} />
               
            </div>
      <div className="w-full pt-3 px-2">

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-black-500 mb-4 text--sm xs:text-sm sm:text-xl lg:text-4xl font-extrabold">
            
            <TypeAnimation
              sequence={[
                "Conception de site web",
                1000,
                "Conception d'applications web",
                1000,
                "Conception d'applications mobiles",
                1000,
                "Développement frontend",
                1000,
                "Développement backend",
                1000,
                "E-commerce",
                1000,
                "SEO-friendly",
                1000,
                "Optimisation de la performance",
                1000,

              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection; */

'use client'

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section
      className="w-full"
      aria-labelledby="hero-title"
    >
      {/* Logo + brand */}
      <div className="flex-center relative w-full flex-col text-center">
        <Image
          src="/symbiose-web-solutions.svg"
          alt="Logo de Symbiose Web Solutions, agence web à Mont-Saint-Hilaire"
          width={450}
          height={300}
          priority
          className="w-full h-auto"
        />
      </div>

      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center sm:text-left pt-3 px-2 pb-3"
      >
        <h1
          id="hero-title"
          className="sr-only text-black-500 mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold"
        >
          Agence de développement web & SEO à Mont-Saint-Hilaire
        </h1>

        <p className="sr-only">
          Conception de site web, applications, e-commerce, SEO et plus.
        </p>

        <span className="block text-blue font-bold text--sm xs:text-sm sm:text-xl lg:text-4xl" aria-hidden="true">
          <TypeAnimation
            sequence={[
              'Conception de site web',
              1000,
              "Applications web sur mesure",
              1000,
              'Applications mobiles',
              1000,
              'Développement frontend',
              1000,
              'Développement backend',
              1000,
              'Sites e-commerce',
              1000,
              'SEO-friendly',
              1000,
              'Optimisation de performance',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </span>
      </motion.div>
    </section>
  )
}

export default HeroSection

