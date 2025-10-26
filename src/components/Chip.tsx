import * as React from "react";
import Icon from "./Icon";

export type ChipProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "warning" | "success" | "error" | "light" | "dark";
  icon?: string;
  label?: string;
  /** Custom background color (overrides variant) */
  backgroundColor?: string;
  /** Custom text color (overrides variant) */
  textColor?: string;
};

export default function Chip({
  variant = "success",
  icon,
  className = "",
  label,
  backgroundColor,
  textColor,
  style,
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

  // Use custom colors if provided, otherwise use variant styles
  const hasCustomColors = backgroundColor || textColor;
  const colorClasses = hasCustomColors ? "" : variantCls[variant];

  // Merge custom colors into style prop
  const mergedStyle: React.CSSProperties = {
    ...style,
    ...(backgroundColor && { backgroundColor }),
    ...(textColor && { color: textColor }),
  };

  return (
    <div 
      className={[base, colorClasses, className].join(" ")} 
      style={mergedStyle}
      {...props}
    >
      {icon ? <Icon name={icon} size="sm" className="mr-0.5" /> : null}
      <span>{label}</span>
    </div>
  );
}


