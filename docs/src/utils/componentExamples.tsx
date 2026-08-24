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
import { ConfirmationDialog } from "../../../src/components/ConfirmationDialog";
import {
  Table,
  TableSkeleton,
} from "../../../src/components/Table";
import { Tabs } from "../../../src/components/Tabs";
import { Toggle } from "../../../src/components/Toggle";
import { Checkbox } from "../../../src/components/Checkbox";
import { RadioGroup } from "../../../src/components/RadioGroup";
import { FileDropzone } from "../../../src/components/FileDropzone";
import { Select, type SelectOption } from "../../../src/components/Select";
import { Pagination } from "../../../src/components/Pagination";
import { SidePanel } from "../../../src/components/SidePanel";
import { ChipInputList } from "../../../src/components/ChipInputList";
import { OptionsMenu } from "../../../src/components/OptionsMenu";
import { Spinner, LoadingDots } from "../../../src/components/Spinner";
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
    "confirmation-dialog": [
      {
        title: t("exampleConfirmationDialog"),
        description: t("confirmationDialogExampleDesc"),
        demo: <ConfirmationDialogDemo />,
        code: `<ConfirmationDialog
  open={open}
  title="Delete item?"
  description="This action cannot be undone."
  onConfirm={handleDelete}
  onClose={() => setOpen(false)}
/>`,
      },
    ],
    "side-panel": [
      {
        title: t("exampleSidePanel"),
        description: t("sidePanelExampleDesc"),
        demo: <SidePanelDemo />,
        code: `<SidePanel open={open} onClose={() => setOpen(false)}>
  <Typo variant="headline-sm">Details</Typo>
</SidePanel>`,
      },
    ],
    "options-menu": [
      {
        title: t("exampleOptionsMenu"),
        description: t("optionsMenuExampleDesc"),
        demo: <OptionsMenuDemo />,
        code: `<OptionsMenu
  open={open}
  position={position}
  onClose={() => setOpen(false)}
  items={[{ label: "Edit", onSelect: onEdit }]}
/>`,
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
    spinner: [
      {
        title: t("exampleSpinner"),
        description: t("spinnerExampleDesc"),
        demo: (
          <div className="flex items-center gap-8">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <LoadingDots />
          </div>
        ),
        code: `<Spinner size="md" />
<LoadingDots />`,
      },
    ],
    tabs: [
      {
        title: t("exampleTabs"),
        description: t("tabsExampleDesc"),
        demo: <TabsDemo />,
        code: `<Tabs
  tabs={[{ id: "one", label: "One" }, { id: "two", label: "Two" }]}
  activeTabId={active}
  onTabChange={setActive}
/>`,
      },
    ],
    pagination: [
      {
        title: t("examplePagination"),
        description: t("paginationExampleDesc"),
        demo: <PaginationDemo />,
        code: `<Pagination page={page} pageCount={10} onPageChange={setPage} />`,
      },
    ],
    table: [
      {
        title: t("exampleTable"),
        description: t("tableExampleDesc"),
        demo: (
          <div className="w-full space-y-6">
            <Table
              columnTemplate="2fr 1fr 1fr"
              align="start"
              headers={[
                { label: "Name", sortableKey: "name" },
                { label: "Role" },
                { label: "Status" },
              ]}
            >
              <Table.Body>
                <Table.Row>
                  <Table.Cell title="Ada Lovelace">Ada Lovelace</Table.Cell>
                  <Table.Cell title="Engineer">Engineer</Table.Cell>
                  <Table.Cell title="Active">Active</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell title="Alan Turing">Alan Turing</Table.Cell>
                  <Table.Cell title="Researcher">Researcher</Table.Cell>
                  <Table.Cell title="Active">Active</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <TableSkeleton columnTemplate="2fr 1fr 1fr" rowCount={3} />
          </div>
        ),
        code: `<Table columnTemplate="2fr 1fr 1fr" headers={[...]}>
  <Table.Body>
    <Table.Row>
      <Table.Cell title="Ada">Ada</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>`,
      },
    ],
    toggle: [
      {
        title: t("exampleToggle"),
        description: t("toggleExampleDesc"),
        demo: <ToggleDemo />,
        code: `<Toggle checked={on} onCheckedChange={setOn} aria-label="Notifications" />`,
      },
    ],
    checkbox: [
      {
        title: t("exampleCheckbox"),
        description: t("checkboxExampleDesc"),
        demo: <CheckboxDemo />,
        code: `<Checkbox
  label="Select all"
  checked={checked}
  indeterminate={indeterminate}
  onCheckedChange={setChecked}
/>`,
      },
    ],
    "radio-group": [
      {
        title: t("exampleRadioGroup"),
        description: t("radioGroupExampleDesc"),
        demo: <RadioGroupDemo />,
        code: `<RadioGroup
  name="plan"
  value={value}
  onChange={setValue}
  options={[
    { label: "Starter", value: "starter" },
    { label: "Pro", value: "pro" },
  ]}
/>`,
      },
    ],
    select: [
      {
        title: t("exampleSelect"),
        description: t("selectExampleDesc"),
        demo: <SelectDemo />,
        code: `<Select
  title="Country"
  options={options}
  value={value}
  onChange={setValue}
/>`,
      },
    ],
    "file-dropzone": [
      {
        title: t("exampleFileDropzone"),
        description: t("fileDropzoneExampleDesc"),
        demo: <FileDropzoneDemo />,
        code: `<FileDropzone value={file} onChange={setFile} accept=".pdf,image/*" />`,
      },
    ],
    "chip-input-list": [
      {
        title: t("exampleChipInputList"),
        description: t("chipInputListExampleDesc"),
        demo: <ChipInputListDemo />,
        code: `<ChipInputList
  label="Tags"
  values={tags}
  onChange={setTags}
/>`,
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

function ConfirmationDialogDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Delete item
      </Button>
      <ConfirmationDialog
        open={open}
        title="Delete item?"
        description="This action cannot be undone."
        confirmLabel="Delete"
        cancelLabel="Cancel"
        onConfirm={() => undefined}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

function SidePanelDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open panel</Button>
      <SidePanel open={open} onClose={() => setOpen(false)} width={360}>
        <Typo variant="headline-sm" bold="semibold">
          Details
        </Typo>
        <Typo variant="body-md" className="text-[var(--muted-fg)]">
          Side panel content goes here.
        </Typo>
      </SidePanel>
    </>
  );
}

function OptionsMenuDemo() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null
  );
  return (
    <>
      <Button
        variant="secondary"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setPosition({ x: rect.right, y: rect.bottom + 8 });
          setOpen(true);
        }}
      >
        Open menu
      </Button>
      <OptionsMenu
        open={open}
        position={position}
        onClose={() => setOpen(false)}
        items={[
          { label: "Edit", onSelect: () => undefined },
          { label: "Duplicate", onSelect: () => undefined },
          { label: "Delete", onSelect: () => undefined },
        ]}
      />
    </>
  );
}

function TabsDemo() {
  const [active, setActive] = useState("one");
  return (
    <Tabs
      tabs={[
        { id: "one", label: "Overview" },
        { id: "two", label: "Activity" },
        { id: "three", label: "Settings" },
      ]}
      activeTabId={active}
      onTabChange={setActive}
    />
  );
}

function PaginationDemo() {
  const [page, setPage] = useState(1);
  return <Pagination page={page} pageCount={10} onPageChange={setPage} />;
}

function ToggleDemo() {
  const [on, setOn] = useState(true);
  return <Toggle checked={on} onCheckedChange={setOn} aria-label="Notifications" />;
}

function CheckboxDemo() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      <Checkbox
        label="Accept terms"
        checked={checked}
        onCheckedChange={setChecked}
      />
      <Checkbox
        label="Partial selection"
        checked={false}
        indeterminate
        onCheckedChange={() => undefined}
      />
    </div>
  );
}

function RadioGroupDemo() {
  const [value, setValue] = useState<string | null>("pro");
  return (
    <RadioGroup
      name="plan"
      value={value}
      onChange={setValue}
      options={[
        { label: "Starter", value: "starter" },
        { label: "Pro", value: "pro" },
        { label: "Enterprise", value: "enterprise" },
      ]}
    />
  );
}

function SelectDemo() {
  const [value, setValue] = useState<SelectOption | string | null>(null);
  return (
    <div className="max-w-md">
      <Select
        title="Country"
        placeholder="Search…"
        options={[
          { label: "Brazil", value: "br" },
          { label: "Portugal", value: "pt" },
          { label: "United States", value: "us" },
        ]}
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

function FileDropzoneDemo() {
  const [file, setFile] = useState<File | null>(null);
  return (
    <FileDropzone
      value={file}
      onChange={setFile}
      accept=".pdf,image/*"
      hint="PDF or images"
    />
  );
}

function ChipInputListDemo() {
  const [tags, setTags] = useState<string[]>(["design", "react"]);
  return (
    <div className="max-w-md">
      <ChipInputList label="Tags" placeholder="Add a tag" values={tags} onChange={setTags} />
    </div>
  );
}
