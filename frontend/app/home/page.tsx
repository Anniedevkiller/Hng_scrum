
import Waitlist from "@/shared/components/Waitlist";
import PageHero from "./components/PageHero";
import Welcome from "./components/Welcome";
import OurWork from "./components/OurWork";
import OurPhilosophy from "./components/OurPhilosophy";
import Support from "./components/Support";
import JoinCTA from "./components/JoinCTA";
import Newsletter from "./components/Newsletter";

const Page = () => {
  return (
    <main className="flex flex-col gap-20">
      <PageHero/>
      <Welcome/>
      <OurWork/>
      <OurPhilosophy/>
      <Support/>
      <JoinCTA/>
      <Waitlist/>
    </main>
  );
};

export default Page;
