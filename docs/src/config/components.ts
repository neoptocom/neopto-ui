import { TranslationKey } from "../utils/translations";

export type ComponentConfig = {
  id: string;
  name: string;
  category: string;
  descriptionKey: TranslationKey;
  importPath: string;
  props?: Record<string, any>;
};

export const componentsConfig: ComponentConfig[] = [
  {
    id: "button",
    name: "Button",
    category: "Actions",
    descriptionKey: "buttonDescription",
    importPath: "import { Button } from '@neoptocom/neopto-ui';",
  },
  {
    id: "icon-button",
    name: "Icon Button",
    category: "Actions",
    descriptionKey: "iconButtonDescription",
    importPath: "import { IconButton } from '@neoptocom/neopto-ui';",
  },
  {
    id: "input",
    name: "Input",
    category: "Forms",
    descriptionKey: "inputDescription",
    importPath: "import { Input } from '@neoptocom/neopto-ui';",
  },
  {
    id: "textarea",
    name: "Textarea",
    category: "Forms",
    descriptionKey: "textareaDescription",
    importPath: "import { Textarea } from '@neoptocom/neopto-ui';",
  },
  {
    id: "autocomplete",
    name: "Autocomplete",
    category: "Forms",
    descriptionKey: "autocompleteDescription",
    importPath: "import { Autocomplete } from '@neoptocom/neopto-ui';",
  },
  {
    id: "search",
    name: "Search",
    category: "Forms",
    descriptionKey: "searchDescription",
    importPath: "import { Search } from '@neoptocom/neopto-ui';",
  },
  {
    id: "date-input",
    name: "Date Input",
    category: "Forms",
    descriptionKey: "dateInputDescription",
    importPath: "import { DateInput } from '@neoptocom/neopto-ui';",
  },
  {
    id: "calendar",
    name: "Calendar",
    category: "Forms",
    descriptionKey: "calendarDescription",
    importPath: "import { Calendar } from '@neoptocom/neopto-ui';",
  },
  {
    id: "counter",
    name: "Counter",
    category: "Forms",
    descriptionKey: "counterDescription",
    importPath: "import { Counter } from '@neoptocom/neopto-ui';",
  },
  {
    id: "typo",
    name: "Typography",
    category: "Content",
    descriptionKey: "typoDescription",
    importPath: "import { Typo } from '@neoptocom/neopto-ui';",
  },
  {
    id: "avatar",
    name: "Avatar",
    category: "Content",
    descriptionKey: "avatarDescription",
    importPath: "import { Avatar, AvatarGroup } from '@neoptocom/neopto-ui';",
  },
  {
    id: "chip",
    name: "Chip",
    category: "Content",
    descriptionKey: "chipDescription",
    importPath: "import { Chip } from '@neoptocom/neopto-ui';",
  },
  {
    id: "card",
    name: "Card",
    category: "Layout",
    descriptionKey: "cardDescription",
    importPath: "import { Card } from '@neoptocom/neopto-ui';",
  },
  {
    id: "modal",
    name: "Modal",
    category: "Overlays",
    descriptionKey: "modalDescription",
    importPath: "import { Modal } from '@neoptocom/neopto-ui';",
  },
  {
    id: "skeleton",
    name: "Skeleton",
    category: "Feedback",
    descriptionKey: "skeletonDescription",
    importPath: "import { Skeleton } from '@neoptocom/neopto-ui';",
  },
  {
    id: "toast",
    name: "Toast",
    category: "Feedback",
    descriptionKey: "toastDescription",
    importPath: "import { ToastProvider, useToast } from '@neoptocom/neopto-ui';",
  },
  {
    id: "icon",
    name: "Icon",
    category: "Content",
    descriptionKey: "iconDescription",
    importPath: "import { Icon } from '@neoptocom/neopto-ui';",
  },
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    category: "Navigation",
    descriptionKey: "breadcrumbDescription",
    importPath: "import { Breadcrumb } from '@neoptocom/neopto-ui';",
  },
  {
    id: "separator",
    name: "Separator",
    category: "Layout",
    descriptionKey: "separatorDescription",
    importPath: "import { Separator } from '@neoptocom/neopto-ui';",
  },
  {
    id: "app-background",
    name: "App Background",
    category: "Layout",
    descriptionKey: "appBackgroundComponentDescription",
    importPath: "import { AppBackground } from '@neoptocom/neopto-ui';",
  },
  {
    id: "message-bubble",
    name: "Message Bubble",
    category: "Content",
    descriptionKey: "messageBubbleDescription",
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
