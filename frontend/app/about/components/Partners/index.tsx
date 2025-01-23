import Text from "@/shared/components/Text";
import PageLayer from "@/shared/components/PageLayer";
import LazyImage from "@/shared/components/LazyImage";

const Partners = () => {
  return (
    <PageLayer id="partners">
      <Text size="42" tag="h2" className="mb-10">
        Our Partnerships: who we work with
      </Text>

      <div className="grid grid-cols-2 gap-10 lg:grid-cols-1 justify-items-center">
        <div className="max-w-[816px]">
          <h3 className="font-title font-bold text-2xl sm:text-xl mb-4 sm:font-title sm:font-bold sm:text-center">Who we work with</h3>

          <p className="text-xl font-text font-normal sm:text-base sm:text-center sm:font-text sm:font-normal">
            {`In order to improve people's living conditions, the level of education must be improved. This starts at a
            young age. Hence the decision to found a kindergarten. In 1981 this bungalow is rented. It can accommodate 4
            group rooms. In the beginning, 2 educators will be hired and trained. In the first quarter, 20 children
            register. In the second quarter there are already more than 40 children and 5 employees. The number of
            children is constantly growing. New teachers and other employees are hired. There is a lot to do – in
            kindergarten and in the family`}
          </p>
        </div>

        <LazyImage
          className="max-w-[622px] w-full ml-auto lg:ml-0 min-h-52"
          src="https://ik.imagekit.io/cocroooiz/frontend/partner-handshake.png?updatedAt=1702240027536"
        />
      </div>

      <div className="flex justify-center mt-10">
        <button className="btn btn-outline">Learn More</button>
      </div>
    </PageLayer>
  );
};

export default Partners;
