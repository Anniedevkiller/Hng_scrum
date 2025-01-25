import { NavList } from "../constant";
import { NavItem } from "./NavItem";

const MobileDropdown = () => {
  return (
    <div className="dropdown hidden md:block">
      <div tabIndex={0} role="button" className="btn btn-ghost xl_up:hidden border border-solid border-gray-400 mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {NavList.map((item) => (
          <li key={item.name}>
            <NavItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileDropdown;
