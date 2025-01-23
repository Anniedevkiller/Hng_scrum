import LazyImage from "@/shared/components/LazyImage";

export type ItemProps = { title: string; text: string; images: string[] };

//height: "clamp(260px, 50vw, 385px)"

const Item = ({ title, text, images }: ItemProps) => {
  const root = "https://ik.imagekit.io/cocroooiz/about/";
  return (
    <div>
      {/* <h3 className="font-bold font-title mb-4 text-4xl sm:text-2xl text-center">{title}</h3> */}

      {/* <p className="font-text text-xl font-normal text-black sm:text-base mb-4 text-center">{text}</p> */}

      <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
        {images.map((img, idx) => (
          <LazyImage
            key={img + idx}
            // className="w-full max-w-[776px]"
            style={{ height: "clamp(260px, 50vw, 385px)", maxWidth: "776px" }}
            src={root + img}
            blur={root + "tr:w-50,h-50/" + img}
          />
        ))}
      </div>
    </div>
  );
};

export default Item;
