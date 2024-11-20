import { ComponentPropsWithoutRef, ReactNode } from "react";

export type ResponsiveProp<T> =
  | T
  | Partial<Record<"initial" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl", T>>;

export interface TypographyProps
  extends Omit<ComponentPropsWithoutRef<"div">, "color"> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "code";
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  align?: "left" | "center" | "right" | "justify";
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  disabled?: boolean;
  underline?: boolean;
  strong?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  copy?: boolean;
  color?: string;
}
export interface TextProps extends Omit<TypographyProps, "variant" | "as"> {
  element?: "span" | "p" | "div" | "label";
}

export interface CodeProps
  extends Omit<
    TypographyProps,
    | "as"
    | "align"
    | "variant"
    | "disabled"
    | "underline"
    | "strong"
    | "italic"
    | "strikethrough"
  > {
  element?: "code" | "pre";
}

export interface HeadingProps extends Omit<TypographyProps, "variant" | "as"> {
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
