import * as React from "react";
import Icon from "./Icon";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  /** Input visual variant */
  variant?: "default" | "inline";
  /** Optional floating label (renders a fieldset wrapper when provided) */
  label?: string;
  /** Additional props for the surrounding fieldset when label is set */
  fieldsetProps?: React.FieldsetHTMLAttributes<HTMLFieldSetElement>;
  /** Additional props for the legend when label is set */
  legendProps?: React.HTMLAttributes<HTMLLegendElement>;
  /** Flag to visually mark the input as errored */
  error?: boolean;
  /** Optional icon name to display on the inner right of the input */
  icon?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      disabled,
      variant = "default",
      label,
      fieldsetProps,
      legendProps,
      error = false,
      icon,
      ...props
    },
    ref
  ) => {
    const isInlineVariant = variant === "inline";
    const shouldUseInlineStyles = isInlineVariant || Boolean(label);
    const isError = error && !disabled;
    const hasIcon = Boolean(icon);

    const inputClasses: string[] = [
      "w-full bg-transparent outline-none transition-colors",
      shouldUseInlineStyles ? "h-9" : "h-12 rounded-full",
      shouldUseInlineStyles 
        ? (hasIcon ? "pr-8" : "") 
        : (hasIcon ? "px-4 pr-10" : "px-4"),
      "font-['Poppins'] text-sm placeholder:text-[var(--muted-fg)]"
    ];

    if (!shouldUseInlineStyles) {
      inputClasses.push("border");
    }

    if (disabled) {
      inputClasses.push("text-[#3F424F]", "cursor-not-allowed");
      if (!shouldUseInlineStyles) {
        inputClasses.push("border-[#3F424F]");
      }
    } else {
      inputClasses.push("text-[var(--muted-fg)]", "focus:text-[var(--fg)]");
      if (!shouldUseInlineStyles) {
        inputClasses.push(
          isError ? "border-[var(--destructive)]" : "border-[var(--muted-fg)]",
          isError ? "hover:border-[var(--destructive)]" : "hover:border-[var(--border)]",
          isError ? "focus:border-[var(--destructive)]" : "focus:border-[var(--color-brand)]"
        );
      }
    }

    if (className) {
      inputClasses.push(className);
    }

    const inputClassName = inputClasses.join(" ");

    const inputElement = (
      <input ref={ref} disabled={disabled} className={inputClassName} {...props} />
    );

    // Standalone input (no label)
    if (!label) {
      if (hasIcon) {
        return (
          <div className="relative">
            {inputElement}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <Icon name={icon!} className="text-[var(--muted-fg)] opacity-50" />
            </div>
          </div>
        );
      }
      return inputElement;
    }

    const { className: fieldsetClassNameProp = "", ...restFieldsetProps } = fieldsetProps ?? {};

    const { className: legendClassNameProp = "", ...restLegendProps } = legendProps ?? {};

    const fieldsetClassName = [
      "w-full min-w-0 rounded-full border bg-[var(--surface)] transition-colors h-14",
      isError ? "border-[var(--destructive)]" : "border-[var(--border)]",
      isError
        ? "focus-within:border-[var(--destructive)]"
        : "focus-within:border-[var(--color-brand)]",
      disabled ? "opacity-60 cursor-not-allowed" : "",
      fieldsetClassNameProp
    ]
      .filter(Boolean)
      .join(" ");

    const legendColorClass = disabled
      ? "text-[var(--muted-fg)]"
      : isError
      ? "text-[var(--destructive)]"
      : "text-[var(--muted-fg)]";

    const legendClassNameCombined = [
      "ml-4 px-1 text-sm leading-none relative font-normal select-none",
      legendColorClass,
      legendClassNameProp
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <fieldset
        {...restFieldsetProps}
        className={fieldsetClassName}
      >
        <legend
          {...restLegendProps}
          className={legendClassNameCombined}
        >
          {label}
        </legend>
        <div className="relative flex pl-5 pr-3 pb-1 h-full">
          <div className="flex w-full relative">
            {inputElement}
            {hasIcon && (
              <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none">
                <Icon name={icon!} className="text-[var(--muted-fg)] opacity-50" />
              </div>
            )}
          </div>
        </div>
      </fieldset>
    );
  }
);
Input.displayName = "Input";
