"use client";
import { useRouter } from 'next/navigation';


import Image from "next/image";
import { motion } from "framer-motion";
import { servicesData } from "../data/servise";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Cards() {
  const router = useRouter()



  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center ">
        <h2 className="text-4xl font-bold mb-12 text-green-600 ">
          Our Services
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
         
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={service.id}  onClick={() => router.push(`/main/addToCart/${service.id}`)}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:shadow-green-200 transition duration-300 border border-gray-300 hover:border-green-500 cursor-pointer"
              >
                <div className="relative h-58 w-full">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
            
          ))}
        </Swiper>
      </div>
    </section>
  );
}