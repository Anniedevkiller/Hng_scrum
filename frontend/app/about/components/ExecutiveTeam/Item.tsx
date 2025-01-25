import LazyImage from "@/shared/components/LazyImage";
import ContactInfo, { ContactInfoProps } from "@/about/shared/components/ContactInfo";

export type ItemProps = ContactInfoProps & { pic: string };

const Item = ({ pic, ...contactInfo }: ItemProps) => {
  const root = "https://ik.imagekit.io/cocroooiz/about/";
  const blurRoot = root + "tr:w-50,h-50/";

  return (
    <div style={{ maxWidth: "431px" }}>
      <LazyImage style={{ height: "clamp(260px, 50vw, 419px)" }} className="mb-4" src={root + "tr:w-431,h-419/" + pic} blur={blurRoot + pic} />

      <ContactInfo className="grid gap-1" {...contactInfo} />
    </div>
  );
};

export default Item;
