import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DateInput } from "../components/DateInput";
import * as assets from "../assets";

const meta: Meta<typeof DateInput> = {
  title: "Components/DateInput",
  component: DateInput
};
export default meta;
type Story = StoryObj<typeof DateInput>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | null>(null);
    return (
      <div className="flex flex-col gap-4 w-96">
        <DateInput
          label="Select date"
          value={date}
          onChange={(d) => setDate(d)}
        />
      </div>
    );
  }
};

export const WithInitialValue: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | null>(new Date());
    return (
      <div className="flex flex-col gap-4 w-96">
        <DateInput
          label="Date"
          value={date}
          onChange={(d) => setDate(d)}
        />
      </div>
    );
  }
};

export const WithoutLabel: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | null>(null);
    return (
      <div className="flex flex-col gap-4 w-96">
        <DateInput
          value={date}
          onChange={(d) => setDate(d)}
        />
      </div>
    );
  }
};

export const Disabled: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | null>(new Date());
    return (
      <div className="flex flex-col gap-4 w-96">
        <DateInput
          label="Disabled date"
          value={date}
          onChange={(d) => setDate(d)}
          disabled
        />
      </div>
    );
  }
};

export const WithError: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | null>(null);
    return (
      <div className="flex flex-col gap-4 w-96">
        <DateInput
          label="Date"
          value={date}
          onChange={(d) => setDate(d)}
          error
        />
      </div>
    );
  }
};

export const WithMinMax: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | null>(null);
    const today = new Date();
    const minDate = new Date(today);
    minDate.setDate(today.getDate() - 7); // 7 days ago
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 30); // 30 days from now

    return (
      <div className="flex flex-col gap-4 w-96">
        <DateInput
          label="Select date (within range)"
          value={date}
          onChange={(d) => setDate(d)}
          minDate={minDate}
          maxDate={maxDate}
        />
        <p className="text-xs text-[var(--muted-fg)]">
          Available range: {minDate.toLocaleDateString()} to {maxDate.toLocaleDateString()}
        </p>
      </div>
    );
  }
};

export const Multiple: Story = {
  render: () => {
    const [startDate, setStartDate] = React.useState<Date | null>(null);
    const [endDate, setEndDate] = React.useState<Date | null>(null);

    return (
      <div className="flex flex-col gap-4 w-96">
        <DateInput
          label="Start date"
          value={startDate}
          onChange={(d) => setStartDate(d)}
        />
        <DateInput
          label="End date"
          value={endDate}
          onChange={(d) => setEndDate(d)}
          minDate={startDate || undefined}
        />
      </div>
    );
  }
};

export const WithBackgroundImages: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | null>(null);
    return (
      <div className="flex flex-col gap-4 w-96">
        <DateInput
          label="Select date"
          value={date}
          onChange={(d) => setDate(d)}
          lightBackgroundImage={assets.bgLight}
          darkBackgroundImage={assets.bgDark}
        />
        <p className="text-xs text-[var(--muted-fg)]">
          Calendar popup uses background images that adapt to light/dark mode.
        </p>
      </div>
    );
  }
};

