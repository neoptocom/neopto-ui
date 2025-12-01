import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";
import Typo from "./Typo";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Primary action",
    variant: "primary",
    size: "md",
    disabled: false
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary", "ghost"]
    },
    size: {
      control: "inline-radio",
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
        <Typo variant="title-sm" bold="semibold">
          Primary
        </Typo>
      </Button>
      <Button variant="secondary">
        <Typo variant="title-sm" bold="semibold">
          Secondary
        </Typo>
      </Button>
      <Button variant="ghost">
        <Typo variant="title-sm" bold="semibold">
          Ghost
        </Typo>
      </Button>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">
        <Typo variant="title-sm" bold="semibold">
          Small
        </Typo>
      </Button>
      <Button size="md">
        <Typo variant="title-sm" bold="semibold">
          Medium
        </Typo>
      </Button>
      <Button size="lg">
        <Typo variant="title-sm" bold="semibold">
          Large
        </Typo>
      </Button>
    </div>
  )
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button>
        <Icon name="add" />
        <span>Add Item</span>
      </Button>
      <Button variant="secondary">
        <Icon name="download" />
        <span>Download</span>
      </Button>
      <Button variant="ghost">
        <Icon name="settings" />
        <span>Settings</span>
      </Button>
    </div>
  )
};

export const FullWidthCallToAction: Story = {
  args: {
    fullWidth: true,
    size: "lg",
    children: "Start free trial"
  }
};

















