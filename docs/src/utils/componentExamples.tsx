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
import { ToastProvider, useToast } from "../../../src/components/Toast";
import { useState, type ReactNode } from "react";
import { TranslateFn } from "./translations";

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

export function getComponentExamples(
  componentId: string,
  t: TranslateFn
): ComponentExample[] {
  const examplesMap: Record<string, ComponentExample[]> = {
    button: [
      {
        title: t("exampleVariants"),
        description: t("buttonVariantsDesc"),
        demo: (
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary">{t("demoPrimary")}</Button>
            <Button variant="secondary">{t("demoSecondary")}</Button>
            <Button variant="ghost">{t("demoGhost")}</Button>
          </div>
        ),
        code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>`,
      },
      {
        title: t("exampleSizes"),
        description: t("buttonSizesDesc"),
        demo: (
          <div className="flex gap-4 items-center flex-wrap">
            <Button size="xs">{t("demoExtraSmall")}</Button>
            <Button size="sm">{t("demoSmall")}</Button>
            <Button size="md">{t("demoMedium")}</Button>
            <Button size="lg">{t("demoLarge")}</Button>
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
        title: t("exampleVariants"),
        description: t("iconButtonVariantsDesc"),
        demo: (
          <div className="flex gap-4 items-center flex-wrap">
            <IconButton icon="search" variant="ghost" aria-label={t("demoSearchAria")} />
            <IconButton icon="add" variant="primary" aria-label={t("demoAddAria")} />
            <IconButton icon="settings" variant="secondary" aria-label={t("demoSettingsAria")} />
          </div>
        ),
        code: `<IconButton icon="search" variant="ghost" aria-label="Search" />
<IconButton icon="add" variant="primary" aria-label="Add" />
<IconButton icon="settings" variant="secondary" aria-label="Settings" />`,
      },
      {
        title: t("exampleSizes"),
        description: t("iconButtonSizesDesc"),
        demo: (
          <div className="flex gap-4 items-center flex-wrap">
            <IconButton icon="favorite" size="sm" aria-label={t("demoFavoriteAria")} />
            <IconButton icon="favorite" size="md" aria-label={t("demoFavoriteAria")} />
            <IconButton icon="favorite" size="lg" aria-label={t("demoFavoriteAria")} />
          </div>
        ),
        code: `<IconButton icon="favorite" size="sm" />
<IconButton icon="favorite" size="md" />
<IconButton icon="favorite" size="lg" />`,
      },
    ],
    input: [
      {
        title: t("exampleBasicInput"),
        description: t("inputBasicDesc"),
        demo: <Input placeholder={t("demoEnterText")} />,
        code: `<Input placeholder="Enter text..." />`,
      },
      {
        title: t("exampleWithLabel"),
        description: t("inputLabelDesc"),
        demo: <Input label={t("demoEmail")} placeholder={t("demoEmailPlaceholder")} />,
        code: `<Input label="Email" placeholder="you@example.com" />`,
      },
    ],
    textarea: [
      {
        title: t("exampleBasicTextarea"),
        description: t("textareaBasicDesc"),
        demo: <Textarea placeholder={t("demoWriteMessage")} />,
        code: `<Textarea placeholder="Write a message..." />`,
      },
      {
        title: t("exampleInlineVariant"),
        description: t("textareaInlineDesc"),
        demo: <Textarea variant="inline" placeholder={t("demoInlineTextarea")} />,
        code: `<Textarea variant="inline" placeholder="Inline textarea..." />`,
      },
    ],
    autocomplete: [
      {
        title: t("exampleAutocomplete"),
        description: t("autocompleteExampleDesc"),
        demo: <AutocompleteDemo t={t} />,
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
        title: t("exampleSearch"),
        description: t("searchExampleDesc"),
        demo: <SearchDemo t={t} />,
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
        title: t("exampleDateInput"),
        description: t("dateInputExampleDesc"),
        demo: <DateInputDemo t={t} />,
        code: `const [date, setDate] = useState(null);

<DateInput label="Start date" value={date} onChange={setDate} />`,
      },
    ],
    calendar: [
      {
        title: t("exampleCalendar"),
        description: t("calendarExampleDesc"),
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
        title: t("exampleCounter"),
        description: t("counterExampleDesc"),
        demo: <CounterDemo />,
        code: `const [count, setCount] = useState(1);

<Counter value={count} onChange={setCount} min={0} max={10} />`,
      },
    ],
    typo: [
      {
        title: t("exampleScale"),
        description: t("typoScaleDesc"),
        demo: (
          <div className="flex flex-col gap-3">
            <Typo variant="display-sm" bold="bold">
              {t("demoDisplaySmall")}
            </Typo>
            <Typo variant="headline-md" bold="semibold">
              {t("demoHeadlineMedium")}
            </Typo>
            <Typo variant="title-md" bold="medium">
              {t("demoTitleMedium")}
            </Typo>
            <Typo variant="body-md">{t("demoBodyMedium")}</Typo>
            <Typo variant="label-md" muted>
              {t("demoLabelMuted")}
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
        title: t("exampleBasicCard"),
        description: t("cardBasicDesc"),
        demo: (
          <Card className="p-6">
            <Typo variant="headline-sm" bold="semibold">
              {t("demoCardTitle")}
            </Typo>
            <Typo variant="body-md" className="text-text-secondary">
              {t("demoCardContent")}
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
        title: t("exampleChipVariants"),
        description: t("chipVariantsDesc"),
        demo: (
          <div className="flex gap-2 flex-wrap">
            <Chip label={t("demoSuccess")} variant="success" />
            <Chip label={t("demoWarning")} variant="warning" />
            <Chip label={t("demoError")} variant="error" />
            <Chip label={t("light")} variant="light" />
            <Chip label={t("dark")} variant="dark" />
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
        title: t("exampleAvatar"),
        description: t("avatarExampleDesc"),
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
        title: t("exampleModal"),
        description: t("modalExampleDesc"),
        demo: <ModalDemo t={t} />,
        code: `<Modal open={isOpen} onClose={() => setIsOpen(false)}>
  <Typo variant="headline-md">Modal Title</Typo>
  <Typo variant="body-md">Modal content</Typo>
</Modal>`,
      },
    ],
    skeleton: [
      {
        title: t("exampleSkeleton"),
        description: t("skeletonExampleDesc"),
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
    toast: [
      {
        title: t("exampleToast"),
        description: t("toastExampleDesc"),
        demo: <ToastDemo />,
        code: `const { toast } = useToast();

<Button onClick={() => toast({
  title: "Saved",
  message: "Your changes were saved.",
  type: "success",
})}>
  Show toast
</Button>`,
      },
    ],
    icon: [
      {
        title: t("exampleIcons"),
        description: t("iconExampleDesc"),
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
        title: t("exampleBreadcrumb"),
        description: t("breadcrumbExampleDesc"),
        demo: (
          <Breadcrumb
            items={[
              { label: t("home"), href: "#" },
              { label: t("components"), href: "#" },
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
        title: t("exampleSeparator"),
        description: t("separatorExampleDesc"),
        demo: (
          <div>
            <Typo variant="body-md">{t("demoContentAbove")}</Typo>
            <Separator />
            <Typo variant="body-md">{t("demoContentBelow")}</Typo>
          </div>
        ),
        code: `<Typo variant="body-md">Content above</Typo>
<Separator />
<Typo variant="body-md">Content below</Typo>`,
      },
    ],
    "app-background": [
      {
        title: t("exampleAppBackground"),
        description: t("appBackgroundExampleDesc"),
        demo: (
          <div
            className="relative h-48 overflow-hidden rounded-2xl"
            style={{ transform: "translateZ(0)" }}
          >
            <AppBackground className="!min-h-full h-full">
              <div className="flex h-48 items-center justify-center">
                <Card className="px-6 py-4">
                  <Typo variant="title-md" bold="semibold">
                    {t("demoPageContent")}
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
        title: t("exampleMessageBubble"),
        description: t("messageBubbleExampleDesc"),
        demo: (
          <div className="flex flex-col gap-3 max-w-sm">
            <div className="self-start">
              <MessageBubble direction="left">
                <Typo variant="body-md">{t("demoMessageLeft")}</Typo>
              </MessageBubble>
            </div>
            <div className="self-end">
              <MessageBubble direction="right" color="var(--color-brand)">
                <Typo variant="body-md" className="text-white">
                  {t("demoMessageRight")}
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

function ModalDemo({ t }: { t: TranslateFn }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>{t("demoOpenModal")}</Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Typo variant="headline-md" bold="bold">
          {t("demoModalTitle")}
        </Typo>
        <Typo variant="body-md" className="text-text-secondary">
          {t("demoModalBody")}
        </Typo>
        <Button onClick={() => setIsOpen(false)}>{t("demoClose")}</Button>
      </Modal>
    </>
  );
}

function AutocompleteDemo({ t }: { t: TranslateFn }) {
  const [selected, setSelected] = useState<AutocompleteOption | string | null>(
    null
  );
  return (
    <div className="max-w-md">
      <Autocomplete
        title={t("demoAssignee")}
        placeholder={t("demoSearchPeople")}
        options={PEOPLE}
        selectedOption={selected}
        onSelect={setSelected}
      />
    </div>
  );
}

function SearchDemo({ t }: { t: TranslateFn }) {
  const [selected, setSelected] = useState<SearchOption | string | null>(null);
  const [results, setResults] = useState<SearchOption[]>(SEARCH_OPTIONS);

  return (
    <div className="max-w-md">
      <Search
        placeholder={t("demoSearch")}
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

function DateInputDemo({ t }: { t: TranslateFn }) {
  const [date, setDate] = useState<Date | null>(null);
  return (
    <div className="max-w-md">
      <DateInput label={t("demoStartDate")} value={date} onChange={setDate} />
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

function ToastDemoInner() {
  const { toast } = useToast();
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        onClick={() =>
          toast({
            title: "Saved",
            message: "Your changes were saved.",
            type: "success",
          })
        }
      >
        Success
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast({
            title: "Something went wrong",
            message: "Please try again.",
            type: "error",
          })
        }
      >
        Error
      </Button>
      <Button
        variant="ghost"
        onClick={() =>
          toast({
            title: "Heads up",
            message: "Review before continuing.",
            type: "warning",
          })
        }
      >
        Warning
      </Button>
    </div>
  );
}

function ToastDemo() {
  return (
    <ToastProvider>
      <ToastDemoInner />
    </ToastProvider>
  );
}
