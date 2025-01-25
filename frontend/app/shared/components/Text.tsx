import { CSSProperties, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Size = "20" | "24" | "30" | "36" | "42" | "60" | "72";

type Props = {
  children?: ReactNode;
  className?: string;
  tag?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "li";
  style?: CSSProperties;
  id?: string;
  size?: Size;
};

const sizes: Record<Size, string> = {
  "20": "text-xl sm:text-base !font-text !font-normal text-justify text-black",
  "24": "text-2xl sm:text-base !font-text !font-normal text-justify text-black",
  "30": "text-3xl lg:text-2xl sm:!text-base font-title font-bold sm:font-normal",
  "36": "text-4xl lg:text-3xl sm:text-2xl !font-bold !font-title text-center",
  "42": "text-[42px] lg:text-4xl sm:!text-3xl !font-title !font-bold text-secondary-600 text-center",
  "60": "text-6xl !font-bold !font-title lg:text-4xl sm:!text-3xl",
  "72": "text-7xl text-center font-bold font-title text-secondary-600 xl:text-5xl sm:!text-3xl md:!text-4xl",
};

const Text = ({ children, tag = "p", className = "", id, style, size = "20" }: Props) => {
  const Tag = tag;

  const dStyle = sizes[size];

  return (
    <Tag className={twMerge(dStyle, className)} id={id} style={style}>
      {children}
    </Tag>
  );
};

export default Text;
