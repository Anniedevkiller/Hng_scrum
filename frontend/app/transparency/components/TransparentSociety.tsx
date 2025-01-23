import PageLayer from "@/shared/components/PageLayer";
import Text from "@/shared/components/Text";

const TransparentSociety = () => {
  return (
    <PageLayer>
      <Text size="42" className="mb-6">
        Transparent Civil Society Initiative
      </Text>

      <div className="flex gap-10 lg:flex-col">
        <div className="grid gap-5">
          <Text size="20">
            We maintain a transparent communication approach by openly disclosing our pursued objectives and the strategies we employ to attain them.
            This entails elucidating the sources of our financial resources, outlining their allocation, and specifying the responsible parties for
            decision-making.
          </Text>
          <Text size="20">
            To reinforce this commitment, we have become participants in the Transparent Civil Society Initiative. Through this association, we commit
            to publicly sharing the following ten pieces of information, thereby enhancing the credibility of our assertion.
          </Text>
        </div>

        {/* <div className="rounded-xl bg-sky-50 max-w-[450px] min-w-[450px] w-[450px] lg:min-w-fit lg:max-w-full sm:w-full lg:h-50 grid place-items-center lg:mx-auto">
          <img src="/transparente.svg" className="max-w-full max-h-full" alt="" />
        </div> */}
      </div>
    </PageLayer>
  );
};

export default TransparentSociety;
