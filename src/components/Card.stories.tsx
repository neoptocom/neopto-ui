import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import Typo from "./Typo";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "padded"
  }
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Playground: Story = {
  render: (args) => (
    <div className="max-w-md">
      <Card {...args}>
        <Typo variant="headline-sm" bold="semibold">
          Glassmorphic card
        </Typo>
        <Typo variant="body-sm" className="mt-2 text-[var(--muted-fg)]">
          Cards wrap related content with elevated styling and optional backgrounds.
        </Typo>
      </Card>
    </div>
  ),
  args: {
    children: undefined
  }
};

export const WithDecorations: Story = {
  render: () => (
    <div className="max-w-md">
      <Card showDecorations>
        <Typo variant="headline-sm" bold="semibold">
          Decorative frame
        </Typo>
        <Typo variant="body-sm" className="mt-2 text-[var(--muted-fg)]">
          Enable gradient borders for hero cards or marketing content.
        </Typo>
      </Card>
    </div>
  )
};

export const AppBackground: Story = {
  render: () => (
    <div className="max-w-lg">
      <Card variant="app-background" className="p-8">
        <Typo variant="headline-sm" bold="semibold">
          App background variant
        </Typo>
        <Typo variant="body-sm" className="mt-3 text-[var(--muted-fg)]">
          Uses the same artwork as the `AppBackground` component and adapts to theme changes.
        </Typo>
        <div className="mt-6 flex gap-3">
          <Button variant="primary">Get started</Button>
          <Button variant="secondary">Learn more</Button>
        </div>
      </Card>
    </div>
  )
};

export const ElevatedComparison: Story = {
  render: () => (
    <div className="grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
      <Card>
        <Typo variant="title-md" bold="semibold">
          Default
        </Typo>
        <Typo variant="body-sm" className="mt-2 text-[var(--muted-fg)]">
          Soft glassmorphism without drop shadow.
        </Typo>
      </Card>
      <Card elevated>
        <Typo variant="title-md" bold="semibold">
          Elevated
        </Typo>
        <Typo variant="body-sm" className="mt-2 text-[var(--muted-fg)]">
          Adds `var(--shadow-elevated)` for emphasis and layering.
        </Typo>
      </Card>
    </div>
  )
};

export const DashboardLayout: Story = {
  render: () => (
    <div className="grid max-w-4xl gap-6 md:grid-cols-3">
      <Card>
        <Typo variant="title-md" bold="semibold">
          Daily active users
        </Typo>
        <Typo variant="display-sm" bold="bold" className="mt-4">
          1,248
        </Typo>
        <Typo variant="body-sm" className="mt-2 text-[var(--success)]">
          +12% vs last week
        </Typo>
      </Card>
      <Card elevated>
        <Typo variant="title-md" bold="semibold">
          New signups
        </Typo>
        <Typo variant="display-sm" bold="bold" className="mt-4">
          327
        </Typo>
        <Typo variant="body-sm" className="mt-2 text-[var(--muted-fg)]">
          Compared to rolling average
        </Typo>
      </Card>
      <Card showDecorations>
        <Typo variant="title-md" bold="semibold">
          Retention cohort
        </Typo>
        <Typo variant="body-sm" className="mt-3 text-[var(--muted-fg)]">
          Combine props to create data-heavy layouts with visual hierarchy.
        </Typo>
      </Card>
    </div>
  )
};

