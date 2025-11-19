import type { Meta, StoryObj } from "@storybook/react";
import Chip from "../components/Chip";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  args: {
    label: "Status",
    variant: "success"
  },
  argTypes: {
    variant: { control: "radio", options: ["success", "warning", "error", "light", "dark"] }
  }
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const Playground: Story = {};

export const WithIcon: Story = {
  args: { icon: "check", label: "Completed", variant: "success" }
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Chip variant="success" icon="check" label="Success" />
      <Chip variant="warning" icon="error_outline" label="Warning" />
      <Chip variant="error" icon="error" label="Error" />
      <Chip variant="light" icon="help_outline" label="Info" />
      <Chip variant="dark" icon="schedule" label="Scheduled" />
    </div>
  )
};

export const Deletable: Story = {
  args: {
    label: "Filter: Active",
    variant: "light",
    onDelete: () => console.log("delete")
  },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Chip {...args} onDelete={args.onDelete} />
      <Chip label="Team: Core" onDelete={args.onDelete} variant="dark" />
      <Chip label="Status: Pending" onDelete={args.onDelete} variant="warning" />
    </div>
  )
};

export const CustomBackgroundColor: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-gray-600 mb-2">Dark backgrounds (auto white text):</p>
        <div className="flex flex-wrap items-center gap-3">
          <Chip bgClassName="bg-blue-500" label="Blue 500" title="Custom blue background" />
          <Chip bgClassName="bg-purple-500" label="Purple 500" title="Custom purple background" />
          <Chip bgClassName="bg-pink-500" label="Pink 500" title="Custom pink background" />
          <Chip bgClassName="bg-indigo-500" label="Indigo 500" title="Custom indigo background" />
          <Chip bgClassName="bg-teal-500" label="Teal 500" title="Custom teal background" />
          <Chip bgClassName="bg-orange-500" label="Orange 500" title="Custom orange background" />
          <Chip bgClassName="bg-cyan-500" label="Cyan 500" title="Custom cyan background" />
          <Chip bgClassName="bg-emerald-500" label="Emerald 500" title="Custom emerald background" />
          <Chip bgClassName="bg-red-600" label="Red 600" title="Custom red background" />
          <Chip bgClassName="bg-gray-900" label="Gray 900" title="Custom gray background" />
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-2">Light backgrounds (auto dark text):</p>
        <div className="flex flex-wrap items-center gap-3">
          <Chip bgClassName="bg-blue-200" label="Blue 200" title="Light blue background" />
          <Chip bgClassName="bg-purple-200" label="Purple 200" title="Light purple background" />
          <Chip bgClassName="bg-pink-200" label="Pink 200" title="Light pink background" />
          <Chip bgClassName="bg-indigo-200" label="Indigo 200" title="Light indigo background" />
          <Chip bgClassName="bg-teal-200" label="Teal 200" title="Light teal background" />
          <Chip bgClassName="bg-orange-200" label="Orange 200" title="Light orange background" />
          <Chip bgClassName="bg-cyan-200" label="Cyan 200" title="Light cyan background" />
          <Chip bgClassName="bg-emerald-200" label="Emerald 200" title="Light emerald background" />
          <Chip bgClassName="bg-yellow-300" label="Yellow 300" title="Light yellow background" />
          <Chip bgClassName="bg-white" label="White" title="White background" />
        </div>
      </div>
    </div>
  )
};

export const CustomBackgroundWithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Chip bgClassName="bg-blue-500" icon="check" label="Completed" title="Task completed" />
      <Chip bgClassName="bg-purple-500" icon="star" label="Featured" title="Featured item" />
      <Chip bgClassName="bg-pink-500" icon="favorite" label="Favorite" title="Marked as favorite" />
      <Chip bgClassName="bg-indigo-500" icon="schedule" label="Scheduled" title="Scheduled for later" />
    </div>
  )
};

