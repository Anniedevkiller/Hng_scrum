import Waitlist from "@/shared/components/Waitlist"
import GoodEducation from "./components/GoodEducation"
import PartOfMke from "./components/PartOfMke"
import Volunteer from "./components/Volunteer"
import Contact from "./components/Contact"

export default function Page(){
    return (
        <div>
            <GoodEducation/> 
            <PartOfMke/>
            <Volunteer/>
            <Contact/>
            <Waitlist/>
        </div>
    )
}