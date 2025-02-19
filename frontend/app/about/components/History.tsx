import LazyImage from "@/shared/components/LazyImage";

export default function History(){
    return(
        <div>
            <p className="text-white font-mont font-bold bg-blue-900 2xl_up:text-5xl xl_up:text-4xl md_up:text-2xl text-xl py-3 h-[66px] text-center ">HISTORY OF MKE</p>
            <div className="flex justify-evenly mt-8 about-container">
                <p className="w-[35%]"> The NGO has also funded the establishment of primary and secondary schools in Usaka, Nigeria, and has equally partnered with some international organisations to sponsor the building of vocational training centres in villages, donation of wheelchairs, school fee support to indigent children and the sponsorship of skilled training programmes to complement conventional classroom teachings in order to make direct contributions to improving the living conditions of the poor and disadvantaged people in Nigeria.</p>
                <p className="w-[50%]">Monika Kindergarten Förderverein e.V is a German non-governmental organisation (NGO) that was created to help Education in Africa. The association was formed in 1994 to support the project "Monika Kindergarten and Elementary School'' in Nigeria, Ikot Ekpene and has since then worked closely with local partners to execute numerous charitable projects to advance education in the South-South Region of Nigeria. Some of the projects executed by the Förderverein e.V include funding building expansions for Monika kindergarten and Elementary School and St. Paul Comprehensive Secondary School, located in Ikot Ekpene, Nigeria. </p>
            </div>
            <div className="mt-3">
                <p className="text-white w-[50%] font-bold bg-blue-900 2xl_up:text-5xl xl_up:text-4xl md_up:text-2xl text-xl py-3 h-[66px] about-container ">AKWA IBOM 1981</p>
                <div className="mt-8 grid grid-cols-2 gap-3 about-container">
                    <div className="">
                        <LazyImage src="images/about/elementary-school.webp" className="h-[385px] object-cover rounded-2xl"/>
                        <p className="italic font-light text-xs">Photograph taken at elementary school in Akwa Ibom 1981</p>
                    </div>
                    <div>
                        <LazyImage src="images/about/kindergarten.webp" className="h-[385px] object-cover rounded-2xl"/>
                        <p className="italic font-light text-xs">Photograph taken at elementary school in Akwa Ibom 1981</p>
                    </div>
                </div>
                <p className="sm:text-base xl:text-lg text-xl about-container mt-5">In order to improve people's living conditions, the level of education must be improved, starting from a young age. Hence, the decision was made to establish a kindergarten, which began in 1981 by renting a bungalow capable of accommodating four group rooms. Initially, two educators were hired and trained, and in the first quarter, 20 children registered. By the second quarter, the number of children had already exceeded 40, and the staff expanded to five employees.</p>
            </div>
            <p className="my-8 text-white font-mont font-bold bg-blue-900 2xl_up:text-5xl xl_up:text-4xl md_up:text-2xl text-xl py-3 h-[66px] text-center ">40 Years of Monika Kindergarten Förderverein </p>
            <div className="grid grid-cols-2 gap-3 about-container">
                <div>
                    <div>
                        <LazyImage src="images/about/student-in-class.webp" className="h-[385px] rounded-2xl"/>
                        <p className="italic font-light text-xs">Student in class</p>
                    </div>
                    <p className="sm:text-base xl:text-lg text-xl ">In order to improve people's living conditions, the level of education must be improved. This starts at a young age. Hence the decision to found a kindergarten. In 1981 this bungalow is rented. It can accommodate 4 group rooms. In the beginning, 2 educators will be hired and trained. In the first quarter, 20 children register. In the second quarter there are already more than 40 children and 5 employees.</p>
                </div>
                <div>
                    <p className="sm:text-base xl:text-lg text-xl">In order to improve people's living conditions, the level of education must be improved.
                        This starts at a young age.
                        Hence the decision to found a kindergarten.
                        In 1981 this bungalow is rented. It can accommodate 4 group rooms.
                        In the beginning, 2 educators will be hired and trained.
                        In the first quarter, 20 children register.
                        In the second quarter there
                    </p>
                    <div>
                        <LazyImage src="images/about/student-graduation.webp" className="h-[415px] rounded-2xl"/>
                        <p className="italic font-light text-xs">Students on graduation day</p>
                    </div>
                </div>
            </div>
        </div>
    )
}