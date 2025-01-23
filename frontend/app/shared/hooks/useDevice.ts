// "use client";

import { useEffect, useMemo, useState } from "react";
import { sizes as mediaSizes } from "../styles/media";
// import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

interface Config {
  sizes?: typeof mediaSizes;
  media?: "max-width" | "min-width" | "exact";
}

export const useDevice = (config?: Config) => {
  const isClient = typeof window !== "undefined";

  const s = isClient ? window.screen : { width: 0, height: 0 };

  const [screen, setScreen] = useState({ width: s.width, height: s.height });

  const { sizes = mediaSizes, media = "max-width" } = config ?? {};

  const handleSize = () => {
    setScreen({ width: window.screen.width, height: window.screen.height });
  };

  useEffect(() => {
    handleSize();

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, [isClient]);

  // Note: this outcome is based on css @media (max-width: xxx)  logic. Default Logic.
  let matches = {
    xs: screen.width > 0 && screen.width <= sizes.xs,
    sm: screen.width > 0 && screen.width <= sizes.sm,
    md: screen.width > 0 && screen.width <= sizes.md,
    lg: screen.width > 0 && screen.width <= sizes.lg,
    xl: screen.width > 0 && screen.width <= sizes.xl,
    media,
    ...screen,
  };

  if (media === "exact") {
    matches = {
      ...matches,
      xl: screen.width > sizes.lg && screen.width <= sizes.xl,
      lg: screen.width > sizes.md && screen.width <= sizes.lg,
      md: screen.width > sizes.sm && screen.width <= sizes.md,
      sm: screen.width > sizes.xs && screen.width <= sizes.sm,
      xs: screen.width > 0 && screen.width <= sizes.xs,
    };
  }
  // Note: this outcome is based on css @media screen and (min-width: xxx)  logic.
  else if (media === "min-width") {
    matches = {
      ...matches,
      xs: screen.width > 0 && screen.width <= sizes.sm,
      sm: screen.width > 0 && screen.width > sizes.xs,
      md: screen.width > 0 && screen.width > sizes.sm,
      lg: screen.width > 0 && screen.width > sizes.md,
      xl: screen.width > 0 && screen.width > sizes.lg,
    };
  }

  return matches;
};

export default useDevice;
