import { NavList } from "../constant";
import { NavItem } from "./NavItem";

const NavItemList = () => {
  return (
    <ul className="flex gap-10">
      {NavList.map((item) => (
        <li key={item.name}>
          <NavItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export default NavItemList;
