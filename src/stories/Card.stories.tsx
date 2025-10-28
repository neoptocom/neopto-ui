import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components/Card";
import Typo from "../components/Typo";
import { Button } from "../components/Button";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "padded",
  },
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <div className="max-w-md">
      <Card>
        <Typo variant="headline-sm" bold="semibold">Default Card</Typo>
        <Typo variant="body-md" className="mt-2">
          This is a default card with glassmorphic styling.
        </Typo>
      </Card>
    </div>
  ),
};

export const WithDecorations: Story = {
  render: () => (
    <div className="max-w-md">
      <Card showDecorations={true}>
        <Typo variant="headline-sm" bold="semibold">Card With Decorations</Typo>
        <Typo variant="body-md" className="mt-2">
          This card has the decorative SVG gradient borders enabled.
        </Typo>
      </Card>
    </div>
  ),
};

export const AppBackgroundVariant: Story = {
  render: () => (
    <div className="max-w-md">
      <Card variant="app-background">
        <Typo variant="headline-sm" bold="semibold">App Background Card</Typo>
        <Typo variant="body-md" className="mt-2">
          This card uses the same background images as AppBackground component. It automatically switches between light and dark mode backgrounds.
        </Typo>
        <div className="mt-4">
          <Button variant="primary">Learn More</Button>
        </div>
      </Card>
    </div>
  ),
};

export const AppBackgroundWithDecorations: Story = {
  render: () => (
    <div className="max-w-md">
      <Card variant="app-background" showDecorations={true}>
        <Typo variant="headline-sm" bold="semibold">App Background + Decorations</Typo>
        <Typo variant="body-md" className="mt-2">
          This card combines the app-background variant with decorative SVG gradient borders. The decorations render above the background image.
        </Typo>
        <div className="mt-4">
          <Button variant="primary">Explore</Button>
        </div>
      </Card>
    </div>
  ),
};

export const AppBackgroundLarge: Story = {
  render: () => (
    <div className="max-w-2xl">
      <Card variant="app-background" className="p-8" style={{ minHeight: "400px" }}>
        <Typo variant="headline-lg" bold="bold">Large App Background Card</Typo>
        <Typo variant="body-lg" className="mt-4">
          The app-background variant looks great with larger cards. The background image scales to fill the entire card.
        </Typo>
        <div className="mt-8 grid grid-cols-2 gap-6">
          <div>
            <Typo variant="title-md" bold="semibold">Feature One</Typo>
            <Typo variant="body-sm" className="mt-2 text-[var(--muted-fg)]">
              Description of the first feature goes here.
            </Typo>
          </div>
          <div>
            <Typo variant="title-md" bold="semibold">Feature Two</Typo>
            <Typo variant="body-sm" className="mt-2 text-[var(--muted-fg)]">
              Description of the second feature goes here.
            </Typo>
          </div>
        </div>
      </Card>
    </div>
  ),
};

export const Elevated: Story = {
  render: () => (
    <div className="max-w-md">
      <Card elevated>
        <Typo variant="headline-sm" bold="semibold">Elevated Card</Typo>
        <Typo variant="body-md" className="mt-2">
          This card uses the elevated shadow effect for a floating appearance.
        </Typo>
        <div className="mt-4">
          <Button variant="primary">Take Action</Button>
        </div>
      </Card>
    </div>
  ),
};

export const ElevatedComparison: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 max-w-4xl">
      <div>
        <Typo variant="label-lg" bold="semibold" className="mb-3">Default</Typo>
        <Card>
          <Typo variant="title-md" bold="semibold">Regular Card</Typo>
          <Typo variant="body-sm" className="mt-2">
            Standard card with glassmorphic effect, no shadow.
          </Typo>
        </Card>
      </div>
      <div>
        <Typo variant="label-lg" bold="semibold" className="mb-3">Elevated</Typo>
        <Card elevated>
          <Typo variant="title-md" bold="semibold">Elevated Card</Typo>
          <Typo variant="body-sm" className="mt-2">
            Enhanced with elevated shadow for emphasis.
          </Typo>
        </Card>
      </div>
    </div>
  ),
};

export const ElevatedAppBackground: Story = {
  render: () => (
    <div className="max-w-md">
      <Card variant="app-background" elevated className="p-8">
        <Typo variant="headline-sm" bold="semibold">Elevated + App Background</Typo>
        <Typo variant="body-md" className="mt-3">
          Combining the app-background variant with elevated shadow creates a stunning effect.
        </Typo>
        <div className="mt-6 flex gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
      </Card>
    </div>
  ),
};

export const CustomPadding: Story = {
  render: () => (
    <div className="max-w-md space-y-4">
      <Card className="p-8">
        <Typo variant="label-lg" bold="semibold">Large Padding (p-8)</Typo>
        <Typo variant="body-sm" className="mt-1">More breathing room inside the card.</Typo>
      </Card>
      <Card className="p-4">
        <Typo variant="label-lg" bold="semibold">Small Padding (p-4)</Typo>
        <Typo variant="body-sm" className="mt-1">Compact card layout.</Typo>
      </Card>
      <Card className="p-0">
        <div className="p-6 border-b border-[var(--border)]">
          <Typo variant="label-lg" bold="semibold">No Default Padding (p-0)</Typo>
        </div>
        <div className="p-6">
          <Typo variant="body-sm">Custom padding applied to inner elements.</Typo>
        </div>
      </Card>
    </div>
  ),
};

export const WithContent: Story = {
  render: () => (
    <div className="max-w-md">
      <Card>
        <Typo variant="title-lg" bold="semibold">Product Feature</Typo>
        <Typo variant="body-md" className="mt-3">
          This card showcases how rich content looks with the glassmorphic background.
        </Typo>
        <div className="mt-4 space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-[var(--success)]">✓</span>
            <Typo variant="body-sm">Fast performance</Typo>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[var(--success)]">✓</span>
            <Typo variant="body-sm">Easy to customize</Typo>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[var(--success)]">✓</span>
            <Typo variant="body-sm">Beautiful design</Typo>
          </div>
        </div>
        <div className="mt-6">
          <Button variant="primary">Learn More</Button>
        </div>
      </Card>
    </div>
  ),
};

export const MultipleCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card>
        <Typo variant="title-md" bold="semibold">Analytics</Typo>
        <Typo variant="display-md" bold="bold" className="mt-4">1,234</Typo>
        <Typo variant="body-sm" className="mt-1 text-[var(--muted-fg)]">Total Users</Typo>
      </Card>
      <Card>
        <Typo variant="title-md" bold="semibold">Revenue</Typo>
        <Typo variant="display-md" bold="bold" className="mt-4">$45.2K</Typo>
        <Typo variant="body-sm" className="mt-1 text-[var(--muted-fg)]">This Month</Typo>
      </Card>
      <Card>
        <Typo variant="title-md" bold="semibold">Growth</Typo>
        <Typo variant="display-md" bold="bold" className="mt-4">+24%</Typo>
        <Typo variant="body-sm" className="mt-1 text-[var(--muted-fg)]">vs Last Month</Typo>
      </Card>
    </div>
  ),
};

export const LargeCard: Story = {
  render: () => (
    <div className="max-w-3xl">
      <Card className="p-8">
        <div className="flex items-start justify-between">
          <div>
            <Typo variant="headline-md" bold="semibold">Welcome to NeoPTO UI</Typo>
            <Typo variant="body-lg" className="mt-2 text-[var(--muted-fg)]">
              A modern React component library
            </Typo>
          </div>
          <Button variant="primary">Get Started</Button>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-6">
          <div>
            <Typo variant="label-lg" bold="semibold" className="text-[var(--color-brand)]">
              Modern Design
            </Typo>
            <Typo variant="body-md" className="mt-2">
              Built with the latest design trends and best practices for creating beautiful user interfaces.
            </Typo>
          </div>
          <div>
            <Typo variant="label-lg" bold="semibold" className="text-[var(--color-brand)]">
              Developer Friendly
            </Typo>
            <Typo variant="body-md" className="mt-2">
              Fully typed with TypeScript and documented with Storybook for the best developer experience.
            </Typo>
          </div>
        </div>
      </Card>
    </div>
  ),
};

export const CardList: Story = {
  render: () => (
    <div className="max-w-2xl space-y-3">
      {[1, 2, 3, 4].map((item) => (
        <Card key={item} className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--muted)] flex items-center justify-center">
                <Typo variant="title-md" bold="semibold">{item}</Typo>
              </div>
              <div>
                <Typo variant="title-sm" bold="semibold">List Item {item}</Typo>
                <Typo variant="body-sm" className="text-[var(--muted-fg)]">
                  Description for item {item}
                </Typo>
              </div>
            </div>
            <Button variant="ghost" size="sm">View</Button>
          </div>
        </Card>
      ))}
    </div>
  ),
};

export const NestedContent: Story = {
  render: () => (
    <div className="max-w-2xl">
      <Card>
        <Typo variant="headline-sm" bold="semibold">Project Dashboard</Typo>
        <div className="mt-4 space-y-3">
          <Card className="p-4 bg-[var(--muted)]">
            <Typo variant="title-sm" bold="medium">In Progress</Typo>
            <Typo variant="body-sm" className="mt-1 text-[var(--muted-fg)]">3 tasks remaining</Typo>
          </Card>
          <Card className="p-4 bg-[var(--muted)]">
            <Typo variant="title-sm" bold="medium">Completed</Typo>
            <Typo variant="body-sm" className="mt-1 text-[var(--muted-fg)]">15 tasks done</Typo>
          </Card>
        </div>
      </Card>
    </div>
  ),
};

export const FormCard: Story = {
  render: () => (
    <div className="max-w-md">
      <Card>
        <Typo variant="headline-sm" bold="semibold">Sign In</Typo>
        <Typo variant="body-sm" className="mt-1 text-[var(--muted-fg)]">
          Enter your credentials to continue
        </Typo>
        <form className="mt-6 space-y-4">
          <div>
            <label className="block mb-2">
              <Typo variant="label-md" bold="medium">Email</Typo>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-2xl bg-[var(--muted)] border-none outline-none focus:ring-2 focus:ring-[var(--color-brand)]"
            />
          </div>
          <div>
            <label className="block mb-2">
              <Typo variant="label-md" bold="medium">Password</Typo>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-2xl bg-[var(--muted)] border-none outline-none focus:ring-2 focus:ring-[var(--color-brand)]"
            />
          </div>
          <Button variant="primary" className="w-full">Sign In</Button>
        </form>
      </Card>
    </div>
  ),
};

