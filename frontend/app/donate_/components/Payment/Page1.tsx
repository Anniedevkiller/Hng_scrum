"use client"

import { useState } from "react"

function AmountCard({amount, text, chosenAmount, setChosenAmount}:any){
  const toBeSet = amount ? amount : text
  return(
    <div onClick={()=>{setChosenAmount(toBeSet)}} className={"cursor-pointer border-[1px] text-[#0A0B5C] border-[#0609CD] max-w-[127px] h-[30px] xl_up:h-[50px] 2xl_up:h-[60px] flex justify-center items-center  " + (chosenAmount === toBeSet ?" !border-0 !bg-[#0A0B5C] !text-white ":"")}>
      <p className="font-500 xl_up:text-xl 2xl_up:text-2xl ">{amount?("$" + amount):text}</p>
    </div>
  )
}

export default function Page1() {
  const [chosenAmount, setChosenAmount] = useState(6000)
  const [frequency, setFrequency]= useState("monthly")
  return (
    <div>
        <h5 className='text-[#0609CD] font-medium text-lg xl xl_up:text-2xl 2xl_up:text-3xl'>Donate to Monika Kindergarten  Förderverein and make a difference</h5>
        <form>
          <div className="mt-6">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <button type="button" onClick={()=>{setFrequency("monthly")}} className={ (frequency !== "once" ? "!bg-[#0609CD] !text-white !border-0 " : "")  + " border-[1px] border-[#0A0B5C] bg-[#FFFCFC] text-[#0A0B5C]  max-w-[283px] h-[48px] xl_up:h-[68px] 2xl_up:h-[78px]  font-medium  text-base xl_up:text-xl 2xl_up:text-2xl inline-flex justify-center items-center"}>Give Monthly</button>
              <button type="button" onClick={()=>{setFrequency("once")}} className={ (frequency === "once" ? "!bg-[#0609CD] !text-white !border-0 " : "")  + " border-[1px] border-[#0A0B5C] bg-[#FFFCFC] text-[#0A0B5C]  max-w-[283px] h-[48px] xl_up:h-[68px] 2xl_up:h-[78px]  font-medium  text-base xl_up:text-xl 2xl_up:text-2xl inline-flex justify-center items-center"}>Give Once</button>  
            </div> 
            <div className="grid-cols-5 grid">
              <AmountCard amount={6000} chosenAmount={chosenAmount} setChosenAmount={setChosenAmount} />
              <AmountCard amount={12000} chosenAmount={chosenAmount} setChosenAmount={setChosenAmount}/>
              <AmountCard amount={10000} chosenAmount={chosenAmount} setChosenAmount={setChosenAmount}/>
              <AmountCard amount={4000} chosenAmount={chosenAmount} setChosenAmount={setChosenAmount}/>
              <AmountCard text={"Others"} chosenAmount={chosenAmount} setChosenAmount={setChosenAmount}/>
            </div> 
            <div className="grid justify-end">
              <button type="submit" className="w-[214px] h-[66px] mt-6 bg-[#990000] text-white rounded-2xl text-base xl_up:text-xl 2xl_up:text-2xl ">DONATE NOW</button>
            </div>
          </div>
        </form>
        <div className="mt-7 ">
          <div className="grid grid-cols-2 items-center gap-5 ">
            <div>
              <img alt="donate" src="images/donate-now/donate.png"></img>
            </div>
            <div>
              <p>Your generous monthly donation can provide wheelchair which is essential for disable children and adults. Your donation can save generation.</p>
            </div>
          </div>
          <div className="mt-14 grid justify-start">
            <p className="italic text-[#8E8E93]">Secure payment with</p>
            <div className="mt-3 text-sm xl_up:text-lg 2xl_up:text-xl">
              <button className="w-[98px] h-[40px] rounded-lg bg-[#2F45FF] text-[#FFFCFC] italic text-sm xl_up:text-lg 2xl_up:text-xl">Bitpay</button>
            </div>
          </div>
        </div>
    </div>
  )
}
