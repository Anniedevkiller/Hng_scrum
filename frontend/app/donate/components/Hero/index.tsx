import LazyImage from "@/shared/components/LazyImage";
import PageLayer from "@/shared/components/PageLayer";
import ProgressBar from "./ProgressBar";
import DonateSuggest from "../DonateSuggest";

const Hero = () => {
  return (
    <div className="flex md:flex-col flex-row">
      <PageLayer className="!p-0 flex justify-center items-center max-w-full" style={{ height: "clamp(470px,100vw,100px)" }}>
        <LazyImage className="w-full h-full" src="/images/donate-hero.webp" />

        {/* <div className="absolute left-20 text-white md:left-5 sm:hidden">
        <p className="text-xl text-neutral-100 bg-primary rounded px-4 font-text font-normal w-fit mb-3">URGENT</p>
        <p className="text-6xl md:text-3xl font-title font-bold text-primary-600 bg-white rounded p-6 md:p-2 w-fit">Special school block</p>
        <ProgressBar raised={15000} expected={150000} />
      </div>

      <DollarLabel /> */}
      </PageLayer>
      <div className="w-1/3 md:w-full border-2 rounded-xl p-4 md:mx-2 mx-10 md:mt-4">
        <div className="flex justify-center flex-col">
          <p className="text-[#8E0702] font-semibold text-4xl text-center">URGENT!</p>
          <p className="text-black text-center text-2xl">Donate a block to our school project</p>
          <ProgressBar raised={15000} expected={150000} />
          <p className="text-center text-black text-2xl my-6">Your donation supports our mission</p>
          <DonateSuggest />
        </div>
      </div>
    </div>
  );
};

const DollarLabel = () => (
  <div className="rounded-t bg-white-f8 p-4 absolute bottom-0 sm:hidden">
    <span className="text-secondary-600 text-4xl font-bold border border-solid border-secondary-300 bg-neutral-100 p-2 w-40 inline-block text-center rounded font-text">
      $20
    </span>
  </div>
);

export default Hero;
