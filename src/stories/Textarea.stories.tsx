import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../components/Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "padded",
  },
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Textarea placeholder="Enter your message..." />
      <Textarea placeholder="With default value..." defaultValue="This is some default text that spans multiple lines and shows how the textarea handles content." />
    </div>
  ),
};

export const Inline: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Textarea variant="inline" placeholder="Inline textarea" />
      <Textarea variant="inline" placeholder="Inline with value" defaultValue="Inline textarea with some content" />
      <Textarea variant="inline" placeholder="Disabled inline" disabled />
    </div>
  )
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <div>
        <label className="block text-sm font-medium mb-2">Default</label>
        <Textarea placeholder="Type something..." />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">With Value</label>
        <Textarea defaultValue="This textarea has some content already filled in." />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Disabled</label>
        <Textarea placeholder="Disabled textarea" disabled />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Disabled with Value</label>
        <Textarea defaultValue="Disabled with content" disabled />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <div>
        <label className="block text-sm font-medium mb-2">Small (3 rows)</label>
        <Textarea placeholder="Small textarea..." rows={3} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Medium (5 rows)</label>
        <Textarea placeholder="Medium textarea..." rows={5} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Large (8 rows)</label>
        <Textarea placeholder="Large textarea..." rows={8} />
      </div>
    </div>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Textarea 
        placeholder="Custom height..." 
        style={{ minHeight: "200px" }}
      />
      <Textarea 
        placeholder="Fixed height (no resize)..." 
        className="resize-none"
        rows={4}
      />
    </div>
  ),
};

