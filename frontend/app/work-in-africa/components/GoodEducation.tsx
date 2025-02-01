import React from 'react'

export default function GoodEduction() {
  return (
    <div className='py-14 grid gap-10 relative xl_up:mb-[350px]'>
        <div className='grid gap-y-5 xl_up:grid-cols-2 items-start xl_up:justify-end'>
            <h1 className=' px-5 xl_up:px-32 xl_up:pr-0 2xl_up:text-7xl xl_up:text-6xl text-4xl font-bold tracking-[-1.2%] 2xl_up:leading-[96px] xl_up:leading-[86px] leading-[66px]'>
                EVERY AFRICAN CHILD DESERVES <span className='bg-[#0B175B] text-white'>GOOD EDUCATION</span>
            </h1>
            <img alt='children' src='./images/work-in-africa/children.png' className='w-[100%] h-[300px] xl_up:h-[680px] object-cover'></img>
        </div>
        <div className='grid gap-y-5 xl_up:grid-cols-2 xl_up:items-end xl_up:absolute xl_up:top-[380px] '>
            <img alt='hands together' src='./images/work-in-africa/hand-together.png' className='w-[100%] xl_up:pr-5 h-[300px] xl_up:h-[580px] object-cover order-last xl_up:order-first'></img>
            <div className='px-5 xl_up:pl-0'>
                <p className='text-[#8E0702] font-semibold 2xl_up:text-3xl xl_up:text-2xl text-lg'>Our vision</p>
                <p className='text-medium 2xl_up:text-4xl xl_up:text-3xl text-xl'>Our vision is to create a future where every child in Africa has equal access to quality education, unlocking their full potential and enabling them to thrive in a rapidly changing world.</p>
            </div>
        </div>
    </div>
  )
}
