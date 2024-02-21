import React from 'react'
import { Carousel } from 'flowbite-react';
import Img1 from '../images/carousal_images/img1.jpg'
import Img2 from '../images/carousal_images/img2.jpg'
import Img3 from '../images/carousal_images/img3.jpg'
import Img4 from '../images/carousal_images/img4.jpg'
import Img5 from '../images/carousal_images/img5.jpg'
import MImg1 from '../images/mobile-carousal_images/img1.jpg'
import MImg2 from '../images/mobile-carousal_images/img2.jpg'
import MImg3 from '../images/mobile-carousal_images/img3.jpg'

const Carouseel = () => {
  return (
    <div>
        <div className="hidden lg:block self-center lg:h-[80vh] ">
        <Carousel slideInterval={5000} className='relative'>
            <img src={Img1} className='w-screen  h-screen ' alt="..." />
            <img src={Img2} className='w-screen  h-screen '  alt="..." />
            <img src={Img3} className='w-screen  h-screen ' alt="..." />
            <img src={Img4} className='w-screen  h-screen ' alt="..." />
            <img src={Img5} className='w-screen  h-screen ' alt="..." />
        </Carousel>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-white font-mainFont font-[600] text-[3rem] text-center tracking-wide">Search Your One From Thousands of</h1>
                <h1 className="text-[#297fff] font-mainFont font-[600] text-[3rem] text-center mb-7 tracking-wide">Games</h1>
                <div className='min-w-[20vw] min-h-[5vh] bg-white rounded-full'></div>
                <h1 className='text-white text-[1.2rem] font-mainFont mt-3 font-extralight text-center tracking-widest	'>Ignite Your Imagination, Conquer Your Dreams</h1>
            </div>
        </div>

        <div className="block h-[80vh] lg:hidden self-center  ">
        <Carousel slideInterval={5000} className='relative'>
            <img src={MImg1} className='w-screen  h-screen  ' alt="..." />
            <img src={MImg2} className='w-screen  h-screen  '  alt="..." />
            <img src={MImg3} className='w-screen  h-screen ' alt="..." />
            {/* <img src={MImg4} className='w-screen  h-screen ' alt="..." />
            <img src={MImg5} className='w-screen  h-screen ' alt="..." /> */}
        </Carousel>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <h1 className="text-white font-mainFont font-[600] text-[2rem] w-[90vw] text-center tracking-wide">Search Your One From Thousands of</h1>
                <h1 className="text-[#297fff] font-mainFont font-[600] text-[2rem] text-center mb-4 tracking-wide">Games</h1>
                <div className='min-w-[70vw] max-w-[20vw] min-h-[3vh] max-h-[3vh] bg-white rounded-full mx-auto'></div>
                <h1 className='text-white text-[0.8rem] font-mainFont mt-3 font-extralight text-center tracking-widest	'>Ignite Your Imagination, Conquer Your Dreams</h1>
            </div>
        </div>
    </div>
  )
}

export default Carouseel