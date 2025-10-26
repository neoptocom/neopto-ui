import * as React from "react";

export type TypoVariant =
  | "display-lg" | "display-md" | "display-sm"
  | "headline-lg" | "headline-md" | "headline-sm"
  | "title-lg" | "title-md" | "title-sm"
  | "label-lg" | "label-md" | "label-sm"
  | "body-lg" | "body-md" | "body-sm"
  | "button";

export type TypoWeight = "normal" | "medium" | "semibold" | "bold";

// Typography style specifications (fontSize, lineHeight, letterSpacing)
type TypoStyle = {
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
};

const typoStyles: Record<TypoVariant, TypoStyle> = {
  "display-lg": { fontSize: "57px", lineHeight: "64px", letterSpacing: "-0.25px" },
  "display-md": { fontSize: "45px", lineHeight: "52px", letterSpacing: "0" },
  "display-sm": { fontSize: "36px", lineHeight: "44px", letterSpacing: "0" },
  "headline-lg": { fontSize: "32px", lineHeight: "40px", letterSpacing: "0" },
  "headline-md": { fontSize: "28px", lineHeight: "36px", letterSpacing: "0" },
  "headline-sm": { fontSize: "24px", lineHeight: "32px", letterSpacing: "0" },
  "title-lg": { fontSize: "22px", lineHeight: "28px", letterSpacing: "0" },
  "title-md": { fontSize: "16px", lineHeight: "24px", letterSpacing: "0.15px" },
  "title-sm": { fontSize: "14px", lineHeight: "20px", letterSpacing: "0.1px" },
  "label-lg": { fontSize: "14px", lineHeight: "20px", letterSpacing: "0.1px" },
  "label-md": { fontSize: "12px", lineHeight: "16px", letterSpacing: "0.5px" },
  "label-sm": { fontSize: "11px", lineHeight: "16px", letterSpacing: "0.5px" },
  "body-lg": { fontSize: "16px", lineHeight: "24px", letterSpacing: "0.5px" },
  "body-md": { fontSize: "14px", lineHeight: "20px", letterSpacing: "0.25px" },
  "body-sm": { fontSize: "12px", lineHeight: "16px", letterSpacing: "0.4px" },
  "button": { fontSize: "16px", lineHeight: "24px", letterSpacing: "0" }
};

function getTypoClasses(
  weight: TypoWeight = "normal",
  muted?: boolean,
  className?: string
): string {
  const base = "text-current";

  const weights: Record<TypoWeight, string> = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold"
  };

  return [
    base,
    weights[weight],
    muted ? "text-[var(--muted-fg)]" : "",
    className
  ].filter(Boolean).join(" ");
}

export type TypoProps<T extends React.ElementType = "span"> = {
  /**
   * Typography scale name (e.g., "title-md", "body-sm", "display-lg").
   * Uses Tailwind utilities with design tokens for consistent theming.
   */
  variant: TypoVariant;
  /** Optional font weight override */
  bold?: TypoWeight;
  /** Use muted foreground token */
  muted?: boolean;
  /** Render as a different element (e.g., "p", "h3") */
  as?: T;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;

export default function Typo<T extends React.ElementType = "span">({
  variant,
  bold,
  muted,
  as,
  className,
  children,
  style,
  ...props
}: TypoProps<T>) {
  const Component = (as ?? "span") as React.ElementType;
  
  // Determine font family based on variant
  const getFontFamily = (variant: TypoVariant) => {
    if (variant.startsWith("body")) {
      return "var(--font-body)";
    }
    return "var(--font-display)";
  };
  
  // Get typography styles for this variant
  const variantStyles = typoStyles[variant];
  
  // Merge user styles with component styles, preserving typography specs
  const mergedStyle: React.CSSProperties = {
    ...style,
    fontFamily: getFontFamily(variant),
    fontSize: variantStyles.fontSize,
    lineHeight: variantStyles.lineHeight,
    letterSpacing: variantStyles.letterSpacing,
  };
  
  return (
    <Component
      className={getTypoClasses(bold, muted, className)}
      style={mergedStyle}
      {...props}
    >
      {children}
    </Component>
  );
}
