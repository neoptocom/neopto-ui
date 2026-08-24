import * as React from "react";
import { useMemo, useState, type ChangeEvent, type KeyboardEvent } from "react";
import { Input, type InputProps } from "./Input";
import Chip, { type ChipProps } from "./Chip";

export type ChipInputListProps = {
  id?: string;
  name?: string;
  label: string;
  placeholder?: string;
  type?: InputProps["type"];
  values: string[];
  onChange: (values: string[]) => void;
  formatOnChange?: (value: string) => string;
  formatOnAdd?: (value: string) => string;
  allowDuplicates?: boolean;
  addOnBlur?: boolean;
  error?: boolean;
  disabled?: boolean;
  chipsWrapperClassName?: string;
  chipVariant?: ChipProps["variant"];
};

export function ChipInputList({
  id,
  name,
  label,
  placeholder,
  type = "text",
  values,
  onChange,
  formatOnChange,
  formatOnAdd,
  allowDuplicates = false,
  addOnBlur = true,
  error,
  disabled,
  chipsWrapperClassName,
  chipVariant = "light",
}: ChipInputListProps) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value;
    setInputValue(formatOnChange ? formatOnChange(rawValue) : rawValue);
  };

  const addValue = () => {
    let nextValue = inputValue;
    if (!nextValue.trim()) {
      setInputValue("");
      return;
    }
    if (formatOnAdd) nextValue = formatOnAdd(nextValue);
    nextValue = nextValue.trim();
    if (!nextValue) {
      setInputValue("");
      return;
    }
    if (!allowDuplicates) {
      const lowerNext = nextValue.toLowerCase();
      if (values.some((existing) => existing.toLowerCase() === lowerNext)) {
        setInputValue("");
        return;
      }
    }
    onChange([...values, nextValue]);
    setInputValue("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addValue();
    }
  };

  const chipsClassName = useMemo(() => {
    const baseClass = "mt-2 flex flex-wrap gap-2";
    return chipsWrapperClassName
      ? `${baseClass} ${chipsWrapperClassName}`
      : baseClass;
  }, [chipsWrapperClassName]);

  return (
    <div>
      <Input
        id={id ?? name}
        name={name}
        type={type}
        placeholder={placeholder}
        label={label}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          if (addOnBlur) addValue();
        }}
        error={error}
        disabled={disabled}
      />
      {values.length > 0 ? (
        <div className={chipsClassName}>
          {values.map((value, index) => (
            <Chip
              key={`${value}-${index}`}
              variant={chipVariant}
              label={value}
              onDelete={
                disabled
                  ? undefined
                  : () => onChange(values.filter((_, i) => i !== index))
              }
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default ChipInputList;
