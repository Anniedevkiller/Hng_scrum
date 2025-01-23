"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  src?: string;
  id?: string;
  className?: string;
  blur?: string;
  style?: CSSProperties;
  imageClassName?: string;
  loading?: "lazy" | "eager";
};

const LazyImage = ({ src = "", className = "", blur = "", id, style, loading = "lazy", imageClassName }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [mountLazy, setMountLazy] = useState(true);

  useEffect(() => {
    const el = divRef.current;
    const img = el?.querySelector("img");

    if (!el || !img) return setMountLazy(false);

    const loaders = Array.from(el.querySelectorAll(".j-loader")) as HTMLElement[];

    setMountLazy(true);
    setOpacity(img, 0);
    loaders.forEach((el) => setOpacity(el, 1));

    const loaded = () => {
      setOpacity(img, 1);
      loaders.forEach((el) => setOpacity(el, 0));

      setTimeout(() => setMountLazy(false), 2000);
    };

    if (img.complete) loaded();
    else img.addEventListener("load", loaded);

    return () => {
      img.removeEventListener("load", loaded);
    };

    // eslint-disable-next-line
  }, [divRef, src]);

  const setOpacity = (el: HTMLElement, opacity = 1 | 0) => {
    if (opacity) {
      el.classList.remove("opacity-0");
      el.classList.add("opacity-1");
    } else {
      el.classList.remove("opacity-1");
      el.classList.add("opacity-0");
    }
  };

  const lazyClassNames = `absolute left-0 top-0 w-full h-full transition-opacity duration-500 ease-in-out opacity-1 j-loader`;

  return (
    <div ref={divRef} id={id} className={twMerge("relative overflow-hidden", className)} style={style}>
      <img src={src} alt="" className="w-full h-full opacity-0 object-cover" loading={loading} />

      {mountLazy && <div className={`${lazyClassNames} z-[1] skeleton rounded-none ${blur ? "bg-transparent" : ""} `}></div>}

      {mountLazy && blur && <img src={blur} alt="" className={`blur-lg object-cover ${lazyClassNames}`} />}
    </div>
  );
};

export default LazyImage;
