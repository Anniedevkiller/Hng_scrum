import Text from "@/shared/components/Text";
import PageLayer from "@/shared/components/PageLayer";
import Slider from "./Slider";
import Link from "next/link";
import { AppRoutes } from "@/shared/utilities/routes";

const MakeDonation = () => {
  return (
    <PageLayer className="flex flex-col gap-3" tag="section">
      <Text size="42" tag="h2" className="mt-5">
        Your donation makes a difference
      </Text>

      <Text size="20" tag="p" className="mb-9">
        Your priceless support plays an important and crucial role in our unrelenting pursuit of making a real difference.
      </Text>

      <Slider />

      <Link href={AppRoutes.Projects} className="btn btn-outline w-fit mx-auto mt-5">
        Learn More
      </Link>
    </PageLayer>
  );
};

export default MakeDonation;
