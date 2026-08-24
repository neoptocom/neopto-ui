import { Button } from "../../../src/components/Button";
import { IconButton } from "../../../src/components/IconButton";
import { Input } from "../../../src/components/Input";
import { Textarea } from "../../../src/components/Textarea";
import Autocomplete, {
  type AutocompleteOption,
} from "../../../src/components/Autocomplete";
import Search, { type SearchOption } from "../../../src/components/Search";
import { DateInput } from "../../../src/components/DateInput";
import Calendar from "../../../src/components/Calendar";
import Counter from "../../../src/components/Counter";
import { Card } from "../../../src/components/Card";
import Typo from "../../../src/components/Typo";
import Chip from "../../../src/components/Chip";
import Avatar from "../../../src/components/Avatar";
import AvatarGroup from "../../../src/components/AvatarGroup";
import { Modal } from "../../../src/components/Modal";
import { Skeleton } from "../../../src/components/Skeleton";
import Icon from "../../../src/components/Icon";
import { Breadcrumb } from "../../../src/components/Breadcrumb";
import { Separator } from "../../../src/components/Separator";
import { AppBackground } from "../../../src/components/AppBackground";
import { MessageBubble } from "../../../src/components/MessageBubble";
import { useState, type ReactNode } from "react";

type ComponentExample = {
  title: string;
  description?: string;
  demoTitle?: string;
  demo: ReactNode;
  code?: string;
};

const PEOPLE: AutocompleteOption[] = [
  { name: "Ada Lovelace", value: "ada" },
  { name: "Alan Turing", value: "turing" },
  { name: "Grace Hopper", value: "hopper" },
  { name: "Barbara Liskov", value: "liskov" },
];

const SEARCH_OPTIONS: SearchOption[] = PEOPLE.map((person) => ({
  label: person.name ?? "",
  value: person.value,
}));

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
            <Button size="xs">Extra small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        ),
        code: `<Button size="xs">Extra small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
      },
    ],
    "icon-button": [
      {
        title: "Variants",
        description: "Ghost, primary, and secondary icon buttons",
        demo: (
          <div className="flex gap-4 items-center flex-wrap">
            <IconButton icon="search" variant="ghost" aria-label="Search" />
            <IconButton icon="add" variant="primary" aria-label="Add" />
            <IconButton icon="settings" variant="secondary" aria-label="Settings" />
          </div>
        ),
        code: `<IconButton icon="search" variant="ghost" aria-label="Search" />
<IconButton icon="add" variant="primary" aria-label="Add" />
<IconButton icon="settings" variant="secondary" aria-label="Settings" />`,
      },
      {
        title: "Sizes",
        description: "Small, medium, and large icon buttons",
        demo: (
          <div className="flex gap-4 items-center flex-wrap">
            <IconButton icon="favorite" size="sm" aria-label="Favorite" />
            <IconButton icon="favorite" size="md" aria-label="Favorite" />
            <IconButton icon="favorite" size="lg" aria-label="Favorite" />
          </div>
        ),
        code: `<IconButton icon="favorite" size="sm" />
<IconButton icon="favorite" size="md" />
<IconButton icon="favorite" size="lg" />`,
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
        title: "With label",
        description: "Input with a floating label",
        demo: <Input label="Email" placeholder="you@example.com" />,
        code: `<Input label="Email" placeholder="you@example.com" />`,
      },
    ],
    textarea: [
      {
        title: "Basic Textarea",
        description: "Multi-line text input",
        demo: <Textarea placeholder="Write a message..." />,
        code: `<Textarea placeholder="Write a message..." />`,
      },
      {
        title: "Inline variant",
        description: "Borderless textarea for compact layouts",
        demo: <Textarea variant="inline" placeholder="Inline textarea..." />,
        code: `<Textarea variant="inline" placeholder="Inline textarea..." />`,
      },
    ],
    autocomplete: [
      {
        title: "Autocomplete",
        description: "Filter and select from a list of options",
        demo: <AutocompleteDemo />,
        code: `const [selected, setSelected] = useState(null);

<Autocomplete
  title="Assignee"
  placeholder="Search people…"
  options={[
    { name: "Ada Lovelace", value: "ada" },
    { name: "Alan Turing", value: "turing" },
  ]}
  selectedOption={selected}
  onSelect={setSelected}
/>`,
      },
    ],
    search: [
      {
        title: "Search",
        description: "Debounced search input with option selection",
        demo: <SearchDemo />,
        code: `const [selected, setSelected] = useState(null);

<Search
  placeholder="Search…"
  options={results}
  selectedOption={selected}
  onSelect={setSelected}
  onSearch={(query) => {
    // fetch or filter results
  }}
/>`,
      },
    ],
    "date-input": [
      {
        title: "Date Input",
        description: "Typed or calendar-picked date",
        demo: <DateInputDemo />,
        code: `const [date, setDate] = useState(null);

<DateInput label="Start date" value={date} onChange={setDate} />`,
      },
    ],
    calendar: [
      {
        title: "Calendar",
        description: "Standalone month grid for date selection",
        demo: <CalendarDemo />,
        code: `const [date, setDate] = useState(new Date());

<Calendar
  selectedDate={date}
  onDateSelect={setDate}
  today={new Date()}
/>`,
      },
    ],
    counter: [
      {
        title: "Counter",
        description: "Increment and decrement a numeric value",
        demo: <CounterDemo />,
        code: `const [count, setCount] = useState(1);

<Counter value={count} onChange={setCount} min={0} max={10} />`,
      },
    ],
    typo: [
      {
        title: "Scale",
        description: "Typography variants from the design tokens",
        demo: (
          <div className="flex flex-col gap-3">
            <Typo variant="display-sm" bold="bold">
              Display small
            </Typo>
            <Typo variant="headline-md" bold="semibold">
              Headline medium
            </Typo>
            <Typo variant="title-md" bold="medium">
              Title medium
            </Typo>
            <Typo variant="body-md">Body medium for paragraphs and UI copy.</Typo>
            <Typo variant="label-md" muted>
              Label medium (muted)
            </Typo>
          </div>
        ),
        code: `<Typo variant="display-sm" bold="bold">Display small</Typo>
<Typo variant="headline-md" bold="semibold">Headline medium</Typo>
<Typo variant="title-md" bold="medium">Title medium</Typo>
<Typo variant="body-md">Body medium for paragraphs and UI copy.</Typo>
<Typo variant="label-md" muted>Label medium (muted)</Typo>`,
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
            <Chip label="Success" variant="success" />
            <Chip label="Warning" variant="warning" />
            <Chip label="Error" variant="error" />
            <Chip label="Light" variant="light" />
            <Chip label="Dark" variant="dark" />
          </div>
        ),
        code: `<Chip label="Success" variant="success" />
<Chip label="Warning" variant="warning" />
<Chip label="Error" variant="error" />
<Chip label="Light" variant="light" />
<Chip label="Dark" variant="dark" />`,
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
    icon: [
      {
        title: "Icons",
        description: "Material Symbols Rounded glyphs at different sizes",
        demo: (
          <div className="flex gap-6 items-center flex-wrap">
            <Icon name="home" size="sm" />
            <Icon name="search" size="md" />
            <Icon name="settings" size="lg" />
            <Icon name="favorite" size="md" fill={1} className="text-[var(--color-brand)]" />
          </div>
        ),
        code: `<Icon name="home" size="sm" />
<Icon name="search" size="md" />
<Icon name="settings" size="lg" />
<Icon name="favorite" size="md" fill={1} />`,
      },
    ],
    breadcrumb: [
      {
        title: "Breadcrumb",
        description: "Hierarchical navigation trail",
        demo: (
          <Breadcrumb
            items={[
              { label: "Home", href: "#" },
              { label: "Components", href: "#" },
              { label: "Breadcrumb" },
            ]}
          />
        ),
        code: `<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Breadcrumb" },
  ]}
/>`,
      },
    ],
    separator: [
      {
        title: "Separator",
        description: "Horizontal rule between content",
        demo: (
          <div>
            <Typo variant="body-md">Content above</Typo>
            <Separator />
            <Typo variant="body-md">Content below</Typo>
          </div>
        ),
        code: `<Typo variant="body-md">Content above</Typo>
<Separator />
<Typo variant="body-md">Content below</Typo>`,
      },
    ],
    "app-background": [
      {
        title: "App Background",
        description:
          "Full-page light/dark background. Preview is clipped so it stays in the demo card.",
        demo: (
          <div
            className="relative h-48 overflow-hidden rounded-2xl"
            style={{ transform: "translateZ(0)" }}
          >
            <AppBackground className="!min-h-full h-full">
              <div className="flex h-48 items-center justify-center">
                <Card className="px-6 py-4">
                  <Typo variant="title-md" bold="semibold">
                    Page content
                  </Typo>
                </Card>
              </div>
            </AppBackground>
          </div>
        ),
        code: `<AppBackground>
  <YourApp />
</AppBackground>`,
      },
    ],
    "message-bubble": [
      {
        title: "Message Bubble",
        description: "Chat bubbles aligned left or right",
        demo: (
          <div className="flex flex-col gap-3 max-w-sm">
            <div className="self-start">
              <MessageBubble direction="left">
                <Typo variant="body-md">Hey, are you around?</Typo>
              </MessageBubble>
            </div>
            <div className="self-end">
              <MessageBubble direction="right" color="var(--color-brand)">
                <Typo variant="body-md" className="text-white">
                  Yes — sending the files now.
                </Typo>
              </MessageBubble>
            </div>
          </div>
        ),
        code: `<MessageBubble direction="left">
  Hey, are you around?
</MessageBubble>
<MessageBubble direction="right" color="var(--color-brand)">
  Yes — sending the files now.
</MessageBubble>`,
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

function AutocompleteDemo() {
  const [selected, setSelected] = useState<AutocompleteOption | string | null>(
    null
  );
  return (
    <div className="max-w-md">
      <Autocomplete
        title="Assignee"
        placeholder="Search people…"
        options={PEOPLE}
        selectedOption={selected}
        onSelect={setSelected}
      />
    </div>
  );
}

function SearchDemo() {
  const [selected, setSelected] = useState<SearchOption | string | null>(null);
  const [results, setResults] = useState<SearchOption[]>(SEARCH_OPTIONS);

  return (
    <div className="max-w-md">
      <Search
        placeholder="Search…"
        options={results}
        selectedOption={selected}
        onSelect={setSelected}
        onSearch={(query) => {
          const q = query.trim().toLowerCase();
          setResults(
            q
              ? SEARCH_OPTIONS.filter((option) =>
                  option.label.toLowerCase().includes(q)
                )
              : SEARCH_OPTIONS
          );
        }}
      />
    </div>
  );
}

function DateInputDemo() {
  const [date, setDate] = useState<Date | null>(null);
  return (
    <div className="max-w-md">
      <DateInput label="Start date" value={date} onChange={setDate} />
    </div>
  );
}

function CalendarDemo() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="max-w-sm">
      <Calendar selectedDate={date} onDateSelect={setDate} today={new Date()} />
    </div>
  );
}

function CounterDemo() {
  const [count, setCount] = useState(1);
  return <Counter value={count} onChange={setCount} min={0} max={10} />;
}
