import React from 'react'
import Header from '@/shared/components/Header'

export default function PartOfMke() {
  return (
    <div className='py-10 bg-[rgba(232,241,255,0.27)] border-[3px] border-[rgba(0,0,0,0.3)] rounded-3xl '>
        <div className='text-center px-5'>
            <Header>Become a Part of MKE</Header>
            <p className='text-[rgba(0,0,0,0.7)] 2xl_up:text-4xl xl_up:text-3xl text-xl font-medium 2xl_up:leading-[48px] xl_up:leading-[35px] leading-[25px]'>Create a brighter future for children in Africa.</p>
        </div>
        <div className='mt-10 grid gap-y-10 xl_up:grid-cols-2 xl_up:px-20'>
            <div className='w-full'>
                <img className='object-cover w-full max-h-[600px] xl_up:max-h-[100%] xl_up:h-[100%] ' src='images/work-in-africa/becomePart.png'></img>
            </div>
            <div className='grid px-5 gap-y-3'>
                <div className='grid gap-y-3 md_up:grid-cols-2 gap-x-5'>
                    <div className='border-[2px] p-3 rounded-2xl bg-[rgba(255,255,255,0.52)] '>
                        <p className='2xl_up:text-5xl xl_up:text-4xl text-2xl font-semibold text-[rgba(4,4,69,1)] 2xl_up:leading-[50px] xl_up:leading-[40px] leading-[30px]'>Join as a Member</p>
                        <p className='2xl_up:text-2xl xl_up:text-xl text-base text-[rgba(17,17,17,1)]'>By becoming a member, you will join a dedicated team of individuals working towards a common goal – creating a brighter future for Africa. Join us today and be a driving force in empowering Africa through education.</p>
                    </div>
                    <div className='border-[2px] p-3 rounded-2xl bg-[rgba(255,255,255,0.52)] '>
                        <p className='2xl_up:text-5xl xl_up:text-4xl text-2xl font-semibold text-[rgba(4,4,69,1)] 2xl_up:leading-[50px] xl_up:leading-[40px] leading-[30px]'>Corporate Membership</p>
                        <p className='2xl_up:text-2xl xl_up:text-xl text-base text-[rgba(17,17,17,1)]'>Is your company or workplace looking for meaningful ways to give back and make a lasting impact? Partner with us and together we can empower African communities through education and create a safe place for African children.</p>
                    </div>
                </div>
                <div className='border-[2px] p-3 rounded-2xl bg-[rgba(255,255,255,0.52)] '>
                    <p className='2xl_up:text-5xl xl_up:text-4xl text-2xl font-semibold text-[rgba(4,4,69,1)] 2xl_up:leading-[50px] xl_up:leading-[40px] leading-[30px]'>Fundraise for Us</p>
                    <p className='2xl_up:text-2xl xl_up:text-xl text-base text-[rgba(17,17,17,1)]'>Are you passionate about creating positive change and making a direct impact on the lives of others? Fundraise for us and be part of a transformative journey in empowering African communities through education. By dedicating your time, skills, and energy, you can contribute to bridging the educational gap, mentoring children, assisting with school infrastructure projects, or supporting teacher training initiatives.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
