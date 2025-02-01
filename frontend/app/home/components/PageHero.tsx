import React from 'react'
import { Roboto } from 'next/font/google';

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});


export default function PageHero() {
  return (
    <section className="relative  w-full overflow-hidden">
        
        <img alt='herosection' className='absolute h-full w-full object-cover z-0 top-0 left-0' src='images/home/herosection.png'></img>
        
        <div className='px-5 sm_up:px-[10%] grid pt-[160px] pb-[70px] xl_up:pt-[240px] z-10 h-full relative bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0.5))]'>
            <div className='md_up:w-[70%] xl_up:w-[60%] 2xl_up:w-[50%]'>
              <h1  className={' font-bold text-4xl leading-[50px] md_up:text-5xl md_up:leading-[60px] xl_up:text-6xl xl_up:leading-[70px] 2xl_up:text-7xl 2xl_up:leading-[97px]  text-black tracking-[-0.012em] '+ roboto_init.className}>
                <span className='banner'>CREATE A BETTER</span> 
                <br/>
                PLACE FOR CHILDREN 
                <br/>
                <span className='banner'>IN NEED</span>
              </h1>
              <p className={' text-black my-3 text-xl md_up:text-2xl xl_up:text-3xl 2xl_up:text-4xl font-normal 2xl_up:font-normal ' + roboto_init.className}><span className='font-bold '>MKE</span> is providing a safe place for children, <br/> you too can also lend a helping hand to better the life of a child </p>
              <button className={roboto_init.className + ' bg-[#0A0B5C] w-[160px] h-[48px] text-[#FFFCFC]  rounded-lg xl_up:h-[68px] xl_up:w-[227px] font-semibold text-base md_up:text-lg xl_up:text-xl 2xl_up:text-2xl'}>DONATE NOW</button>
            </div>
        </div>
    </section>
  )
}
