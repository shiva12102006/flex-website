"use client";
import MySlider from '@/app/components/crosel';
import React from 'react'
import { motion } from "framer-motion";
import Cards from '../components/cards';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: "banner printing",
    desc: "Modern and scalable web applications using latest technologies.",
    img : "/home/banner.jpg"
  },
  {
    title: "poster printing",
    desc: "Cross-platform mobile apps with high performance.",
    img : "/home/poster.jpg"
  },
  {
    title: "t-shirt print ",
    desc: "Industry-level professional and responsive designs.",
    img : "/home/tshirt.jpg"
  },
  {
    title: "wedding cards",
    desc: "Secure and scalable cloud infrastructure solutions.",
    img : "/home/wedding.jpg"
  },
  {
    title: "Any event card",
    desc: "Smart AI powered automation for your business.",
    img : "/home/event.jpg"
  },
  {
    title: "visiting cards",
    desc: "Boost your brand visibility with modern strategies.",
    img : "/home/visiting.jpg"
  },
];

function Main() {
  return (
    <>


      {/* <MySlider /> */}
      <div className="relative overflow-hidden ">
        <div className="relative min-h-screen overflow-hidden">

          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/intro.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* HERO SECTION */}
          <section className="relative z-10 min-h-screen flex items-center justify-center text-white px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transforming Ideas Into Digital Reality
              </h1>

              <p className="text-lg md:text-xl mb-8">
                We build scalable, high-performance and industry-level solutions.
              </p>

              <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:scale-110 transition duration-300">
                Get Started
              </button>
            </motion.div>
          </section>

        </div>

        {/* ================= ABOUT COMPANY ================= */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
              <p className="text-gray-600 leading-relaxed">
                We are a technology-driven company delivering cutting-edge
                solutions across industries. Our focus is innovation,
                scalability, and performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <div className="h-80 bg-indigo-500 rounded-2xl shadow-2xl flex items-center justify-center text-white text-2xl font-bold">
                <Image src="/home/SHANVI.png" height={200} width={400} alt="com" className='  w-full'/>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Work On</h2>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border"
                >
                  <Image src={service.img} alt={service.title} width={400} height={300} className="rounded mb-4 object-cover bg-gray-200 border" />
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Cards/>

        {/* ================= CALL TO ACTION ================= */}
        <section className="py-20 bg-indigo-600 text-white text-center px-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            <Link href="/main/contact">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:scale-110 transition duration-300" 
            >
              Contact Us
            </button>
            </Link>
          </motion.div>
        </section>

      </div>



    </>

  )
}

export default Main;