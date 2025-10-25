import * as React from "react";

export type TypoVariant =
  | "display-lg" | "display-md" | "display-sm"
  | "headline-lg" | "headline-md" | "headline-sm"
  | "title-lg" | "title-md" | "title-sm"
  | "label-lg" | "label-md" | "label-sm"
  | "body-lg" | "body-md" | "body-sm"
  | "button";

export type TypoWeight = "normal" | "medium" | "semibold" | "bold";

function getTypoClasses(
  variant: TypoVariant,
  weight: TypoWeight = "normal",
  muted?: boolean,
  className?: string
): string {
  const base = "text-current";

  const variants: Record<TypoVariant, string> = {
    "display-lg": "text-5xl leading-tight",
    "display-md": "text-4xl leading-tight",
    "display-sm": "text-4xl leading-tight",
    "headline-lg": "text-3xl leading-tight",
    "headline-md": "text-3xl leading-tight",
    "headline-sm": "text-3xl leading-tight",
    "title-lg": "text-xl leading-tight",
    "title-md": "text-lg leading-tight",
    "title-sm": "text-base leading-tight",
    "label-lg": "text-sm leading-tight",
    "label-md": "text-xs leading-tight",
    "label-sm": "text-xs leading-tight",
    "body-lg": "text-base leading-relaxed",
    "body-md": "text-sm leading-relaxed",
    "body-sm": "text-xs leading-relaxed",
    "button": "text-base leading-normal"
  };

  const weights: Record<TypoWeight, string> = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold"
  };

  return [
    base,
    variants[variant],
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
  
  return (
    <Component
      className={getTypoClasses(variant, bold, muted, className)}
      style={{ fontFamily: getFontFamily(variant) }}
      {...props}
    >
      {children}
    </Component>
  );
}
