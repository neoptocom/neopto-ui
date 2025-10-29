# Consumer Setup Guide

## ⚠️ Important: Tailwind CSS v4 Required

This component library uses **Tailwind CSS v4 utility classes** directly in the components. Your project **MUST** have Tailwind CSS v4 configured to use this library.

---

## 📦 Installation

### Step 1: Install dependencies

```bash
npm install @neoptocom/neopto-ui
npm install -D tailwindcss@latest @tailwindcss/postcss
```

### Step 2: Configure PostCSS

Create `postcss.config.js` in your project root:

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

### Step 3: Setup your CSS file

In your main CSS file (e.g., `src/index.css`):

```css
@import "tailwindcss";

/* Enable dark mode support */
@variant dark (&:where(.dark, .dark *));

/* Scan the component library source files */
@source "../node_modules/@neoptocom/neopto-ui/src";

/* Import library tokens and styles */
@import "@neoptocom/neopto-ui/styles";
```

**Important:** The `@variant dark` line is required for dark mode to work properly with components like `AppBackground`.

Then import your CSS in `src/main.tsx`:

```tsx
import "./index.css";
```

### Step 4: Use the components!

```tsx
import { Button, Input, Typo } from "@neoptocom/neopto-ui";

function App() {
  return (
    <div className="p-8">
      <Typo variant="headline-lg">Welcome!</Typo>
      <Input placeholder="Enter your name" />
      <Button variant="primary">Get Started</Button>
    </div>
  );
}
```

---

## 🌙 Dark Mode

Toggle dark mode by adding/removing the `dark` class to your root element:

```tsx
// Enable dark mode
document.documentElement.classList.add("dark");

// Disable dark mode
document.documentElement.classList.remove("dark");

// Toggle
document.documentElement.classList.toggle("dark");
```

---

## 🎨 Available Components

- `Button` - Interactive buttons with variants
- `Input` - Text input fields
- `Typo` - Typography with design tokens
- `Avatar` & `AvatarGroup` - User avatars
- `Autocomplete` - Autocomplete input
- `Search` - Search with debouncing
- `Icon` - Material Symbols icons
- `Chip` - Tags and labels
- `Modal` - Dialog modals
- `Skeleton` - Loading placeholders
- `Counter` - Number stepper
- `IconButton` - Icon-only buttons
- `ChatButton` - Animated chat button

---

## 🐛 Troubleshooting

### Components have no styling

**Problem:** Components render but look unstyled.

**Solution:** Make sure you:

1. ✅ Imported the library CSS: `@import "@neoptocom/neopto-ui/styles"`
2. ✅ Added the `@source` directive to scan the library source files
3. ✅ Have Tailwind CSS v4 installed and configured with `@tailwindcss/postcss`

### CSS custom properties not working

**Problem:** Colors/spacing look wrong.

**Solution:** Make sure the library CSS is imported **before** your app styles so the CSS custom properties are defined.

### Tailwind classes not being generated

**Problem:** Some component styles are missing.

**Solution:** Ensure the `@source` directive points to the library's **source files** (`/src`), not the compiled dist folder. The source files contain all the Tailwind utility classes that need to be scanned.

---

## 📚 Full Documentation

Visit the [Storybook documentation](https://neoptocom.github.io/neopto-ui) for interactive examples and API documentation.
