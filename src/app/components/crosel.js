"use client"
import{Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";
import {Autoplay} from "swiper/modules";
import Image from "next/image";

export default function MySlider(){
    return(
        <>
        <div className="w-full"> 
         <Swiper
        modules={[Autoplay]}
        autoplay={{ delay:2000}}
        loop={true}>
            <SwiperSlide>
                <Image src="/sanvi/banner2.jpg" alt="banner" width={800} height={500} className="w-full h-[500px] object-cover m-auto "  />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/sanvi/banner1.jpg" alt="banner" width={800} height={500} className="w-full h-[500px] object-cover m-auto " />
            </SwiperSlide>
             



        </Swiper>
        </div>
        </>
       


    );
}