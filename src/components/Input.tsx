import * as React from "react";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  /** Input visual variant */
  variant?: "default" | "borderless";
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, variant = "default", ...props }, ref) => {
    const isBorderless = variant === "borderless";
    
    return (
      <input
        ref={ref}
        disabled={disabled}
        className={[
          "w-full h-12 px-4 rounded-full bg-transparent outline-none transition-colors",
          "text-sm placeholder:text-[var(--muted-fg)]",
          !isBorderless && "border",
          disabled
            ? "text-[#3F424F] cursor-not-allowed" + (isBorderless ? "" : " border-[#3F424F]")
            : [
                "text-[var(--muted-fg)]",
                isBorderless ? "" : "border-[var(--muted-fg)]",
                isBorderless ? "" : "hover:border-[var(--border)]",
                "focus:text-[var(--fg)]",
                isBorderless ? "" : "focus:border-[var(--color-brand)]"
              ].join(" "),
          className
        ].join(" ")}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
