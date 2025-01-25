import Image from "next/image";
import Link from "next/link";
import MkeLogo from "../../../public/images/logo.svg";

const Logo = ({ className = "" }: { className?: string }) => (
  <Link href="/" className={`btn btn-ghost text-black text-4xl font-inter font-black p-0 hover:bg-transparent ${className}`}>
    <Image width={40} height={40} alt="logo" src={MkeLogo} />
  </Link>
);

export default Logo;
