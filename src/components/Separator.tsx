import * as React from "react";

export type SeparatorProps = {
  className?: string;
};

export function Separator({ className = "" }: SeparatorProps) {
  return (
    <div className={`w-full my-1.5 h-px bg-[var(--border)] ${className}`} />
  );
}

