import LazyImage from "@/shared/components/LazyImage";
import PageLayer from "@/shared/components/PageLayer";
import Text from "@/shared/components/Text";
import ArrowRight from "@/shared/icons/ArrowRight";

const ItemsList = () => {
  return (
    <PageLayer className="grid gap-14" id="become-member">
      <Item
        title="Become a member"
        heading="Join Monika Kindergarten Förderverein Nigerian or German team"
        text="By becoming a member, you will join a dedicated team of individuals working towards a common goal – creating a brighter future for Africa. Together, we can make a lasting impact and unlock the potential of countless children. Join us today and be a driving force in empowering Africa through education."
        image="/images/get_involved/become-partner.webp"
        ltr
      />

      <Item
        title="Corporate Membership"
        heading="Get your Company or workplace group Involved"
        text="Is your company or workplace looking for meaningful ways to give back and make a lasting impact? Partner with us and together we can empower African communities through education.Through this partnership, you will not only enhance your corporate social responsibility profile but also create a positive and engaged work environment for your employees."
        image="/images/get_involved/get-involved-2.jpeg"
        btnText="Get in Touch"
      />
    </PageLayer>
  );
};

type Props = {
  title: string;
  heading: string;
  text: string;
  ltr?: boolean;
  image: string;
  btnText?: string;
};

const Item = ({ title, heading, text, ltr, image, btnText = "Join Us" }: Props) => {
  const textDir = ltr ? "text-left" : "text-right";

  const order = ltr ? "" : "-order-1";

  const btnMl = ltr ? "" : "ml-auto";

  return (
    <div className="grid grid-cols-2 lg:grid-cols-1 gap-10 lg:place-items-center">
      <div className={`grid gap-4 ${textDir} lg:text-center lg:text-pretty`}>
        <p className="text-5xl font-bold font-title text-secondary-600 sm:text-2xl">
          {title}
          <span className="lg:hidden">:</span>
        </p>

        <p className="text-4xl font-title font-bold sm:text-xl sm:font-bold sm:font-title text-black">{heading}</p>

        <Text size="20" className={`${textDir} lg:text-justify`}>
          {text}
        </Text>

        <button className={`btn btn-primary w-fit ${btnMl} lg:mx-auto`}>
          {btnText} <ArrowRight />
        </button>
      </div>

      <LazyImage
        style={{ height: "clamp(260px, 45vw, 440px)", maxWidth: "750px" }}
        className={`rounded-2xl w-full ${order} lg:order-1`}
        src={image}
      />
    </div>
  );
};

export default ItemsList;
