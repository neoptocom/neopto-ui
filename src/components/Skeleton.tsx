import * as React from "react";

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
};

const roundMap: Record<NonNullable<SkeletonProps["rounded"]>, string> = {
  none: "rounded-none",
  sm: "rounded",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
};

export function Skeleton({ className = "", rounded = "md", ...props }: SkeletonProps) {
  return (
    <div
      className={[
        "animate-pulse bg-[var(--muted)]",
        roundMap[rounded],
        className
      ].join(" ")}
      {...props}
    />
  );
}


