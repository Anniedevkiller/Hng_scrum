import LazyImage from "@/shared/components/LazyImage";


export default function Mission() {
  return (
    <div>
        <div className="w-[60%] mx-auto text-center h-[66px] bg-blue-900 text-white flex justify-center items-center p-3 mt-3 mb-8">
            <p className="text-white font-semibold bg-blue-900 2xl_up:text-5xl xl_up:text-4xl md_up:text-2xl text-xl  text-center">OUR MISSION</p>
        </div>
        <div className="about-container flex justify-between gap-3">
            <div className="w-[50%]">
                <div className=" ">
                    <p className="text-blue-900 text-3xl 2xl:text-2xl md:text-lg font-medium">What we strive for</p>
                    <p className="text-xl 2xl:text-lg md:text-base">At Monika Kindergarten Förderverein, we are dedicated to a singular mission: empowering Africa through education and promoting equality across the continent. Our organization strives tirelessly to create a future where every African child has access to quality education, regardless of their background or circumstances.Our goal is to bridge the educational gap that exists in Africa, ensuring that every child has equal opportunities to learn and succeed. We work relentlessly to provide educational resources, infrastructure, and teacher training to underserved communities, thereby enhancing the quality of education across the continent.</p>
                </div>
                <div className="mt-3">
                    <LazyImage src="images/about/children-in-class.webp" className="rounded-[10px] h-[436px] w-full cover"/>
                    <p className="md:text-xs italic text-blue-400 font-medium">
                        Better Learning environment
                    </p>
                    <p className="text-xl 2xl:text-lg md:text-base">Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli. Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convall</p>
                </div>
            </div>
            <div className="w-[50%]">
                <div className="">
                    <LazyImage src="images/about/vocation.webp" className="rounded-[10px] h-[436px] w-full cover"/>
                    <p className="md:text-xs italic text-blue-400 font-medium">
                        Empowerment: Vocation skill derivation
                    </p>
                    <p className="text-xl 2xl:text-lg md:text-base">Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli. Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convall</p>
                </div>
                <div className="mt-3">
                    <LazyImage src="images/about/parade.webp" className="rounded-[10px] h-[436px] w-full cover"/>
                    <p className="md:text-xs italic text-blue-400 font-medium">
                    Giving equal opportunity
                    </p>
                </div>
            </div>
        </div>
     
        <p className="w-[100%] about-container text-center text-xl 2xl:text-lg md:text-base mt-5"> Through our unwavering commitment, we have worked tirelessly to bridge the educational gap, empower communities, and create a brighter future for African children. Together, we have enhanced access to quality education, built schools, trained teachers, and provided educational resources, fostering a love for learning and opening doors of opportunity. As we reflect on our journey, we are proud of the progress we have made and the lives we have touched. Yet, our work is not done. With renewed determination, we continue to strive for excellence, pushing boundaries, and empowering even more children across Africa to reach their full potential through education. Together, we can continue to transform lives, one student at a time.</p>
        <p className="text-blue-900 font-semibold text-center mt-8 text-3xl 2xl:text-2xl md:text-lg">OUR MISSION STATEMENT</p>
        <div className="border-blue-900 rounded-2xl p-[10px] border-[1px] shadow-[7px_7px_7.3px_0px_#5676FF80] w-[60%] mx-auto text-center mt-3">
            <p className="text-xl 2xl:text-lg md:text-base text-[#5676FF]">“We believe in the power of collective action to create meaningful change. Every donation is a bridge between hope and possibility, connecting compassionate individuals with communities in need. Our commitment is to maximize the impact of your generosity, ensuring that each contribution directly supports sustainable solutions that empower individuals, heal communities, and build a more equitable world.”</p>
        </div>
    </div>
  )
}
