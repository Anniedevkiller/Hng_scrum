import { Roboto } from "next/font/google";
import PageLayer from "@/shared/components/PageLayer";
import AccountCard from "./AccountCard";


export const roboto_init = Roboto(
  {
    subsets:["latin"],
    weight:["100", "300", "400", "500", "700", "900"]
  }
)

function Card({title, paragraph}:any){
  return(
    <div className="grid">
      <p className={"2xl_up:text-4xl xl_up:text-3xl text-xl font-semibold " + roboto_init.className}>{title}</p>
      <p className={"2xl_up:text-3xl xl_up:text-2xl text-lg font-normal "  + roboto_init.className}>{paragraph}</p>
    </div>
  )
}

const DonationImpact = () => {
  return (
    <PageLayer className={"grid xl_up:grid-cols-[auto_1fr] px-0 w-full max-w-full " + roboto_init.className}>
      <div className="bg-[#830703] !text-white text-center py-3 xl_up:py-5 xl_up:w-full xl_up:max-w-[568px]">
        <h2 className="font-semibold 2xl_up:text-4xl xl_up:text-3xl text-xl w-[70%] mx-auto mb-3">
          Your donation to drive positive impact
        </h2>
        <AccountCard />
      </div>
      <div className="bg-[#0B175B] text-white flex flex-col 2xl_up:flex-row gap-y-5 py-10 items-center justify-center 2xl_up:justify-evenly text-center">
        <div className="w-fit 2xl_up:w-[300px]">
          <h1 className={"2xl_up:text-5xl xl_up:text-4xl text-2xl font-semibold 2xl:font-semibold w-fit " + roboto_init.className}>MONIKA  Kindergarten Förderverein.</h1>
        </div>
        <div className="flex flex-col md_up:flex-row 2xl_up:justify-evenly gap-y-5 gap-x-10">
          <Card title={"40+"} paragraph={"years"} />
          <Card title={"1,200,000+"} paragraph={"donors"} />
          <Card title={"45,000+"} paragraph={"volunteers"} />
          <Card title={"50,000+"} paragraph={"projects"} />
        </div>
      </div>
    </PageLayer>
  );
};

export default DonationImpact;
