
export default function Hero() {
  return (
    <div className="mb-44 2xl_up:h-[700px] xl_up:h-[100vh] md_up:h-[500px] h-[400px] relative">
        <div className="absolute blur-sm   z-0 h-full w-full  rounded-[81px]">
            <img className="h-full w-full object-cover rounded-[81px]" alt="children in background" 
                src="/images/about/about-hero.png"></img>
        </div>
        <div className="h-full z-10 relative text-center grid justify-center items-center">
            <p className="2xl_up:text-7xl xl_up:text-6xl md_up:text-5xl text-4xl
              2xl_up:text-[75px] xl_up:text-[65px] md_up:text-[55px] text-[45px]
              text-[#FFFCFC] font-bold tracking-tight px-5 w-[80%] mx-auto
              " 
            >
                About Monika Kindergarten  Förderverein 
            </p>
        </div>
        {/* <div className="relative h-10 z-10">
            <div className="flex gap-1 absolute bottom-[0px] z-10 w-full items-end justify-center">
                <img className="h-fit w-[22%]" src="/images/about/hero-1.png"></img>
                <img className="h-fit w-[22%]" src="/images/about/hero-2.png"></img>
                <img className="h-fit w-[22%]" src="/images/about/hero-3.png"></img>
                <img  className="h-fit w-[22%]" src="/images/about/hero-4.jpg"></img>
            </div>
        </div> */}
    </div>
  )
}
