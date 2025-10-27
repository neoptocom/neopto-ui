import * as React from "react";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Content to render inside the card */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
};

export function Card({
  children,
  className = "",
  style,
  ...props
}: CardProps) {
  // Merge user styles with card styles
  const mergedStyle: React.CSSProperties = {
    borderRadius: "30px",
    background: "rgba(112, 133, 233, 0.05)",
    backdropFilter: "blur(75px)",
    WebkitBackdropFilter: "blur(75px)", // Safari support
    ...style,
  };

  return (
    <div
      className={`p-6 ${className}`}
      style={mergedStyle}
      {...props}
    >
      {children}
    </div>
  );
}

