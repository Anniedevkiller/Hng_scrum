import PageLayer from "@/shared/components/PageLayer";
import Item from "./Item";
import Anchor from "./Anchor";
import { ReactNode } from "react";

const Content = () => {
  return (
    <PageLayer>
      <ol className="list-decimal grid gap-6 mx-5">
        {list.map((item, idx) => (
          <Item key={idx} {...item} />
        ))}
      </ol>
    </PageLayer>
  );
};

export default Content;

const annualReport = "https://drive.google.com/file/d/15nRiRVTddZ6o2vmcj2DYcWlSlAAo65lC/view?usp=sharing";

const list: { title: string; list: ReactNode[] }[] = [
  {
    title: "Name, registered office, address and year of foundation",
    list: [
      "Name: Förderverein Monika Kindergarten and Elementary School e.V",
      "Registered Office: Agnes Witzens, Ernst Reüter Str. 25 46395 Böchölt",
      "Founding date: 1994",
    ],
  },
  {
    title: "Complete articles of incorporation as well as information on the organizational goals",
    list: [
      <Anchor key={1} content={["To the", "statute"]} href="https://drive.google.com/file/d/1OB2RoSHGwPm-a9gDrhhSHAPUMKRZK7Fk/view?usp=sharing" />,
      <Anchor
        key={2}
        content={["To the", "Mission and Vision"]}
        href="https://docs.google.com/document/d/1pKHdx_E172RrQyQLRkkDh6P2IyfqCJbIcR59z28r3Nc/edit?usp=drivesdk"
      />,
    ],
  },
  {
    title: "Information on tax benefits",
    list: [
      <Anchor
        key={1}
        content={["To the", "Notice of tax exemption"]}
        href="https://drive.google.com/file/d/1kHDahC5JQ-3xESIoxsa079sKy7WCNsci/view?usp=drive_link"
      />,
    ],
  },
  {
    title: "Name and function of key decision-makers:",
    list: [
      "Christiana Sow (Managing Director)",
      "Mechthild Trantau (Secretary)",
      <Anchor key={1} content={["Information on other decision makers could be found on the", "2021 annual report"]} href={annualReport} />,
    ],
  },
  {
    title: "Activity Report",
    list: [<Anchor key={1} content={["The", "current annual report", "- See the first page"]} anchorText={1} href={annualReport} />],
  },
  {
    title: "Personnel structure",
    list: [
      <Anchor key={1} content={["The", "current annual report", "- See the first page"]} anchorText={1} href={annualReport} />,
      "Volunteers are also received yearly",
    ],
  },
  {
    title: "Source of Funds Disclosures",
    list: [<Anchor key={1} content={["See", "annual report", "page 5"]} anchorText={1} href={annualReport} />],
  },
  {
    title: " Information on the use of funds",
    list: [<Anchor key={1} content={["See", "annual report", "page 3 and 4"]} anchorText={1} href={annualReport} />],
  },
  {
    title: "Corporate Affiliation with Third Parties",
    list: [
      "Monika Kindergarten and Elementary School e.V does not have any third party affiliates and operates on its own as a registered Förderverein.",
    ],
  },
  {
    title: "Names of people whose annual payments are more than 10% of the total annual budget",
    list: [
      <Anchor
        key={1}
        content={[
          "No individual payments are more than 10% of the annual budgets.",
          "Pages 5 and 6 of the annual report",
          "provides information on donors and funds",
        ]}
        anchorText={1}
        href={annualReport}
      />,
    ],
  },
];
