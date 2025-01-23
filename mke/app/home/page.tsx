import WorkTogether from "@/shared/components/WorkTogether";
import MakeDonation from "./components/MakeDonation";
import Philosophy from "./components/Philosophy";
import SupportProject from "./components/SupportProject";
import ContactInfo from "@/shared/components/ContactInfo";
import Waitlist from "@/shared/components/Waitlist";
import PageHero from "./components/PageHero";
import WorkInAfrica from "@/shared/components/WorkInAfrica";
import Welcome from "./components/Welcome";
import OurWork from "./components/OurWork";
import OurPhilosophy from "./OurPhilosophy";
import Support from "./Support";

const Page = () => {
  return (
    <main className="flex flex-col gap-20">
      {/* <PageHero />
      <SupportProject />
      <MakeDonation />
      <Philosophy />
      <WorkTogether />
      <WorkInAfrica />
      <ContactInfo />
      <Waitlist /> */}
      <PageHero/>
      <Welcome/>
      <OurWork/>
      <OurPhilosophy/>
      <Support/>
    </main>
  );
};

export default Page;
