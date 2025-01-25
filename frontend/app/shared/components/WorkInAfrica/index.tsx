import Link from "next/link";
import LazyImage from "../LazyImage";
import PageLayer from "../PageLayer";
import Text from "../Text";
import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";
import { AppRoutes } from "@/shared/utilities/routes";
import AfricaSvg from "./images/AfricaSvg";

type Props = { className?: string; children?: ReactNode; href?: string; title?: string; text?: string; image?: string };

const WorkInAfrica = ({ className }: Props) => {
  return (
    <PageLayer
      className={twMerge(
        "bg-secondary-600 h-[648px] md:h-auto overflow-hidden flex gap-6 justify-around items-center ipadAir:flex-col relative z-[1] p-10",
        className
      )}
    >
      <AfricaSvg className="absolute left-28 -z-[1]" />

      <div className="flex flex-col gap-6">
        <Text size="60" tag="h2" className="text-neutral-100">
          Come work in Africa
        </Text>

        <Text size="30" tag="p" className="max-w-lg text-secondary-100 text-pretty">
          There are various jobs to be undertaken that can help our cause
        </Text>

        <Link href={AppRoutes.GetInvolved} className="btn btn-error w-fit">
          Job Offers
        </Link>
      </div>

      <LazyImage
        className="rounded-full overflow-hidden"
        style={{ height: "clamp(260px, 40vw, 450px)", width: "clamp(260px, 40vw, 450px)" }}
        src="/images/Copy-of-Come-and-Work-with-us.jpg"
      />
    </PageLayer>
  );
};

export default WorkInAfrica;
