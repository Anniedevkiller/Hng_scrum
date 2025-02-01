import Waitlist from "@/shared/components/Waitlist"
import GoodEducation from "./components/GoodEducation"
import PartOfMke from "./components/PartOfMke"
import Volunteer from "./components/Volunteer"

export default function Page(){
    return (
        <div>
            <GoodEducation/> 
            <PartOfMke/>
            <Volunteer/>
            <Waitlist/>
        </div>
    )
}