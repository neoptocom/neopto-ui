import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import Icon from "./Icon";

const iconButtonStyles = tv({
  base: [
    "flex items-center justify-center rounded-full flex-shrink-0",
    "transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "focus-visible:ring-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-50"
  ].join(" "),
  variants: {
    variant: {
      ghost: "bg-transparent hover:bg-[var(--muted)] active:bg-[var(--muted)]",
      primary: "bg-cyan-500 text-white hover:bg-cyan-400 active:bg-cyan-600",
      secondary: "border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--muted)] active:bg-[var(--muted)]"
    },
    size: {
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-12 h-12"
    }
  },
  defaultVariants: {
    variant: "ghost",
    size: "md"
  }
});

type IconButtonVariants = VariantProps<typeof iconButtonStyles>;

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  IconButtonVariants & {
    /** Material Symbols icon name */
    icon: string;
    /** Icon size (defaults to button size) */
    iconSize?: "sm" | "md" | "lg";
    /** Icon fill (0 = outlined, 1 = filled) */
    iconFill?: 0 | 1;
    /** Optional custom className for the icon */
    iconClassName?: string;
  };

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant,
      size,
      icon,
      iconSize,
      iconFill = 0,
      iconClassName,
      className,
      ...props
    },
    ref
  ) => {
    // Map button size to icon size if not explicitly provided
    const defaultIconSize = size === "sm" ? "sm" : size === "lg" ? "lg" : "md";
    const effectiveIconSize = iconSize ?? defaultIconSize;

    // Icon color based on variant (can be overridden by iconClassName)
    const defaultIconColorClass =
      variant === "primary"
        ? "text-white"
        : variant === "secondary"
        ? "text-[var(--fg)]"
        : "text-[var(--muted-fg)]";

    const finalIconClassName = iconClassName ?? defaultIconColorClass;

    return (
      <button
        ref={ref}
        className={iconButtonStyles({ variant, size, className })}
        {...props}
      >
        <Icon
          name={icon}
          size={effectiveIconSize}
          fill={iconFill}
          className={finalIconClassName}
        />
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

