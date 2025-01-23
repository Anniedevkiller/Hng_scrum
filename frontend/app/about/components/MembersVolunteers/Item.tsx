import LazyImage from "@/shared/components/LazyImage";
import ContactInfo, { ContactInfoProps } from "@/about/shared/components/ContactInfo";

export type ItemProps = ContactInfoProps & { pic: string };

const Item = ({ pic, ...contactInfo }: ItemProps) => {
  const root = "https://ik.imagekit.io/cocroooiz/frontend/";
  const blurRoot = root + "tr:w-50,h-50/";

  return (
    <div className="flex gap-6 max-w-[436px] w-full bg-neutral-01 rounded-md p-4">
      <LazyImage
        className="w-[100px] h-[100px] rounded-full overflow-hidden"
        src={root + "tr:w-431,h-419/" + pic}
        blur={blurRoot + pic}
      />

      <ContactInfo className="flex flex-col gap-1 justify-between  flex-grow" {...contactInfo} />
    </div>
  );
};

export default Item;
