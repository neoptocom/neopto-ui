import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Breadcrumb } from "../components/Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      description: "Array of breadcrumb items to display",
      control: { type: "object" },
    },
    showHomeIcon: {
      description: "Show home icon on first item",
      control: { type: "boolean" },
    },
    className: {
      description: "Additional CSS classes",
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

// Basic Examples
export const Default: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Electronics", href: "/products/electronics" },
      { label: "Laptops" },
    ],
  },
};

export const WithHomeIcon: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Electronics" },
    ],
    showHomeIcon: true,
  },
};

export const TwoLevels: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Current Page" },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    items: [{ label: "Home" }],
  },
};


// With Icons
export const WithIcons: Story = {
  args: {
    items: [
      { label: "Home", href: "/", icon: "home" },
      { label: "Settings", href: "/settings", icon: "settings" },
      { label: "Profile", icon: "person" },
    ],
  },
};

export const MixedIcons: Story = {
  args: {
    items: [
      { label: "Dashboard", href: "/", icon: "dashboard" },
      { label: "Projects", href: "/projects", icon: "folder" },
      { label: "Documents", href: "/documents", icon: "description" },
      { label: "Report.pdf" },
    ],
  },
};

// With Click Handlers
export const WithClickHandlers: Story = {
  args: {
    items: [
      {
        label: "Home",
        onClick: () => alert("Navigating to Home"),
      },
      {
        label: "Products",
        onClick: () => alert("Navigating to Products"),
      },
      {
        label: "Category",
        onClick: () => alert("Navigating to Category"),
      },
      { label: "Item" },
    ],
  },
};

// Interactive Component Navigation (no URL changes)
export const ComponentNavigation = () => {
  const sections = [
    { id: "account", label: "Account", icon: "person" },
    { id: "security", label: "Security", icon: "lock" },
    { id: "notifications", label: "Notifications", icon: "notifications" },
    { id: "billing", label: "Billing", icon: "payment" },
  ];

  const [activeSection, setActiveSection] = useState("account");

  const sectionContent: Record<string, { title: string; description: string }> = {
    account: {
      title: "Account Settings",
      description: "Manage your account information, profile details, and preferences.",
    },
    security: {
      title: "Security Settings",
      description: "Configure password, two-factor authentication, and security preferences.",
    },
    notifications: {
      title: "Notification Preferences",
      description: "Control how and when you receive notifications from our platform.",
    },
    billing: {
      title: "Billing & Subscription",
      description: "View invoices, update payment methods, and manage your subscription.",
    },
  };

  const breadcrumbItems = [
    {
      label: "Settings",
      icon: "settings",
      onClick: () => setActiveSection("account"),
    },
    ...sections
      .slice(0, sections.findIndex((s) => s.id === activeSection) + 1)
      .map((section, index, arr) => ({
        label: section.label,
        icon: section.icon,
        onClick: index < arr.length - 1 ? () => setActiveSection(section.id) : undefined,
      })),
  ];

  return (
    <div className="w-full max-w-4xl p-6 space-y-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Content Area */}
      <div className="border rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold">{sectionContent[activeSection].title}</h2>
        <p className="text-gray-600">{sectionContent[activeSection].description}</p>

        {/* Navigation Buttons */}
        <div className="flex gap-2 pt-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-4 py-2 rounded transition ${
                activeSection === section.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Usage Example Code */}
      <div className="bg-gray-50 p-4 rounded text-sm">
        <p className="font-mono text-xs text-gray-600">
          Current section: <strong>{activeSection}</strong>
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Click any breadcrumb item or button to navigate between sections without changing the URL.
        </p>
      </div>
    </div>
  );
};

// Long Breadcrumb
export const LongBreadcrumb: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Electronics", href: "/products/electronics" },
      { label: "Computers", href: "/products/electronics/computers" },
      { label: "Laptops", href: "/products/electronics/computers/laptops" },
      { label: "Gaming Laptops", href: "/products/electronics/computers/laptops/gaming" },
      { label: "ASUS ROG" },
    ],
  },
};

// Navigation Patterns
export const FileSystem: Story = {
  args: {
    items: [
      { label: "Root", href: "/", icon: "folder" },
      { label: "Documents", href: "/documents", icon: "folder" },
      { label: "Projects", href: "/documents/projects", icon: "folder" },
      { label: "2024", href: "/documents/projects/2024", icon: "folder" },
      { label: "report.pdf", icon: "description" },
    ],
  },
};

export const AdminPanel: Story = {
  args: {
    items: [
      { label: "Dashboard", href: "/", icon: "dashboard" },
      { label: "Users", href: "/users", icon: "group" },
      { label: "Edit User", icon: "edit" },
    ],
  },
};

export const ECommerce: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Electronics", href: "/electronics" },
      { label: "Smartphones", href: "/electronics/smartphones" },
      { label: "iPhone 15 Pro" },
    ],
    showHomeIcon: true,
  },
};

// Edge Cases
export const VeryLongLabels: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "This is a very long breadcrumb label that might wrap", href: "/long" },
      { label: "Another extremely long label for testing purposes" },
    ],
  },
};

export const WithCustomClassName: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Category" },
    ],
    className: "text-blue-600",
  },
};

