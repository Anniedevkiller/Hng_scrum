import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  link: string;
};

const Social = ({ icon, link = "" }: Props) => {
  // if (!link) return <></>;

  return (
    <a
      href={link}
      target="_blank"
      className="rounded h-8 w-8 bg-white border border-[#DEE2E6] grid place-items-center hover:bg-primary hover:text-white transition-colors duration-500"
    >
      {icon}
    </a>
  );
};

export default Social;
