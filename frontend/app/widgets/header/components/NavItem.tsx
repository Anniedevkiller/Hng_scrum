"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavItemProps = { name: string; href: string };

export const NavItem = ({ name, href }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="text-2xl sm:text-lg font-normal text-gray-1 data-active:text-[#0B175B] data-active:font-bold" data-active={isActive}>
      {name}
    </Link>
  );
};
