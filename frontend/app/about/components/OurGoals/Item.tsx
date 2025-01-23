import LazyImage from "@/shared/components/LazyImage";

const Item = ({ title, text, image }: { title: string; text: string; image: string }) => {
  const root = "https://ik.imagekit.io/cocroooiz/about/";
  const blurRoot = root + "tr:w-50,h-50/";

  return (
    <div className="grid gap-4 max-w-[472px]">
      <LazyImage
        className="w-full rounded-xl overflow-hidden"
        style={{ height: "clamp(260px, 50vw, 385px)" }}
        src={root + image}
        blur={blurRoot + image}
      />

      {/* <p className="text-xl font-title font-bold">{title}</p> */}

      {/* <p className="text-base font-text font-normal">{text}</p> */}
    </div>
  );
};

export default Item;
