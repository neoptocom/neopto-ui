import * as React from "react";
import Icon from "./Icon";

export type ChipProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "warning" | "success" | "error" | "light" | "dark";
  icon?: string;
  label?: string;
  /** Custom text color (overrides variant) */
  textColor?: string;
  /** Tailwind class for background color (overrides variant) */
  bgClassName?: string;
  /** Title attribute for tooltip */
  title?: string;
  /** Optional handler to render a delete affordance */
  onDelete?: React.MouseEventHandler<HTMLButtonElement>;
};

/**
 * Detects if a Tailwind background class represents a light or dark background
 * and returns the appropriate text color class for optimal contrast.
 */
function getTextColorForBackground(bgClassName: string | undefined): string {
  if (!bgClassName) return "";

  // Named light colors - use dark text
  const lightColors = [
    "white",
    "gray-50",
    "gray-100",
    "slate-50",
    "slate-100",
    "zinc-50",
    "zinc-100",
    "neutral-50",
    "neutral-100",
    "stone-50",
    "stone-100"
  ];

  // Named dark colors - use white text
  const darkColors = [
    "black",
    "gray-900",
    "gray-950",
    "slate-900",
    "slate-950",
    "zinc-900",
    "zinc-950",
    "neutral-900",
    "neutral-950",
    "stone-900",
    "stone-950"
  ];

  // Check for named colors
  for (const lightColor of lightColors) {
    if (bgClassName.includes(lightColor)) {
      return "text-gray-900";
    }
  }

  for (const darkColor of darkColors) {
    if (bgClassName.includes(darkColor)) {
      return "text-white";
    }
  }

  // Extract shade number from patterns like bg-blue-500, bg-purple-200, etc.
  const shadeMatch = bgClassName.match(/-(\d{2,3})/);
  if (shadeMatch) {
    const shade = parseInt(shadeMatch[1], 10);
    // Shades 100-400 are typically light, use dark text
    if (shade >= 100 && shade <= 400) {
      return "text-gray-900";
    }
    // Shades 500-950 are typically dark, use white text
    if (shade >= 500) {
      return "text-white";
    }
  }

  // Default to white text if pattern is unclear (safer for most backgrounds)
  return "text-white";
}

export default function Chip({
  variant = "success",
  icon,
  className = "",
  label,
  textColor,
  bgClassName,
  title,
  style,
  onDelete,
  ...props
}: ChipProps) {
  const base =
    "inline-flex w-fit items-center justify-center gap-1 whitespace-nowrap overflow-hidden rounded-full h-6 px-2 " +
    "text-xs font-semibold";

  // Token-based backgrounds + readable text (only used if no custom colors)
  const variantCls: Record<NonNullable<ChipProps["variant"]>, string> = {
    warning: "bg-[var(--warning)] text-white",
    success: "bg-[var(--success)] text-white",
    error: "bg-[var(--destructive)] text-white",
    light: "bg-[var(--muted)] text-[var(--fg)]",
    dark: "bg-[var(--surface)] text-[var(--fg)]"
  };

  // Use bgClassName if provided, otherwise use custom text color, otherwise use variant styles
  const hasCustomTextColor = !!textColor;
  const hasBgClassName = !!bgClassName;
  const colorClasses = hasBgClassName ? "" : hasCustomTextColor ? "" : variantCls[variant];

  // Automatically detect text color for custom background classes
  const autoTextColor = hasBgClassName && !textColor ? getTextColorForBackground(bgClassName) : "";

  // Merge custom text color into style prop
  const mergedStyle: React.CSSProperties = {
    ...style,
    ...(textColor && { color: textColor })
  };

  return (
    <div
      className={[base, colorClasses, bgClassName, autoTextColor, className].join(" ")}
      style={mergedStyle}
      title={title}
      {...props}
    >
      {icon ? <Icon name={icon} size="sm" className="mr-0.5 flex-shrink-0" /> : null}
      <span className="truncate">{label}</span>
      {onDelete ? (
        <button
          type="button"
          onClick={onDelete}
          className="ml-1 flex h-4 w-4 items-center justify-center rounded-full transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-black/30 flex-shrink-0"
          aria-label="Remove"
        >
          <Icon name="close" size="sm" />
        </button>
      ) : null}
    </div>
  );
}


