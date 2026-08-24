import * as React from "react";
import { useCallback, useRef, useState } from "react";
import { Upload, File as FileIcon } from "lucide-react";
import Typo from "./Typo";
import { Spinner } from "./Spinner";
import { IconButton } from "./IconButton";

export type FileDropzoneProps = {
  /** Currently selected file */
  value?: File | null;
  onChange?: (file: File | null) => void;
  /** Optional async upload handler; receives progress callback 0–100 */
  onUpload?: (
    file: File,
    options?: { onProgress?: (progress: number) => void }
  ) => Promise<void>;
  accept?: string;
  disabled?: boolean;
  compact?: boolean;
  className?: string;
  label?: string;
  hint?: string;
  invalidFileMessage?: string;
  onInvalidFile?: (message: string) => void;
};

function validateFileType(file: File, accept?: string) {
  if (!accept) return true;
  const rules = accept
    .split(",")
    .map((entry) => entry.trim().toLowerCase())
    .filter(Boolean);
  if (!rules.length) return true;

  const fileName = file.name.toLowerCase();
  const mimeType = (file.type || "").toLowerCase();

  return rules.some((rule) => {
    if (rule.startsWith(".")) return fileName.endsWith(rule);
    if (rule.endsWith("/*")) return mimeType.startsWith(rule.slice(0, -1));
    return mimeType === rule;
  });
}

export function FileDropzone({
  value = null,
  onChange,
  onUpload,
  accept,
  disabled = false,
  compact = false,
  className = "",
  label = "Drop a file here or click to browse",
  hint,
  invalidFileMessage = "Invalid file type.",
  onInvalidFile,
}: FileDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const processFile = useCallback(
    async (file: File) => {
      if (!validateFileType(file, accept)) {
        onInvalidFile?.(invalidFileMessage);
        return;
      }

      if (onUpload) {
        setIsUploading(true);
        setProgress(1);
        try {
          await onUpload(file, {
            onProgress: (p) => setProgress(Math.max(1, Math.min(99, Math.round(p)))),
          });
          setProgress(100);
          onChange?.(file);
        } finally {
          setIsUploading(false);
          setProgress(0);
        }
        return;
      }

      onChange?.(file);
    },
    [accept, invalidFileMessage, onChange, onInvalidFile, onUpload]
  );

  const handleFiles = (files: FileList | null) => {
    const file = files?.[0];
    if (!file || disabled) return;
    void processFile(file);
  };

  if (value && !isUploading) {
    return (
      <div
        className={[
          "flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <FileIcon size={18} className="text-[var(--muted-fg)]" />
        <Typo variant="body-sm" className="min-w-0 flex-1 truncate">
          {value.name}
        </Typo>
        <IconButton
          icon="close"
          size="sm"
          variant="ghost"
          aria-label="Remove file"
          disabled={disabled}
          onClick={() => onChange?.(null)}
        />
      </div>
    );
  }

  return (
    <div
      className={[
        "relative flex flex-col items-center justify-center rounded-2xl border border-dashed transition-colors",
        compact ? "min-h-20 px-3 py-4" : "min-h-36 px-6 py-8",
        isDragActive
          ? "border-[var(--color-brand)] bg-[color-mix(in_srgb,var(--color-brand)_10%,transparent)]"
          : "border-[var(--border)] bg-[var(--surface)]",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onDragEnter={(e) => {
        e.preventDefault();
        if (!disabled) setIsDragActive(true);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        if (!disabled) setIsDragActive(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setIsDragActive(false);
      }}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragActive(false);
        handleFiles(e.dataTransfer.files);
      }}
      onClick={() => {
        if (!disabled) inputRef.current?.click();
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        disabled={disabled}
        className="hidden"
        onChange={(e) => {
          handleFiles(e.target.files);
          e.target.value = "";
        }}
      />
      {isUploading ? (
        <div className="flex flex-col items-center gap-2">
          <Spinner />
          <Typo variant="body-sm" className="text-[var(--muted-fg)]">
            Uploading… {progress}%
          </Typo>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 text-center">
          <Upload size={22} className="text-[var(--muted-fg)]" />
          <Typo variant="body-sm" bold="medium">
            {label}
          </Typo>
          {hint ? (
            <Typo variant="label-sm" className="text-[var(--muted-fg)]">
              {hint}
            </Typo>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default FileDropzone;
