import { tv } from "tailwind-variants";
import { SpinnerProps } from "components";

export const spinnerVariants = tv(
  {
    base: "text-spinner",
    variants: {
      variant: {
        circular: "animate-spin",
        pulsingDots: "",
        wave: "",
        ripple: "",
        rotatingSquare: "",
        bouncingBall: "",
        scalingDots: "",
        rotatingDashedCircle: "",
        pulsingRing: "",
      },
      size: {
        xs: "size-4",
        sm: "size-6",
        md: "size-10",
        lg: "size-16",
        xl: "size-24",
      },
    },
    defaultVariants: {
      size: "md",
      speed: "medium",
    },
  },
  {
    responsiveVariants: true,
  },
);

export const svgVariants = ({
  speed = "medium",
  variant = "circular",
}: SpinnerProps) => {
  const speedVariants = {
    slow: 2,
    medium: 1,
    fast: 0.5,
  };

  const svgs = {
    circular: (
      <>
        {/* Background Circle */}
        <circle
          cx="20"
          cy="20"
          r="14"
          stroke="currentColor"
          strokeWidth="4"
          opacity="0.25"
        />
        {/* Rotating Arc */}
        <path d="M20 6 a14 14 0 0 1 0 28" stroke="currentColor" strokeWidth="4">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            dur={`${speedVariants[speed]}s`}
            repeatCount="indefinite"
          />
        </path>
      </>
    ),
    pulsingDots: (
      <>
        <>
          {Array.from({ length: 3 }).map((_, i) => (
            <circle key={i} cx={10 + i * 10} cy="20" r="4" fill="currentColor">
              <animate
                attributeName="r"
                values="4;8;4"
                dur={`${speedVariants[speed]}s`}
                begin={`${(i * speedVariants[speed]) / 5}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </>
      </>
    ),
    wave: (
      <>
        {Array.from({ length: 5 }).map((_, i) => (
          <rect
            key={i}
            x={i * 8 + 2}
            y="10"
            width="4"
            height="20"
            fill="currentColor"
            transform="scale(1, 0.5)"
          >
            <animate
              attributeName="y"
              values="10;5;10"
              keyTimes="0;0.5;1"
              dur={`${speedVariants[speed]}s`}
              begin={`${(i * speedVariants[speed]) / 5}s`}
              repeatCount="indefinite"
            />
          </rect>
        ))}
      </>
    ),
    ripple: (
      <>
        <circle
          cx="20"
          cy="20"
          r="0"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        >
          <animate
            attributeName="r"
            from="0"
            to="18"
            dur={`${speedVariants[speed]}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur={`${speedVariants[speed]}s`}
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="20"
          cy="20"
          r="0"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        >
          <animate
            attributeName="r"
            from="0"
            to="18"
            dur={`${speedVariants[speed]}s`}
            begin={`${speedVariants[speed] / 2}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur={`${speedVariants[speed]}s`}
            begin={`${speedVariants[speed] / 2}s`}
            repeatCount="indefinite"
          />
        </circle>
      </>
    ),
    rotatingSquare: (
      <>
        <rect x="15" y="15" width="10" height="10" fill="currentColor">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            dur={`${speedVariants[speed]}s`}
            repeatCount="indefinite"
          />
        </rect>
      </>
    ),
    bouncingBall: (
      <>
        <circle cx="20" cy="30" r="4" fill="currentColor">
          <animate
            attributeName="cy"
            values="30;10;30"
            dur={`${speedVariants[speed]}s`}
            repeatCount="indefinite"
          />
        </circle>
      </>
    ),
    rotatingDashedCircle: (
      <>
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray="10 10"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            dur={`${speedVariants[speed]}s`}
            repeatCount="indefinite"
          />
        </circle>
      </>
    ),
    pulsingRing: (
      <>
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2">
          <animate
            attributeName="r"
            values="6;16;6"
            dur={`${speedVariants[speed]}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1;0;1"
            dur={`${speedVariants[speed]}s`}
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2">
          <animate
            attributeName="r"
            values="16;6;16"
            dur={`${speedVariants[speed]}s`}
            begin={`${speedVariants[speed] / 2}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur={`${speedVariants[speed]}s`}
            begin={`${speedVariants[speed] / 2}s`}
            repeatCount="indefinite"
          />
        </circle>
      </>
    ),
  };
  return svgs[variant];
};
