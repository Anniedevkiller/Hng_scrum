import ContactInfo from "@/shared/components/ContactInfo";
import Waitlist from "@/shared/components/Waitlist";
// import ExecutiveTeam from "./components/ExecutiveTeam";
import Hero from "./components/Hero";
// import MembersVolunteers from "./components/MembersVolunteers";
import OurHistory from "./components/OurHistory";
// import Partners from "./components/Partners";
import TheBoard from "./components/TheBoard";

const Page = () => {
  return (
    <main className="flex flex-col gap-10">
      <Hero />
      <OurHistory />
      <TheBoard />
      {/* <ExecutiveTeam /> */}
      {/* <MembersVolunteers /> */}
      {/* <Partners /> */}
      <ContactInfo className="my-10" />
      <Waitlist />
    </main>
  );
};

export default Page;
