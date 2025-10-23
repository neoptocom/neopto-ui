import * as React from "react";
import Icon from "./Icon";

export type CounterProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
};

export default function Counter({
  value = 0,
  onChange,
  min = 0,
  max = 99,
  step = 1,
  className = "",
  ...props
}: CounterProps) {
  const [count, setCount] = React.useState(value);

  React.useEffect(() => {
    setCount(value);
  }, [value]);

  const handleIncrement = () => {
    const newValue = Math.min(count + step, max);
    setCount(newValue);
    onChange?.(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(count - step, min);
    setCount(newValue);
    onChange?.(newValue);
  };

  const base =
    "inline-flex w-fit items-center justify-center gap-2 whitespace-nowrap overflow-hidden rounded-full h-7.5 px-2 " +
    "text-xs font-semibold bg-[var(--muted)] text-[var(--fg)]";

  return (
    <div className={[base, className].join(" ")} {...props}>
      <span className="min-w-[1.5rem] text-center">{count}</span>
      <div className="flex flex-col gap-0 -my-1">
        <button
          type="button"
          onClick={handleIncrement}
          disabled={count >= max}
          className="hover:opacity-70 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
          aria-label="Increment"
        >
          <Icon name="keyboard_arrow_up" size="sm" />
        </button>
        <button
          type="button"
          onClick={handleDecrement}
          disabled={count <= min}
          className="hover:opacity-70 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
          aria-label="Decrement"
        >
          <Icon name="keyboard_arrow_down" size="sm" />
        </button>
      </div>
    </div>
  );
}

