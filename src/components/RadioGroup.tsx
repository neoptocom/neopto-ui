import * as React from "react";

export type RadioOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type RadioGroupProps = {
  name: string;
  options: RadioOption[];
  value: string | null;
  onChange: (value: string) => void;
  className?: string;
  orientation?: "vertical" | "horizontal";
};

export function RadioGroup({
  name,
  options,
  value,
  onChange,
  className = "",
  orientation = "vertical",
}: RadioGroupProps) {
  return (
    <div
      role="radiogroup"
      className={[
        "flex gap-3",
        orientation === "vertical" ? "flex-col" : "flex-row flex-wrap",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {options.map((option) => {
        const id = `${name}-${option.value}`;
        const selected = value === option.value;
        return (
          <label
            key={option.value}
            htmlFor={id}
            className={[
              "inline-flex items-center gap-2.5 text-sm",
              option.disabled
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer",
            ].join(" ")}
          >
            <span className="relative inline-flex h-[18px] w-[18px] items-center justify-center">
              <input
                type="radio"
                id={id}
                name={name}
                value={option.value}
                checked={selected}
                disabled={option.disabled}
                onChange={() => onChange(option.value)}
                className="peer h-[18px] w-[18px] appearance-none rounded-full border-2 border-[var(--border)] checked:border-[var(--color-brand)]"
              />
              <span className="pointer-events-none absolute h-2.5 w-2.5 rounded-full bg-[var(--color-brand)] opacity-0 peer-checked:opacity-100" />
            </span>
            <span className="text-[var(--fg)]">{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}

export default RadioGroup;
