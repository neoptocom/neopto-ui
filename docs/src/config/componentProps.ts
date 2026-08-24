import { TranslateFn } from "../utils/translations";

type ComponentProp = {
  name: string;
  type: string;
  default?: string;
  description?: string;
  required?: boolean;
};

export function getComponentProps(componentId: string, t: TranslateFn): ComponentProp[] {
  const propsMap: Record<string, ComponentProp[]> = {
    button: [
      {
        name: "variant",
        type: '"primary" | "secondary" | "ghost"',
        default: '"primary"',
        description: t("propButtonVariant"),
      },
      {
        name: "size",
        type: '"xs" | "sm" | "md" | "lg"',
        default: '"md"',
        description: t("propButtonSize"),
      },
      {
        name: "fullWidth",
        type: "boolean",
        default: "false",
        description: t("propButtonFullWidth"),
      },
    ],
    input: [
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        default: '"md"',
        description: t("propInputSize"),
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: t("propInputDisabled"),
      },
      {
        name: "placeholder",
        type: "string",
        description: t("propInputPlaceholder"),
      },
    ],
  };

  return propsMap[componentId] || [];
}
