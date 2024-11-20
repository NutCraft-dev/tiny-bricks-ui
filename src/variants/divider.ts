import { tv } from "tailwind-variants";

const dividerVariants = tv(
  {
    base: "relative",
    variants: {
      variant: {
        solid: "border-solid",
        dashed: "border-dashed",
        dotted: "border-dotted",
        double: "border-double",
      },
      type: {
        horizontal: "flex items-center",
        vertical: "flex flex-col",
        inline: "inline-block self-center min-h-4 align-middle",
      },
      thickness: {
        thin: "border-l",
        medium: "border-l-2",
        thick: "border-l-4",
      },
      spacing: {
        none: "mx-1",
        small: "mx-2",
        medium: "mx-4",
        large: "mx-6",
      },
      textPosition: {
        none: "border-divider justify-center",
        left: "h-full border-none before:content-[''] before:w-[2%] before:relative before:flex before:items-center before:border-none before:bg-divider before:h-px after:content-[''] after:w-[98%] after:relative after:flex after:items-center after:border-none after:bg-divider after:h-px",
        center:
          "h-full border-none before:content-[''] before:w-[50%] before:relative before:flex before:items-center before:border-none before:bg-divider before:h-px after:content-[''] after:w-[50%] after:relative after:flex after:items-center after:border-none after:bg-divider after:h-px",
        right:
          "h-full border-none before:content-[''] before:w-[98%] before:relative before:flex before:items-center before:border-none before:bg-divider before:h-px after:content-[''] after:w-[2%] after:relative after:flex after:items-center after:border-none after:bg-divider after:h-px",
      },
      textMargin: {
        true: "",
      },
    },
    compoundVariants: [
      {
        type: "horizontal",
        textPosition: "none",
        class: "border-t",
      },
      {
        type: "vertical",
        textPosition: "none",
        class: "border-l",
      },
      {
        type: "horizontal",
        thickness: "thin",
        class: "border-t",
      },
      {
        type: "horizontal",
        thickness: "medium",
        class: "border-t-2",
      },
      {
        type: "horizontal",
        thickness: "thick",
        class: "border-t-4",
      },
      {
        type: "vertical",
        thickness: "thin",
        class: "border-l",
      },
      {
        type: "vertical",
        thickness: "medium",
        class: "border-l-2",
      },
      {
        type: "vertical",
        thickness: "thick",
        class: "border-l-4",
      },
      {
        type: "horizontal",
        spacing: "none",
        class: "my-2",
      },
      {
        type: "horizontal",
        spacing: "small",
        class: "my-4",
      },
      {
        type: "horizontal",
        spacing: "medium",
        class: "my-6",
      },
      {
        type: "horizontal",
        spacing: "large",
        class: "my-8",
      },
      {
        type: "vertical",
        spacing: "none",
        class: "mx-1",
      },
      {
        type: "vertical",
        spacing: "small",
        class: "mx-2",
      },
      {
        type: "vertical",
        spacing: "medium",
        class: "mx-4",
      },
      {
        type: "vertical",
        spacing: "large",
        class: "mx-6",
      },
    ],
    defaultVariants: {
      variant: "solid",
      type: "horizontal",
      thickness: "thin",
      spacing: "small",
      textPosition: "none",
    },
  },
  {
    responsiveVariants: true,
  },
);

export default dividerVariants;
