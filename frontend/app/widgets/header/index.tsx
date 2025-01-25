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
    <PageLayer className="navbar py-5 px-20 sticky top-0 z-10 bg-white-f9 max-w-full justify-between items-center ">
      <MobileDropdown />

      <div className="w-fit">
        <Logo />
      </div>

      <div className="shrink-0 ml-5 xl:hidden">
        <NavItemList />
      </div>

      <div>
        <Link href={AppRoutes.Donate} className="btn btn-error text-white bg-[#0B175B] border-none">
          Donate Now
        </Link>
      </div>
      {/* <div className="navbar-end ml-auto w-auto sm:hidden"> */}
      {/* <SearchAction /> */}

      {/* <Image src={spendenSiegel} alt="" height={50} /> */}
      {/* </div> */}
    </PageLayer>
  );
};

export default Header;
