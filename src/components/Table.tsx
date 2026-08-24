import * as React from "react";
import { createContext, useContext } from "react";
import Icon from "./Icon";
import { Skeleton } from "./Skeleton";
import Typo from "./Typo";

export type SortDirection = "asc" | "desc";

export type TableSortState = {
  column: string | null;
  direction: SortDirection;
};

export type TableHeader = {
  label: string;
  /** Column key used for sorting */
  sortableKey?: string;
};

type TableProps = {
  headers?: TableHeader[];
  /** CSS grid-template-columns value, e.g. "2fr 1fr 1fr" */
  columnTemplate: string;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  align?: "start" | "center";
  sortState?: TableSortState;
  onSortChange?: (column: string, direction: SortDirection) => void;
};

type TableBodyProps = React.HTMLAttributes<HTMLUListElement>;
type TableRowProps = React.LiHTMLAttributes<HTMLLIElement>;

type TableCellProps = Omit<React.HTMLAttributes<HTMLSpanElement>, "title"> & {
  title?: string | null;
  emptyPlaceholder?: string;
  align?: "start" | "center" | "end";
  children?: React.ReactNode;
};

const ColumnTemplateContext = createContext<string | null>(null);
const AlignContext = createContext<"start" | "center">("center");

function TableRoot({
  headers,
  columnTemplate,
  children,
  className = "",
  headerClassName = "",
  align = "center",
  sortState,
  onSortChange,
}: TableProps) {
  const handleSort = (sortableKey?: string) => {
    if (!sortableKey || !onSortChange) return;
    const isSameColumn = sortState?.column === sortableKey;
    const nextDirection: SortDirection =
      isSameColumn && sortState?.direction === "asc" ? "desc" : "asc";
    onSortChange(sortableKey, nextDirection);
  };

  return (
    <ColumnTemplateContext.Provider value={columnTemplate}>
      <AlignContext.Provider value={align}>
        <div
          className={[
            "relative flex h-full w-full flex-col overflow-auto",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {headers ? (
            <div
              className={[
                "grid border-b border-[var(--border)] bg-[var(--muted)] px-4 py-3",
                headerClassName,
              ]
                .filter(Boolean)
                .join(" ")}
              style={{
                gridTemplateColumns: columnTemplate,
                justifyItems: align,
              }}
            >
              {headers.map((header, index) => {
                const isSortable = Boolean(header.sortableKey && onSortChange);
                const isSorted =
                  header.sortableKey &&
                  sortState?.column === header.sortableKey;
                return (
                  <span
                    key={`${header.label}-${index}`}
                    title={header.label || undefined}
                    className={[
                      "flex min-w-0 w-full items-center gap-1 overflow-hidden px-1.5 text-sm font-semibold",
                      align === "start" ? "justify-start" : "justify-center",
                    ].join(" ")}
                  >
                    {isSortable ? (
                      <button
                        type="button"
                        className="flex shrink-0 cursor-pointer items-center text-[var(--muted-fg)]"
                        onClick={() => handleSort(header.sortableKey)}
                        aria-label={`Sort by ${header.label}`}
                      >
                        <Icon
                          name={
                            isSorted
                              ? sortState?.direction === "asc"
                                ? "arrow_upward"
                                : "arrow_downward"
                              : "swap_vert"
                          }
                          size="sm"
                        />
                      </button>
                    ) : null}
                    <span className="min-w-0 truncate">{header.label}</span>
                  </span>
                );
              })}
            </div>
          ) : null}
          {children}
        </div>
      </AlignContext.Provider>
    </ColumnTemplateContext.Provider>
  );
}

function TableBody({ className = "", children, ...rest }: TableBodyProps) {
  return (
    <ul
      className={[
        "flex flex-1 flex-col overflow-auto bg-[color-mix(in_srgb,var(--muted)_25%,transparent)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </ul>
  );
}

function TableRow({ className = "", style, children, ...rest }: TableRowProps) {
  const columnTemplate = useContext(ColumnTemplateContext);
  return (
    <li
      className={[
        "grid border-b border-[var(--border)] px-4 py-3 text-sm",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ gridTemplateColumns: columnTemplate ?? undefined, ...style }}
      {...rest}
    >
      {children}
    </li>
  );
}

function TableCell({
  title,
  children,
  className = "",
  emptyPlaceholder = "—",
  align: alignProp,
  ...props
}: TableCellProps) {
  const alignFromContext = useContext(AlignContext);
  const align = alignProp ?? alignFromContext;
  const hasTitle =
    typeof title === "string"
      ? title.trim().length > 0
      : title !== null && title !== undefined && title !== "";
  const displayTitle = hasTitle ? (title as string) : emptyPlaceholder;

  const alignment =
    align === "end"
      ? "justify-end text-right"
      : align === "start"
        ? "justify-start text-left"
        : "justify-center text-center";

  return (
    <span
      title={displayTitle}
      className={[
        "mx-1 flex w-full items-center overflow-hidden truncate whitespace-nowrap",
        alignment,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {hasTitle ? (
        children
      ) : (
        <Typo variant="label-lg" className="w-full truncate text-[var(--muted-fg)]">
          {emptyPlaceholder}
        </Typo>
      )}
    </span>
  );
}

export type TableSkeletonProps = {
  columnTemplate: string;
  columnCount?: number;
  rowCount?: number;
};

function countGridColumns(columnTemplate: string): number {
  const matches = columnTemplate.match(
    /minmax\([^)]+\)|[\d.]+(?:px|fr|%|em|rem|ch|vw|vh)|auto|min-content|max-content/g
  );
  return matches?.length ?? columnTemplate.split(/\s+/).filter(Boolean).length;
}

export function TableSkeleton({
  columnTemplate,
  columnCount: columnCountProp,
  rowCount = 5,
}: TableSkeletonProps) {
  const columnCount = columnCountProp ?? countGridColumns(columnTemplate);

  return (
    <ul className="w-full">
      {Array.from({ length: rowCount }).map((_, rowIndex) => (
        <li
          key={`table-skeleton-row-${rowIndex}`}
          className="grid h-16 gap-6 px-4 py-3"
          style={{ gridTemplateColumns: columnTemplate }}
        >
          {Array.from({ length: columnCount }).map((_, colIndex) => (
            <Skeleton
              key={`table-skeleton-cell-${rowIndex}-${colIndex}`}
              className="h-5 w-full"
              rounded="full"
            />
          ))}
        </li>
      ))}
    </ul>
  );
}

type TableComponent = React.FC<TableProps> & {
  Body: typeof TableBody;
  Row: typeof TableRow;
  Cell: typeof TableCell;
};

export const Table = TableRoot as TableComponent;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;

export { TableBody, TableRow, TableCell };
