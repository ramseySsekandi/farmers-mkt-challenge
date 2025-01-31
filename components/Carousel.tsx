'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// modules
import  { Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image';
import Link from "next/link";
import { SkipForward } from "lucide-react";

import React from 'react'

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{clickable:true}}
      scrollbar={{draggable: true}}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      className='w-[100%] h-[100svh] flex justify-center items-center'
      loop={true}
      modules={[Pagination, Navigation]}
    >
      <SwiperSlide className='w-full h-full'>
        <div className="p-8 w-full h-[70%] flex justify-center items-center">
          <Image src='/tractor.svg' className='object-contain w-full h-full' width={100} height={200} alt='hi'/>
        </div>
        <h2 className="text-2xl font-bold text-center">Agri Rental</h2>
        <p className='text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Blanditiis nobis vitae porro officia saepe unde illo ullam quis,
          dolores nesciunt.
        </p>
        </SwiperSlide>
      <SwiperSlide className='w-full h-full'>
        <div className="p-8 w-full h-[70%] flex justify-center items-center">
          <Image src='/farmer-mkt.svg' className='object-contain w-full h-full' width={100} height={200} alt='hi'/>
        </div>
        <h2 className="text-2xl font-bold text-center">Farmers Market</h2>
        <p className='text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Blanditiis nobis vitae porro officia saepe unde illo ullam quis,
          dolores nesciunt.
        </p>
        </SwiperSlide>
      <SwiperSlide className='p-8 w-full h-full'>
        <div className="w-full h-[70%] flex justify-center items-center bg-lime-400">
          <Image src='/ai-disease.svg' className='object-cover w-full h-full' width={100} height={200} alt='hi'/>
        </div>
        <h2 className="text-2xl font-bold text-center">AI Disease Detection</h2>
        <p className='text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Blanditiis nobis vitae porro officia saepe unde illo ullam quis,
          dolores nesciunt.
        </p>
        <div className="relative">
        <Link href='/homepage'><button className="absolute bottom-[-100px] right-[-24] border-blue-500 border px-10 py-2 rounded-3xl text-blue-500 flex gap-1">Skip <SkipForward /></button></Link>
        
        </div>

        </SwiperSlide>
    </Swiper>
  )
}

export default Carousel