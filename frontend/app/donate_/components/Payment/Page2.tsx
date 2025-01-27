
export default function Page2() {

  return (
    <div className="w-full overflow-auto">
        <h5 className=' font-medium text-lg xl xl_up:text-2xl 2xl_up:text-3xl'>YOU'RE GIVING A <span className="text-[#0609CD]">MONTHLY</span> DONATION OF <span className="text-[#0609CD]">$12,000.00</span></h5>
        <form>
          <div className="mt-6 grid xl_up:grid-cols-2 gap-x-5 gap-y-5 overflow-auto w-full">
            <div className="grid text-left gap-1 ">
              <label className="font-medium text-base xl_up:text-lg 2xl_up:text-xl">First Name</label>
              <input className="h-[45px] py-2 px-4 outline-none border-[1px] border-[#10169F] bg-[#E8F1FF]"/>
            </div>
            <div className="grid text-left gap-1 ">
              <label className="font-medium text-base xl_up:text-lg 2xl_up:text-xl">Last Name</label>
              <input className="h-[45px] py-2 px-4 outline-none border-[1px] border-[#10169F] bg-[#E8F1FF]"/>
            </div>
            <div className="grid text-left gap-1 xl_up:col-span-2">
              <label className="font-medium text-base xl_up:text-lg 2xl_up:text-xl">Email Address</label>
              <input className="h-[45px] py-2 px-4 outline-none border-[1px] border-[#10169F] bg-[#E8F1FF]"/>
            </div>

            <div className="xl_up:col-span-2 grid grid-cols-[40px_1fr] items-center">
              <div>
                <input className="bg-transparent w-[24px] h-[24px] border-[1px] border-[#0F0E0E] drop-shadow-[0px_4px_7px_0px_#0000FF4D] " type="checkbox"  />
              </div>
              <div>
                <p className="text-sm 2xl_up:text-base xl_up:text-sm text-xsm">Yes please, I would like to receive communications by email. By opting out, you will not be addede to any MKE mailing lists. You will, however, still receive your donation receipt by email</p>
              </div>
            </div>
           
            <div className="grid justify-end xl_up:col-span-2">
              <button type="submit" className="w-[214px] h-[66px] mt-6 bg-[#990000] text-white rounded-2xl text-base xl_up:text-xl 2xl_up:text-2xl ">DONATE NOW</button>
            </div>
          </div>
        </form>
    </div>
  )
}
