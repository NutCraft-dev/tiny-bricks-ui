import { ElementType, forwardRef } from "react";
import { typography } from "variants";
import { TypographyProps, TextProps, CodeProps, HeadingProps } from "types";
import { twMerge } from "tailwind-merge";
import { useCopyToClipboard } from "hooks";
import { CopyIcon } from "icons";
import { setColor } from "utils/setColor";

// Main Typography component
type PolymorphicProps<C extends ElementType, P = {}> = P & {
  as?: C;
  ref?: React.Ref<
    C extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[C] : unknown
  >;
};

const Typography = forwardRef(
  <C extends ElementType = "div">(
    {
      as,
      variant = "body",
      size,
      align,
      disabled,
      underline,
      strong,
      italic,
      strikethrough,
      copy,
      color = "#000",
      className,
      children,
      ...props
    }: PolymorphicProps<C, TypographyProps>,
    ref: React.Ref<HTMLElement>,
  ) => {
    const Component = as || ("div" as ElementType);

    const classes = twMerge(
      typography({
        variant,
        size,
        align,
        disabled,
        underline,
        strong,
        italic,
        strikethrough,
      }),
    );

    const { isCopied, copyToClipboard } = useCopyToClipboard();
    const handleCopy = () => {
      if (typeof children === "string") {
        copyToClipboard(children);
      }
    };

    return (
      <>
        <Component
          ref={ref}
          className={classes}
          style={{ ...setColor(color, variant) }}
          {...props}
        >
          {children}

          {copy && (
            <span
              className="ml-2 cursor-pointer text-sky-500 hover:text-sky-700"
              onClick={handleCopy}
              title={isCopied ? "Copied!" : "Copy to clipboard"}
            >
              <CopyIcon />
            </span>
          )}
        </Component>
      </>
    );
  },
);

Typography.displayName = "Typography";

// Subcomponents
const Heading = ({ element = "h6", size, ...props }: HeadingProps) => (
  <Typography
    as={element}
    size={
      size || ((11 - parseInt(element.slice(1, 2))) as 1 | 2 | 3 | 4 | 5 | 6)
    }
    {...props}
    variant={element}
  />
);

const Text = ({ element = "p", ...props }: TextProps) => (
  <Typography as={element} {...props} variant="body" />
);

const Code = ({ element = "code", ...props }: CodeProps) => (
  <Typography as={element} {...props} variant="code" />
);
// Export with destructured subcomponents
const ExportedTypography = Object.assign(Typography, {
  Heading,
  Text,
  Code,
});
export default ExportedTypography;
