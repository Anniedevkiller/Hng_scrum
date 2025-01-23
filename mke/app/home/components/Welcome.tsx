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
        <h1 className ={ 'ml-3 md_up:ml-10 xl_up:w-[70%] text-3xl xl_up:mb-3 xl_up:ml-20  font-semibold text-black ' + montserrat}>Welcome to Monika Kindergarten Förderverein e.V</h1>
        <div className='flex flex-col xl_up:flex-row gap-y-8 '>
            <div className='xl_up:w-[50%] mx-3 md_up:mx-10 xl_up:mr-5 xl_up:ml-20'>
                <p className={"text-lg xl_up:text-2xl 2xl_up:text-3xl font-normal " + montserrat}>where we are dedicated to making a meaningful difference through the Street Child Project. Our goal is to give 1,000 street children each year the opportunity to build a brighter future by providing access to education, covering their school fees, and offering essential skills training. Together, we can create a lasting impact and bring hope to those who need it most</p>
            </div>
            <div className='xl_up:w-[50%] xl_up:mr-20'>
                <img className='h-[360px] w-full xl_up:h-[300px] object-cover' src='images/home/welcome.png'></img>
            </div>
        </div>
    </section>
  )
}
