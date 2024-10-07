'use client'

import { PeoplesTestimonials } from "@/data/dataInformationsSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/swiper-bundle.css'; 
import { FaUser } from "react-icons/fa";

interface TestimonialProps {
    peoplesTestimonials: typeof PeoplesTestimonials;
}

export function TestimonialsSlide({ peoplesTestimonials }: TestimonialProps) {
    return (
        <Swiper
            modules={[Pagination]} 
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20, 
                    pagination: {
                        clickable: true,
                    },
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30, 
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40, 
                },
            }}
            loop={true}
        >
            {peoplesTestimonials.map((item, index) => (
                <SwiperSlide key={index} className="bg-gradient-to-r from-black to-[#102032] p-20 rounded-[45px] w-full h-full neon-border">
                        <FaUser size={30} className="text-white mb-6" />
                        <h3 className="h6 text-white font-medium mb-4">{item.nameAndVocation}</h3>
                        <p className="text-white font-light">{item.testimonial}</p>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
