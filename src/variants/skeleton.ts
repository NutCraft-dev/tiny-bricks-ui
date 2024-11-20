import { tv } from "tailwind-variants";

const skeletonVariants = tv(
  {
    base: "bg-gray-500",
    variants: {
      variant: {
        line: "rounded-md h-4 min-w-[40svw]",
        rounded: "rounded-md",
        rectangular: "rounded-none",
        circle: "rounded-full aspect-square",
      },
      animate: {
        true: "animate-pulse",
        false: "",
      },
      theme: {
        light: "bg-gray-300",
        dark: "bg-gray-700",
      },
    },
  },
  {
    responsiveVariants: true,
  },
);

export default skeletonVariants;
