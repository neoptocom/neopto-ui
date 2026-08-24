import * as React from "react";
import { Check, Minus } from "lucide-react";

export type CheckboxProps = {
  id?: string;
  name?: string;
  label?: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  /** Show indeterminate state (e.g. partial table selection) */
  indeterminate?: boolean;
  className?: string;
};

export function Checkbox({
  id,
  name,
  label,
  checked,
  onCheckedChange,
  disabled = false,
  indeterminate = false,
  className = "",
}: CheckboxProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate && !checked;
    }
  }, [indeterminate, checked]);

  const showCheck = checked || indeterminate;

  return (
    <label
      htmlFor={id}
      className={[
        "relative inline-flex max-w-max items-center gap-2.5 text-sm",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <input
        ref={inputRef}
        type="checkbox"
        id={id}
        name={name}
        disabled={disabled}
        checked={checked}
        onChange={(e) => {
          e.stopPropagation();
          if (disabled) return;
          onCheckedChange(e.target.checked);
        }}
        className={[
          "peer h-[18px] w-[18px] appearance-none rounded-md border-2 border-[var(--border)] bg-transparent",
          "checked:border-transparent checked:bg-[var(--color-brand)]",
          disabled ? "cursor-not-allowed" : "cursor-pointer",
        ].join(" ")}
      />
      <span
        className={[
          "pointer-events-none absolute left-[3px] top-1/2 -translate-y-1/2 text-white",
          showCheck ? "block" : "hidden",
        ].join(" ")}
      >
        {indeterminate && !checked ? (
          <Minus size={12} strokeWidth={3} />
        ) : (
          <Check size={12} strokeWidth={3} />
        )}
      </span>
      {label ? <span className="text-[var(--fg)]">{label}</span> : null}
    </label>
  );
}

export default Checkbox;
