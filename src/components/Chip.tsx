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
  /** Optional handler to render a delete affordance */
  onDelete?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Chip({
  variant = "success",
  icon,
  className = "",
  label,
  backgroundColor,
  textColor,
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

  // Use custom colors if provided, otherwise use variant styles
  const hasCustomColors = backgroundColor || textColor;
  const colorClasses = hasCustomColors ? "" : variantCls[variant];

  // Merge custom colors into style prop
  const mergedStyle: React.CSSProperties = {
    ...style,
    ...(backgroundColor && { backgroundColor }),
    ...(textColor && { color: textColor })
  };

  return (
    <div
      className={[base, colorClasses, className].join(" ")}
      style={mergedStyle}
      {...props}
    >
      {icon ? <Icon name={icon} size="sm" className="mr-0.5" /> : null}
      <span>{label}</span>
      {onDelete ? (
        <button
          type="button"
          onClick={onDelete}
          className="ml-1 flex h-4 w-4 items-center justify-center rounded-full transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-black/30"
          aria-label="Remove"
        >
          <Icon name="close" size="sm" />
        </button>
      ) : null}
    </div>
  );
}


