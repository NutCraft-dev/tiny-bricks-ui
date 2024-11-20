import React, { forwardRef, CSSProperties } from "react";
import { twMerge } from "tailwind-merge";
import { type VariantProps } from "tailwind-variants";
import { getColor } from "utils/getColor";
import { dividerVariants } from "variants";
export type DividerProps = VariantProps<typeof dividerVariants> & {
  children?: React.ReactNode;
  textMargin?: number;
  customColor?: string;
  fullWidth?: boolean;
};

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      variant = "solid",
      type = "horizontal",
      thickness,
      spacing,
      textPosition,
      textMargin,
      children,
      customColor = "",
    },
    ref,
  ) => {
    const withText = children && textPosition !== "none";

    const marginClass = Math.random()
      .toString(36)
      .replace(/[0-9]/g, "")
      .substring(2, 10);

    const className = dividerVariants({
      variant,
      type,
      thickness,
      spacing,
      textPosition: withText ? textPosition : "none",
    });

    const TextMarginStyle = (
      <style>
        {`
      .${marginClass}::before {
        ${textMargin ? (textPosition === "left" ? `width: ${textMargin}px` : "") : ""};
        ${textMargin ? (textPosition === "left" ? "opacity: 0" : "") : ""};
      }
      .${marginClass}::after {
        ${textMargin ? (textPosition === "right" ? `width: ${textMargin}px` : "") : ""};
        ${textMargin ? (textPosition === "right" ? "opacity: 0" : "") : ""};
      }
    `}
      </style>
    );

    return (
      <div
        ref={ref}
        className={twMerge(className, marginClass)}
        style={
          { "--divider": getColor(customColor)?.rgbaColor } as CSSProperties
        }
      >
        {TextMarginStyle}
        {withText && type === "horizontal" ? (
          <span className="px-4 text-nowrap whitespace-nowrap text-divider">
            {children}
          </span>
        ) : null}
      </div>
    );
  },
);

Divider.displayName = "Divider";

export default Divider;
