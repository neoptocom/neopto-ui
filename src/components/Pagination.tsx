import * as React from "react";
import Icon from "./Icon";

export type PaginationProps = {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  className?: string;
};

function getVisiblePages(page: number, pageCount: number): (number | "ellipsis")[] {
  if (pageCount <= 5) {
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  if (page >= pageCount - 2) {
    return [pageCount - 3, pageCount - 2, pageCount - 1, pageCount];
  }

  return [page, page + 1, page + 2, "ellipsis"];
}

export function Pagination({
  page,
  pageCount,
  onPageChange,
  className = "",
}: PaginationProps) {
  if (pageCount <= 0) return null;

  const pages = getVisiblePages(page, pageCount);

  return (
    <div className={["flex items-center gap-4", className].filter(Boolean).join(" ")}>
      <button
        type="button"
        aria-label="Previous page"
        disabled={page <= 1}
        onClick={() => onPageChange(Math.max(1, page - 1))}
        className="rounded-full p-1 text-[var(--fg)] transition-opacity disabled:pointer-events-none disabled:opacity-30"
      >
        <Icon name="chevron_left" size="lg" />
      </button>

      <div className="flex items-center text-[var(--fg)]">
        {pages.map((item, index) =>
          item === "ellipsis" ? (
            <span key={`ellipsis-${index}`} className="px-3 py-2 text-[var(--muted-fg)]">
              …
            </span>
          ) : (
            <button
              key={item}
              type="button"
              onClick={() => onPageChange(item)}
              className={[
                "relative flex items-center justify-center overflow-hidden rounded-lg px-4 py-2 transition-colors",
                page === item
                  ? "bg-[color-mix(in_srgb,var(--color-brand)_18%,transparent)] text-[var(--color-brand)]"
                  : "hover:bg-[var(--muted)]",
              ].join(" ")}
            >
              {item}
            </button>
          )
        )}
      </div>

      <button
        type="button"
        aria-label="Next page"
        disabled={page >= pageCount}
        onClick={() => onPageChange(Math.min(pageCount, page + 1))}
        className="rounded-full p-1 text-[var(--fg)] transition-opacity disabled:pointer-events-none disabled:opacity-30"
      >
        <Icon name="chevron_right" size="lg" />
      </button>
    </div>
  );
}

export default Pagination;
