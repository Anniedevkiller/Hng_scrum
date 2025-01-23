import PageLayer from "@/shared/components/PageLayer";
import LazyImage from "@/shared/components/LazyImage";
import Text from "@/shared/components/Text";

const FundRaise = () => {
  const img = "/images/get_involved/fund-raise-for-us.webp";

  return (
    <PageLayer className="bg-secondary-100 h-[648px] lg:h-auto overflow-hidden flex gap-6 justify-around items-center lg:flex-col relative z-[1] p-10">
      <div className="flex flex-col gap-6">
        <Text size="60" tag="h2" className="text-black text-left">
          Fundraise for us
        </Text>

        <Text size="24" tag="p" className="max-w-lg lg:max-w-xl  text-left">
          {`Join forces with us through your corporate donation, and together let's enhance the lives of children`}
        </Text>

        <button className="btn btn-error w-fit">Get Involved</button>
      </div>

      <LazyImage
        className="rounded-full overflow-hidden"
        style={{ height: "clamp(260px, 40vw, 450px)", width: "clamp(260px, 40vw, 450px)" }}
        src={img}
      />
    </PageLayer>
  );
};

export default FundRaise;
