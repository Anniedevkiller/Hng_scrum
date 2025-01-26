import ContactInfo from "@/shared/components/ContactInfo";
import Waitlist from "@/shared/components/Waitlist";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import DonationImpact from "./components/DonationImpact";
import DonateCompany from "./components/DonateCompany";
import OngoingProjects from "./components/OngoingProjects";

const Page = () => {
  return (
    <main className="flex flex-col gap-10">
      <Hero />
      <Intro />
      <DonationImpact />
      <DonateCompany />
      <OngoingProjects />
      <ContactInfo className="my-10" />
      <Waitlist />
    </main>
  );
};

export default Page;
