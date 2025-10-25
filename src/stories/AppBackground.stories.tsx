import type { Meta, StoryObj } from "@storybook/react";
import { AppBackground } from "../components/AppBackground";
import { Typo } from "../components/Typo";
import { Button } from "../components/Button";

const meta = {
  title: "Components/AppBackground",
  component: AppBackground,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-8">
        <Typo variant="headline-lg" bold="bold" className="mb-4">
          Default Gradient Background
        </Typo>
        <Typo variant="body-md" className="mb-4">
          This background automatically switches between light and dark gradients based on the theme.
        </Typo>
        <Button variant="primary">Click Me</Button>
      </div>
    ),
  },
};

export const WithLightImage: Story = {
  args: {
    lightImage: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80",
    children: (
      <div className="p-8">
        <Typo variant="headline-lg" bold="bold" className="mb-4 text-white">
          With Light Mode Image
        </Typo>
        <Typo variant="body-md" className="mb-4 text-white">
          Custom background image for light mode. Switch to dark mode to see the gradient fallback.
        </Typo>
        <Button variant="primary">Click Me</Button>
      </div>
    ),
  },
};

export const WithDarkImage: Story = {
  args: {
    darkImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
    children: (
      <div className="p-8">
        <Typo variant="headline-lg" bold="bold" className="mb-4">
          With Dark Mode Image
        </Typo>
        <Typo variant="body-md" className="mb-4">
          Custom background image for dark mode. Switch to light mode to see the gradient fallback.
        </Typo>
        <Button variant="primary">Click Me</Button>
      </div>
    ),
  },
};

export const WithBothImages: Story = {
  args: {
    lightImage: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80",
    darkImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
    children: (
      <div className="p-8">
        <Typo variant="headline-lg" bold="bold" className="mb-4">
          Different Images per Theme
        </Typo>
        <Typo variant="body-md" className="mb-4">
          This example has different background images for light and dark modes. Toggle the theme to see the difference!
        </Typo>
        <Button variant="primary">Click Me</Button>
      </div>
    ),
  },
};

export const FullPageExample: Story = {
  args: {
    children: (
      <div className="flex min-h-screen items-center justify-center">
        <div className="max-w-2xl rounded-lg bg-white/80 dark:bg-slate-900/80 p-8 backdrop-blur-sm shadow-xl">
          <Typo variant="headline-lg" bold="bold" className="mb-4">
            Welcome to NeoPTO
          </Typo>
          <Typo variant="body-md" className="mb-6 text-text-secondary">
            This is an example of a full-page layout with AppBackground. The background automatically adjusts to your theme preference.
          </Typo>
          <div className="flex gap-4">
            <Button variant="primary">Get Started</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
      </div>
    ),
  },
};

