export type ComponentConfig = {
  id: string;
  name: string;
  category: string;
  description: string;
  importPath: string;
  props?: Record<string, any>;
};

export const componentsConfig: ComponentConfig[] = [
  {
    id: "button",
    name: "Button",
    category: "Actions",
    description: "Interactive buttons with multiple variants and sizes.",
    importPath: "import { Button } from '@neoptocom/neopto-ui';",
  },
  {
    id: "icon-button",
    name: "Icon Button",
    category: "Actions",
    description: "Icon-only buttons for compact actions.",
    importPath: "import { IconButton } from '@neoptocom/neopto-ui';",
  },
  {
    id: "input",
    name: "Input",
    category: "Forms",
    description: "Text input fields with multiple sizes and states.",
    importPath: "import { Input } from '@neoptocom/neopto-ui';",
  },
  {
    id: "textarea",
    name: "Textarea",
    category: "Forms",
    description: "Multi-line text input component.",
    importPath: "import { Textarea } from '@neoptocom/neopto-ui';",
  },
  {
    id: "autocomplete",
    name: "Autocomplete",
    category: "Forms",
    description: "Autocomplete input with dropdown selection.",
    importPath: "import { Autocomplete } from '@neoptocom/neopto-ui';",
  },
  {
    id: "search",
    name: "Search",
    category: "Forms",
    description: "Search input with debouncing and option selection.",
    importPath: "import { Search } from '@neoptocom/neopto-ui';",
  },
  {
    id: "date-input",
    name: "Date Input",
    category: "Forms",
    description: "Date picker input component.",
    importPath: "import { DateInput } from '@neoptocom/neopto-ui';",
  },
  {
    id: "calendar",
    name: "Calendar",
    category: "Forms",
    description: "Calendar component for date selection.",
    importPath: "import { Calendar } from '@neoptocom/neopto-ui';",
  },
  {
    id: "counter",
    name: "Counter",
    category: "Forms",
    description: "Number stepper component with increment/decrement.",
    importPath: "import { Counter } from '@neoptocom/neopto-ui';",
  },
  {
    id: "typo",
    name: "Typography",
    category: "Content",
    description: "Typography component with design token variants.",
    importPath: "import { Typo } from '@neoptocom/neopto-ui';",
  },
  {
    id: "avatar",
    name: "Avatar",
    category: "Content",
    description: "User avatar component with fallback initials.",
    importPath: "import { Avatar, AvatarGroup } from '@neoptocom/neopto-ui';",
  },
  {
    id: "chip",
    name: "Chip",
    category: "Content",
    description: "Tag and label component with multiple variants.",
    importPath: "import { Chip } from '@neoptocom/neopto-ui';",
  },
  {
    id: "card",
    name: "Card",
    category: "Layout",
    description: "Container component with optional decorations.",
    importPath: "import { Card } from '@neoptocom/neopto-ui';",
  },
  {
    id: "modal",
    name: "Modal",
    category: "Overlays",
    description: "Dialog modal component with backdrop blur.",
    importPath: "import { Modal } from '@neoptocom/neopto-ui';",
  },
  {
    id: "skeleton",
    name: "Skeleton",
    category: "Feedback",
    description: "Loading placeholder component.",
    importPath: "import { Skeleton } from '@neoptocom/neopto-ui';",
  },
  {
    id: "icon",
    name: "Icon",
    category: "Content",
    description: "Material Symbols Rounded icon component.",
    importPath: "import { Icon } from '@neoptocom/neopto-ui';",
  },
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    category: "Navigation",
    description: "Breadcrumb navigation component.",
    importPath: "import { Breadcrumb } from '@neoptocom/neopto-ui';",
  },
  {
    id: "separator",
    name: "Separator",
    category: "Layout",
    description: "Visual separator component.",
    importPath: "import { Separator } from '@neoptocom/neopto-ui';",
  },
  {
    id: "app-background",
    name: "App Background",
    category: "Layout",
    description: "Full-page background with light/dark mode support.",
    importPath: "import { AppBackground } from '@neoptocom/neopto-ui';",
  },
  {
    id: "message-bubble",
    name: "Message Bubble",
    category: "Content",
    description: "Chat message bubble component.",
    importPath: "import { MessageBubble } from '@neoptocom/neopto-ui';",
  },
];

export const componentCategories = [
  "Actions",
  "Forms",
  "Content",
  "Layout",
  "Overlays",
  "Feedback",
  "Navigation",
] as const;
