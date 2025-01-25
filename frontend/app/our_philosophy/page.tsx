import WorkTogether from "@/shared/components/WorkTogether";
import ContactInfo from "@/shared/components/ContactInfo";
import Waitlist from "@/shared/components/Waitlist";
import IntroText from "./components/IntroText";
import OurMission from "./components/OurMission";
import OurVision from "./components/OurVision";
import CoreValues from "./components/CoreValues";
import PageHero from "@/shared/components/PageHero";
import WorkInAfrica from "@/shared/components/WorkInAfrica";

const Page = () => {
  return (
    <main className="flex flex-col gap-20 md:gap-8">
      <PageHero />
      <IntroText />
      <OurMission />
      <OurVision />
      <WorkInAfrica />
      <CoreValues />
      <WorkTogether />
      <ContactInfo />
      <Waitlist />
    </main>
  );
};

export default Page;
