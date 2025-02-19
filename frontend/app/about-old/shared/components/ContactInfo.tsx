import Instagram from "../icons/Instagram";
import Linkedin from "../icons/Linkedin";
import Twitter from "../icons/Twitter";
import Social from "./Social";

export type ContactInfoProps = {
  name: string;
  role: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  className?: string;
};

const ContactInfo = ({ name, role, instagram, twitter, linkedin, className = "" }: ContactInfoProps) => {
  return (
    <div className={className}>
      <p className="text-3xl font-title font-bold sm:text-2xl">{name}</p>

      <div className="flex justify-between flex-wrap gap-2 w-full">
        <p className="text-2xl font-title font-normal" style={{ fontWeight: "200" }}>
          {role}
        </p>

        <div className="flex gap-4 items-center">
          <Social icon={<Instagram />} link={instagram} />
          <Social icon={<Twitter />} link={twitter} />
          <Social icon={<Linkedin />} link={linkedin} />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
