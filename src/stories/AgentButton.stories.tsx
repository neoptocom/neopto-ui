import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AgentButton } from "../components/Chat";
import Typo from "../components/Typo";
import agentLogoDark from "../assets/agent-neopto-dark.svg";
import agentLogoLight from "../assets/agent-neopto.svg";

const meta: Meta<typeof AgentButton> = {
  title: "Components/AgentButton",
  component: AgentButton,
  args: {
    hasNotification: false,
    notificationMessage: "Hello! How can I help you today?",
    logoSrc: agentLogoDark,
    logoAlt: "NeoPTO Agent",
  },
  argTypes: {
    hasNotification: { control: "boolean" },
    notificationMessage: { control: "text" },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen relative">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AgentButton>;

export const Playground: Story = {
  render: (args) => {
    const [chatOpen, setChatOpen] = React.useState(false);

    return (
      <>
        <AgentButton
          {...args}
          onOpenChat={() => {
            setChatOpen(true);
            console.log("Chat opened!");
          }}
        />
        {chatOpen && (
          <div className="fixed bottom-24 right-8 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 shadow-lg z-50">
            <Typo variant="body-md" className="text-[var(--fg)]">Chat opened!</Typo>
            <button
              onClick={() => setChatOpen(false)}
              className="mt-2 underline"
            >
              <Typo variant="label-sm" className="text-[var(--muted-fg)]">Close</Typo>
            </button>
          </div>
        )}
      </>
    );
  },
};

export const WithNotification: Story = {
  args: {
    hasNotification: true,
    notificationMessage: "I have a new update for your project. Would you like to see it?",
  },
};

export const AutoToggleNotification: Story = {
  render: (args) => {
    const [hasNotification, setHasNotification] = React.useState(false);

    React.useEffect(() => {
      const interval = setInterval(() => {
        setHasNotification((prev) => !prev);
      }, 5000);

      return () => clearInterval(interval);
    }, []);

    return (
      <AgentButton
        {...args}
        hasNotification={hasNotification}
        notificationMessage="This notification toggles every 5 seconds!"
        onOpenChat={() => {
          setHasNotification(false);
          console.log("Chat opened!");
        }}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    hasNotification: true,
    notificationMessage: "This button is disabled (greyscale, no animations)",
  },
};

export const DisabledWhenChatOpen: Story = {
  render: (args) => {
    const [chatOpen, setChatOpen] = React.useState(false);

    return (
      <>
        <AgentButton
          {...args}
          disabled={chatOpen}
          hasNotification={!chatOpen}
          notificationMessage="Click to open chat (button will become disabled)"
          onOpenChat={() => {
            setChatOpen(true);
            console.log("Chat opened!");
          }}
        />
        {chatOpen && (
          <div className="fixed bottom-24 right-8 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 shadow-lg z-50 max-w-md">
            <Typo variant="body-md" className="text-[var(--fg)]">
              Chat is open! Notice the button is now disabled (greyscale with no animations).
            </Typo>
            <button
              onClick={() => setChatOpen(false)}
              className="mt-2 px-3 py-1 bg-[var(--color-brand)] text-white rounded-full"
            >
              <Typo variant="label-sm">Close Chat</Typo>
            </button>
          </div>
        )}
      </>
    );
  },
};

export const DisabledTransition: Story = {
  render: (args) => {
    const [disabled, setDisabled] = React.useState(false);

    React.useEffect(() => {
      const interval = setInterval(() => {
        setDisabled((prev) => !prev);
      }, 4000);

      return () => clearInterval(interval);
    }, []);

    return (
      <>
        <AgentButton
          {...args}
          disabled={disabled}
          hasNotification={!disabled}
          notificationMessage="Watch the smooth 1-second transition!"
          onOpenChat={() => console.log("Chat opened!")}
        />
        <div className="fixed top-8 left-8 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 shadow-lg">
          <Typo variant="body-md" className="text-[var(--fg)]">
            State: <strong>{disabled ? "Disabled" : "Enabled"}</strong>
          </Typo>
          <Typo variant="label-sm" className="text-[var(--muted-fg)] mt-1">
            Toggles every 4 seconds
          </Typo>
        </div>
      </>
    );
  },
};

