"use client";

import React from 'react'
import Image from 'next/image'
import interior1 from '../../../public/images/app/interior/interior1.png'
import interior2 from '../../../public/images/app/interior/interior2.png'
import interior3 from '../../../public/images/app/interior/interior3.png'
import { Headline } from './common_components'
import { useStateContext } from '@/context/StateContext'
import { client } from '../../../sanity/lib/client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';



const Interior = () => {
  const {interiors, setInteriors} = useStateContext()
  React.useEffect(() => {
    const query = `*[_type == "interior"] {
      img
    }`

    client
      .fetch(query)
      .then(data => {
          setInteriors(data)
          console.log(data)
      })
      .catch(error => console.error(error))
  }, [])
  return (
    <div className='my-20 px-16'>
        <div className='bg-white rounded-[25px] shadow-lg py-5'>
            <Headline text={"INTERIOR DESIGNS"} />
            <Swiper
            className='my-10'
            spaceBetween={10}
            slidesPerView={window.innerWidth <= 600 ? 1 : 3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide><Image className="h-[300px]" src={interior1} alt="Interior 1" width="450" height="300" /></SwiperSlide>
                <SwiperSlide><Image className="h-[300px]" src={interior2} alt="Interior 1" width="450" height="300" /></SwiperSlide>
                <SwiperSlide><Image className="h-[300px]" src={interior3} alt="Interior 1" width="450" height="300" /></SwiperSlide>
                <SwiperSlide><Image className="h-[300px]" src={interior1} alt="Interior 1" width="450" height="300" /></SwiperSlide>
                <SwiperSlide><Image className="h-[300px]" src={interior1} alt="Interior 1" width="450" height="300" /></SwiperSlide>
            </Swiper>
            <div className='md:mt-20 mt-10'>
                <p className='md:px-32 px-5 poppins text-[#0B0B0B] text-center '>As you step indoors, a realm unfurls where tradition converges with innovation, marrying hand-carved embellishments seamlessly with modern conveniences.</p>
            </div>
        </div>
    </div>
  )
}

export default Interior