import LazyImage from "@/shared/components/LazyImage";
import ProgressBar from "./ProgressBar";

export type ProjectCardProps = {
  title: string;
  text: string;
  image: string;
  amount: { expected: number; raised: number };
};

const ProjectCard = ({ title, text, image, amount: { expected, raised } }: ProjectCardProps) => {
  return (
    <section className="flex justify-center lg_up:gap-10 md:gap-4 lg:flex-wrap">
      <div className="relative max-w-[724px] w-full rounded rounded-t-none overflow-hidden">
        <div className="absolute z-[1] rounded py-1 px-4 top-8 left-6 text-xl font-text text-secondary-100 bg-primary sm:text-base">URGENT</div>

        <LazyImage className="h-[350px] sm:h-[250px] [&>img]:brightness-90" src={image} />

        <div className="flex justify-center items-center min-h-[100px] bg-secondary-100 px-8 sm:px-4 pt-4">
          <ProgressBar raised={raised} expected={expected} />
        </div>
      </div>

      <div className="flex flex-col gap-4 max-w-[693px] w-full py-4 md:py-0">
        <h4 className="text-[26px] font-title font-bold text-black sm:text-xl sm:font-bold sm:font-title">{title}</h4>

        <p className="text-lg font-text font-normal text-black sm:text-base sm:font-text text-justify">{text}</p>

        <p className="text-lg font-text font-normal text-black border border-solid w-fit py-2 px-4 mt-auto rounded sm:text-base sm:font-text">$120</p>

        <div className="flex gap-8 sm:gap-4">
          <button className="btn btn-primary">Donate Now</button>
          <button className="btn btn-outline">Donate Blocks</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
