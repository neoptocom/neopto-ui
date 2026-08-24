import * as React from "react";
import { useEffect, useRef, useState } from "react";

export type TabItem = {
  id: string;
  label: string;
};

export type TabsProps = {
  tabs: TabItem[];
  activeTabId: string;
  onTabChange: (tabId: string) => void;
  className?: string;
};

export function Tabs({
  tabs,
  activeTabId,
  onTabChange,
  className = "",
}: TabsProps) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const activeIndex = tabs.findIndex((tab) => tab.id === activeTabId);

  useEffect(() => {
    const activeTabElement = tabRefs.current[activeIndex];
    if (!activeTabElement) return;
    setIndicatorStyle({
      width: activeTabElement.offsetWidth,
      left: activeTabElement.offsetLeft,
    });
  }, [activeIndex, tabs]);

  return (
    <div
      role="tablist"
      className={[
        "relative z-0 flex h-11 items-center gap-2 rounded-2xl bg-[var(--muted)] p-2",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        aria-hidden
        className="absolute h-[30px] rounded-lg bg-[var(--color-brand)] shadow-md transition-all duration-300"
        style={{
          width: `${indicatorStyle.width}px`,
          left: `${indicatorStyle.left}px`,
        }}
      />
      {tabs.map((tab, index) => {
        const isActive = activeIndex === index;
        return (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange(tab.id)}
            className={[
              "relative z-10 flex h-[30px] flex-1 items-center justify-center whitespace-nowrap px-4 text-sm font-semibold transition-colors duration-300",
              isActive ? "text-white" : "text-[var(--muted-fg)]",
            ].join(" ")}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

export default Tabs;
