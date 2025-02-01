"use client"

import Header from "@/shared/components/Header"
import { useState } from "react"


export default function VolunteerForm() {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")
    const [work, setWork] = useState(false)
    const [volunteer, setVolunteer] = useState(false)

    return (
        <form>
            <Header className={"text-center px-5 pt-5 pb-8"} >Fill the form</Header>
            <div className="w-[90vw] sm_up:w-[8-vw] md_up:w-[70vw] lg_up:w-[60vw] xl_up:w-[50vw] 2xl_up:w-[40vw]  grid gap-4 mx-auto">
                <input className="outline-none p-[10px] xl_up:p-[15px] rounded-xl border-[2px] border-[#000000_50%] placeholder:text-[#000000_50%]" name="name" placeholder="Enter Your Name" value={name} onChange={(event)=>{setName(event.target.value)}}></input>
                <input className="outline-none p-[10px] xl_up:p-[15px] rounded-xl border-[2px] border-[#000000_50%] placeholder:text-[#000000_50%]" name="address" placeholder="Address" value={address} onChange={(event)=>setAddress(event.target.value)} />
                <input className="outline-none p-[10px] xl_up:p-[15px] rounded-xl border-[2px] border-[#000000_50%] placeholder:text-[#000000_50%]" name="phone" placeholder="Phone Number" value={phone} onChange={(event)=>setPhone(event.target.value)} />
                <input className="outline-none p-[10px] xl_up:p-[15px] rounded-xl border-[2px] border-[#000000_50%] placeholder:text-[#000000_50%]" name="email" placeholder="Email Address" value={email} onChange={(event)=>setEmail(event.target.value)} />
                <input className="outline-none p-[10px] xl_up:p-[15px] rounded-xl border-[2px] border-[#000000_50%] placeholder:text-[#000000_50%]" name="gender" placeholder="Gender" value={gender} onChange={(event)=>setGender(event.target.value)} />
                <div className="p-[10px] xl_up:p-[15px] rounded-xl border-[2px] border-[#000000_50%]">
                    <p className="2xl_up:text-2xl xl_up:text-xl text-base font-medium tracking-[-1.2px] border-[#000000_50%] border-b-[2px] mb-2">Area of Interests</p>
                    
                    <div>
                        <input className="rounded-none" name="work" type="checkbox"  />
                        <label className="!text-[#000000_60%] 2xl_up:text-xl xl_up:text-lg text-sm !font-normal tracking-[-1.2px] ml-2">Volunteering</label>
                    </div>
                    <div>
                        <input className="" name="volunteer" type="checkbox"  />
                        <label className="!text-[#000000_60%] 2xl_up:text-xl xl_up:text-lg text-sm !font-normal tracking-[-1.2px]  ml-2">Work</label>
                    </div>
                </div>
                <button className="h-[55px] mt-3 bg-[#0B175B] text-white font-bold rounded-xl inline-flex justify-center items-center text-center mx-auto w-full">Submit</button>
            </div>
        </form>
  )
}
