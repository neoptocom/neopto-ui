import * as React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    /** Button visual variant */
    variant?: "primary" | "secondary" | "ghost";
    /** Button size */
    size?: "sm" | "md" | "lg";
    /** Make button full width */
    fullWidth?: boolean;
    /** Icon component to display instead of text */
    icon?: React.ReactNode;
};

function getButtonClasses(
    variant: ButtonProps["variant"] = "primary",
    size: ButtonProps["size"] = "md",
    fullWidth?: boolean,
    className?: string
): string {
    const base = 
        "cursor-pointer inline-flex items-center justify-center gap-2 rounded-[var(--radius-2xl)] transition-colors " +
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500/40 " +
        "disabled:cursor-not-allowed disabled:opacity-50";

    const variants = {
        primary: "bg-cyan-500 text-white hover:bg-cyan-400 active:bg-cyan-600 disabled:bg-neutral-400",
        secondary: "border border-cyan-500 text-cyan-500 bg-transparent hover:bg-cyan-50 active:bg-cyan-100 disabled:border-neutral-400 disabled:text-neutral-400",
        ghost: "bg-transparent text-[var(--fg)] hover:bg-[var(--muted)] active:bg-[var(--muted)] disabled:opacity-50"
    };

    const sizes = {
        sm: "h-9 px-3",
        md: "h-12 px-[18px]",
        lg: "h-14 px-6"
    };

    return [
        base,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className
    ].filter(Boolean).join(" ");
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant, size, fullWidth, className, children, icon, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={getButtonClasses(variant, size, fullWidth, className)}
                {...props}
            >
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";
