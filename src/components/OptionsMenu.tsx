import * as React from "react";
import { useEffect, useRef } from "react";

export type OptionsMenuItem = {
  label: string;
  onSelect?: () => void;
  disabled?: boolean;
};

export type OptionsMenuProps = {
  open: boolean;
  onClose: () => void;
  items: OptionsMenuItem[];
  /** Absolute viewport position for the menu anchor */
  position?: { x: number; y: number } | null;
  className?: string;
  /** Prefer aligning the menu to the left of the point (default: true) */
  align?: "left" | "right";
};

export function OptionsMenu({
  open,
  onClose,
  items,
  position,
  className = "",
  align = "left",
}: OptionsMenuProps) {
  const ref = useRef<HTMLDivElement>(null);
  const menuWidth = 192;

  useEffect(() => {
    if (!open) return;
    const handlePointer = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        onClose();
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("mousedown", handlePointer);
    window.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open || !position) return null;

  const left =
    align === "left" ? position.x - menuWidth : position.x;

  return (
    <div
      ref={ref}
      role="menu"
      className={[
        "fixed z-50 flex w-48 flex-col rounded-2xl border border-[var(--border)]",
        "bg-[var(--surface)] p-2 text-sm shadow-[var(--shadow-elevated)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ left, top: position.y }}
    >
      {items.map((item, index) => {
        const disabled = item.disabled || !item.onSelect;
        return (
          <button
            key={`${item.label}-${index}`}
            type="button"
            role="menuitem"
            disabled={disabled}
            onClick={() => {
              if (disabled) return;
              item.onSelect?.();
              onClose();
            }}
            className={[
              "w-full rounded-xl px-3 py-2 text-left transition-colors",
              index !== items.length - 1 ? "border-b border-[var(--border)]" : "",
              disabled
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer hover:bg-[var(--muted)]",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export default OptionsMenu;
