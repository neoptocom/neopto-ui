import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../components/IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  args: {
    icon: "search",
    variant: "ghost",
    size: "md",
    disabled: false,
    iconFill: 0
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["ghost", "primary", "secondary"]
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"]
    },
    iconFill: {
      control: "radio",
      options: [0, 1],
      description: "0 = outlined, 1 = filled"
    },
    disabled: {
      control: "boolean"
    }
  }
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <IconButton icon="search" variant="ghost" />
      <IconButton icon="search" variant="primary" />
      <IconButton icon="search" variant="secondary" />
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <IconButton icon="search" size="sm" />
      <IconButton icon="search" size="md" />
      <IconButton icon="search" size="lg" />
    </div>
  )
};

export const CommonIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <IconButton icon="search" title="Search" />
      <IconButton icon="filter_list" title="Filter" />
      <IconButton icon="close" title="Close" />
      <IconButton icon="menu" title="Menu" />
      <IconButton icon="more_vert" title="More options" />
      <IconButton icon="settings" title="Settings" />
      <IconButton icon="person" title="Profile" />
      <IconButton icon="notifications" title="Notifications" />
      <IconButton icon="favorite" title="Favorite" />
      <IconButton icon="share" title="Share" />
    </div>
  )
};

export const FilledIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <IconButton icon="favorite" iconFill={0} title="Outlined" />
      <IconButton icon="favorite" iconFill={1} title="Filled" />
      <IconButton icon="star" iconFill={0} title="Outlined" />
      <IconButton icon="star" iconFill={1} title="Filled" />
      <IconButton icon="bookmark" iconFill={0} title="Outlined" />
      <IconButton icon="bookmark" iconFill={1} title="Filled" />
    </div>
  )
};

export const States: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <IconButton icon="search" />
      <IconButton icon="search" disabled />
    </div>
  )
};

export const AllVariantsAndSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {(["ghost", "primary", "secondary"] as const).map((variant) => (
        <div key={variant} className="flex flex-col gap-3">
          <div className="text-sm font-medium text-[var(--fg)] capitalize">
            {variant}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <IconButton icon="search" variant={variant} size="sm" />
            <IconButton icon="search" variant={variant} size="md" />
            <IconButton icon="search" variant={variant} size="lg" />
          </div>
        </div>
      ))}
    </div>
  )
};

