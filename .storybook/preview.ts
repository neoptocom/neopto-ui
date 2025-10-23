import "../src/styles/tailwind.css";
import type { Preview } from "@storybook/react";
import type { Decorator } from "@storybook/react";
import React from "react";

// Toolbar theme toggle (light/dark)
export const globalTypes = {
  theme: {
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      title: "Theme",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" }
      ],
      dynamicTitle: true
    }
  }
};

const withTheme: Decorator = (Story, context) => {
  const mode = context.globals.theme;
  
  // Create a wrapper that only affects the story content
  const StoryWrapper = () => {
    const [isDark, setIsDark] = React.useState(mode === "dark");
    
    React.useEffect(() => {
      setIsDark(mode === "dark");
    }, [mode]);
    
    return React.createElement(
      "div",
      {
        className: isDark ? "dark" : "",
        style: {
          backgroundColor: isDark ? "var(--bg)" : "var(--surface)",
          color: "var(--fg)",
          minHeight: "auto",
          padding: "1rem",
          borderRadius: "8px",
          overflow: "visible"
        }
      },
      React.createElement(Story)
    );
  };
  
  return React.createElement(StoryWrapper);
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: { expanded: true },
    options: {
      storySort: (a, b) => {
        // Extract component name (e.g., "components-button--playground" -> "button")
        const getComponentName = (id) => {
          const match = id.match(/components-([^-]+)/);
          return match ? match[1] : id;
        };
        
        const componentA = getComponentName(a.id);
        const componentB = getComponentName(b.id);
        
        // If same component, preserve original order but ensure Docs comes first
        if (componentA === componentB) {
          if (a.name === 'Docs') return -1;
          if (b.name === 'Docs') return 1;
          return 0; // Keep original order for stories
        }
        
        // Different components: sort alphabetically
        return componentA.localeCompare(componentB, undefined, { numeric: true });
      },
    },
  },
  decorators: [withTheme]
};

export default preview;
