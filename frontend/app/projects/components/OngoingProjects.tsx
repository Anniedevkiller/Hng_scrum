import Text from "@/shared/components/Text";
import PageLayer from "@/shared/components/PageLayer";
import ProjectCard, { ProjectCardProps } from "@/shared/components/ProjectCard";

const OngoingProjects = () => {
  return (
    <PageLayer>
      <Text size="42" tag="h2" className="mt-8 mb-6">
        Urgent ongoing projects
      </Text>

      <div className="flex flex-col gap-10">
        {list.map((item, idx) => (
          <ProjectCard key={idx} {...item} />
        ))}
      </div>
    </PageLayer>
  );
};

const list: ProjectCardProps[] = [
  {
    image: "/images/donate/Teaching-Aids.webp",
    amount: {
      expected: 150_000,
      raised: 15_000,
    },
    title: "Toys and Teaching Aids for Kindergarten Children",
    text: `We understand the role teaching aids play ensuring effective learning. With your support, we regularly update the teaching aid and learning toys of children in our partner schools. Your donation could go a long way to make a significant difference in their learning.`,
  },
  {
    image: "/images/donate/Copy-of-Demca-Wheelchair-donation.webp",
    amount: {
      expected: 150_000,
      raised: 13_000,
    },
    title: "Wheelchair Donations to Communities",
    text: `The Wheelchair project is a special and continuous project that we carry out on a regular basis. With your support, we can make life more meaningful for those in special needs. Be part of this life changing opportunity.`,
  },
];

export default OngoingProjects;
