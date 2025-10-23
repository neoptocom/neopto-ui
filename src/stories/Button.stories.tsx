import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";
import Icon from "../components/Icon";
import Typo from "../components/Typo";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    disabled: false
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary", "ghost"]
    },
    size: {
      control: "radio", 
      options: ["sm", "md", "lg"]
    },
    fullWidth: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary">
        <Typo variant="title-sm" bold="semibold">Primary</Typo>
      </Button>
      <Button variant="secondary">
        <Typo variant="title-sm" bold="semibold">Secondary</Typo>
      </Button>
      <Button variant="ghost">
        <Typo variant="title-sm" bold="semibold">Ghost</Typo>
      </Button>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">
        <Typo variant="title-sm" bold="semibold">Small</Typo>
      </Button>
      <Button size="md">
        <Typo variant="title-sm" bold="semibold">Medium</Typo>
      </Button>
      <Button size="lg">
        <Typo variant="title-sm" bold="semibold">Large</Typo>
      </Button>
    </div>
  )
};

export const States: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button>
        <Typo variant="title-sm" bold="semibold">Default</Typo>
      </Button>
      <Button disabled>
        <Typo variant="title-sm" bold="semibold">Disabled</Typo>
      </Button>
      <Button fullWidth>
        <Typo variant="title-sm" bold="semibold">Full Width</Typo>
      </Button>
    </div>
  )
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button>
        <Icon name="add" />
        <Typo variant="title-sm" bold="semibold">Add Item</Typo>
      </Button>
      <Button variant="secondary">
        <Icon name="delete" />
        <Typo variant="title-sm" bold="semibold">Delete</Typo>
      </Button>
      <Button variant="ghost">
        <Icon name="settings" />
        <Typo variant="title-sm" bold="semibold">Settings</Typo>
      </Button>
    </div>
  )
};
