import * as React from "react";

export type SpinnerProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
};

const sizeMap = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-10 w-10 border-[3px]",
} as const;

export function Spinner({
  size = "md",
  className = "",
  label = "Loading",
}: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label={label}
      className={[
        "inline-block animate-spin rounded-full border-[var(--muted)] border-t-[var(--color-brand)]",
        sizeMap[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

export type LoadingDotsProps = {
  className?: string;
  label?: string;
};

export function LoadingDots({
  className = "",
  label = "Loading",
}: LoadingDotsProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={["flex items-center justify-center gap-1", className]
        .filter(Boolean)
        .join(" ")}
    >
      {[0, 1, 2].map((delay) => (
        <span
          key={delay}
          className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--muted-fg)]"
          style={{ animationDelay: `${delay * 160}ms`, animationDuration: "1.2s" }}
        />
      ))}
    </div>
  );
}
