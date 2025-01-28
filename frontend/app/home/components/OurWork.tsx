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
    <div className='rounded-[12px] p-[22px_26px]  bg-[rgba(232,241,255,0.2)] grid gap-5 max-w-[380px] xl_up:w-[30%] xl_up:max-w-[534px] '>
      <div>
        <img className='w-full' src={img}></img>
      </div>
      <div className='grid gap-2'>
        <h6 className={ roboto + " 2xl:font-bold 2xl_up:font-bold text-lg md_up:text-xl xl_up:text-2xl 2xl_up:text-3xl tracking-[-0.013em] leading-[22px] text-[#333333] "} >{title}</h6>
        <p className={montserrat + " font-normal md_up:text-base xl_up:text-lg 2xl_up:text-xl text-sm leading-[18px] "} >{paragraph}</p>
      </div>
    </div>
  )
}

const data = [
  {
    img:"images/home/ourWorks.png",
    title:"Wheel chairs for Akwa Ibom state with DEMECA",
    paragraph:"Partnering with DEMECA, we have been able to donate over 500 wheelchairs to support the physically challenged in Akwa Ibom, a State in the South-South region of Nigeria."
  },
  {
    img:"images/home/wia-donation.png",
    title:"Donation of school blocks to partner schools in Nigeria.",
    paragraph:"Thanks for your support. We were able to provide St. Paul Secondary School and the Monika Kindergarten and Elementary School new classroom blocks and other learning facilities."
  },
  {
    img:"images/home/wia-school-project.png",
    title:"The Usaka Evening School Project",
    paragraph:"With your support we have taken education to children in Usaka, community in the South-South Region of Nigeria where children have no access to adequate schools, good roads and clean water."
  },
]


export default function OurWork() {
  return (
    <section className=''>
      <div className='flex flex-col xl_up:flex-row xl_up:justify-between xl_up:items-center gap-8 xl_up:mb-16'>
        <div className='w-fit  bg-[#10169F] text-white py-5 px-5 md_up:px-10 xl_up:px-20'>
          <h1 className={'w-full text-2xl font-bold  md_up:text-3xl xl_up:text-4xl 2xl_up:text-5xl ' + montserrat}>OUR WORK IN AFRICA </h1>
        </div>
        <div className='w-full xl_up:w-fit flex justify-end px-3 md_up:px-10 xl_up:px-20'>
          <a className={'text-lg md_up:text-xl xl_up:text-2xl 2xl_up:text-3xl ml-auto align-middle home-arrow relative font-medium md_up:font-medium text-[#830703] ' + montserrat}>See all</a>
        </div>
      </div>

      <div className='flex flex-wrap gap-8 px-5 md_up:px-10 xl_up:px-20 mt-2 justify-center'>
        {
         data.map((info, key)=>{
          return <Card key={key} title={info.title} img={info.img} paragraph={info.paragraph} />
         })
        }
      </div>
    </section>
  )
}
