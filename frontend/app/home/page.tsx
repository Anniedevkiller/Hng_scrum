import WorkTogether from "@/shared/components/WorkTogether";
import MakeDonation from "./components/MakeDonation";
import Philosophy from "./components/Philosophy";
import SupportProject from "./components/SupportProject";
import ContactInfo from "@/shared/components/ContactInfo";
import Waitlist from "@/shared/components/Waitlist";
import PageHero from "@/shared/components/PageHero";
import WorkInAfrica from "@/shared/components/WorkInAfrica";

const Page = () => {
  return (
    <main className="flex flex-col gap-20">
      <PageHero />
      <SupportProject />
      <MakeDonation />
      <Philosophy />
      <WorkTogether />
      <WorkInAfrica />
      <ContactInfo />
      <Waitlist />
    </main>
  );
};

export default Page;
