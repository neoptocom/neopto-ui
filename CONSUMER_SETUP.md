# Consumer Setup Guide

## ⚠️ Important: Tailwind CSS v4 Required

This component library uses **Tailwind CSS v4 utility classes** directly in the components. Your project **MUST** have Tailwind CSS v4 configured to use this library.

---

## 📦 Quick Setup (Recommended)

### Step 1: Install dependencies

```bash
npm install @neoptocom/neopto-ui
npm install -D tailwindcss@latest @tailwindcss/postcss
```

### Step 2: Run the init command

```bash
npx neopto-ui
```

This will automatically:
- ✅ Create `postcss.config.js` if needed
- ✅ Update your CSS file with required imports
- ✅ Configure Tailwind to scan the library components

### Step 3: Use the components!

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

---

## 🛠️ Manual Setup (Alternative)

If you prefer to set up manually or the init script didn't work:

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

/* Scan the component library source files */
@source "../node_modules/@neoptocom/neopto-ui/src";

/* Import library tokens and styles */
@import "@neoptocom/neopto-ui/styles";
```

Then import your CSS in `src/main.tsx`:

```tsx
import "./index.css";
```

---

## 🐛 Troubleshooting

### Components have no styling

**Problem:** Components render but look unstyled.

**Solution:** Make sure you:

1. ✅ Imported the library CSS: `import '@neoptocom/neopto-ui/styles'`
2. ✅ Added the library path to `tailwind.config.js` content array
3. ✅ Have Tailwind CSS installed and configured

### CSS custom properties not working

**Problem:** Colors/spacing look wrong.

**Solution:** Make sure the library CSS is imported **before** your app styles so the CSS custom properties are defined.

---

## 📚 Full Documentation

Visit the [Storybook documentation](https://neoptocom.github.io/neopto-ui/storybook-static) for interactive examples and API documentation.
