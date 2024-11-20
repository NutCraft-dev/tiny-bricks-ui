import { color } from "storybook/internal/theming";
import { withTV } from "tailwind-variants/dist/transformer";
/** @type {import('tailwindcss').Config} */
export default withTV({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        text: "rgba(50, 100, 200, 1)",
      },
      animation: {
        ripple: "ripple 0.5s ease-out",
        wave: "wave 0.5s ease-out",
      },
      backgroundColor: {
        "button-filled": "var(--button-filled)",
        "button-filled-hover": "var(--button-filled-hover)",
        "button-outline": "var(--button-outline)",
        "button-outline-hover": "var(--button-outline-hover)",
        "button-soft": "var(--button-soft)",
        "button-soft-hover": "var(--button-soft-hover)",
        "button-dashed": "var(--button-dashed)",
        "button-dashed-hover": "var(--button-dashed-hover)",
        "button-ghost": "var(--button-ghost)",
        "button-ghost-hover": "var(--button-ghost-hover)",
        divider: "var(--divider)",
      },
      borderColor: {
        "button-outline": "var(--button-outline)",
        "button-dashed": "var(--button-dashed)",
        divider: "var(--divider)",
      },
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
        wave: {
          "0%": { transform: "scale(1)", opacity: "0" },
          "50%": {
            transform: "scale(1.2)",
            opacity: "1",
          },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
      },
      textColor: {
        "button-outline": "var(--button-outline)",
        "button-dashed": "var(--button-dashed)",
        "button-ghost": "var(--button-ghost)",
        "button-link": "var(--button-link)",
        "button-link-hover": "var(--button-link-hover)",
        spinner: "var(--spinner)",
        "heading-h1": "var(--heading-h1)",
        "heading-h2": "var(--heading-h2)",
        "heading-h3": "var(--heading-h3)",
        "heading-h4": "var(--heading-h4)",
        "heading-h5": "var(--heading-h5)",
        "heading-h6": "var(--heading-h6)",
        subHeading1: "var(--subHeading1)",
        subHeading2: "var(--subHeading2)",
        body: "var(--body)",
      },
    },
  },
});
