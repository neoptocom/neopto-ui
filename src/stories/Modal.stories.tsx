import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import Typo from "../components/Typo";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component to manage modal state
function ModalDemo(props: Partial<React.ComponentProps<typeof Modal>>) {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} {...props}>
        {props.children}
      </Modal>
    </div>
  );
}

export const Default: Story = {
  args: { open: false },
  render: () => (
    <ModalDemo>
      <Typo variant="headline-md">Welcome!</Typo>
      <Typo variant="body-md" className="mt-4">
        This is a simple modal with custom content. Click outside or press ESC to close.
      </Typo>
    </ModalDemo>
  ),
};


export const NoBackdropClose: Story = {
  args: { open: false },
  render: () => (
    <ModalDemo 
      closeOnBackdrop={false}
    >
      <Typo variant="headline-md" bold="semibold" className="mb-4">Important Notice</Typo>
      <Typo variant="body-md">
        This modal cannot be closed by clicking the backdrop.
      </Typo>
      <Typo variant="body-md" className="mt-4">
        You must use the button below or press ESC to close.
      </Typo>
      <div className="mt-6">
        <Button onClick={() => {}}>Acknowledge</Button>
      </div>
    </ModalDemo>
  ),
};

export const CustomStyling: Story = {
  args: { open: false },
  render: () => (
    <ModalDemo 
      className="max-w-2xl p-12"
    >
      <Typo variant="headline-md" bold="semibold" className="mb-4">Large Modal</Typo>
      <Typo variant="body-md">
        This modal has custom styling with a larger max-width and more padding.
      </Typo>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="p-4 bg-[var(--muted)] rounded-2xl">
          <Typo variant="label-lg" bold="semibold">Feature 1</Typo>
          <Typo variant="body-sm" className="mt-2">Description here</Typo>
        </div>
        <div className="p-4 bg-[var(--muted)] rounded-2xl">
          <Typo variant="label-lg" bold="semibold">Feature 2</Typo>
          <Typo variant="body-sm" className="mt-2">Description here</Typo>
        </div>
      </div>
    </ModalDemo>
  ),
};

export const FormModal: Story = {
  args: { open: false },
  render: () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(`Submitted: ${name}, ${email}`);
      setOpen(false);
    };

    return (
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>Open Form Modal</Button>
        <Modal 
          open={open} 
          onClose={() => setOpen(false)}
        >
          <form onSubmit={handleSubmit}>
            <Typo variant="headline-md" bold="semibold" className="mb-4">Contact Form</Typo>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-full border border-[var(--border)] bg-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-full border border-[var(--border)] bg-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="flex gap-3 justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-6 py-2 rounded-full border border-[var(--border)] hover:bg-[var(--muted)] transition-colors"
                >
                  Cancel
                </button>
                <Button type="submit">Submit</Button>
              </div>
            </div>
          </form>
        </Modal>
      </div>
    );
  },
};

export const ConfirmationDialog: Story = {
  args: { open: false },
  render: () => {
    const [open, setOpen] = useState(false);

    const handleConfirm = () => {
      alert("Action confirmed!");
      setOpen(false);
    };

    return (
      <div className="p-8">
        <Button variant="primary" onClick={() => setOpen(true)}>
          Delete Item
        </Button>
        <Modal 
          open={open} 
          onClose={() => setOpen(false)}
          closeOnBackdrop={false}
        >
          <Typo variant="headline-md" bold="semibold" className="mb-4">Confirm Deletion</Typo>
          <Typo variant="body-md">
            Are you sure you want to delete this item? This action cannot be undone.
          </Typo>
          <div className="flex gap-3 justify-end mt-6">
            <button
              onClick={() => setOpen(false)}
              className="px-6 py-2 rounded-full border border-[var(--border)] hover:bg-[var(--muted)] transition-colors"
            >
              Cancel
            </button>
            <Button variant="primary" onClick={handleConfirm}>
              Delete
            </Button>
          </div>
        </Modal>
      </div>
    );
  },
};

/**
 * This story demonstrates the Card component's decorative elements.
 * The Card inside the Modal includes subtle ellipse gradients and border accents
 * that can be toggled on/off via the `showDecorations` prop.
 */
export const WithCardDecorations: Story = {
  args: { open: false },
  render: () => {
    const [open, setOpen] = useState(false);
    const [showDecorations, setShowDecorations] = useState(true);

    const ModalDemo = ({ children, ...props }: any) => (
      <>
        <button
          onClick={() => setOpen(true)}
          className="px-6 py-3 rounded-full bg-[var(--primary)] text-white hover:opacity-90 transition-opacity"
          type="button"
        >
          Open Modal with Card Decorations
        </button>
        <label className="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            checked={showDecorations}
            onChange={(e) => setShowDecorations(e.target.checked)}
          />
          <span>Show Card Decorations</span>
        </label>
        <Modal 
          open={open} 
          onClose={() => setOpen(false)} 
          showDecorations={showDecorations}
          {...props} 
        />
      </>
    );

    return (
      <ModalDemo>
        <Typo variant="headline-md" bold="semibold" className="mb-4">Card with Decorative Elements</Typo>
        <div className="space-y-4">
          <Typo variant="body-md">
            The Card component now includes decorative SVG elements from your Figma design:
          </Typo>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Typo variant="body-sm">
                <strong>Ellipse gradients</strong> - Subtle blue and white ellipses that add depth
              </Typo>
            </li>
            <li>
              <Typo variant="body-sm">
                <strong>Gradient borders</strong> - Green gradient lines on all four sides
              </Typo>
            </li>
            <li>
              <Typo variant="body-sm">
                <strong>Toggle option</strong> - Use the checkbox above to toggle decorations on/off
              </Typo>
            </li>
          </ul>
          <Typo variant="body-sm" className="text-gray-500">
            Note: The current Modal is using showDecorations={showDecorations.toString()}
          </Typo>
        </div>
      </ModalDemo>
    );
  },
};

