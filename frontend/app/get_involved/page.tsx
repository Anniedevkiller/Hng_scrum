import ContactInfo from "@/shared/components/ContactInfo";
import Waitlist from "@/shared/components/Waitlist";
import Intro from "./components/Intro";
import ItemsList from "./components/Item";
import FundRaise from "./components/FundRaise";
import Volunteer from "./components/Volunteer";
import WorkInAfrica from "./components/WorkInAfrica";
import SpreadWord from "./components/SpreadWord";

const Page = () => {
  return (
    <main className="flex flex-col gap-20">
      <Intro />
      <ItemsList />
      <FundRaise />
      <Volunteer />
      <WorkInAfrica />
      <SpreadWord />
      <ContactInfo />
      <Waitlist />
    </main>
  );
};

export default Page;
