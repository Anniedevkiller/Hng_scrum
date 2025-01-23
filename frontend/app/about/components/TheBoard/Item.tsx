import LazyImage from "@/shared/components/LazyImage";
import ContactInfo, { ContactInfoProps } from "@/about/shared/components/ContactInfo";
import Text from "@/shared/components/Text";

export type ItemProps = ContactInfoProps & { pic: string; bio: string };

const Item = ({ pic, bio, ...contactInfo }: ItemProps) => {
  return (
    <div className="rounded bg-neutral-01 p-10 sm:p-4" style={{ maxWidth: "769px" }}>
      <LazyImage className="rounded-xl overflow-hidden mb-4" style={{ height: "clamp(260px, 50vw, 420px)", maxWidth: "694px" }} src={pic} />

      <ContactInfo {...contactInfo} />

      <div className="h-[1px] bg-[#B6B6B6] my-4"></div>

      <Text size="20">{bio}</Text>
    </div>
  );
};

export default Item;
