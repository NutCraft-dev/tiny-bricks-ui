import { type VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { useRipple, useWave } from "hooks";
import Ripple from "components/ripple";
import { Spinner } from "components/Spinner";
import { buttonVariants } from "variants";
import { setColor } from "utils/setColor";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "disabled">,
    VariantProps<typeof buttonVariants> {
  isDisabled?: boolean;
  loading?: boolean;
  asChild?: boolean;
  customColor?: string;
  icon?: ReactNode;
  animate?: "none" | "ripple" | "wave";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "filled",
      size = "md",
      shadow = "none",
      shape = "rounded",
      isDisabled = false,
      loading = false,
      iconOnly = false,
      iconPosition = "start",
      icon = null,
      customColor = "",
      animate = "ripple",
      onClick,
      ...props
    },
    ref,
  ) => {
    const [ripples, createRipple] = useRipple(600);
    const [waves, createWave] = useWave(600);

    return (
      <>
        <button
          className={twMerge(
            buttonVariants({
              variant,
              size,
              shadow,
              shape,
              iconOnly,
              iconPosition,
            }),
            className,
          )}
          style={{
            ...setColor(customColor, variant),
          }}
          disabled={isDisabled || loading}
          ref={ref}
          onClick={(event) => {
            createRipple(event);
            createWave();
            if (onClick) onClick(event);
          }}
          {...props}
        >
          {loading ? (
            <Spinner size="sm" color={customColor || "rgba(0, 0, 0, 0.2)"} />
          ) : iconOnly ? (
            icon
          ) : (
            <>
              {icon}
              {children}
            </>
          )}
          {animate === "ripple" && (
            <span className="absolute inset-0 overflow-hidden rounded-[inherit]">
              {ripples.map((ripple) => (
                <Ripple
                  key={ripple.id}
                  x={ripple.x}
                  y={ripple.y}
                  size={ripple.size}
                />
              ))}
            </span>
          )}
          {animate === "wave" &&
            waves.map((wave) => (
              <span
                key={wave.id}
                className="absolute bg-gray-800/10 opacity-0 inset-0 z-[-1] rounded-[inherit] animate-wave"
              />
            ))}
        </button>
      </>
    );
  },
);

Button.displayName = "Button";

export default Button;
