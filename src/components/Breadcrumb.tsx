import React from "react";
import Icon from "./Icon";
import Typo from "./Typo";

export interface BreadcrumbItem {
  /** Label to display */
  label: string;
  /** Optional href for navigation */
  href?: string;
  /** Optional icon name (Material Symbols) */
  icon?: string;
  /** Optional click handler */
  onClick?: () => void;
}

export interface BreadcrumbProps {
  /** Array of breadcrumb items */
  items: BreadcrumbItem[];
  /** Whether to show home icon on first item */
  showHomeIcon?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Breadcrumb navigation component
 * 
 * @example
 * ```tsx
 * <Breadcrumb 
 *   items={[
 *     { label: "Home", href: "/" },
 *     { label: "Products", href: "/products" },
 *     { label: "Category" }
 *   ]}
 * />
 * ```
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  showHomeIcon = false,
  className = "",
}) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;

          return (
            <li key={index} className="flex items-center">
              {/* Breadcrumb Item */}
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                  }}
                  className="group flex items-center gap-1 cursor-pointer text-[var(--muted-fg)]"
                >
                  {isFirst && showHomeIcon && <Icon name="home" size="sm" />}
                  {item.icon && !showHomeIcon && <Icon name={item.icon} size="sm" />}
                  <Typo variant="label-md" bold="semibold" className="group-hover:underline">{item.label}</Typo>
                </a>
              ) : (
                <span
                  className={`group flex items-center gap-1 ${isLast ? "text-[var(--info)]" : "text-[var(--muted-fg)]"} ${item.onClick && !isLast ? "cursor-pointer" : ""}`}
                  onClick={item.onClick}
                  role={item.onClick && !isLast ? "button" : undefined}
                  tabIndex={item.onClick && !isLast ? 0 : undefined}
                  onKeyDown={
                    item.onClick && !isLast
                      ? (e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            item.onClick?.();
                          }
                        }
                      : undefined
                  }
                  aria-current={isLast ? "page" : undefined}
                >
                  {isFirst && showHomeIcon && <Icon name="home" size="sm" />}
                  {item.icon && !showHomeIcon && <Icon name={item.icon} size="sm" />}
                  <Typo variant="label-md" bold={isLast ? "bold" : "semibold"} className={item.onClick && !isLast ? "group-hover:underline" : ""}>{item.label}</Typo>
                </span>
              )}

              {/* Separator */}
              {!isLast && (
                <span className="text-[var(--muted-fg)]">
                  <Icon name="chevron_right" size="md" />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

