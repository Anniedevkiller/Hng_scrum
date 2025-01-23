import LazyImage from "@/shared/components/LazyImage";

export type ItemProps = { title: string; text: string; images: [string, string] };

const Item = ({ title, text, images }: ItemProps) => {
  return (
    <div>
      <h3 className="font-bold font-title mb-4 text-4xl sm:text-xl sm:font-bold sm:font-title sm:text-center">{title}</h3>

      <p className="font-text text-xl font-normal text-justify text-black sm:text-base mb-4">{text}</p>

      <div className="flex gap-6 h-[393px] lg:h-[330px] md:!h-auto md:flex-wrap">
        {images.map((img, idx) => (
          <LazyImage key={img + idx} className="w-full max-w-[776px] [&>img]:brightness-90" src={img} />
        ))}
      </div>
    </div>
  );
};

export default Item;
