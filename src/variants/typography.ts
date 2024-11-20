import { tv } from "tailwind-variants";

const typography = tv(
  {
    base: "box-border text-gray-900",
    variants: {
      variant: {
        h1: "text-heading-h1",
        h2: "text-heading-h2",
        h3: "text-heading-h3",
        h4: "text-heading-h4",
        h5: "text-heading-h5 ",
        h6: "text-heading-h6",
        body: "text-body",
        code: "w-fit px-1 bg-gray-100 border border-gray-200 rounded-md font-mono font-thin",
      },
      size: {
        1: "text-sm",
        2: "text-base",
        3: "text-lg",
        4: "text-xl",
        5: "text-2xl",
        6: "text-3xl",
        7: "text-4xl",
        8: "text-5xl",
        9: "text-6xl",
        10: "text-7xl",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
      },
      disabled: {
        true: "text-gray-400 cursor-not-allowed",
      },
      underline: {
        true: "underline",
      },
      strong: {
        true: "font-bold",
      },
      italic: {
        true: "italic",
      },
      strikethrough: {
        true: "line-through",
      },
    },
    compoundVariants: [
      {
        variant: ["h1", "h2", "h3", "h4", "h5", "h6"],
        class: "font-semibold",
      },
    ],
    defaultVariants: {},
  },
  {
    responsiveVariants: true,
  },
);

export default typography;
