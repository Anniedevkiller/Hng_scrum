import Text from "@/shared/components/Text";
import PageLayer from "@/shared/components/PageLayer";
import Collection from "./components/Collection";

const InProgress = () => {
  const text = `We are currently working on a number of intriguing projects. To assure our success, we are actively looking for
        donations from kindhearted people like you. As we work to achieve great results, we really appreciate your
        patience and support. Please pick a cause and make a donation. We're moving forward and succeeding greatly as a
        team!`;

  return (
    <PageLayer className="grid gap-14" id="in-progress">
      <Text size="42" tag="h2" className="text-center">
        Projects Currently in Progress
      </Text>

      <Text size="20" tag="p" className="-mt-10 text-justify">
        {text}
      </Text>

      <Collection
        title="Urgent"
        text="These initiatives are meant to address urgent problems and have a real effect on the lives of individuals who
        are less privileged. By making a donation now, you can play a crucial part in assisting us bring these
        initiatives to life and bringing about great change. Your support will directly help to the accomplishment of
        these efforts, allowing us to attain our objectives and truly make a difference. With your kind assistance, we
        can work together to have a profound and long-lasting impact in the lives of African children."
        list={[
          {
            image: "/images/projects/School-fee-funding-for-street-children.webp",
            amount: {
              expected: 150_000,
              raised: 15_000,
            },
            title: "School fees funding for street children",
            text: `Our back-to-school project is aimed at reducing the number of children roaming and hawking on the streets instead of being in school. Yearly, we sponsor between 500 to 1000 children by paying their school fees. Help us to reachout to more by kindly contributing to this cause.`,
          },
          {
            image: "/images/projects/need-1.webp",
            amount: {
              expected: 150_000,
              raised: 13_000,
            },
            title: "Building of a special school block for inclusive education",
            text: `To give kids with hearing impairments the chance to get an appropriate, inclusive education and a chance at a better life, we are currently expanding our school reach programme. We need your support to make this a success`,
          },
        ]}
      />

      <Collection
        id="building-construction"
        title="Building and Construction Projects"
        text="We need immediate funds for vital construction projects that will expand partner schools, make them safer, and
          improve infrastructure. Your donation will directly contribute to creating lasting benefits for students and
          the community."
        list={[
          {
            image: "/images/projects/Construction-of-Hostel-Block.jpg",
            amount: {
              expected: 150_000,
              raised: 15_000,
            },
            title: "Construction of a 2 storey hostel block",
            text: `We pull over a thousand students off the streets each year and offer them free boarding facilities so they can learn effectively. We need your assistance to grow and develop more opportunities for housing for more kids. Please donate.`,
          },
          {
            image: "/images/projects/st-pail-library.webp",
            amount: {
              expected: 150_000,
              raised: 15_000,
            },
            title: "Construction of the St. Paul library",
            text: `Libraries are crucial to the support of education and the encouragement of lifelong learning. Please help us build and equip the library at St. Paul Comprehensive Secondary School. With your support, kids will have the chance to learn in educational environments that are very conducive.`,
          },
          {
            image: "/images/projects/Multipurpose-Assembly-Hall.webp",
            amount: {
              expected: 150_000,
              raised: 15_000,
            },
            title: "Construction of a multi-purpose assembly hall for Monika Kindergarten",
            text: `The presence of an assembly hall in a school aids educators and learners in creating a culture of communication and representation of extracurricular and academic activities. We are currently working to have a multipurpose hall built for Monika Kindergarten to be utilized as an assembly/events hall for children activities. Donate today and let's all be a part of it.`,
          },
          {
            image: "/images/projects/Digital-Lab-plan.webp",
            amount: {
              expected: 150_000,
              raised: 15_000,
            },
            title: "Building of a standard digital laboratory",
            text: `Due to the rapid advancement of technology, its significance in the modern world cannot be overstated. Therefore, it is important to give kids the chance to learn about technology so they can keep up with the realities of modern life. Building and digitising the labs of our partner schools is something we are quite passionate about. Your contribution will help us reach these objectives.`,
          },
        ]}
      />

      <Collection
        id="continues-projects"
        title="Monika Kindergarten Förderverein Regular Continuous Projects"
        text="We're dedicated to ongoing impactful projects in our community, but they need steady financial support to stay effective. Your regular donations are crucial for sustaining these efforts, driving positive and lasting change. With your consistent contributions, we can plan and execute long-term strategies to ensure our projects continue transforming lives. Join us in this mission by making regular donations and become a driving force behind our continuous projects."
        list={[
          {
            image: "/images/projects/Toys.jpg",
            amount: {
              expected: 150_000,
              raised: 15_000,
            },
            title: "Toys and teaching aids for Kindergarten children",
            text: `We understand the role teaching aids play ensuring effective learning. With your support, we regularly update the teaching aid and learning toys of children in our partner schools. Your donation could go a long way to make a significant difference in their learning.`,
          },
          {
            image: "/images/projects/wheel-chair-donation.png?updatedAt=1703045560662",
            amount: {
              expected: 150_000,
              raised: 15_000,
            },
            title: "Wheelchair donations to communities",
            text: `The Wheelchair project is a special and continuous project that we carry out on a regular basis. With your support, we can make life more meaningful for those in special needs. Be part of this life changing opportunity.`,
          },
        ]}
      />
    </PageLayer>
  );
};

export default InProgress;
