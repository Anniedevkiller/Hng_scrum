import PageLayer from "@/shared/components/PageLayer";
import Text from "@/shared/components/Text";

const Intro = () => {
  return (
    <PageLayer className="animate-fade">
      <h1 className="text-7xl xl:text-6xl md:!text-3xl font-title font-bold text-center max-w-[1082px] mx-auto text-secondary-600 my-10">
        Working for african children rights to education
      </h1>

      <Text size="20">
        {`The impact of people's donations over the years can be far-reaching and transformative. Through consistent and
        generous contributions, individuals can help support various causes, such as education, healthcare,
        environmental conservation, poverty alleviation, and more.
        `}
        <br />
        <br />
        {`The cumulative effect of people's donations can bring about positive change, improve quality of life, empower
        communities, and create a lasting legacy of compassion and philanthropy. With each passing year, the impact of
        these donations has the potential to touch countless lives and make a significant difference in the world.
        Moreover,
        `}
      </Text>
    </PageLayer>
  );
};

export default Intro;
