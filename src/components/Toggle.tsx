import * as React from "react";

export type ToggleProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
  className?: string;
  "aria-label"?: string;
};

export function Toggle({
  checked,
  onCheckedChange,
  disabled = false,
  id,
  className = "",
  "aria-label": ariaLabel,
}: ToggleProps) {
  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={() => {
        if (disabled) return;
        onCheckedChange(!checked);
      }}
      className={[
        "inline-flex h-5 w-10 items-center rounded-full p-0.5 transition-colors",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40",
        checked ? "bg-[var(--color-brand)]" : "bg-[var(--muted)]",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        className={[
          "h-4 w-4 rounded-full bg-white shadow transition-transform duration-300",
          checked ? "translate-x-5" : "translate-x-0",
        ].join(" ")}
      />
    </button>
  );
}

export default Toggle;
