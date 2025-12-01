import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "../components/Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Blocks: Story = {
  render: () => (
    <div className="space-y-3">
      <Skeleton className="h-4 w-48" />
      <Skeleton className="h-4 w-72" />
      <Skeleton className="h-24 w-full rounded-lg" />
    </div>
  )
};

export const FullyRounded: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Skeleton rounded="full" className="h-10 w-10" />
      <Skeleton rounded="full" className="h-12 w-12" />
      <Skeleton rounded="full" className="h-16 w-16" />
    </div>
  )
};

export const AvatarWithText: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Skeleton rounded="full" className="h-12 w-12" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-48" />
      </div>
    </div>
  )
};


