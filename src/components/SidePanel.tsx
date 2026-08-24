import * as React from "react";
import { createPortal } from "react-dom";
import { BackgroundBlur } from "./BackgroundBlur";
import { Card } from "./Card";
import { IconButton } from "./IconButton";

export type SidePanelProps = {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  /** Panel width in px (default: 420) */
  width?: number;
  /** Slide from left or right (default: right) */
  side?: "left" | "right";
  /** Close when backdrop is clicked (default: true) */
  closeOnBackdrop?: boolean;
  showCloseButton?: boolean;
  className?: string;
  zIndex?: number;
};

export function SidePanel({
  open,
  onClose,
  children,
  width = 420,
  side = "right",
  closeOnBackdrop = true,
  showCloseButton = true,
  className = "",
  zIndex = 50,
}: SidePanelProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <BackgroundBlur
      open={open}
      onClose={closeOnBackdrop ? onClose : undefined}
      zIndex={zIndex}
      className={side === "right" ? "!justify-end" : "!justify-start"}
    >
      <Card
        role="dialog"
        aria-modal="true"
        className={[
          "relative m-0 h-full max-h-none rounded-none p-6",
          side === "right" ? "rounded-l-[30px]" : "rounded-r-[30px]",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={{
          width: open ? width : 0,
          maxWidth: "100vw",
          transition: "width 0.35s ease",
          overflow: "hidden",
        }}
        showDecorations={false}
      >
        {showCloseButton && onClose ? (
          <IconButton
            icon="close"
            variant="ghost"
            aria-label="Close"
            onClick={onClose}
            className="absolute right-3 top-3"
          />
        ) : null}
        <div className={showCloseButton ? "pr-8" : undefined}>{children}</div>
      </Card>
    </BackgroundBlur>,
    document.body
  );
}

export default SidePanel;
