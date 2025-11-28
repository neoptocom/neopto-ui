type ComponentProp = {
  name: string;
  type: string;
  default?: string;
  description?: string;
  required?: boolean;
};

export function getComponentProps(componentId: string): ComponentProp[] {
  // This is a placeholder - you can expand this with actual prop definitions
  // For now, return empty array or basic props based on component
  const propsMap: Record<string, ComponentProp[]> = {
    button: [
      {
        name: "variant",
        type: '"primary" | "secondary" | "ghost"',
        default: '"primary"',
        description: "Button visual variant",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        default: '"md"',
        description: "Button size",
      },
      {
        name: "fullWidth",
        type: "boolean",
        default: "false",
        description: "Make button full width",
      },
    ],
    input: [
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        default: '"md"',
        description: "Input size",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the input",
      },
      {
        name: "placeholder",
        type: "string",
        description: "Placeholder text",
      },
    ],
  };

  return propsMap[componentId] || [];
}
