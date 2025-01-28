import { NavList } from "../constant";
import { NavItem } from "./NavItem";

const NavItemList = () => {
  return (
    <ul className="flex gap-5 xl_up:gap-10">
      {NavList.map((item) => (
        <li key={item.name}>
          <NavItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export default NavItemList;
