import PageLayer from "@/shared/components/PageLayer";
import Text from "@/shared/components/Text";
import { AppRoutes } from "@/shared/utilities/routes";
import Link from "next/link";

const SupportProject = () => {
  return (
    <PageLayer className="flex flex-col gap-3 relative -mt-20" tag="section">
      <DollarLabel />

      <Text size="42" tag="h2" className="mt-5">
        Support our back to school project
      </Text>

      <Text size="20" tag="p" className="max-w-[962px] mx-auto">
        With just $20, you can help get 1,000 children off the streets and back to school by paying their tuition and providing skills training for
        them.
      </Text>

      <Link href={AppRoutes.Donate} className="btn btn-error mx-auto mt-3">
        Donate Now
      </Link>
    </PageLayer>
  );
};

const DollarLabel = () => (
  <div className="rounded bg-neutral-100 p-4 absolute left-[45%] -top-20 lg:left-1/2 lg:-translate-x-1/2 sm:hidden">
    <span className="text-secondary-600 text-4xl font-bold border border-solid border-secondary-300 bg-neutral-100 p-2 w-40 inline-block text-center rounded font-text">
      $20
    </span>
  </div>
);

export default SupportProject;
