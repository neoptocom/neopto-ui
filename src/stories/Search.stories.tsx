import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Search, { type SearchOption } from "../components/Search";
import Counter from "../components/Counter";
import Icon from "../components/Icon";
import Typo from "../components/Typo";

const SEARCH_RESULTS: SearchOption[] = [
  { label: "Ada Lovelace", value: "ada", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&auto=format&fit=facearea&facepad=2" },
  { label: "Alan Turing", value: "turing" },
  { label: "Grace Hopper", value: "hopper", image: "https://images.unsplash.com/photo-1545184180-25d471fe75d8?q=80&w=128&auto=format&fit=facearea&facepad=2" },
  { label: "Edsger Dijkstra", value: "dijkstra" },
  { label: "Barbara Liskov", value: "liskov" },
  { label: "Donald Knuth", value: "knuth" },
  { label: "Margaret Hamilton", value: "hamilton", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=128&auto=format&fit=facearea&facepad=2" },
  { label: "John von Neumann", value: "neumann" },
  { label: "Gordon Moore", value: "moore" },
  { label: "Andy Grove", value: "grove" },
  { label: "Steve Jobs", value: "jobs", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=128&auto=format&fit=facearea&facepad=2" },
  { label: "Steve Wozniak", value: "wozniak" },
  { label: "Bill Gates", value: "gates", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128&auto=format&fit=facearea&facepad=2" },
  { label: "Paul Allen", value: "allen" },
  { label: "Larry Page", value: "page" },
  { label: "Sergey Brin", value: "brin" },
  { label: "Jeff Bezos", value: "bezos" },
  { label: "Elon Musk", value: "musk", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=128&auto=format&fit=facearea&facepad=2" },
  { label: "Mark Zuckerberg", value: "zuckerberg" },
  { label: "Satya Nadella", value: "nadella" },
  { label: "Sundar Pichai", value: "pichai" },
  { label: "Jensen Huang", value: "huang" },
  { label: "Lisa Su", value: "su" },
];

const meta: Meta<typeof Search> = {
  title: "Components/Search",
  component: Search,
  args: {
    options: SEARCH_RESULTS,
    selectedOption: null,
    disabled: false,
    maxHeight: 180,
    searchDelay: 300
  }
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<SearchOption | string | null>(args.selectedOption);
    const [results, setResults] = React.useState<SearchOption[]>([]);
    const [isSearching, setIsSearching] = React.useState(false);

    const handleSearch = React.useCallback((query: string) => {
      if (query.trim()) {
        setIsSearching(true);
        // Simulate API call delay
        setTimeout(() => {
          const filtered = SEARCH_RESULTS.filter(item => 
            item.label.toLowerCase().includes(query.toLowerCase())
          );
          setResults(filtered);
          setIsSearching(false);
        }, 500);
      } else {
        setResults([]);
        setIsSearching(false);
      }
    }, []);

    return (
      <div className="max-w-md">
        <Search 
          {...args} 
          options={isSearching ? [] : results}
          selectedOption={value} 
          onSelect={setValue}
          onSearch={handleSearch}
        />
        <div className="mt-3 text-xs text-[var(--muted-fg)]">
          Selected: {typeof value === "string" ? value : value?.label ?? "none"}
        </div>
        {isSearching && (
          <div className="mt-2 text-xs text-[var(--muted-fg)]">
            🔍 Searching...
          </div>
        )}
      </div>
    );
  }
};

export const WithCustomDelay: Story = {
  args: {
    searchDelay: 1000
  },
  render: (args) => {
    const [value, setValue] = React.useState<SearchOption | string | null>(null);
    const [results, setResults] = React.useState<SearchOption[]>([]);
    const [searchCount, setSearchCount] = React.useState(0);

    const handleSearch = React.useCallback((query: string) => {
      setSearchCount(prev => prev + 1);
      if (query.trim()) {
        const filtered = SEARCH_RESULTS.filter(item => 
          item.label.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
      } else {
        setResults([]);
      }
    }, []);

    return (
      <div className="max-w-md">
        <Search 
          {...args} 
          options={results}
          selectedOption={value} 
          onSelect={setValue}
          onSearch={handleSearch}
        />
        <div className="mt-3 text-xs text-[var(--muted-fg)]">
          Search calls made: {searchCount} (1 second delay)
        </div>
      </div>
    );
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options: SEARCH_RESULTS
  }
};

export const WithFilters: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<SearchOption | string | null>(null);
    const [results, setResults] = React.useState<SearchOption[]>([]);
    const [topK, setTopK] = React.useState<number>(20);
    const [totalResults, setTotalResults] = React.useState<number>(20);
    const [showTooltip1, setShowTooltip1] = React.useState(false);
    const [showTooltip2, setShowTooltip2] = React.useState(false);

    const handleSearch = React.useCallback((query: string) => {
      if (query.trim()) {
        const filtered = SEARCH_RESULTS.filter(item => 
          item.label.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
      } else {
        setResults([]);
      }
    }, []);

    return (
      <div className="max-w-md">
        <Search 
          {...args} 
          options={results}
          selectedOption={value} 
          onSelect={setValue}
          onSearch={handleSearch}
        >
          {/* Filter content */}
          <div className="flex flex-col gap-3">
            {/* Semantic Search - Top K */}
            <div className="flex items-center gap-3">
              <Counter 
                value={topK} 
                onChange={setTopK}
                min={1}
                max={100}
              />
              <Typo variant="label-lg" className="mr-1">Semantic Search – Top K</Typo>
              <div className="relative">
                <div
                  onMouseEnter={() => setShowTooltip1(true)}
                  onMouseLeave={() => setShowTooltip1(false)}
                >
                  <Icon name="help" size="sm" className="text-[var(--muted-fg)] cursor-help" />
                </div>
                {showTooltip1 && (
                  <div className="absolute left-0 top-6 z-50 px-2 py-1 bg-[var(--surface)] border border-[var(--border)] rounded shadow-lg text-xs text-[var(--fg)] whitespace-nowrap">
                    lorem ipsum dolor sit amet
                  </div>
                )}
              </div>
            </div>

            {/* Total Results */}
            <div className="flex items-center gap-3">
              <Counter 
                value={totalResults} 
                onChange={setTotalResults}
                min={1}
                max={100}
              />
              <Typo variant="label-lg" className="mr-1">Total Results</Typo>
              <div className="relative">
                <div
                  onMouseEnter={() => setShowTooltip2(true)}
                  onMouseLeave={() => setShowTooltip2(false)}
                >
                  <Icon name="help" size="sm" className="text-[var(--muted-fg)] cursor-help" />
                </div>
                {showTooltip2 && (
                  <div className="absolute left-0 top-6 z-50 px-2 py-1 bg-[var(--surface)] border border-[var(--border)] rounded shadow-lg text-xs text-[var(--fg)] whitespace-nowrap">
                    lorem ipsum dolor sit amet
                  </div>
                )}
              </div>
            </div>
          </div>
        </Search>
        <div className="mt-3 text-xs text-[var(--muted-fg)]">
          Selected: {typeof value === "string" ? value : value?.label ?? "none"}
        </div>
        <div className="mt-1 text-xs text-[var(--muted-fg)]">
          Top K: {topK}, Total Results: {totalResults}
        </div>
      </div>
    );
  }
};
