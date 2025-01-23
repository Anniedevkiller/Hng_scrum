import GPS from "@/shared/icons/GPS";
import Link from "next/link";

type ListItemProps = {
  title: string;
  links: LinkProps[];
};

type LinkItemProps = { type: "link"; name: string; href: string };

type LocationItemProps = { type: "location"; country: string; address: string; phone: string };

export type LinkProps = LinkItemProps | LocationItemProps;

const ListItem = ({ title, links }: ListItemProps) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-1">
      <h3 className="!font-title !font-bold text-neutral-100 text-3xl sm:text-xl mb-4">{title}</h3>

      {links.map((item, idx) => {
        if (item.type === "location") return <LocationItem key={item.address + idx} {...item} />;

        return (
          <Link href={item.href} key={item.name + idx} className="text-xl sm:text-base !font-title !font-light text-neutral-100">
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

const LocationItem = ({ address, country, phone }: LocationItemProps) => {
  return (
    <div>
      <div className="flex gap-2">
        <GPS className="text-gray-4 mt-1 sm:hidden" />
        <p className="text-[20px] sm:text-base !font-title !font-normal text-neutral-100 uppercase m-0 mb-1">{country}</p>
      </div>
      <p className="text-[20px] sm:text-base !font-text !font-light text-neutral-100 m-0">
        <span dangerouslySetInnerHTML={{ __html: address }}></span> <br /> <span>{phone}</span>
      </p>
    </div>
  );
};

export default ListItem;
