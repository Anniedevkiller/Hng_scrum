import Link from 'next/link'
import React from 'react'
import { Instagram, Linkedin, X } from './Icon'
import LazyImage from '@/shared/components/LazyImage'

interface Prop{
    img:string,
    name:string,
    role:string,
    social: {instagram:string, x:string, linkedin:string},
    paragraph:string
}

function Card({img, name, role, social, paragraph}:Prop){
    return(
        <div className='bg-blue-300 rounded-2xl p-[56px_40px] '>
            <LazyImage src={img} className='h-[420px] rounded-xl object-cover'/>
            <div className='flex mt-3 justify-between items-end'>
                <div className='grid gap-3'>
                    <p className='text-blue-100 text text-3xl 2xl:text-2xl md:text-lg font-bold'>{name}</p>
                    <p className='text-[#FFFCFC] text-2xl 2xl:text-xl md:text-base font-extralight'>{role}</p>
                </div>
                <div className='flex gap-2'>
                    <Link href={social.instagram} className=''>
                        <Instagram />
                    </Link>
                    <Link href={social.x} className=''>
                        <X />
                    </Link>
                    <Link href={social.linkedin} className=''>
                        <Linkedin />
                    </Link>
                </div>
            </div>
            <hr className='border-[1px] border-[#0C0EFF] my-5'></hr>
            <p className='text-[#FFFCFC] sm:text-base xl:text-lg text-xl'>{paragraph}</p>
        </div>
    )
}

export default function Director() {
  return (
    <div className='about-container'>
        <p className='text-blue-900 font-semibold mt-8 text-3xl 2xl:text-2xl md:text-lg mb-3'>BOARD OF DIRECTORS</p>
        <div className='grid grid-cols-2 gap-x-3 gap-y-6'>
            <Card
                name='Mark'
                role='Chief'
                social={{x:"", instagram:"", linkedin:""}}
                img='images/about/mark.webp'
                paragraph='Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli. Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convallLorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli. Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convall'
            />
            <Card
                name='Mark'
                role='Chief'
                social={{x:"", instagram:"", linkedin:""}}
                img='images/about/mark.webp'
                paragraph='Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli. Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convallLorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli. Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convall'
            />
            <Card
                name='Mark'
                role='Chief'
                social={{x:"", instagram:"", linkedin:""}}
                img='images/about/mark.webp'
                paragraph='Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli. Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convallLorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli. Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convall'
            />
            <Card
                name='Mark'
                role='Chief'
                social={{x:"", instagram:"", linkedin:""}}
                img='images/about/mark.webp'
                paragraph='Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli. Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convallLorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli. Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convall'
            />
        </div>
    </div>
  )
}
