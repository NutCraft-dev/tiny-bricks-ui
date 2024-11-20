import { CSSProperties, forwardRef, SVGAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { type VariantProps } from "tailwind-variants";
import { getColor } from "utils/getColor";
import { spinnerVariants, svgVariants } from "variants";

export interface SpinnerProps
  extends Omit<SVGAttributes<SVGElement>, "speed">,
    VariantProps<typeof spinnerVariants> {
  color?: string;
  variant?:
    | "circular"
    | "pulsingDots"
    | "wave"
    | "ripple"
    | "rotatingSquare"
    | "bouncingBall"
    | "rotatingDashedCircle"
    | "pulsingRing";
  speed?: "slow" | "medium" | "fast";
}

const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  ({
    className,
    variant = "pulsingRing",
    size = "md",
    speed = "medium",
    color,
  }) => {
    return (
      <svg
        className={twMerge(spinnerVariants({ variant, size }), className)}
        style={
          {
            "--spinner": getColor(color || "")?.rgbaColor,
          } as CSSProperties
        }
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {svgVariants({ size, speed, color, className, variant })}
      </svg>
    );
  },
);

Spinner.displayName = "Spinner";

export default Spinner;
