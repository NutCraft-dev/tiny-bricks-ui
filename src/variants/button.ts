import { tv } from "tailwind-variants";

const buttonVariants = tv(
  {
    base: "inline-flex gap-2 items-center justify-center font-medium transition focus:outline-none active:backdrop-brightness-50 cursor-pointer relative disabled:opacity-50 disabled:cursor-not-allowed",
    variants: {
      size: {
        xs: "px-2 py-1 text-xs font-normal",
        sm: "px-3 py-1.5 text-sm font-normal",
        md: "px-4 py-2 text-base font-medium",
        lg: "px-5 py-2.5 text-lg font-medium",
        xl: "px-6 py-3 text-xl font-semibold",
      },
      variant: {
        filled: "bg-button-filled text-white hover:bg-button-filled-hover",
        outline:
          "border border-button-outline bg-transparent text-button-outline hover:bg-button-outline-hover",
        soft: "bg-button-soft text-white hover:bg-button-soft-hover",
        dashed:
          "border border-dashed border-button-dashed bg-transparent text-button-dashed hover:bg-button-dashed-hover",
        ghost: "bg-transparent text-button-ghost hover:bg-button-ghost-hover",
        link: "text-button-link hover:text-button-link-hover",
      },

      shape: {
        rounded: "rounded-lg",
        square: "rounded-sm",
        pill: "rounded-full",
      },
      shadow: {
        none: "shadow-none",
        small: "shadow-sm shadow-black/25",
        large: "shadow-md shadow-black/25",
      },
      iconOnly: {
        true: "rounded-full p-2",
        false: "",
      },
      iconPosition: {
        start: "flex-row",
        end: "flex-row-reverse",
      },
    },

    defaultVariants: {
      variant: "filled",
      size: "md",
      shape: "rounded",
      shadow: "none",
      disabled: false,
      iconOnly: false,
      loading: false,
    },
  },
  {
    responsiveVariants: true,
  },
);

export default buttonVariants;
