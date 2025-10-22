import * as React from "react";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, ...props }, ref) => {
    return (
      <input
        ref={ref}
        disabled={disabled}
        className={[
          "w-full h-12 px-4 rounded-full border bg-transparent outline-none transition-colors",
          "text-sm placeholder:text-[var(--muted-fg)]",
          disabled
            ? "border-[#3F424F] text-[#3F424F] cursor-not-allowed"
            : [
                "text-[var(--muted-fg)]",
                "border-[var(--muted-fg)]",
                "hover:border-[var(--border)]",
                "focus:border-[var(--color-brand)] focus:text-[var(--fg)]"
              ].join(" "),
          className
        ].join(" ")}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
