import Text from "@/shared/components/Text";
import PageLayer from "@/shared/components/PageLayer";
import AccountCard from "./AccountCard";

const DonationImpact = () => {
  return (
    <PageLayer className="flex flex-col gap-4">
      <Text size="42" tag="h2">
        Your donation to drive positive impact
      </Text>

      <div className="flex gap-8 lg:flex-wrap mt-3">
        <Text size="20" className="w-[65%] lg:w-full mx-auto">
          {`The impact of people's donations over the years can be far-reaching and transformative. Through consistent and
          generous contributions, individuals can help support various causes, such as education, healthcare,
          environmental conservation, poverty alleviation, and more. Over time, these collective donations can
          accumulate to fund crucial initiatives, build infrastructure, provide essential resources, and create
          sustainable solutions. The cumulative effect of people's donations can bring about positive change, improve
          quality of life, empower communities, and create a lasting legacy of compassion and philanthropy. With each
          passing year, the impact of these donations has the potential to touch countless lives and make a significant
          difference in the world. Moreover, charitable contributions can help rebuild communities after natural
          disasters, empower marginalized groups, support artistic and cultural endeavors, and promote social justice
          initiatives. The collective effect of these donations over time can bring about long-lasting change, create
          opportunities, and inspire hope for a better future.`}
        </Text>

        <AccountCard />
      </div>
    </PageLayer>
  );
};

export default DonationImpact;
