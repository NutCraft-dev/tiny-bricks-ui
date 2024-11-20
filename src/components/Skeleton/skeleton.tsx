import React from "react";
import { twMerge } from "tailwind-merge";
import { type VariantProps, tv } from "tailwind-variants";
import { skeletonVariants } from "variants";

export interface SkeletonProps extends VariantProps<typeof skeletonVariants> {
  width?: Exclude<
    VariantProps<typeof skeletonVariants>["variant"],
    "circle"
  > extends never
    ? never
    : string | number;
  height?: Exclude<
    VariantProps<typeof skeletonVariants>["variant"],
    "circle"
  > extends never
    ? never
    : string | number;
  borderRadius?: Exclude<
    VariantProps<typeof skeletonVariants>["variant"],
    "circle"
  > extends never
    ? never
    : string | number;
  theme?: "light" | "dark";
  customColor?: string;
  className: string;
  rows?: number;
  para: boolean;
  avatar?: boolean;
  media?: Exclude<
    VariantProps<typeof skeletonVariants>["variant"],
    "line"
  > extends never
    ? never
    : "image" | "video" | "none";
  circleSize?: VariantProps<typeof skeletonVariants>["variant"] extends "circle"
    ? string | number
    : never;
}
const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      width,
      height,
      borderRadius,
      variant = "line",
      animate = true,
      theme = "light",
      customColor,
      para = false,
      className,
      rows = 1,
      avatar = false,
      media = "none",
      circleSize,
    },
    ref,
  ) => {
    const actualRows = para || avatar ? Math.max(3, rows) : rows;
    const actualVariant = para || avatar ? "line" : variant;
    const mediaMapper = {
      none: "",
      image: (
        <svg
          className="w-12 h-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      video: (
        <svg
          className="w-12 h-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    };

    if (avatar) {
      return (
        <div
          className="flex gap-4 w-full"
          ref={ref}
          style={{
            width:
              width && variant !== "circle"
                ? `${width}${typeof width === "number" ? "px" : ""}`
                : "",
            height:
              height && variant !== "circle"
                ? `${height}${typeof height === "number" ? "px" : ""}`
                : "",
          }}
        >
          <div
            className={twMerge(
              skeletonVariants({ variant: "circle", animate, theme }),
              className,
            )}
            style={{
              width: circleSize
                ? `${circleSize}${typeof circleSize === "number" ? "px" : ""}`
                : "48px",
              height: circleSize
                ? `${circleSize}${typeof circleSize === "number" ? "px" : ""}`
                : "48px",
              backgroundColor: customColor || undefined,
            }}
          />
          <div className="flex flex-col space-y-2.5 w-full">
            {Array.from({ length: actualRows }).map((_, index) => (
              <div
                key={index}
                className={twMerge(
                  skeletonVariants({ variant: actualVariant, animate, theme }),
                  className,
                )}
                style={{
                  width:
                    index === 0
                      ? "40%"
                      : index === actualRows - 1
                        ? "75%"
                        : "100%",
                  backgroundColor: customColor || undefined,
                }}
              />
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col space-y-2.5" ref={ref}>
        {Array.from({ length: actualRows }).map((_, index) => (
          <div
            key={index}
            className={twMerge(
              skeletonVariants({ variant: actualVariant, animate, theme }),
              "flex justify-center items-center",
              className,
            )}
            style={{
              width:
                para && index === 0
                  ? "40%"
                  : para && index === actualRows - 1
                    ? "75%"
                    : actualVariant !== "line" &&
                        width &&
                        actualVariant !== "circle"
                      ? `${width}${typeof width === "number" ? "px" : ""}`
                      : actualVariant === "circle" && circleSize
                        ? `${circleSize}${typeof circleSize === "number" ? "px" : ""}`
                        : "",
              height:
                actualVariant !== "line" && actualVariant !== "circle" && height
                  ? `${height}${typeof height === "number" ? "px" : ""}`
                  : actualVariant === "circle" && circleSize
                    ? `${circleSize}${typeof circleSize === "number" ? "px" : ""}`
                    : "",
              borderRadius: borderRadius
                ? `${borderRadius}${typeof borderRadius === "number" ? "px" : ""}`
                : "",
              backgroundColor: customColor || undefined,
            }}
          >
            {variant !== "line" && mediaMapper[media]}
          </div>
        ))}
      </div>
    );
  },
);

Skeleton.displayName = "Skeleton";

export default Skeleton;
