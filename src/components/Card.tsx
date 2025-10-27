import * as React from "react";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Content to render inside the card */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Show decorative elements (default: true) */
  showDecorations?: boolean;
};

export function Card({
  children,
  className = "",
  style,
  showDecorations = true,
  ...props
}: CardProps) {
  // Merge user styles with card styles
  const mergedStyle: React.CSSProperties = {
    borderRadius: "30px",
    backgroundColor: "color-mix(in srgb, var(--surface) 85%, transparent)",
    backdropFilter: "blur(75px)",
    WebkitBackdropFilter: "blur(75px)", // Safari support
    color: "var(--fg)",
    position: "relative",
    overflow: "hidden",
    transition: "background-color 0.3s ease, color 0.3s ease",
    ...style,
  };

  // Smart class merging: only add default padding if not provided
  const hasPadding = className && /\b(p-|px-|py-|pt-|pb-|pl-|pr-)\d/.test(className);
  const cardClasses = `${!hasPadding ? "p-6" : ""} ${className || ""}`.trim();

  return (
    <div
      className={cardClasses}
      style={mergedStyle}
      {...props}
    >
      {showDecorations && (
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 0,
          }}
          viewBox="0 0 967 745"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="paint0_linear_card" x1="109" y1="744.5" x2="855" y2="744.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4BDD74" stopOpacity="0"/>
              <stop offset="0.5" stopColor="#4BDD74"/>
              <stop offset="1" stopColor="#4BDD74" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_card" x1="967.5" y1="10" x2="967.5" y2="652" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4BDD74" stopOpacity="0"/>
              <stop offset="0.5" stopColor="#4BDD74"/>
              <stop offset="1" stopColor="#4BDD74" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint2_linear_card" x1="877" y1="0.5" x2="90" y2="0.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4BDD74" stopOpacity="0"/>
              <stop offset="0.5" stopColor="#4BDD74"/>
              <stop offset="1" stopColor="#4BDD74" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint3_linear_card" x1="0.5" y1="34.5136" x2="0.5" y2="731.595" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4BDD74" stopOpacity="0"/>
              <stop offset="0.5" stopColor="#4BDD74"/>
              <stop offset="1" stopColor="#4BDD74" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <g clipPath="url(#clip0_card)"><line opacity="0.8" x1="855" y1="744.5" x2="109" y2="744.5" stroke="url(#paint0_linear_card)"/>
            <line x1="965.5" y1="652" x2="965.5" y2="10" stroke="url(#paint1_linear_card)"/>
          </g>
          <line opacity="0.6" x1="90" y1="0.5" x2="877" y2="0.5" stroke="url(#paint2_linear_card)"/>
          <line x1="0.5" y1="731.595" x2="0.500027" y2="34.5136" stroke="url(#paint3_linear_card)"/>
          <defs>
            <clipPath id="clip0_card">
              <rect width="966" height="744" rx="10" transform="matrix(-1 0 0 1 967 1)" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      )}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
