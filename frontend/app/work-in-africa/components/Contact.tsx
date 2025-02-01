import Header from '@/shared/components/Header'
import React from 'react'

export default function Contact() {
  return (
    <div className='p-[5vw] py-14 xl_up:py-20 bg-[#0B175B] mt-14 xl_up:mt-24 '>
        <div className='text-white text-center mb-5 xl_up:mb-14'>
            <p className='2xl_up:text-3xl xl_up:text-2xl text-lg text-[#ffffff_70%] '>Contact Us</p>
            <Header className='mt-0'>Let's Get in Touch</Header>
        </div>
        <div className='grid gap-5 xl_up:flex xl_up:h-fit xl_up:gap-5'>
            <div className='xl_up:w-[40%] h-fit'>
                <img alt='hands-together' src='images/work-in-africa/hands.png' className='xl_up:object-cover xl_up:h-fit'></img>
            </div>
            <div className='xl_up:w-[60%] grid gap-y-5 h-fit'>
                <input className="outline-none bg-transparent p-[10px] xl_up:p-[15px] rounded-xl border-[2px] border-[#ffffff_35%] text-white placeholder:text-[#ffffff_60%]" 
                    name="name" 
                    placeholder="Enter Your Name"  
                />
                <input className="outline-none bg-transparent p-[10px] xl_up:p-[15px] rounded-xl border-[2px] border-[#ffffff_35%] text-white placeholder:text-[#ffffff_60%]" 
                    name="address" 
                    placeholder="Address"  
                />
                <input className="outline-none bg-transparent p-[10px] xl_up:p-[15px] rounded-xl border-[2px] border-[#ffffff_35%] text-white placeholder:text-[#ffffff_60%]" 
                    name="phone" 
                    placeholder="Phone Number"  
                />
                <input className="outline-none bg-transparent p-[10px] xl_up:p-[15px] rounded-xl border-[2px] border-[#ffffff_35%] text-white placeholder:text-[#ffffff_60%]" 
                    name="email" 
                    placeholder="Email Address"  
                />
                <div className='p-[10px] xl_up:p-[15px] rounded-xl border-[2px] border-[#ffffff_35%] text-white'>
                    <p className='2xl_up:text-2xl xl_up:text-xl text-base font-medium tracking-[-1.2px] border-[#ffffff_50%] border-b-[2px] mb-2'>Leave us a message</p>
                    <input placeholder='Please type your message here' className= 'outline-none w-full h-[100px]  bg-transparent placeholder:' ></input>
                </div>
                <button className='bg-[#830703] text-white h-[55px] '>Send Message</button>
            </div>

        </div>
    </div>
  )
}
