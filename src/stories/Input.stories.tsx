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

export const Inline: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Input variant="inline" placeholder="Inline input" type="text" />
      <Input variant="inline" placeholder="Inline email" type="email" />
      <Input variant="inline" placeholder="Inline search..." />
      <Input variant="inline" placeholder="Disabled inline" disabled />
    </div>
  )
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Input label="Project name" placeholder="Neo PTO" />
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Input label="Password" type="password" placeholder="••••••••" />
      <Input label="Disabled field" placeholder="Not editable" disabled />
    </div>
  )
};

export const Error: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Input error placeholder="Unlabeled error" />
      <Input label="Email" type="email" placeholder="you@example.com" error />
      <Input
        label="Password"
        type="password"
        placeholder="This is required"
        error
      />
    </div>
  )
};
