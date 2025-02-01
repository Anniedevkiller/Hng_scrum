import { Montserrat, Roboto } from 'next/font/google';
import React from 'react'



const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

const roboto = roboto_init.className; 



export default function OurPhilosophy() {
  return (
    <section className={'text-center relative text-white ' + roboto} >
        <div className='relative z-10 gradient-home py-10 px-3 '>
            <div className='mb-5 md_up:w-[90%] mx-auto'>
                <h1 className='text-3xl font-bold leading-[70px] mb-1'>OUR PHILOSOPHY</h1>
                <p className='leading-[17px] text-lg'>“To see more African children have access to quality education and a better life”</p>

            </div>
            <div className='text-sm leading-[20px] grid gap-3 md_up:w-[70%] mx-auto'>
                <p>At Monika Kindergarten Förderverein, our mission is to actively pursue and champion education for African children, empowering them with the knowledge, skills, and opportunities they need to create a brighter future for themselves, their communities, and the continent as a whole.</p>
                <p>We believe that education is a fundamental right and a powerful catalyst for transformation. Recognizing the unique challenges faced by African children, including poverty, limited access to quality education, and socio-economic disparities, we are committed to breaking down these barriers and ensuring that every child in Africa has equal opportunities to learn and grow.</p>
            </div>
        </div>
        <div className='absolute z-0 top-0 h-full w-full'>
            <img alt='philosophy' className='w-full h-full object-cover' src='/images/home/philosophy.png'></img>
        </div>
    </section>
  )
}
