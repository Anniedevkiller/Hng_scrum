import { Montserrat, Lato } from 'next/font/google';
import Link from 'next/link';
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


const data = [
    {
        img:"/images/home/icons/book.png", 
        title:"BUILD SCHOOLS",
        paragraph:"Erfahren Sie mehr über unsere Projekte undFinanzen im Jahr 2021 in unserem."
    },
    {
        img:"/images/home/icons/children.png", 
        title:"Save the children",
        paragraph:"Erfahren Sie mehr über unsere Projekte undFinanzen im Jahr 2021 in unserem."
    },
    {
        img:"/images/home/icons/home.png", 
        title:"PROVIDE HOMES",
        paragraph:"Erfahren Sie mehr über unsere Projekte undFinanzen im Jahr 2021 in unserem."
    },
    {
        img:"/images/home/icons/volunteer.png", 
        title:"VOLUNTEER",
        paragraph:"Erfahren Sie mehr über unsere Projekte undFinanzen im Jahr 2021 in unserem."
    },
    {
        img:"/images/home/icons/food.png", 
        title:"GIVE FOOD",
        paragraph:"Erfahren Sie mehr über unsere Projekte undFinanzen im Jahr 2021 in unserem."
    },
    {
        img:"/images/home/icons/water.png", 
        title:"BRING CLEAN WATER",
        paragraph:"Erfahren Sie mehr über unsere Projekte undFinanzen im Jahr 2021 in unserem."
    },
]

function Icon ({img, title, paragraph}:any){
    return(
        <div className='grid grid-cols-[auto,1fr] items-end gap-3'>
            <div className='p-5 h-[100px] w-[100px] xl_up:h-[140px] xl_up:w-[140px] xl_up:p-9 2xl_up:h-[140px] 2xl_up:w-[140px] 2xl_up:p-8 rounded-full bg-[#E8F1FF]'>
                <img className='w-full h-full object-contain' src={img}></img>
            </div>
            <div className='grid gap-1'>
                <h6 className='font-semibold text-[#363636] tracking-[-0.04em] text-lg xl_up:text-2xl'>{title}</h6>
                <p className={'text-base leading-[24px] xl_up:text-xl xl_up:leading-[28px] text-[#363636] xl_up:w-[80%] ' + lato}>{paragraph}</p>
            </div>
        </div>
    )
}

function IconSupport({header, paragraph, linkText, href}:any){
    return(
    <div className={montserrat + " grid gap-1 xl_up:pt-5"}>
        <h5 className="text-[#363636] font-bold text-lg xl_up:text-2xl 2xl_up:text-3xl tracking-tight ">{header}</h5>
        <p className='xl_up:text-lg text-sm'>{paragraph}</p>
        <Link className={'text-[#0B175B] text-base xl_up:text-xl 2xl_up:text-2xl font-semibold xl_up:font-semibold ' + montserrat} href={href}>{linkText}</Link>
    </div>)
}

export default function Support() {
  return (
    <section className={ "  " + montserrat}>
        <div className='flex w-full justify-end mb-8 '>
            <h1 className='text-2xl xl_up:text-5xl font-bold py-3 px-1 xl_up:py-5 xl_up:px-8 bg-[#10169F] text-white'>HOW YOU CAN SUPPORT US</h1>
        </div>
      
        <div className='grid px-5 xl_up:px-10 gap-14 xl_up:gap-20'>
            <div className='grid xl_up:grid-cols-2  gap-5 xl_up:gap-10'>
                <div className='grid gap-5 xl_up:gap-14'>
                   {
                   data.slice(0,3).map((icon, key)=>{return(
                        <Icon key={key} img={icon.img} title={icon.title} paragraph={icon.paragraph}  />
                    )})
                   }
                </div>
                <div>
                <IconSupport header={"Donate to children in need"} 
                    paragraph={"Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli...Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli...Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli...Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli...Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli..."} 
                    linkText={"Learn more"} href={"/"}
                />
                </div>
            </div>
            <div className='grid xl_up:grid-cols-2 gap-5 xl_up:gap-10   '>
                <div className='grid gap-5 xl_up:gap-14 xl_up:order-2'>
                   {
                    data.slice(3,6).map((icon, key)=>{return(
                        <Icon key={key} img={icon.img} title={icon.title} paragraph={icon.paragraph}  />
                    )})
                   }
                </div>
                <div className=' xl_up:order-1'>
                <IconSupport header={"Donate to children in need"} 
                    paragraph={"Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli...Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli...Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli...Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli...Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli..."} 
                    linkText={"Learn more"} href={"/"}
                />
                </div>
            </div>
        </div>
    </section>
  )
}
