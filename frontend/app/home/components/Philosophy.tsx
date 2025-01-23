import LazyImage from "@/shared/components/LazyImage";
import Text from "@/shared/components/Text";
import { AppRoutes } from "@/shared/utilities/routes";
import Link from "next/link";

const Philosophy = () => {
  return (
    <section className="relative" style={{ height: "clamp(400px, 50vw, 768px)" }}>
      <LazyImage className="h-full [&>img]:brightness-75" src="/images/our-philosophy.webp" />

      <div className="absolute top-[20%] left-[10%] sm:left-6 max-w-[600px] grid gap-5">
        <Text size="60" tag="p" className="p-7 bg-white rounded lg:p-4 text-6xl text-error font-title font-bold lg:text-3xl w-fit">
          Our philosophy
        </Text>

        <Text size="42" tag="p" className="text-white text-left pr-3 sm:!text-2xl">
          Together, we can help African children get quality Education.
        </Text>

        <Link href={AppRoutes.Philosophy} className="btn btn-error text-white w-fit text-xl font-inter font-normal">
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default Philosophy;
