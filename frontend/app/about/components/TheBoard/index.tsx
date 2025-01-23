import Text from "@/shared/components/Text";
import PageLayer from "@/shared/components/PageLayer";
import Item, { ItemProps } from "./Item";

const TheBoard = () => {
  return (
    <PageLayer id="the_board">
      <Text size="36">The board of Trustees</Text>

      <Text size="20" className="mt-4 mb-10">
        {`The board of trustees, composed of four dedicated full-time members, assumes the responsibility of managing and overseeing the operations of the association in accordance with its established statute. With their collective expertise and strategic vision, the board diligently guides and directs the business affairs of the organisation. Each member brings a unique skill set and perspective to the table, ensuring a well-rounded decision-making process. Through their conscientious efforts, the board upholds the principles and objectives set forth in the association's statute, fostering a foundation of stability and adherence to governing guidelines. By working harmoniously, the board of trustees plays a pivotal role in the successful functioning and governance of the association.`}
      </Text>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-10">
        {boardOfTrustees.map((item, idx) => (
          <Item key={item.name + idx} {...item} />
        ))}
      </div>

      <Text size="36" className="mt-10 mb-6">
        Executive Team
      </Text>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-10">
        {executiveTeam.map((item, idx) => (
          <Item key={item.name + idx} {...item} />
        ))}
      </div>
    </PageLayer>
  );
};

const boardOfTrustees: ItemProps[] = [
  {
    pic: "/images/about/christiana-sow.jpeg",
    name: "Christiana Sow",
    role: "Chief Executive Officer",
    linkedin: "",
    twitter: "",
    instagram: "",
    bio: "Christiana Sow is known for her dynamic leadership and strategic vision. With a proven track record, she fosters collaboration, effective communication, and innovation, driving the organisation towards success. Christiana's commitment to excellence and passion for the mission make her a key driving force behind Monika Forderverein's achievements.",
  },
  {
    pic: "/images/about/sedina-sonarinwo.png",
    name: "Sedina Sonarinwo",
    role: "Programme Director",
    linkedin: "",
    twitter: "",
    instagram: "",
    bio: "Sedina Sonariwo is the Programmes Director at Monika Forderverein. With a focus on programme development and impact, she oversees initiatives aligned with the organisation's mission. Sedina's strategic vision and collaborative approach contribute to successful programme planning, execution, and evaluation, enhancing the association's community impact.",
  },
];

const executiveTeam: ItemProps[] = [
  {
    pic: "/images/about/etimbok-obot.png",
    name: "Etimbuk Obot",
    role: "Chief Operations Officer",
    linkedin: "",
    twitter: "",
    instagram: "",
    bio: "Etimbuk Obot is the Chief Operations Officer at Monika Forderverein, based in Nigeria. In this role, he is responsible for overseeing and optimising the organisation's day-to-day operations. Etimbuk plays a key leadership role in implementing operational strategies, ensuring efficiency, and contributing to the overall success of the association. With a focus on operational excellence, he brings valuable expertise to drive Monika Forderverein's mission forward.",
  },
  {
    pic: "/images/about/sedina-sonarinwo.png",
    name: "Imaobong Ukut",
    role: "Programmes Coordinator",
    linkedin: "",
    twitter: "",
    instagram: "",
    bio: "Imaobong Ukut serves as the Programmes Coordinator for Monika Forderverein in Nigeria. In this role, she takes charge of coordinating and managing the organisation's various programs. Imaobong is instrumental in ensuring the effective planning, execution, and assessment of programmes, aligning them with the association's mission and goals. Her dedication and attention to detail contribute to the success and impact of Monika Forderverein's initiatives in the local community.",
  },
];

export default TheBoard;
