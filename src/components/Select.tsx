import * as React from "react";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { IconButton } from "./IconButton";
import Typo from "./Typo";

export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type SelectProps = {
  title: string;
  options: SelectOption[] | string[];
  value: SelectOption | string | null;
  onChange: (option: SelectOption | string | null) => void;
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  error?: boolean;
  className?: string;
  id?: string;
  maxHeight?: number;
};

function normalizeOptions(options: SelectOption[] | string[]): SelectOption[] {
  if (Array.isArray(options) && typeof options[0] === "string") {
    return (options as string[]).map((str) => ({ label: str, value: str }));
  }
  return options as SelectOption[];
}

function optionLabel(option: SelectOption | string | null) {
  if (!option) return "";
  return typeof option === "string" ? option : option.label;
}

export function Select({
  title,
  options,
  value,
  onChange,
  placeholder = "",
  disabled = false,
  clearable = true,
  error = false,
  className = "",
  id,
  maxHeight = 180,
}: SelectProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const listboxId = `${inputId}-listbox`;
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);

  const normalized = useMemo(() => normalizeOptions(options), [options]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return normalized;
    return normalized.filter((option) =>
      option.label.toLowerCase().includes(q)
    );
  }, [normalized, query]);

  const displayValue = value != null ? optionLabel(value) : query;

  useEffect(() => {
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, []);

  const handleSelect = (option: SelectOption) => {
    if (option.disabled) return;
    onChange(option);
    setQuery("");
    setOpen(false);
    setActiveIndex(-1);
  };

  return (
    <div
      ref={rootRef}
      className={["relative w-full", className].filter(Boolean).join(" ")}
    >
      <fieldset
        className={[
          "h-14 w-full min-w-0 rounded-full border bg-[var(--surface)] transition-colors",
          error
            ? "border-[var(--destructive)]"
            : "border-[var(--border)] focus-within:border-[var(--color-brand)]",
          disabled ? "cursor-not-allowed opacity-60" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <legend className="relative ml-4 px-1 text-sm leading-none">
          <Typo
            variant="label-lg"
            className={[
              "select-none font-normal",
              error
                ? "text-[var(--destructive)]"
                : open
                  ? "text-[var(--color-brand)]"
                  : "text-[var(--muted-fg)]",
            ].join(" ")}
          >
            {title}
          </Typo>
        </legend>
        <div className="relative flex h-full pb-1 pl-5 pr-3">
          <input
            id={inputId}
            role="combobox"
            aria-expanded={open}
            aria-controls={listboxId}
            disabled={disabled}
            value={displayValue}
            placeholder={placeholder}
            onChange={(e) => {
              setQuery(e.target.value);
              if (value != null) onChange(null);
              setOpen(true);
              setActiveIndex(0);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={(e) => {
              if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
                setOpen(true);
                setActiveIndex(0);
                e.preventDefault();
                return;
              }
              if (!open) return;
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActiveIndex((i) => Math.max(i - 1, 0));
              } else if (e.key === "Enter") {
                e.preventDefault();
                const item = filtered[activeIndex];
                if (item) handleSelect(item);
              } else if (e.key === "Escape") {
                setOpen(false);
              }
            }}
            className="w-full rounded-full border-0 bg-transparent pr-8 text-sm text-[var(--fg)] outline-none placeholder:text-[var(--muted-fg)]"
          />
          <IconButton
            icon={clearable && value != null && !open ? "close" : "expand_more"}
            disabled={disabled}
            aria-label={clearable && value != null && !open ? "Clear" : "Toggle"}
            className="absolute right-1 top-[-20%]"
            iconClassName={[
              "text-[var(--muted-fg)] transition-transform duration-300",
              open ? "rotate-180 text-[var(--color-brand)]" : "",
            ].join(" ")}
            onClick={() => {
              if (clearable && value != null && !open) {
                onChange(null);
                setQuery("");
                return;
              }
              setOpen((prev) => !prev);
            }}
          />
        </div>
      </fieldset>

      {open && !disabled ? (
        <div
          className="absolute z-20 mt-2 w-full overflow-y-auto rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-md"
          style={{ maxHeight }}
        >
          {filtered.length > 0 ? (
            <ul id={listboxId} role="listbox">
              {filtered.map((option, index) => {
                const selected =
                  value != null &&
                  (typeof value === "string"
                    ? value === option.value || value === option.label
                    : value.value === option.value);
                return (
                  <li
                    key={`${option.value}-${index}`}
                    role="option"
                    aria-selected={selected}
                    aria-disabled={option.disabled}
                    className={[
                      "cursor-pointer px-4 py-2 text-sm transition-colors",
                      index !== filtered.length - 1
                        ? "border-b border-[var(--border)]"
                        : "",
                      option.disabled ? "cursor-not-allowed opacity-50" : "",
                      index === activeIndex || selected
                        ? "bg-[var(--muted)]"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleSelect(option)}
                  >
                    <Typo variant="label-lg" className="font-normal">
                      {option.label}
                    </Typo>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="px-4 py-3">
              <Typo variant="body-sm" className="text-[var(--muted-fg)]">
                No results found
              </Typo>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Select;
