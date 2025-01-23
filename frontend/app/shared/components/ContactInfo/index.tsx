import { twMerge } from "tailwind-merge";
import LazyImage from "../LazyImage";
import PageLayer from "../PageLayer";
import Text from "../Text";

const ContactInfo = ({ className }: { className?: string }) => {
  return (
    <PageLayer className={twMerge("flex flex-col gap-10", className)}>
      <Text size="42" tag="h2">
        For more information about our organization
      </Text>

      <div className="flex justify-between items-center xl:flex-col xl:justify-center gap-14 max-w-7xl mx-auto w-full">
        <Item image="/images/christiana-sow.png" name="Christiana Sow" country="Germany" phone="+1 7383-635-1574 " email="contactperson@xxyg.de" />

        <Item image="/images/etimbok-obot.png" name="Etimbuk Obot" country="Nigeria" phone="+234-706-3390-988" email="contactperson@xxyg.de" />
      </div>
    </PageLayer>
  );
};

const Item = ({ image, name, country, phone, email }: { image: string; name: string; country: string; phone: string; email: string }) => (
  <div className="flex gap-8 sm:flex-col sm:items-center sm:gap-3 sm:mx-auto">
    <LazyImage
      src={image}
      className="rounded-full overflow-hidden"
      style={{ width: "clamp(200px, 45vw, 267px)", height: "clamp(200px, 45vw, 267px)" }}
    />

    <div className="flex flex-col justify-center gap-0 sm:items-center">
      <h2 className="text-3xl font-bold text-black font-title sm:text-xl sm:font-bold m-0 mb-4 sm:mb-1">{name}</h2>
      <h3 className="text-xl !font-bold !font-title m-0 text-black sm:text-lg">{country}</h3>
      <p className="text-xl font-text font-normal m-0 sm:text-base">Phone: {phone}</p>
      <p className="text-xl font-text font-normal m-0 sm:text-base">{email}</p>
    </div>
  </div>
);

export default ContactInfo;
