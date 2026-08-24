import * as React from "react";
import { Modal } from "./Modal";
import { Button } from "./Button";
import Typo from "./Typo";

export type ConfirmationDialogProps = {
  open: boolean;
  title: string;
  description?: string | null;
  confirmLabel?: string;
  cancelLabel?: string;
  /** Visual style for the confirm action */
  confirmVariant?: "primary" | "secondary" | "ghost";
  onConfirm: () => void;
  onCancel?: () => void;
  onClose: () => void;
  /** When true, closes when the backdrop is clicked (default: true) */
  closeOnBackdrop?: boolean;
  className?: string;
};

export function ConfirmationDialog({
  open,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  confirmVariant = "primary",
  onConfirm,
  onCancel,
  onClose,
  closeOnBackdrop = true,
  className = "",
}: ConfirmationDialogProps) {
  const handleCancel = () => {
    onCancel?.();
    onClose();
  };

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeOnBackdrop={closeOnBackdrop}
      className={["max-w-md text-center", className].filter(Boolean).join(" ")}
    >
      <Typo variant="headline-sm" bold="bold">
        {title}
      </Typo>
      {description ? (
        <Typo variant="body-md" className="text-[var(--muted-fg)]">
          {description}
        </Typo>
      ) : null}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {cancelLabel ? (
          <Button variant="ghost" onClick={handleCancel}>
            {cancelLabel}
          </Button>
        ) : null}
        {confirmLabel ? (
          <Button variant={confirmVariant} onClick={handleConfirm}>
            {confirmLabel}
          </Button>
        ) : null}
      </div>
    </Modal>
  );
}
