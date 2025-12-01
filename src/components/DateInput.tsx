import * as React from "react";
import { Input } from "./Input";
import Calendar from "./Calendar";
import { Card } from "./Card";
import { assets } from "..";

export type DateInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "type"
> & {
  /** Label text displayed above the input */
  label?: string;
  /** Current date value */
  value?: Date | null;
  /** Callback when date changes */
  onChange: (date: Date) => void;
  /** Flag to visually mark the input as errored */
  error?: boolean;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Placeholder text (default: "00/00/0000") */
  placeholder?: string;
  /** Background image URL for light mode */
  lightBackgroundImage?: string;
  /** Background image URL for dark mode */
  darkBackgroundImage?: string;
};

function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function parseDate(dateString: string): Date | null {
  const parts = dateString.split("/");
  if (parts.length !== 3) return null;

  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed
  const year = parseInt(parts[2], 10);

  if (isNaN(day) || isNaN(month) || isNaN(year)) return null;

  const date = new Date(year, month, day);
  // Check if date is valid
  if (
    date.getDate() !== day ||
    date.getMonth() !== month ||
    date.getFullYear() !== year
  ) {
    return null;
  }

  return date;
}

function isValidDate(date: Date): boolean {
  return date instanceof Date && !isNaN(date.getTime());
}

function startOfDay(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

export const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      label,
      value,
      onChange,
      error = false,
      disabled = false,
      minDate,
      maxDate,
      placeholder = "00/00/0000",
      className = "",
      lightBackgroundImage,
      darkBackgroundImage,
      ...props
    },
    ref
  ) => {
    const [inputValue, setInputValue] = React.useState(
      value && isValidDate(value) ? formatDate(value) : placeholder
    );
    const [isFocused, setIsFocused] = React.useState(false);
    const [showCalendar, setShowCalendar] = React.useState(false);
    const [initialDateSet, setInitialDateSet] = React.useState(true);
    const containerRef = React.useRef<HTMLDivElement>(null);

    // Update input value when value prop changes
    React.useEffect(() => {
      if (value && isValidDate(value)) {
        setInputValue(formatDate(value));
      } else {
        setInputValue(placeholder);
      }
    }, [value, placeholder]);

    // Set today's date when calendar first opens
    React.useEffect(() => {
      if (showCalendar && initialDateSet) {
        const today = new Date();
        onChange(today);
        setInputValue(formatDate(today));
        setInitialDateSet(false);
      }
    }, [showCalendar, initialDateSet, onChange]);

    // Handle click outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setShowCalendar(false);
          setInitialDateSet(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let rawValue = e.target.value;

      // Remove non-digits and format as dd/MM/yyyy
      rawValue = rawValue
        .replace(/\D/g, "")
        .replace(/^(\d{2})/, "$1/")
        .replace(/^(\d{2}\/\d{2})/, "$1/")
        .slice(0, 10);

      setInputValue(rawValue);

      // Parse and validate when complete
      if (rawValue.length === 10) {
        const parsedDate = parseDate(rawValue);
        if (parsedDate && isValidDate(parsedDate)) {
          onChange(parsedDate);
        }
      }
    };

    const handleCalendarSelect = (date: Date) => {
      const selectedDate = parseDate(inputValue);
      const sameDay =
        selectedDate &&
        isValidDate(selectedDate) &&
        selectedDate.getDate() === date.getDate() &&
        selectedDate.getMonth() === date.getMonth() &&
        selectedDate.getFullYear() === date.getFullYear();

      if (!sameDay) {
        onChange(date);
        setInputValue(formatDate(date));
      }

      setInitialDateSet(false);
      setShowCalendar(false);
    };

    const handleInputFocus = () => {
      setIsFocused(true);
      setShowCalendar(true);
    };

    const handleInputBlur = () => {
      setIsFocused(false);
      const parsed = parseDate(inputValue);
      if (!parsed || !isValidDate(parsed)) {
        const today = new Date();
        onChange(today);
        setInputValue(formatDate(today));
      }
    };

    const isEmpty = inputValue === placeholder;
    const textColorClass = isEmpty ? "text-[var(--muted-fg)]" : "";

    return (
      <div className={["relative w-full", className].join(" ")} ref={containerRef}>
        <Input
          ref={ref}
          label={label}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onClick={() => !disabled && setShowCalendar(true)}
          disabled={disabled}
          error={error}
          icon="calendar_today"
          className={textColorClass}
          {...props}
        />

        {showCalendar && !disabled && (
          <div className="absolute z-20 mt-2 w-full max-w-sm">
            <Card className="p-4" showDecorations={false} lightImage={lightBackgroundImage} darkImage={darkBackgroundImage}>
              <Calendar
                selectedDate={
                  inputValue !== placeholder &&
                  parseDate(inputValue) &&
                  isValidDate(parseDate(inputValue)!)
                    ? parseDate(inputValue)!
                    : new Date()
                }
                onDateSelect={handleCalendarSelect}
                today={startOfDay(new Date())}
                minDate={minDate}
                maxDate={maxDate}
              />
            </Card>
          </div>
        )}
      </div>
    );
  }
);

DateInput.displayName = "DateInput";

