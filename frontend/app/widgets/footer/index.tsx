import PageLayer from "@/shared/components/PageLayer";
import ListItem, { LinkProps } from "./ListItem";
// import InitiativeBadge from "./InitiativeBadge";
import Social from "./Social";
import Logo from "../components/Logo";
import Medium from "@/shared/icons/Medium";
import Facebook from "@/shared/icons/Facebook";
import Twitter from "@/shared/icons/Twitter";
import LinkedIn from "@/shared/icons/LinkedIn";
import { AboutRoutes, AppRoutes, GetInvolvedRoutes, ProjectRoutes } from "@/shared/utilities/routes";

const Footer = () => {
  return (
    <PageLayer tag="footer" className="max-w-full flex flex-col justify-center items-center p-0  gap-4 h-[505px] xl:h-auto bg-[#0B175B] mt-10">
      <div className="flex justify-between flex-wrap gap-10 w-full max-w-[1500px]">
        <div className="">
          <Logo className="btn btn-ghost" />

          <ListItem title="" links={Locations} />
        </div>
        <div className="flex gap-20 md:gap-8 md:px-0 px-10">
          <ListItem title="About us" links={Aboutus} />
          <ListItem title="Projects" links={Projects} />
          <ListItem title="Get Involved" links={GetInvolved} />
        </div>
        {/*  */}
      </div>

      <div className="border-b border-solid border-secondary-100 w-full"></div>

      <div className="flex flex-wrap gap-4 w-full max-w-[1500px] justify-between items-center px-10 md:px-0">
        {/* <div className="flex sm:order-5"><InitiativeBadge /></div> */}
        <div className="flex gap-6">
          <Social icon={<Medium />} />
          <Social icon={<Facebook />} />
          <Social icon={<Twitter />} />
          <Social icon={<LinkedIn />} />
        </div>

        <p className="font-text text-base font-normal text-neutral-100 mt-2 sm:order-10">© Monika Kindergarten Förderverein e.V.</p>
      </div>
    </PageLayer>
  );
};

const Aboutus: LinkProps[] = [
  { type: "link", name: "Our history", href: AboutRoutes.History },
  { type: "link", name: "Our goals", href: AboutRoutes.Goals },
  { type: "link", name: "Our Organization", href: AboutRoutes.Organization },
  { type: "link", name: "Our partners", href: AboutRoutes.Partners },
  { type: "link", name: "Transparency", href: AppRoutes.Transparency },
];

const Projects: LinkProps[] = [
  // { type: "link", name: "Accomplished", href: ProjectRoutes.Accomplished },
  // { type: "link", name: "In progress", href: ProjectRoutes.Inprogress },
  // { type: "link", name: "Building and construction", href: ProjectRoutes.Building },
  // { type: "link", name: "Continues", href: ProjectRoutes.Continues },
  { type: "link", name: "Library", href: "" },
  { type: "link", name: "Fee funds", href: "" },
  { type: "link", name: "Computer lab", href: "" },
  { type: "link", name: "Hostel construction", href: "" },
];

const GetInvolved: LinkProps[] = [
  // { type: "link", name: "Become a member", href: GetInvolvedRoutes.BecomeMember },
  { type: "link", name: "Volunteer", href: GetInvolvedRoutes.Volunteer },
  // { type: "link", name: "Spread the word", href: GetInvolvedRoutes.SpreadWord },
  { type: "link", name: "Provide home", href: "#" },
  { type: "link", name: "Give food", href: "#" },
  { type: "link", name: "Gift donations", href: "#" },
  { type: "link", name: "Save the children", href: "#" },
];

const Locations: LinkProps[] = [
  { type: "location", country: "Germany", address: "Harmburg, XXXGFGG,", phone: "+1 7383-635-1574." },
  {
    type: "location",
    country: "Nigeria",
    address: `10b NEPA Line,Ikot Ekpene,Akwa Ibom State,`,
    phone: "+234-706-3390-988.",
  },
];

export default Footer;
