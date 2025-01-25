"use client";

import Text from "@/shared/components/Text";
import PageLayer from "@/shared/components/PageLayer";

const list = [
  {
    title: "Empowerment",
    text: "We hold a steadfast belief in the transformative power of education. We are driven by the conviction that every individual and community has the inherent potential to create a brighter future. Through our unwavering commitment to empowerment, we strive to provide individuals with the essential tools, knowledge, and resources needed to shape their own destinies.",
  },
  {
    title: "Equality",
    text: "We firmly believe that every child, irrespective of their background, socioeconomic status, or circumstances, deserves an equal chance to access and benefit from a high-quality education. Our unwavering dedication to promoting equality drives us to tirelessly work towards dismantling barriers and creating an inclusive educational landscape",
  },
  {
    title: "Collaboration",
    text: "We recognize that no single organization or entity can address the complex challenges in education alone. Hence, we actively seek partnerships with a diverse range of stakeholders, local communities, and like-minded organizations who share our vision and passion for transforming education. By forging strategic alliances, we leverage collective expertise, resources, and networks to maximize our impact and create a ripple effect of positive change.",
  },
  {
    title: "Integrity",
    text: "At Monika Kindergarten Förderverein, integrity, honesty, and transparency are the cornerstones of our organization. We hold ourselves to the highest standards of ethical conduct and strive to be exemplary in all our actions and interactions. We firmly believe that maintaining the trust of our beneficiaries, donors, partners, and the wider community is paramount to our success and the positive impact we aim to achieve.",
  },
  {
    title: "Innovation",
    text: "We have an unwavering commitment to embracing innovation and creativity as we navigate the ever-changing landscape of education. We understand that the world is evolving rapidly, and the needs of the communities we serve are constantly evolving as well. Therefore, we continuously seek new and effective ways to address challenges, improve educational outcomes, and adapt our approaches to meet the diverse and evolving needs of our beneficiaries.",
  },
];

const CoreValues = () => {
  return (
    <PageLayer className="grid gap-6">
      <Text size="42" tag="h2">
        Core values: our ethics
      </Text>

      <Text size="20" className="mb-8">
        At Monika Kindergarten Förderverein, our core values form the bedrock of everything we do. They shape our identity, guide our actions, and
        inspire us to create a lasting impact. We believe in the power of education to transform lives and empower communities, and these core values
        underpin our commitment to making a difference. These core values guide our decision-making, program development, and daily operations.
        Together, guided by these core values, we are committed to transforming lives, empowering communities, and building a more equitable and
        prosperous world for all.
      </Text>

      <div className="grid gap-8">
        {list.map((item, idx) => (
          <Item key={idx + item.title} {...item} count={idx + 1} />
        ))}
      </div>
    </PageLayer>
  );
};

const Item = ({ title, count, text }: { title: string; count: number; text: string }) => {
  return (
    <div className="grid grid-cols-30_full gap-3 sm:gap-0 text-4xl lg:text-3xl font-bold font-title text-secondary-500 sm:!text-lg sm:font-title sm:font-bold">
      <div>{count}.</div>
      <h4 className="m-0">{title}</h4>
      <div className="sm:hidden"></div>
      <Text size="20" className="mt-4 sm:col-span-2 text-justify">
        {text}
      </Text>
    </div>
  );
};

export default CoreValues;
