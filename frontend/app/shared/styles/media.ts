/*
 * Media queries utility
 */

export type DeviceSize = keyof typeof sizes;

/**
 * "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1024px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "800px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "600px" },
        // => @media (max-width: 639px) { ... }

        xs: { max: "360px" },
        // => @media (max-width: 360px) { ... }
 */

// Update your breakpoints if you want
export const sizes = {
  /** 1535px */
  "2xl": 1535,

  /** 1279px */
  xl: 1279,

  /** 1024px */
  lg: 1024,

  /** 800px */
  md: 800,

  /** 600px */
  sm: 600,

  /** 360px */
  xs: 360,
};

// For CSS
export const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce((acc, label) => {
  acc[label] = `@media (max-width: ${sizes[label]}px)`;

  return acc;
}, {} as { [K in keyof typeof sizes]: string });

/**
 * How to use,
 *
 * import {media} from '...'
 *
 * ---> CSS
 * const Element = styled.div`
 *  ${media.sm} {
 *    ...
 * }
 * `
 */

export enum AnimationMedia {
  md_up = "(min-width: 760px)",

  md = "(max-width: 1023px)",

  lg_only = "(min-width: 1024px)",
  md_only = "(min-width: 768px) and (max-width: 1023px)",
  sm_only = "(max-width: 767px)",

  no_pref = "(prefers-reduced-motion: no-preference)",
}

export type DeviceBoolean = Record<DeviceSize, boolean>;
