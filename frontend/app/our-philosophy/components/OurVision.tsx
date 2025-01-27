import PageLayer from "@/shared/components/PageLayer";
import ArrowRight from "@/shared/icons/ArrowRight";
import Link from "next/link";
import { AppRoutes } from "@/shared/utilities/routes";
import Text from "@/shared/components/Text";
import LazyImage from "@/shared/components/LazyImage";
const OurVision = () => {
  return (
    <PageLayer className="grid gap-8">
      <Text size="36" tag="h2">
        Our vision: the plan for a brighter future
      </Text>

      <Text size="20" tag="p">
        Our vision is to create a future where every child in Africa has equal access to quality education, unlocking their full potential and
        enabling them to thrive in a rapidly changing world. We envision empowered communities where education is a catalyst for sustainable
        development, social equity, and economic growth. Through our collaborative efforts, we aim to build a robust and inclusive education system
        that nurtures creativity, critical thinking, and innovation.
      </Text>

      <div className="flex justify-between items-center gap-8 mt-8 lg:flex-col">
        <LazyImage
          className="rounded-full overflow-hidden"
          src="/images/philosophy/Our-Vision.webp"
          style={{ height: "clamp(260px, 40vw, 450px)", width: "clamp(260px, 40vw, 450px)" }}
        />

        <div className="grid gap-6 max-w-[60%] lg:max-w-[100%]">
          <h3 className="font-title font-bold text-5xl text-secondary-900 text-center lg:text-4xl sm:!text-3xl text-balance">
            “To see more African children have access to quality education and a better life”
          </h3>

          <Text size="20" tag="p">
            Education is a key factor in enabling progressive socioeconomic growth, which can help people transcend poverty. Because it aids in the
            eradication of inequalities and the achievement of gender equality, education is crucial for fostering tolerance and more peaceful
            communities. We genuinely hope that more African children will have access to quality education and better living conditions.
          </Text>

          <Link href={AppRoutes.GetInvolved} className="btn btn-primary max-w-sm mx-auto">
            Join Us <ArrowRight />
          </Link>
        </div>
      </div>
    </PageLayer>
  );
};

export default OurVision;
