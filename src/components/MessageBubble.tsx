import * as React from "react";

export type MessageBubbleProps = {
  /** Direction of the message bubble, affects border radius */
  direction?: "left" | "right";
  /** Custom background color (CSS color value) */
  color?: string;
  /** Content to display inside the bubble */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
};

export const MessageBubble = React.forwardRef<HTMLDivElement, MessageBubbleProps>(
  ({ direction, color, children, className, ...props }, ref) => {
    const borderRadiusClass = 
      direction === "left" 
        ? "[border-radius:16px_16px_16px_2px]" 
        : direction === "right"
        ? "[border-radius:16px_16px_2px_16px]"
        : "rounded-2xl";

    const backgroundColor = color || "var(--muted)";

    return (
      <div
        ref={ref}
        className={[
          "px-4 py-2 inline-block",
          borderRadiusClass,
          className
        ].filter(Boolean).join(" ")}
        style={{ backgroundColor }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

MessageBubble.displayName = "MessageBubble";

