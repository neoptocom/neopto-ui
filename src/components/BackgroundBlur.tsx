import * as React from "react";
import { useEffect, useState } from "react";

export type BackgroundBlurProps = {
  /** Whether the blur overlay is visible */
  open: boolean;
  /** Content to render on top of the blur (e.g., modal, drawer) */
  children?: React.ReactNode;
  /** Callback when the backdrop is clicked */
  onClose?: () => void;
  /** z-index for the overlay (default: 40) */
  zIndex?: number;
  /** Additional CSS classes */
  className?: string;
};

export function BackgroundBlur({
  open,
  children,
  onClose,
  zIndex = 40,
  className = "",
}: BackgroundBlurProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (open) {
      // Mount the component
      setShouldRender(true);
      // Trigger fade-in on next frame
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    } else {
      // Trigger fade-out
      setIsVisible(false);
      // Unmount after transition completes
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 500); // Match transition duration
      return () => clearTimeout(timer);
    }
  }, [open]);

  // Don't render if not mounted
  if (!shouldRender) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only trigger onClose if clicking the backdrop itself, not children
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity duration-500 ${className}`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.10)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)", // Safari support
        zIndex,
        opacity: isVisible ? 1 : 0,
      }}
      onClick={handleBackdropClick}
      role="presentation"
    >
      {children}
    </div>
  );
}

