import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Breadcrumb, type BreadcrumbItem } from "../components/Breadcrumb";
import { LayoutDashboard, Files, Rocket } from "lucide-react";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Library", href: "/library" },
      { label: "Data" }
    ] satisfies BreadcrumbItem[]
  }
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Playground: Story = {};

export const WithIcons: Story = {
  args: {
    items: [
      { label: "Dashboard", href: "/", icon: <LayoutDashboard size={12} /> },
      { label: "Projects", href: "/projects", icon: <Files size={12} /> },
      { label: "Neptune Launch", icon: <Rocket size={12} /> }
    ]
  }
};

export const WithHomeIcon: Story = {
  args: {
    showHomeIcon: true
  }
};

export const InteractiveNavigation: Story = {
  render: (args) => {
    const sections: BreadcrumbItem[] = [
      { label: "Getting Started", href: "/docs/getting-started" },
      { label: "Guides", href: "/docs/guides" },
    ];

    const [activeSection, setActiveSection] = useState(sections[sections.length - 1]);

    return (
      <div className="flex flex-col gap-6 w-full max-w-3xl">
        <Breadcrumb
          {...args}
          items={[
            { label: "Docs", href: "/docs", icon: "menu_book" },
            ...sections.map((section, index) => ({
              ...section,
              onClick: () => setActiveSection(section),
              href: index === sections.length - 1 ? undefined : section.href
            }))
          ]}
        />

        <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 space-y-2">
          <h2 className="text-xl font-semibold">{activeSection.label}</h2>
          <p className="text-sm text-[var(--muted-fg)]">
            Showcase how breadcrumbs can drive in-app navigation without reloading the page by
            combining click handlers with your own state management.
          </p>
        </section>
      </div>
    );
  }
};

















