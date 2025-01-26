"use client"


import Page1 from "./Payment/Page1"
import Page2 from "./Payment/Page2"

import { Roboto } from 'next/font/google';
import React, { useState } from 'react'

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

const roboto = roboto_init.className

function TrackerIcon({number, page, setPage}:any){
    return(
        <div onClick={()=>{setPage(number)}} className={ page && "bg-[#0C0EFF] border-0 text-white " + " w-[60px] h-[60px] text-xl xl_up:text-3xl 2xl_up:text-4xl flex justify-center items-center rounded-full bg-[#D5E4FF] border-[#0A0B5C] text-[#0F0E0E] border-[1px] font-bold"}>
            <p>{number}</p>
        </div>
    )
}

function PageTracker({page, setPage}:any){
    return(
        <div className="flex justify-center w-full gap-x-5 mb-7 ">
            <TrackerIcon number={1} page={page} setPage={setPage}/>
            <TrackerIcon number={2} page={page} setPage={setPage}/>
            <TrackerIcon number={3} page={page} setPage={setPage}/>
        </div>
    )
}

export default function PaymentCard() {
    const [page, setPage] = useState(1)
  return (
    <div className={" bg-[#F5F9FF99] backdrop-blur-[8px]  min-h-[400px] px-5 xl_up:px-[3%] xl_up:w-[50%] mr-[10%] max-w-[776px] py-10 text-center " + roboto}>
        <PageTracker page={page} setPage={setPage}/>
        <Page1 />
    </div>
  )
}
