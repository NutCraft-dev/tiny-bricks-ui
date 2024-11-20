export const generateResponsiveClasses = <T extends string>(
  prop: T | Partial<Record<"sm" | "md" | "lg" | "xl" | "2xl", T>>,
  prefix: string,
): string => {
  if (typeof prop === "string") {
    return `${prefix}${prop}`;
  }

  return Object.entries(prop || {})
    .map(([breakpoint, value]) => `${breakpoint}:${prefix}${value}`)
    .join(" ");
};
