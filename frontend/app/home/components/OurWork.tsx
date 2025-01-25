import { Montserrat, Roboto } from 'next/font/google';
import React from 'react'


const montserrat_init = Montserrat({
  subsets:["latin"],
  weight: ["400", "500", "600", "700"]
})

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

const montserrat = montserrat_init.className;
const roboto = roboto_init.className; 

function Card ({img, title, paragraph}:any){
  return(
    <div className='rounded-[12px] p-[22px_26px]  bg-[rgba(232,241,255,0.2)] grid gap-5 max-w-[380px] '>
      <div>
        <img className='w-full' src={img}></img>
      </div>
      <div className='grid gap-1'>
        <h6 className={ roboto + " font-bold text-lg xl_up:text-2xl tracking-[-0.013em] leading-[22px] text-[#333333] "} >{title}</h6>
        <p className={montserrat + " font-normal xl_up:text-lg text-sm leading-[18px] "} >{paragraph}</p>
      </div>
    </div>
  )
}

const data = Array(3).fill({
  img:"/images/home/ourWorks.png",
  title:"Wheel chairs for Akwa Ibom state with DEMECA",
  paragraph:"Partnering with DEMECA, we have been able to donate over 500 wheelchairs to support the physically challenged in Akwa Ibom, a State in the South-South region of Nigeria."
})

export default function OurWork() {
  return (
    <section className=''>
      <div className='flex flex-col xl_up:flex-row xl_up:justify-between xl_up:items-center gap-8 xl_up:mb-16'>
        <div className='w-fit  bg-[#10169F] text-white py-5 px-3 xl_up:px-20'>
          <h1 className={'w-full text-2xl font-bold xl_up:text-4xl 2xl_up:text-5xl' + montserrat}>OUR WORK IN AFRICA </h1>
        </div>
        <div className='w-full xl_up:w-fit flex justify-end px-3'>
          <a className={'text-base xl_up:text-2xl 2xl_up:text-3xl ml-auto align-middle home-arrow relative font-[500] text-[#830703] ' + montserrat}>See all</a>
        </div>
      </div>

      <div className='flex flex-wrap gap-8 px-3 mt-2 justify-center'>
        {
         data.map((info, key)=>{
          return <Card key={key} title={info.title} img={info.img} paragraph={info.paragraph} />
         })
        }
      </div>
    </section>
  )
}
