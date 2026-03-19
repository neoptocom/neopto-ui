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

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-96">
      <div className="flex flex-col gap-3">
        <Input size="sm" placeholder="Small input" />
        <Input size="md" placeholder="Medium input" />
        <Input size="lg" placeholder="Large input" />
      </div>

      <div className="flex flex-col gap-3">
        <Input size="sm" variant="inline" placeholder="Small inline input" />
        <Input size="md" variant="inline" placeholder="Medium inline input" />
        <Input size="lg" variant="inline" placeholder="Large inline input" />
      </div>

      <div className="flex flex-col gap-3">
        <Input size="sm" label="Small labeled" placeholder="Small labeled input" />
        <Input size="md" label="Medium labeled" placeholder="Medium labeled input" />
        <Input size="lg" label="Large labeled" placeholder="Large labeled input" />
      </div>
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

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Input variant="inline" icon="search" placeholder="Search..." />
      <Input icon="email" type="email" placeholder="Email" />
      <Input label="Username" icon="person" placeholder="johndoe" />
      <Input label="Password" icon="lock" type="password" placeholder="Required field" error />
    </div>
  )
};
