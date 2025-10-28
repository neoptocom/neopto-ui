import * as React from "react";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  /** Input visual variant */
  variant?: "default" | "inline";
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, variant = "default", ...props }, ref) => {
    const isInline = variant === "inline";
    
    return (
      <input
        ref={ref}
        disabled={disabled}
        className={[
          "w-full bg-transparent outline-none transition-colors",
          isInline ? "" : "h-12 px-4 rounded-full",
          "text-sm placeholder:text-[var(--muted-fg)]",
          !isInline && "border",
          disabled
            ? "text-[#3F424F] cursor-not-allowed" + (isInline ? "" : " border-[#3F424F]")
            : [
                "text-[var(--muted-fg)]",
                isInline ? "" : "border-[var(--muted-fg)]",
                isInline ? "" : "hover:border-[var(--border)]",
                "focus:text-[var(--fg)]",
                isInline ? "" : "focus:border-[var(--color-brand)]"
              ].join(" "),
          className
        ].join(" ")}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
