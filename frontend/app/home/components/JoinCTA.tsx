import { Roboto } from 'next/font/google';
import React from 'react'



const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

const roboto = roboto_init.className; 



export default function JoinCTA() {
  return (
    <section className={'relative text-white ' + roboto} >
        <div className='relative z-10 gradient-home py-14 px-3 grid gap-y-10 xl_up:grid-cols-2 xl_up:px-10'>
            <div className='relative'>
                <div className='absolute z-20 left-0 top-[25%] w-full grid gap-2 justify-center'>
                    <h1 className='text-3xl xl_up:text-5xl 2xl_up:text-6xl font-bold tracking-[-0.013em '>BECOME A PART OF MKE </h1>
                    <p className='text-lg xl_up:text-2xl 2xl_up:text-3xl tracking-[-0.013em] '>Come work with us to bring change to Nigeria and Africa at large </p>
                    <button className='bg-[#830703] w-[140px] h-[45px] xl_up:w-[220px] xl_up:h-[70px] rounded-lg  inline-flex justify-center items-center text-base xl_up:text-xl '>Join us</button>
                </div>
                <div className='relative w-[80%] mx-auto flex justify-center'>
                    <img src='images/home/africa.png'></img>
                </div>
            </div>
            <div className='w-[80%] mx-auto flex justify-center xl_up:justify-end xl_up:mr-0'>
                <img src='images/home/hands.png' className='object-contain'></img>
            </div>

        </div>
        <div className='absolute z-0 top-0 h-full w-full'>
            <img className='w-full h-full object-cover' src='/images/home/philosophy.png'></img>
        </div>
    </section>
  )
}
