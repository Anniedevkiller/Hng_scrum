import Waitlist from "@/shared/components/Waitlist";
import Hero from "./components/Hero";
import History from "./components/History";
import Mission from "./components/Mission";
import Team from "./components/Team";

const Page = () => {
  return (
    <main className="flex flex-col gap-10 text-black">
        <Hero/>
        <History/>
        <Mission/>
        <Team/>
        <Waitlist/>
    </main>
  );
};

export default Page;
