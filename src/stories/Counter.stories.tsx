import type { Meta, StoryObj } from "@storybook/react";
import Counter from "../components/Counter";

const meta: Meta<typeof Counter> = {
  title: "Components/Counter",
  component: Counter,
  args: {
    value: 0,
    min: 0,
    max: 99,
    step: 1
  },
  argTypes: {
    value: { control: "number" },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" }
  }
};
export default meta;
type Story = StoryObj<typeof Counter>;

export const Playground: Story = {};
export const Multiple: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Counter value={5} />
      <Counter value={10} />
      <Counter value={0} />
      <Counter value={3} />
      <Counter value={7} />
    </div>
  )
};

