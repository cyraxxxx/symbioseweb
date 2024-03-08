"use client";
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
          {/* <h1 className="text-black-500 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold"> */}
          <h1 className="text-black-500 mb-4 text--sm xs:text-sm sm:text-xl lg:text-4xl font-extrabold">
            
            <TypeAnimation
              sequence={[
                "Conception de site web",
                1000,
                "Conception d'applications web",
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
          {/* <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div> */}
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default HeroSection;