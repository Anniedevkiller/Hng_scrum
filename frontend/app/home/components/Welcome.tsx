import { Montserrat } from 'next/font/google';
import React from 'react'

const montserrat_init = Montserrat({
  subsets:["latin"],
  weight: ["400", "600", "700"]
}) 

export const montserrat = montserrat_init.className;

export default function Welcome() {
  return (
    <section className=''>
      <div className='grid justify-center'>
        <h1 className ={ 'mx-5 sm_up:mx-7 md_up:mx-10  xl_up:mb-3 xl_up:w-[70%] text-3xl md_up:text-4xl xl_up:text-5xl 2xl_up:text-6xlfont-semibold text-black ' + montserrat}>Welcome to Monika Kindergarten Förderverein e.V</h1>
        <div className='flex flex-col xl_up:flex-row gap-y-8 xl_up:justify-center '>
            <div className='xl_up:w-[50%] xl_up:max-w-[846px] mx-5 md_up:mx-10 sm_up:mx-7'>
                <p className={"text-xl md_up:text-2xl xl_up:text-3xl 2xl_up:text-4xl font-normal xl_up:font-normal " + montserrat}>where we are dedicated to making a meaningful difference through the Street Child Project. Our goal is to give 1,000 street children each year the opportunity to build a brighter future by providing access to education, covering their school fees, and offering essential skills training. Together, we can create a lasting impact and bring hope to those who need it most</p>
            </div>
            <div className='xl_up:w-[50%] xl_up:max-w-[846px]'>
                <img alt='welcome' className='h-[360px] w-full xl_up:h-[350px] 2xl_up:h-[400px] xl_up:max-w-[846px] object-cover' src='images/home/welcome.png'></img>
            </div>
        </div>
      </div>
    </section>
  )
}
