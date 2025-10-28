import * as React from "react";

export type TextareaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> & {
  /** Textarea visual variant */
  variant?: "default" | "inline";
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, disabled, variant = "default", ...props }, ref) => {
    const isInline = variant === "inline";
    
    return (
      <textarea
        ref={ref}
        disabled={disabled}
        className={[
          "w-full bg-transparent outline-none transition-colors resize-y",
          isInline ? "" : "min-h-[96px] px-4 py-3 rounded-3xl",
          "font-['Poppins'] text-sm placeholder:text-[var(--muted-fg)]",
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
Textarea.displayName = "Textarea";

