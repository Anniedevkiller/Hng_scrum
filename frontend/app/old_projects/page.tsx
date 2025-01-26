import ContactInfo from "@/shared/components/ContactInfo";
import Intro from "./components/Intro";
import Waitlist from "@/shared/components/Waitlist";
import Accomplished from "./components/Accomplished";
import InProgress from "./components/InProgress";

export default function Page() {
  return (
    <main className="flex flex-col gap-10">
      <Intro />
      <Accomplished />
      <InProgress />
      <ContactInfo className="my-10" />
      <Waitlist />
    </main>
  );
}
