import type { Meta, StoryObj } from "@storybook/react";
import { MessageBubble } from "../components/MessageBubble";
import Typo from "../components/Typo";

const meta: Meta<typeof MessageBubble> = {
  title: "Components/MessageBubble",
  component: MessageBubble
};
export default meta;
type Story = StoryObj<typeof MessageBubble>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-md p-4">
      <MessageBubble>
        <Typo variant="title-sm">Hello! This is a default message bubble with no direction.</Typo>
      </MessageBubble>
    </div>
  )
};

export const Directions: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-md p-4">
      <div className="flex justify-start">
        <MessageBubble direction="left">
          <Typo variant="title-sm">This is a left-aligned message bubble.</Typo>
        </MessageBubble>
      </div>
      <div className="flex justify-end">
        <MessageBubble direction="right">
          <Typo variant="title-sm">This is a right-aligned message bubble.</Typo>
        </MessageBubble>
      </div>
      <div className="flex justify-start">
        <MessageBubble direction="left">
          <Typo variant="title-sm">Messages from the left typically have the small radius on bottom-left corner.</Typo>
        </MessageBubble>
      </div>
      <div className="flex justify-end">
        <MessageBubble direction="right">
          <Typo variant="title-sm">Messages from the right have the small radius on bottom-right corner.</Typo>
        </MessageBubble>
      </div>
    </div>
  )
};

export const CustomColors: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-md p-4">
      <div className="flex justify-start">
        <MessageBubble direction="left" color="#E3F2FD">
          <Typo variant="title-sm" className="text-[#1565C0]">Light blue message</Typo>
        </MessageBubble>
      </div>
      <div className="flex justify-end">
        <MessageBubble direction="right" color="#1976D2">
          <Typo variant="title-sm" className="text-white">Blue message with white text</Typo>
        </MessageBubble>
      </div>
      <div className="flex justify-start">
        <MessageBubble direction="left" color="#F3E5F5">
          <Typo variant="title-sm" className="text-[#7B1FA2]">Purple tinted message</Typo>
        </MessageBubble>
      </div>
      <div className="flex justify-end">
        <MessageBubble direction="right" color="#E8F5E9">
          <Typo variant="title-sm" className="text-[#2E7D32]">Green message</Typo>
        </MessageBubble>
      </div>
    </div>
  )
};

export const ChatConversation: Story = {
  render: () => (
    <div className="flex flex-col gap-3 max-w-2xl p-4">
      <div className="flex justify-start">
        <MessageBubble direction="left" color="#F5F5F5">
          <Typo variant="title-sm" className="text-[#333]">Hey! How can I help you today?</Typo>
        </MessageBubble>
      </div>
      <div className="flex justify-end">
        <MessageBubble direction="right" color="var(--color-brand)">
          <Typo variant="title-sm" className="text-white">I need help with my account settings.</Typo>
        </MessageBubble>
      </div>
      <div className="flex justify-start">
        <MessageBubble direction="left" color="#F5F5F5">
          <Typo variant="title-sm" className="text-[#333]">
            Sure! I can help you with that. What specific setting would you like to change?
          </Typo>
        </MessageBubble>
      </div>
      <div className="flex justify-end">
        <MessageBubble direction="right" color="var(--color-brand)">
          <Typo variant="title-sm" className="text-white">I want to update my email address.</Typo>
        </MessageBubble>
      </div>
      <div className="flex justify-start">
        <MessageBubble direction="left" color="#F5F5F5">
          <Typo variant="title-sm" className="text-[#333]">
            No problem! You can update your email in Account Settings → Profile → Email.
          </Typo>
        </MessageBubble>
      </div>
    </div>
  )
};

export const LongMessages: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-2xl p-4">
      <div className="flex justify-start">
        <MessageBubble direction="left">
          <Typo variant="title-sm" className="text-[#333]">
            This is a longer message to demonstrate how the bubble handles multiple lines of text. 
            The border radius should remain consistent regardless of the content length. 
            The bubble will grow to accommodate the text while maintaining its shape.
          </Typo>
        </MessageBubble>
      </div>
      <div className="flex justify-end">
        <MessageBubble direction="right" color="var(--color-brand)">
          <Typo variant="title-sm" className="text-white">
            Great! The bubble handles long text really well. It maintains the proper border 
            radius and looks clean even with multiple lines of content.
          </Typo>
        </MessageBubble>
      </div>
    </div>
  )
};

