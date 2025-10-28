import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "../components/Separator";
import Typo from "../components/Typo";
import { Card } from "../components/Card";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
};
export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: () => (
    <div className="max-w-md">
      <Typo variant="body-md">Content above separator</Typo>
      <Separator />
      <Typo variant="body-md">Content below separator</Typo>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className="max-w-md">
      <Card>
        <Typo variant="title-md" bold="semibold">Card Title</Typo>
        <Typo variant="body-sm" className="mt-2 text-[var(--muted-fg)]">
          Some description text goes here
        </Typo>
        <Separator />
        <Typo variant="body-md">
          Additional content after the separator
        </Typo>
      </Card>
    </div>
  ),
};

export const CustomSpacing: Story = {
  render: () => (
    <div className="max-w-md space-y-8">
      <div>
        <Typo variant="label-lg" bold="semibold">No Margin</Typo>
        <Separator className="my-0" />
        <Typo variant="body-sm">Text immediately after</Typo>
      </div>
      
      <div>
        <Typo variant="label-lg" bold="semibold">Large Margin (my-4)</Typo>
        <Separator className="my-4" />
        <Typo variant="body-sm">More space around separator</Typo>
      </div>
      
      <div>
        <Typo variant="label-lg" bold="semibold">Extra Large Margin (my-8)</Typo>
        <Separator className="my-8" />
        <Typo variant="body-sm">Even more space</Typo>
      </div>
    </div>
  ),
};

export const DifferentColors: Story = {
  render: () => (
    <div className="max-w-md space-y-6">
      <div>
        <Typo variant="label-lg" bold="semibold">Default Border Color</Typo>
        <Separator />
      </div>
      
      <div>
        <Typo variant="label-lg" bold="semibold">Brand Color</Typo>
        <Separator className="bg-[var(--color-brand)]" />
      </div>
      
      <div>
        <Typo variant="label-lg" bold="semibold">Success Color</Typo>
        <Separator className="bg-[var(--success)]" />
      </div>
      
      <div>
        <Typo variant="label-lg" bold="semibold">Muted Foreground</Typo>
        <Separator className="bg-[var(--muted-fg)]" />
      </div>
    </div>
  ),
};

export const DifferentThickness: Story = {
  render: () => (
    <div className="max-w-md space-y-6">
      <div>
        <Typo variant="label-lg" bold="semibold">Default (1px)</Typo>
        <Separator />
      </div>
      
      <div>
        <Typo variant="label-lg" bold="semibold">2px Thick</Typo>
        <Separator className="h-0.5" />
      </div>
      
      <div>
        <Typo variant="label-lg" bold="semibold">4px Thick</Typo>
        <Separator className="h-1" />
      </div>
      
      <div>
        <Typo variant="label-lg" bold="semibold">8px Thick</Typo>
        <Separator className="h-2" />
      </div>
    </div>
  ),
};

export const InList: Story = {
  render: () => (
    <div className="max-w-md">
      <Card>
        <Typo variant="title-md" bold="semibold">Menu Items</Typo>
        <Separator className="my-3" />
        
        <div className="space-y-3">
          <Typo variant="body-md">Home</Typo>
          <Separator />
          <Typo variant="body-md">About</Typo>
          <Separator />
          <Typo variant="body-md">Services</Typo>
          <Separator />
          <Typo variant="body-md">Contact</Typo>
        </div>
      </Card>
    </div>
  ),
};

export const VerticalSections: Story = {
  render: () => (
    <div className="max-w-2xl">
      <Card>
        <Typo variant="headline-sm" bold="semibold">Article Title</Typo>
        <Typo variant="body-sm" className="mt-1 text-[var(--muted-fg)]">
          Published on October 28, 2025
        </Typo>
        
        <Separator className="my-6" />
        
        <Typo variant="body-md">
          This is the introduction paragraph of the article. It provides context and sets up what the reader can expect.
        </Typo>
        
        <Separator className="my-6" />
        
        <Typo variant="title-md" bold="semibold">Section 1</Typo>
        <Typo variant="body-md" className="mt-2">
          Content for the first section goes here with relevant information.
        </Typo>
        
        <Separator className="my-6" />
        
        <Typo variant="title-md" bold="semibold">Section 2</Typo>
        <Typo variant="body-md" className="mt-2">
          Content for the second section with more details.
        </Typo>
      </Card>
    </div>
  ),
};

export const WithWidth: Story = {
  render: () => (
    <div className="max-w-md space-y-6">
      <div>
        <Typo variant="label-lg" bold="semibold">Full Width (default)</Typo>
        <Separator />
      </div>
      
      <div>
        <Typo variant="label-lg" bold="semibold">50% Width</Typo>
        <Separator className="w-1/2" />
      </div>
      
      <div>
        <Typo variant="label-lg" bold="semibold">25% Width</Typo>
        <Separator className="w-1/4" />
      </div>
      
      <div>
        <Typo variant="label-lg" bold="semibold">Centered 50%</Typo>
        <div className="flex justify-center">
          <Separator className="w-1/2" />
        </div>
      </div>
    </div>
  ),
};

