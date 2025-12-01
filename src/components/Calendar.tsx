import * as React from "react";
import Typo from "./Typo";

export type CalendarProps = {
  /** Currently selected date */
  selectedDate?: Date;
  /** Callback when a date is selected */
  onDateSelect: (date: Date) => void;
  /** Today's date (for highlighting) */
  today?: Date;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
};

const DAYS_OF_WEEK = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const MONTHS = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

function isSameMonth(date1: Date, date2: Date): boolean {
  return (
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

function startOfDay(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

export default function Calendar({
  selectedDate,
  onDateSelect,
  today = new Date(),
  minDate,
  maxDate,
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(
    selectedDate || new Date()
  );

  const todayStart = startOfDay(today);
  const selectedDateStart = selectedDate ? startOfDay(selectedDate) : null;

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  );
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay();

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (day: number) => {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    const dateStart = startOfDay(date);

    if (minDate && dateStart < startOfDay(minDate)) return;
    if (maxDate && dateStart > startOfDay(maxDate)) return;

    onDateSelect(date);
  };

  const isDateDisabled = (day: number): boolean => {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    const dateStart = startOfDay(date);

    if (minDate && dateStart < startOfDay(minDate)) return true;
    if (maxDate && dateStart > startOfDay(maxDate)) return true;
    return false;
  };

  const days = [];
  // Empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null);
  }
  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
            <Typo variant="title-md"  className="text-[var(--fg)]">
            {MONTHS[currentMonth.getMonth()]}
            </Typo> 
            <Typo variant="title-md" bold="medium" className="text-cyan-500">
            {currentMonth.getFullYear()}
            </Typo>
        </div>
        <div>
            <button
            type="button"
            onClick={prevMonth}
            className="p-2 rounded-full hover:bg-[var(--muted)] transition-colors"
            aria-label="Previous month"
            >
            <span className="material-symbols-rounded text-[var(--fg)]">
                chevron_left
            </span>
            </button>
            <button
            type="button"
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-[var(--muted)] transition-colors"
            aria-label="Next month"
            >
            <span className="material-symbols-rounded text-[var(--fg)]">
                chevron_right
            </span>
            </button>
        </div>
      </div>

      {/* Days of week header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS_OF_WEEK.map((day) => (
          <div
            key={day}
            className="text-xs text-center text-[var(--muted-fg)] font-medium py-1"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, idx) => {
          if (day === null) {
            return <div key={`empty-${idx}`} className="aspect-square" />;
          }

          const date = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth(),
            day
          );
          const dateStart = startOfDay(date);
          const isSelected = selectedDateStart && isSameDay(dateStart, selectedDateStart);
          const isToday = isSameDay(dateStart, todayStart);
          const isDisabled = isDateDisabled(day);
          const isCurrentMonth = isSameMonth(dateStart, currentMonth);

          return (
            <button
              key={day}
              type="button"
              onClick={() => handleDateClick(day)}
              disabled={isDisabled}
              className={[
                "aspect-square rounded-lg text-sm transition-colors",
                isSelected
                  ? "bg-[var(--color-brand)] text-white font-medium"
                  : isToday
                  ? "bg-[var(--muted)] text-[var(--fg)] font-medium border border-[var(--color-brand)]"
                  : "text-[var(--fg)] hover:bg-[var(--muted)]",
                isDisabled
                  ? "opacity-30 cursor-not-allowed"
                  : "cursor-pointer",
                !isCurrentMonth ? "opacity-50" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

