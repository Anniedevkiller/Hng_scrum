import Text from "@/shared/components/Text";
import PageLayer from "@/shared/components/PageLayer";
import Item from "./Item";

const OurGoals = () => {
  return (
    <PageLayer id="goals">
      {/* <Text size="42" tag="h2">
        Our Goals: What we strive for
      </Text> */}

      {/* <p className="text-xl font-text font-normal text-black sm:text-base text-center mt-6">
        {`At Monika Kindergarten Förderverein, we are dedicated to a singular mission: empowering Africa through education and promoting equality across the continent. Our organization strives tirelessly to create a future where every African child has access to quality education, regardless of their background or circumstances.Our goal is to bridge the educational gap that exists in Africa, ensuring that every child has equal opportunities to learn and succeed. We work relentlessly to provide educational resources, infrastructure, and teacher training to underserved communities, thereby enhancing the quality of education across the continent.`}
      </p> */}

      <div className="grid justify-items-center grid-cols-3 xl:grid-cols-2 lg:!grid-cols-1 gap-8 my-12">
        {list.map((item, idx) => (
          <Item key={item.title + idx} {...item} />
        ))}
      </div>

      {/* <p className="text-xl font-text font-normal text-black sm:text-base text-center mt-6">
        {` Through our unwavering commitment, we have worked tirelessly to bridge the educational gap, empower communities, and create a brighter future for African children. Together, we have enhanced access to quality education, built schools, trained teachers, and provided educational resources, fostering a love for learning and opening doors of opportunity. As we reflect on our journey, we are proud of the progress we have made and the lives we have touched. Yet, our work is not done. With renewed determination, we continue to strive for excellence, pushing boundaries, and empowering even more children across Africa to reach their full potential through education. Together, we can continue to transform lives, one student at a time.`}
      </p> */}
    </PageLayer>
  );
};

const list = [
  // {
  //   title: "Empowerment: Vocational skill derivation",
  //   text: `Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli. Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convall`,
  //   image: "goal1.jpeg?updatedAt=1702198956649",
  // },
  {
    title: "Equal opportunity",
    text: `Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli. Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convall`,
    image: "goal2.png?updatedAt=1702198957831",
  },
  // {
  //   title: "A brighter future",
  //   text: `Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli. Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convall`,
  //   image: "standard-digital-library.png?updatedAt=1701677491246",
  // },
];

export default OurGoals;
