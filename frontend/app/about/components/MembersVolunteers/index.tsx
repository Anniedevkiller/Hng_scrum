import PageLayer from "@/shared/components/PageLayer";
import Item, { ItemProps } from "./Item";

const MembersVolunteers = () => {
  return (
    <PageLayer>
      <h3 className="text-4xl font-title font-bold text-center sm:text-2xl mt-10">The members and volunteers</h3>

      <p className="text-xl font-text font-normal text-black sm:text-base mt-6 mb-10 text-center">
        {`Monika Kindergarten Förderverein. thrives on the strength of its backbone: a dedicated collective comprising members, volunteers, and volunteer workers. Their unwavering commitment and wholehearted support are instrumental in bringing our vision to life. Through their selfless contributions, they actively participate in the realization of our mission and goals. Their invaluable efforts form the cornerstone of our organization, driving positive change and making a tangible difference in the lives of those we serve.`}
      </p>

      <div className="grid grid-cols-3 xl:grid-cols-2 md:!grid-cols-1 justify-items-center gap-10">
        {list.map((item, idx) => (
          <Item key={item.name + idx} {...item} />
        ))}
      </div>

      <div className="flex gap-4 justify-center mt-10">
        <button className="btn btn-primary">Join Our Team</button>
        <button className="btn btn-outline">See Full List</button>
      </div>
    </PageLayer>
  );
};

const list: ItemProps[] = [
  {
    pic: "christiana-sow.jpeg?updatedAt=1702202922994",
    name: "Etimbuk Obot",
    role: "Member",
    linkedin: "",
    twitter: "",
    instagram: "",
  },
  {
    pic: "mark-essien.png?updatedAt=1702203832435",
    name: "Mark Essien",
    role: "Volunteer",
    linkedin: "",
    twitter: "",
    instagram: "",
  },
  {
    pic: "sedina-sonarinwo.png?updatedAt=1702203652825",
    name: "Sedina Sonarinwo",
    role: "Volunteer",
    linkedin: "",
    twitter: "",
    instagram: "",
  },
  {
    pic: "thomas-essien.png?updatedAt=1702203653402",
    name: "Thomas Essien",
    role: "Member",
    linkedin: "",
    twitter: "",
    instagram: "",
  },
];

export default MembersVolunteers;
