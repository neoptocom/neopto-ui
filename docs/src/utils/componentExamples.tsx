import { Button } from "../../../src/components/Button";
import { Input } from "../../../src/components/Input";
import { Card } from "../../../src/components/Card";
import Typo from "../../../src/components/Typo";
import Chip from "../../../src/components/Chip";
import Avatar from "../../../src/components/Avatar";
import AvatarGroup from "../../../src/components/AvatarGroup";
import { Modal } from "../../../src/components/Modal";
import { Skeleton } from "../../../src/components/Skeleton";
import Icon from "../../../src/components/Icon";
import { useState } from "react";

type ComponentExample = {
  title: string;
  description?: string;
  demoTitle?: string;
  demo: React.ReactNode;
  code?: string;
};

export function getComponentExamples(componentId: string): ComponentExample[] {
  const examplesMap: Record<string, ComponentExample[]> = {
    button: [
      {
        title: "Variants",
        description: "Different button variants",
        demo: (
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        ),
        code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>`,
      },
      {
        title: "Sizes",
        description: "Different button sizes",
        demo: (
          <div className="flex gap-4 items-center flex-wrap">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        ),
        code: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
      },
    ],
    input: [
      {
        title: "Basic Input",
        description: "Standard text input",
        demo: <Input placeholder="Enter text..." />,
        code: `<Input placeholder="Enter text..." />`,
      },
      {
        title: "Sizes",
        description: "Different input sizes",
        demo: (
          <div className="flex flex-col gap-4">
            <Input placeholder="Small input" />
            <Input placeholder="Medium input" />
            <Input placeholder="Large input" />
          </div>
        ),
        code: `<Input placeholder="Small input" />
<Input placeholder="Medium input" />
<Input placeholder="Large input" />`,
      },
    ],
    card: [
      {
        title: "Basic Card",
        description: "Simple card component",
        demo: (
          <Card className="p-6">
            <Typo variant="headline-sm" bold="semibold" className="mb-2">
              Card Title
            </Typo>
            <Typo variant="body-md" className="text-text-secondary">
              Card content goes here
            </Typo>
          </Card>
        ),
        code: `<Card className="p-6">
  <Typo variant="headline-sm">Card Title</Typo>
  <Typo variant="body-md">Card content</Typo>
</Card>`,
      },
    ],
    chip: [
      {
        title: "Chip Variants",
        description: "Different chip styles",
        demo: (
          <div className="flex gap-2 flex-wrap">
            <Chip>Default</Chip>
            <Chip variant="success">Success</Chip>
            <Chip variant="warning">Warning</Chip>
          </div>
        ),
        code: `<Chip>Default</Chip>
<Chip variant="success">Success</Chip>
<Chip variant="warning">Warning</Chip>`,
      },
    ],
    avatar: [
      {
        title: "Avatar",
        description: "User avatar component",
        demo: (
          <div className="flex gap-4 items-center">
            <Avatar name="John Doe" />
            <Avatar name="Jane Smith" src="/avatar.jpg" />
            <AvatarGroup max={3}>
              <Avatar name="User 1" />
              <Avatar name="User 2" />
              <Avatar name="User 3" />
              <Avatar name="User 4" />
            </AvatarGroup>
          </div>
        ),
        code: `<Avatar name="John Doe" />
<AvatarGroup max={3}>
  <Avatar name="User 1" />
  <Avatar name="User 2" />
</AvatarGroup>`,
      },
    ],
    modal: [
      {
        title: "Modal",
        description: "Dialog modal component",
        demo: <ModalDemo />,
        code: `<Modal open={isOpen} onClose={() => setIsOpen(false)}>
  <Typo variant="headline-md">Modal Title</Typo>
  <Typo variant="body-md">Modal content</Typo>
</Modal>`,
      },
    ],
    skeleton: [
      {
        title: "Skeleton",
        description: "Loading placeholder",
        demo: (
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ),
        code: `<Skeleton className="h-4 w-full" />
<Skeleton className="h-4 w-3/4" />`,
      },
    ],
  };

  return examplesMap[componentId] || [];
}

function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="space-y-4">
          <Typo variant="headline-md" bold="bold">
            Modal Title
          </Typo>
          <Typo variant="body-md" className="text-text-secondary">
            This is a modal dialog example.
          </Typo>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </div>
      </Modal>
    </>
  );
}
