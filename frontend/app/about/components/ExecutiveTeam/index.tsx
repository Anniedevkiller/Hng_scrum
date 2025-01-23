import PageLayer from "@/shared/components/PageLayer";
import Item, { ItemProps } from "./Item";
import Text from "@/shared/components/Text";

const ExecutiveTeam = () => {
  return (
    <PageLayer>
      {/* <Text size="20" className="mt-4 mb-10">
        {`The Executive Team assumes the vital role of implementing the organization's strategic initiatives and overseeing the day-to-day operations. With their comprehensive understanding of the company's vision and goals, the team formulates and executes effective strategies to drive progress and achieve desired outcomes. Through their astute leadership, the Executive Team navigates the complexities of the business landscape, making informed decisions to optimize performance and foster growth. By closely managing the operational aspects, the team ensures smooth functioning and facilitates the realization of the organization's overarching objectives.`}
      </Text> */}

      <div className="grid grid-cols-3 lg:grid-cols-2 sm:!grid-cols-1 justify-items-center gap-10">
        {list.map((item, idx) => (
          <Item key={item.name + idx} {...item} />
        ))}
      </div>
    </PageLayer>
  );
};

const list: ItemProps[] = [
  {
    pic: "christiana-sow.jpeg?updatedAt=1703060795751",
    name: "Christiana Sow",
    role: "Chief Executive Officer",
    linkedin: "",
    twitter: "",
    instagram: "",
  },
  {
    pic: "mark-essien.png?updatedAt=1702203832435",
    name: "Mark Essien",
    role: "Chief Executive Officer",
    linkedin: "",
    twitter: "",
    instagram: "",
  },
  {
    pic: "sedina-sonarinwo.png?updatedAt=1702203652825",
    name: "Sedina Sonarinwo",
    role: "Chief Executive Officer",
    linkedin: "",
    twitter: "",
    instagram: "",
  },
  {
    pic: "thomas-essien.png?updatedAt=1702203653402",
    name: "Thomas Essien",
    role: "Chief Executive Officer",
    linkedin: "",
    twitter: "",
    instagram: "",
  },
];

export default ExecutiveTeam;
