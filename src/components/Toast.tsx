import * as React from "react";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2, XCircle, AlertTriangle, Info, X } from "lucide-react";
import Typo from "./Typo";

export type ToastType = "success" | "error" | "warning" | "info";

export type ToastOptions = {
  title: string;
  message?: string;
  type?: ToastType;
  /** Auto-dismiss duration in ms (default: 4000). Set 0 to disable. */
  duration?: number;
};

export type ToastItem = ToastOptions & {
  id: string;
};

type ToastContextValue = {
  toasts: ToastItem[];
  toast: (options: ToastOptions) => string;
  dismiss: (id: string) => void;
  dismissAll: () => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

const iconByType: Record<ToastType, React.ReactNode> = {
  success: <CheckCircle2 size={22} className="text-[var(--success)]" />,
  error: <XCircle size={22} className="text-[var(--destructive)]" />,
  warning: <AlertTriangle size={22} className="text-[var(--warning)]" />,
  info: <Info size={22} className="text-[var(--info)]" />,
};

export type ToastProps = ToastItem & {
  onClose: () => void;
};

export function Toast({
  title,
  message,
  type = "info",
  duration = 4000,
  onClose,
}: ToastProps) {
  React.useEffect(() => {
    if (!duration) return;
    const timer = window.setTimeout(onClose, duration);
    return () => window.clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      role="status"
      className={[
        "relative flex max-w-sm items-start gap-3 rounded-2xl border border-[var(--border)]",
        "bg-[var(--surface)] p-4 text-[var(--fg)] shadow-[var(--shadow-elevated)]",
      ].join(" ")}
    >
      <div className="mt-0.5 rounded-full bg-[var(--muted)] p-1">
        {iconByType[type]}
      </div>
      <div className="min-w-0 flex-1">
        <Typo variant="title-sm" bold="semibold" className="mb-1 block">
          {title}
        </Typo>
        {message ? (
          <Typo variant="body-sm" className="text-[var(--muted-fg)]">
            {message}
          </Typo>
        ) : null}
      </div>
      <button
        type="button"
        aria-label="Dismiss"
        onClick={onClose}
        className="rounded-full p-1 text-[var(--muted-fg)] hover:bg-[var(--muted)] hover:text-[var(--fg)]"
      >
        <X size={14} />
      </button>
    </div>
  );
}

export type ToastProviderProps = {
  children: React.ReactNode;
  /** Viewport placement (default: top-right) */
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
};

const positionClasses: Record<
  NonNullable<ToastProviderProps["position"]>,
  string
> = {
  "top-right": "top-6 right-6 items-end",
  "top-left": "top-6 left-6 items-start",
  "bottom-right": "bottom-6 right-6 items-end",
  "bottom-left": "bottom-6 left-6 items-start",
};

export function ToastProvider({
  children,
  position = "top-right",
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const dismissAll = useCallback(() => {
    setToasts([]);
  }, []);

  const toast = useCallback((options: ToastOptions) => {
    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    setToasts((prev) => [...prev, { ...options, id }]);
    return id;
  }, []);

  const value = useMemo(
    () => ({ toasts, toast, dismiss, dismissAll }),
    [toasts, toast, dismiss, dismissAll]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      {mounted
        ? createPortal(
            <div
              className={[
                "pointer-events-none fixed z-[100] flex flex-col gap-3",
                positionClasses[position],
              ].join(" ")}
            >
              {toasts.map((item) => (
                <div key={item.id} className="pointer-events-auto">
                  <Toast {...item} onClose={() => dismiss(item.id)} />
                </div>
              ))}
            </div>,
            document.body
          )
        : null}
    </ToastContext.Provider>
  );
}
