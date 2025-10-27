import * as React from "react";
import { createPortal } from "react-dom";
import { BackgroundBlur } from "./BackgroundBlur";
import { Card } from "./Card";

export type ModalProps = {
  /** Whether the modal is open */
  open: boolean;
  /** Callback when modal should close */
  onClose?: () => void;
  /** Modal content */
  children?: React.ReactNode;
  /** When true, closes when the backdrop is clicked (default: true) */
  closeOnBackdrop?: boolean;
  /** Custom className for the Card */
  className?: string;
  /** z-index for the modal (default: 50) */
  zIndex?: number;
  /** Show decorative elements on the Card (default: true) */
  showDecorations?: boolean;
};

function useIsomorphicLayoutEffect(effect: React.EffectCallback, deps?: React.DependencyList) {
  const useEffectHook = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
  useEffectHook(effect, deps);
}

export function Modal({
  open,
  onClose,
  closeOnBackdrop = true,
  children,
  className = "",
  zIndex = 50,
  showDecorations = true,
}: ModalProps) {
  const [mounted, setMounted] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  // Detect dark mode
  React.useEffect(() => {
    const checkDarkMode = () => {
      const hasDarkClass = document.documentElement.classList.contains("dark") || 
                           document.body.classList.contains("dark") ||
                           document.querySelector(".dark") !== null;
      setIsDark(hasDarkClass);
    };

    checkDarkMode();

    // Listen for changes to dark mode
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when open
  useIsomorphicLayoutEffect(() => {
    setMounted(true);
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // ESC key to close
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!mounted) return null;

  // Smart class merging: only add defaults if not provided
  const hasMaxWidth = className?.includes("max-w-");
  const hasMaxHeight = className?.includes("max-h-");
  const modalClasses = `w-full ${!hasMaxWidth ? "max-w-lg" : ""} ${!hasMaxHeight ? "max-h-[80vh]" : ""} ${className || ""}`.trim();

  const modal = (
    <div className={isDark ? "dark" : ""}>
      <BackgroundBlur
        open={open}
        onClose={closeOnBackdrop ? onClose : undefined}
        zIndex={zIndex}
      >
      <Card
        className={modalClasses}
        role="dialog"
        aria-modal="true"
        showDecorations={showDecorations}
      >
        {children}
      </Card>
    </BackgroundBlur>
    </div>
  );

  const container = document.body;
  return createPortal(modal, container);
}
