
"use client";

import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <>
            <div className=" w-full h-64 bg-[url(/About/hero.png)] mt-2">
                <h1 className=" text-6xl text-white mx-auto items-center p-20 text-extrabold"> About Us</h1>


            </div>

           <section className="py-20 px-6 bg-gray-50 overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image Section */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/About/employ.jpg"
            alt="Company"
            width={500}
            height={400}
            className="rounded shadow-2xl object-cover bg-gray-200 border"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-indigo-600 mb-6">
            Who We Are
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            At <span className="font-semibold">Your Company Name</span>, 
            we bring ideas to life through high-quality printing solutions.
            From eye-catching banners and posters to customized t-shirts and 
            elegant wedding cards, we help individuals and businesses turn 
            their vision into reality.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg mt-4">
            With a strong focus on creativity, precision, and customer 
            satisfaction, we deliver products that not only look great 
            but also leave a lasting impression.
          </p>
        </motion.div>

      </div>

    </section>


            <div className=" grid-cols-4 flex justify-center items-center py-16 bg-gray-100">
                <div className="flex justify-center items-center py-16 bg-gray-100 m-5">

                    <div className="bg-white shadow-xl rounded-2xl p-8 max-w-sm w-full text-center hover:shadow-2xl hover:shadow-green-300 transition duration-300 border-green-300 border-2">

                        {/* Owner Image */}
                        <div className="flex justify-center">
                            <Image
                                src="/About/shiva.png"
                                alt="Owner"
                                width={160}
                                height={160}
                                className="rounded-full border-2 border-green-600 object-cover"
                            />
                        </div>

                        {/* Name */}
                        <h2 className="text-2xl font-bold mt-6">Mangesh mama</h2>

                        {/* Status */}
                        <p className="text-indigo-600 font-medium mt-2">
                            Founder & Owner
                        </p>

                        {/* Short Bio (optional but professional) */}
                        <p className="text-gray-600 text-sm mt-4">
                            Passionate entrepreneur with a vision to deliver high-quality
                            printing solutions and creative branding services.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex justify-center gap-4 mt-6">
                            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                                <Twitter size={20} />
                            </a>
                        </div>

                    </div>

                </div>

                <div className="flex justify-center items-center py-16 bg-gray-100 m-5">

                    <div className="bg-white shadow-xl rounded-2xl p-8 max-w-sm w-full text-center hover:shadow-2xl transition duration-300">

                        {/* Owner Image */}
                        <div className="flex justify-center">
                            <Image
                                src="/About/shiva.png"
                                alt="Owner"
                                width={160}
                                height={160}
                                className="rounded-full border-4 border-indigo-600 object-cover"
                            />
                        </div>

                        {/* Name */}
                        <h2 className="text-2xl font-bold mt-6">Mangesh mama</h2>

                        {/* Status */}
                        <p className="text-indigo-600 font-medium mt-2">
                            Founder & Owner
                        </p>

                        {/* Short Bio (optional but professional) */}
                        <p className="text-gray-600 text-sm mt-4">
                            Passionate entrepreneur with a vision to deliver high-quality
                            printing solutions and creative branding services.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex justify-center gap-4 mt-6">
                            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                                <Twitter size={20} />
                            </a>
                        </div>

                    </div>

                </div>

                <div className="flex justify-center items-center py-16 bg-gray-100 m-5">

                    <div className="bg-white shadow-xl rounded-2xl p-8 max-w-sm w-full text-center hover:shadow-2xl transition duration-300">

                        {/* Owner Image */}
                        <div className="flex justify-center">
                            <Image
                                src="/About/shiva.png"
                                alt="Owner"
                                width={160}
                                height={160}
                                className="rounded-full border-4 border-indigo-600 object-cover"
                            />
                        </div>

                        {/* Name */}
                        <h2 className="text-2xl font-bold mt-6">Shiva ji</h2>

                        {/* Status */}
                        <p className="text-indigo-600 font-medium mt-2">
                            Founder & Owner
                        </p>

                        {/* Short Bio (optional but professional) */}
                        <p className="text-gray-600 text-sm mt-4">
                            Passionate entrepreneur with a vision to deliver high-quality
                            printing solutions and creative branding services.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex justify-center gap-4 mt-6">
                            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                                <Twitter size={20} />
                            </a>
                        </div>

                    </div>

                </div>
                



            </div>












        </>
    );
}