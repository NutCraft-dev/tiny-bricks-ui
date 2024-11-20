import { ResponsiveProp } from "types";
import { getColor } from "utils/getColor";

export const setColor = (
  customColor: string,
  variants: string | ResponsiveProp<string>,
) => {
  const color = getColor(customColor);
  if (customColor) {
    const cssProps = {
      outline: {
        "--button-outline": color?.rgbaColor,
        "--button-outline-hover": `rgba(${color?.extractedRGB}, ${color && color.extractedAlpha * 0.1})`,
      },
      filled: {
        "--button-filled": color?.rgbaColor,
        "--button-filled-hover": `rgba(${color?.extractedRGB}, ${color && color.extractedAlpha * 0.8})`,
      },
      soft: {
        "--button-soft": color?.rgbaColor,
        "--button-soft-hover": `rgba(${color?.extractedRGB}, ${color && color.extractedAlpha * 0.8})`,
      },
      dashed: {
        "--button-dashed": color?.rgbaColor,
        "--button-dashed-hover": `rgba(${color?.extractedRGB}, ${color && color.extractedAlpha * 0.1})`,
      },
      ghost: {
        "--button-ghost": color?.rgbaColor,
        "--button-ghost-hover": `rgba(${color?.extractedRGB}, ${color && color.extractedAlpha * 0.1})`,
      },
      link: {
        "--button-link": color?.rgbaColor,
        "--button-link-hover": `rgba(${color?.extractedRGB}, ${color && color.extractedAlpha * 0.8})`,
      },
      h1: {
        "--heading-h1": color?.rgbaColor,
      },
      h2: {
        "--heading-h2": color?.rgbaColor,
      },
      h3: {
        "--heading-h3": color?.rgbaColor,
      },
      h4: {
        "--heading-h4": color?.rgbaColor,
      },
      h5: {
        "--heading-h5": color?.rgbaColor,
      },
      h6: {
        "--heading-h6": color?.rgbaColor,
      },
      subHeading1: {
        "--subHeading1": color?.rgbaColor,
      },
      subHeading2: {
        "--subHeading2": color?.rgbaColor,
      },
      body: {
        "--body": color?.rgbaColor,
      },
    } as const;

    if (typeof variants === "string") {
      return variants in cssProps
        ? cssProps[variants as keyof typeof cssProps]
        : {};
    }
    return Object.assign(
      {},
      ...Object.entries(variants).map(([_, value]) => ({
        ...cssProps[value as keyof typeof cssProps],
      })),
    );
  }
  return {};
};
