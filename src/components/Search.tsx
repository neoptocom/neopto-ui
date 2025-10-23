import * as React from "react";
import { useId, useMemo, useRef, useState, useCallback } from "react";
import { IconButton } from "./IconButton";
import Typo from "./Typo";
import Avatar from "./Avatar";
import AvatarGroup from "./AvatarGroup";

export type SearchOption = {
  label: string;
  value: any;
  image?: string;
  group?: Array<{ name: string; image?: string }>;
};

export interface SearchProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  /** Array of options to display */
  options: SearchOption[] | string[];
  /** Callback when search is performed (debounced) */
  onSearch: (query: string) => void;
  /** Currently selected option */
  selectedOption: SearchOption | string | null;
  /** Callback when an option is selected */
  onSelect: (option: SearchOption | string | null) => void;
  /** Search delay in milliseconds (default: 300ms) */
  searchDelay?: number;
  /** Whether the component is disabled */
  disabled?: boolean;
  /** Maximum height of the options dropdown */
  maxHeight?: number;
  /** Optional id base (for accessibility hooks) */
  id?: string;
  /** Optional filter children to render when filters are expanded */
  children?: React.ReactNode;
}

export default function Search({
  className = "",
  options,
  onSearch,
  selectedOption,
  onSelect,
  searchDelay = 300,
  disabled = false,
  maxHeight = 152,
  id,
  children,
  ...props
}: SearchProps) {
  const inputId = id ?? useId();
  const listboxId = `${inputId}-listbox`;
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [filtersExpanded, setFiltersExpanded] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const searchTimeoutRef = useRef<number | null>(null);

  // Normalize options
  const normalizedOptions: SearchOption[] = useMemo(() => {
    if (Array.isArray(options) && typeof options[0] === "string") {
      return (options as string[]).map((str) => ({ label: str, value: str }));
    }
    return options as SearchOption[];
  }, [options]);

  const anyOptionHasImage = useMemo(
    () => normalizedOptions.some((o) => !!o.image),
    [normalizedOptions]
  );

  const displayValue =
    selectedOption != null
      ? typeof selectedOption === "string"
        ? selectedOption
        : selectedOption.label
      : searchQuery;

  // Debounced search function
  const debouncedSearch = useCallback(
    (query: string) => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
      searchTimeoutRef.current = window.setTimeout(() => {
        onSearch(query);
      }, searchDelay);
    },
    [onSearch, searchDelay]
  );

  function openList() {
    if (disabled) return;
    setOpen(true);
  }
  function closeList() {
    setOpen(false);
    setActiveIndex(-1);
  }
  function handleSelect(option: SearchOption) {
    onSelect(option);
    setSearchQuery("");
    closeList();
  }
  function handleClear() {
    onSelect(null);
    setSearchQuery("");
    closeList();
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpen(true);
      setActiveIndex(0);
      e.preventDefault();
      return;
    }
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, normalizedOptions.length - 1));
      scrollActiveIntoView();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
      scrollActiveIntoView();
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = normalizedOptions[activeIndex];
      if (item) handleSelect(item);
    } else if (e.key === "Escape") {
      e.preventDefault();
      closeList();
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveIndex(0);
      scrollActiveIntoView();
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveIndex(normalizedOptions.length - 1);
      scrollActiveIntoView();
    }
  }

  function scrollActiveIntoView() {
    const list = listRef.current;
    const idx = activeIndex;
    if (!list || idx < 0) return;
    const el = list.children[idx] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest" });
  }

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={["relative w-full", className].join(" ")}
      {...props}
    >
      <div
        className={[
          "w-full min-w-0 border rounded-[24px] bg-[var(--surface)] transition-all",
          "border-[var(--border)] focus-within:border-[var(--color-brand)]",
          disabled ? "opacity-60 cursor-not-allowed" : "",
          !filtersExpanded && "h-12"
        ].join(" ")}
      >
        <div className="relative flex h-full">
          <div className={[
            "flex flex-col w-full overflow-hidden transition-all",
            filtersExpanded && children ? "h-auto pb-3" : "h-full"
          ].join(" ")}>
          <div className="flex w-full items-center h-12 px-2">
            {/* Filter button (if children exist) */}
            {children && (
              <IconButton
                icon="filter_list"
                onClick={() => setFiltersExpanded((prev) => !prev)}
                disabled={disabled}
                aria-label={filtersExpanded ? "Hide filters" : "Show filters"}
                aria-expanded={filtersExpanded}
                className="mr-2"
              />
            )}
            {/* Input */}
            <input
              id={inputId}
              role="combobox"
              aria-expanded={open}
              aria-controls={listboxId}
              aria-autocomplete="list"
              aria-disabled={disabled || undefined}
              type="text"
              value={displayValue}
              onChange={(e) => {
                const query = e.target.value;
                setSearchQuery(query);
                debouncedSearch(query);
                if (!open) setOpen(true);
                setActiveIndex(0);
              }}
              onFocus={openList}
              onKeyDown={onKeyDown}
              onBlur={() => setTimeout(closeList, 150)}
              disabled={disabled}
              style={{ fontFamily: 'var(--font-display)', fontSize: '16px' }}
              className={[
                "w-full rounded-full border-0 outline-none bg-transparent h-12",
                "leading-tight text-[var(--fg)] placeholder:text-[var(--muted-fg)]",
                "px-2"
              ].join(" ")}
              placeholder="Pesquisar"
              onClick={() => !disabled && setOpen(true)}
            />
            {/* Action button (clear or expand) */}
            <IconButton
              icon="search"
              onClick={
                selectedOption && !open ? handleClear : () => setOpen((s) => !s)
              }
              disabled={disabled}
              aria-label={selectedOption && !open ? "Clear" : open ? "Collapse" : "Expand"}
            />
          </div>
          {children && (
            <div className="w-full px-4.5 pb-3 pt-2">
              {children}
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
