import * as React from "react";
import { useState, useMemo } from "react";
import Typo from "./Typo";

export type AvatarProps = {
  /** Person's full name (used for initials and alt text) */
  name: string;
  /** Image URL */
  src?: string;
  /** Optional custom background color (CSS color). If omitted, token bg or a derived pastel is used. */
  color?: string;
  /** Accessible alt text; defaults to the person's name */
  alt?: string;
  /** Avatar size */
  size?: "sm" | "md";
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">;

function getAvatarClasses(size: AvatarProps["size"] = "md", className?: string): string {
  const base =
    "relative box-border flex items-center justify-center overflow-hidden rounded-full " +
    "border border-[var(--border)] bg-[var(--muted)] text-[var(--fg)] select-none";

  const sizes = {
    sm: "w-[28px] h-[28px]",
    md: "w-[60px] h-[60px]"
  };

  return [base, sizes[size], className].filter(Boolean).join(" ");
}

function getInitials(name: string) {
  if (!name) return "…";
  const words = name.trim().split(/\s+/);
  if (words.length === 1) return (words[0][0] ?? "").toUpperCase();
  return ((words[0][0] ?? "") + (words[words.length - 1][0] ?? "")).toUpperCase();
}

export default function Avatar({
  name,
  src,
  color,
  size,
  alt,
  className,
  style,
  ...props
}: AvatarProps) {
  const [imgError, setImgError] = useState(false);
  const initials = useMemo(() => getInitials(name), [name]);
  const computedStyle = useMemo<React.CSSProperties>(() => {
    const s: React.CSSProperties = { ...style };
    if (color) s.backgroundColor = color;
    return s;
  }, [color, style]);

  const textVariant = size === "sm" ? ("label-md" as const) : ("headline-md" as const);

  const showImage = !!src && !imgError;

  return (
    <div
      className={getAvatarClasses(size, className)}
      aria-label={alt ?? name}
      role="img"
      {...props}
      style={computedStyle}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt ?? name}
          className="absolute inset-0 h-full w-full object-cover rounded-full"
          onError={() => setImgError(true)}
          draggable={false}
        />
      ) : (
        <Typo variant={textVariant} bold="medium" className="pointer-events-none">
          {initials}
        </Typo>
      )}
    </div>
  );
}
