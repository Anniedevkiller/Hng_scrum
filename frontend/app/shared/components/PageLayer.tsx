import { CSSProperties, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children?: ReactNode;
  className?: string;
  tag?: "section" | "div" | "header" | "footer";
  style?: CSSProperties;
  id?: string;
};

const PageLayer = ({ children, tag = "section", className = "", id, style }: Props) => {
  const Tag = tag;
  return (
    <Tag className={twMerge("max-w-[1200px] w-full mx-auto md:px-5 px-6", className)} id={id} style={style}>
      {children}
    </Tag>
  );
};

export default PageLayer;
