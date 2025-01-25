import { Roboto } from 'next/font/google';
import React from 'react'

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

const roboto = roboto_init.className; 


export default function Newsletter() {
  return (
    <section className={roboto + " bg-[#F3F4F8]"} >
        <div className='text-center pt-14 pb-10 px-3'>
            <h6 className='mb-8 tracking-[-0.013em] text-[#52748E] font-bold text-lg xl_up:text-2xl 2xl_up:text-3xl'>Join our community to stay connected. Be among the first to hear about our projects and work.</h6>
            <form>
                <div className='mb-5'>
                    <input className=' p-[0px_10px_3px] text bg-[#F3F4F8] outline-none border-b-[1px] border-b-[#737373] placeholder:text-center ' placeholder='Your Email Address' />
                </div>
                <button className='border-[#DD424C] xl_up:text-lg 2xl_up:text-xl border-[1px] text-[#DD424C] h-[50px] w-[220px] xl_up:h-[64px] xl_up:w-[242px] inline-flex justify-center items-center '><span>Subscribe Now</span></button>
            </form>
        </div>
    </section>
  )
}
