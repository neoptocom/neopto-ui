import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Input placeholder="Enter your email" type="email" />
      <Input placeholder="Enter your password" type="password" />
      <Input placeholder="Search..." />
    </div>
  )
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Input placeholder="Disabled input" disabled />
    </div>
  )
};

export const Types: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Input placeholder="Text input" type="text" />
      <Input placeholder="Email input" type="email" />
      <Input placeholder="Password input" type="password" />
      <Input placeholder="Number input" type="number" />
    </div>
  )
};
