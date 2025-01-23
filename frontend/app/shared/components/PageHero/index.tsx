"use client";

import { ReactNode, useRef } from "react";
import Slider, { Settings as SliderSettings } from "react-slick";
import { HangerText1 } from "./components/HangerTexts";
import LazyImage from "../LazyImage";
import ChevronLeft from "@/shared/icons/ChevronLeft";

const PageHero = () => {
  const slideRef = useRef<Slider>(null);

  const nextSlide = () => {
    slideRef.current?.slickNext();
  };

  const prevSlide = () => {
    slideRef.current?.slickPrev();
  };

  return (
    <section className="w-full relative z-[1] max-w-full" style={{ height: "clamp(270px, 50vw, 768px)" }}>
      <Slider {...settings} ref={slideRef}>
        {images.map((item) => (
          <SliderItem key={item.image} {...item} />
        ))}
      </Slider>

      <div className="flex justify-between w-full px-6 absolute top-1/2 left-0 sm:px-4">
        <div className=" text-gray-800 p-0 bg-gray-200 size-20 sm:size-10 rounded-full flex items-center justify-center btn" onClick={prevSlide}>
          <ChevronLeft className="size-10 sm:size-5" />
        </div>

        <div className="text-gray-800 p-0 bg-gray-200 size-20 rounded-full grid place-items-center btn sm:size-10" onClick={nextSlide}>
          <ChevronLeft className="!rotate-180 size-10 sm:size-5" />
        </div>
      </div>
    </section>
  );
};

type SliderItemProps = { image: string; hangerText?: ReactNode };

const SliderItem = ({ image, hangerText }: SliderItemProps) => {
  // const root = "https://ik.imagekit.io/cocroooiz/frontend/";
  // const blurRoot = root + "tr:w-50,h-50/";

  return (
    <div className="bg-gray-200 relative w-full" style={{ height: "clamp(270px, 50vw, 768px)" }}>
      <LazyImage className="size-full [&>img]:brightness-90" src={image} loading="eager" />
      {hangerText}
    </div>
  );
};

const images = [
  { image: "/images/multi-purpose-assembly-hall.webp", hangerText: <HangerText1 /> },
  { image: "/images/donate-hero.webp", hangerText: <></> },
  { image: "/images/monika-school.webp", hangerText: <></> },
  { image: "/images/hero-1.webp", hangerText: <></> },
];

const settings: SliderSettings = {
  dots: false,
  lazyLoad: "progressive",
  fade: true,
  infinite: true,
  speed: 1500,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: false,
};

export default PageHero;
