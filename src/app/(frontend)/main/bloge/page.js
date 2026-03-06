"use client";

import { motion } from "framer-motion";
import Image from "next/image";



export default function Bloge() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="relative h-[300px] flex items-center justify-center text-center">
        <Image
          src="/Bloge/bloge1.jpg"
          alt="blog banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-white text-4xl md:text-5xl font-bold"
        >
          Our Printing Blog
        </motion.h1>
      </section>

      {/* WHO I AM */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/About/employ.jpg"
            alt="author"
            width={500}
            height={400}
            className="rounded-2xl object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Who I Am</h2>
          <p className="text-gray-600 leading-relaxed">
            Hi, I run a printing and design service where we create banners,
            posters, vinyl prints and promotional materials for businesses.
            Through this blog I share design ideas, printing tips and marketing
            strategies that help businesses attract more customers.
          </p>
        </motion.div>
      </section>

      {/* BANNER BLOGS */}
      <section className="max-w-6xl mx-auto px-6 py-12 ">
        <h2 className="text-3xl font-bold mb-10 text-center">Banner Printing Blogs</h2>
        </section>

        

      {/* POSTER BLOGS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-10 text-center">Poster Design Blogs</h2>

        

      </section>

    </div>
  );
}
