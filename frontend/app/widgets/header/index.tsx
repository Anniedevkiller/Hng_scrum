import MobileDropdown from "./components/MobileDropdown";
import NavItemList from "./components/NavItemList";
import SearchAction from "./components/SearchAction";
import Image from "next/image";
import spendenSiegel from "./images/spenden-siegel.png";
import Logo from "../components/Logo";
import Link from "next/link";
import { AppRoutes } from "@/shared/utilities/routes";
import PageLayer from "@/shared/components/PageLayer";

const Header = () => {
  return (
    <PageLayer className="navbar py-5 px-5 md_up:px-14 xl_up:px-20 sticky top-0 z-20 bg-white-f9 max-w-full justify-between items-center ">
      <div className="w-fit">
        <Logo />
      </div>

      <div className="shrink-0 md:hidden mx-auto w-fit">
        <NavItemList />
      </div>

      <div className="md:ml-auto">
        <Link href={AppRoutes.Donate} className="btn btn-error text-white bg-[#0B175B] border-none">
          Donate Now
        </Link>
      </div>    
      <MobileDropdown />

    </PageLayer>
  );
};

export default Header;
