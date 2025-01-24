import { Montserrat, Lato } from 'next/font/google';
import React from 'react'


const montserrat_init = Montserrat({
  subsets:["latin"],
  weight: ["400", "500", "600", "700"]
})

const lato_init = Lato({
  subsets: ["latin"],
  weight: ["400", "700"]
});

const montserrat = montserrat_init.className;
const lato = lato_init.className; 

function Icon ({img, title, paragraph}:any){
    return(
        <div className='grid grid-cols-[auto,1fr] items-end gap-3'>
            <div className='p-4 h-[70px] w-[70px] rounded-full bg-[#E8F1FF]'>
                <img className='w-full h-full' src={img}></img>
            </div>
            <div className='grid gap-1 '>
                <h6 className='font-semibold text-[#363636] tracking-[-0.04em] text-lg xl_up:text-2xl'>{title}</h6>
                <p className={'text-base leading-[24px] xl_up:text-xl xl_up:leading-[28px] text-[#363636] ' + lato}>{paragraph}</p>
            </div>
        </div>
    )
}

export default function Support() {
  return (
    <section className={ "  " + montserrat}>
        <div className='flex w-full justify-end mb-8'>
            <h1 className='text-2xl xl_up:text-5xl font-bold py-3 px-1 xl_up:py-5 xl_up:px-8 bg-[#10169F] text-white'>HOW YOU CAN SUPPORT US</h1>
        </div>
      
        <div className='grid px-3'>
            <div className='flex flex-col xl_up:flex-row'>
                <div className='grid gap-5'>
                   {
                    Array(3).fill({
                        img:"/images/home/icons/book.png", 
                        title:"BUILD SCHOOLS",
                        paragraph:"Erfahren Sie mehr über unsere Projekte undFinanzen im Jahr 2021 in unserem."
                    }).map((icon, key)=>{return(
                        <Icon key={key} img={icon.img} title={icon.title} paragraph={icon.paragraph}  />
                    )})
                   }
                </div>
                <div>
                   
                </div>
            </div>
            <div className='second'>

            </div>
        </div>
    </section>
  )
}
