# @neoptocom/neopto-ui

## 0.7.0

### Minor Changes

- **Add AppBackground component**: New component for consistent app backgrounds across all projects
  - Supports separate light and dark mode background images via props
  - Falls back to elegant gradient when no images provided
  - Automatically switches based on dark mode state
  - Perfect for wrapping your entire app for consistent theming

### Usage

```tsx
<AppBackground
  lightImage="/path/to/light-bg.jpg"
  darkImage="/path/to/dark-bg.jpg"
>
  <YourApp />
</AppBackground>
```

## 0.6.2

### Patch Changes

- Improve README documentation:
  - Add Next.js App Router example with correct relative path (`../../node_modules`)
  - Add note about scanning own project files with `@source`
  - Clarify that paths are relative to CSS file location

## 0.6.1

### Patch Changes

- Fix Avatar default size: change from `sm` to `md` for better visibility

## 0.6.0

### Major Changes

- **Remove tailwind-variants dependency**: Refactored all components to use explicit class strings instead of dynamic class composition
  - All Tailwind classes are now directly visible in source files for proper scanning by Tailwind v4
  - Fixes issues where consumer applications couldn't generate all necessary utility classes
  - Affects: `Button`, `IconButton`, `Avatar`, `Typo` components
  - **Breaking**: No API changes, but this is a significant internal refactor

### Benefits

- ✅ Better Tailwind v4 compatibility - all classes are statically analyzable
- ✅ Smaller bundle size - removed runtime dependency
- ✅ More transparent code - explicit class strings are easier to understand
- ✅ Consumer projects will have all utility classes properly generated

## 0.5.2

### Patch Changes

- **Remove CLI init script**: Simplified setup by removing the init command based on user feedback
- Return to straightforward `@source` directive approach in documentation
- Cleaner installation process with standard three-step setup

## 0.5.1

### Patch Changes

- Fix documentation: Update init command to use full scoped package name `npx @neoptocom/neopto-ui` instead of `npx neopto-ui`

## 0.5.0

### Minor Changes

- **Add CLI init command**: Simplified setup with `npx neopto-ui` command (similar to shadcn/ui)
  - Automatically creates `postcss.config.js` if needed
  - Detects and updates main CSS file with required imports
  - Configures Tailwind to scan library source files
  
- **Publish source files**: Now includes `src/` directory in npm package
  - Fixes Tailwind class scanning issues in consumer applications
  - Allows Tailwind v4 to properly detect all utility classes used by components
  - Update `@source` directive to point to source files instead of dist

### Documentation

- Update README.md with quick start guide featuring the new init command
- Update CONSUMER_SETUP.md with both quick setup and manual setup options
- Add comprehensive troubleshooting information

## 0.4.1

### Patch Changes

- Remove border from Chip component
- Fix chat button gradient and simplify token system:
  - Add missing chat button gradient CSS variable
  - Remove auto-generation of tokens.css (now manually maintained)
  - Simplify build process by removing build-tokens script

## 0.4.0

### Minor Changes

- Add new components and improvements:
  - Add Counter component (number stepper with increment/decrement)
  - Add IconButton component
  - Add ChatButton component with animated backgrounds
  - Improve Search component with filter support
  - Update Typo component to inherit colors properly
  - Update Button component to use Typo internally for consistent typography
  - Add chat button gradient tokens to design system
  - Add Storybook alphabetical sorting
  - Add skeleton loading examples (fully rounded variants)

### Patch Changes

- Fix chat button gradient and simplify token system:
  - Add missing chat button gradient CSS variable
  - Remove auto-generation of tokens.css (now manually maintained)
  - Simplify build process by removing build-tokens script

## 0.3.0

### Minor Changes

- Add new components and improvements:
  - Add Counter component (number stepper with increment/decrement)
  - Add IconButton component
  - Add ChatButton component with animated backgrounds
  - Improve Search component with filter support
  - Update Typo component to inherit colors properly
  - Update Button component to use Typo internally for consistent typography
  - Add chat button gradient tokens to design system
  - Add Storybook alphabetical sorting
  - Add skeleton loading examples (fully rounded variants)

## 0.2.1

### Patch Changes

- Improve button styling in Autocomplete and Search components - make action buttons perfectly circular with fixed dimensions and adjusted padding

## 0.2.0

### Minor Changes

- BREAKING: Require Tailwind CSS v4. Remove all Tailwind v3 documentation and examples. Simplify setup to focus exclusively on Tailwind v4 with PostCSS plugin configuration.

### Patch Changes

- Document @tailwindcss/postcss requirement for Tailwind v4 users. Update all setup instructions to include the PostCSS plugin installation.

## 0.1.7

### Patch Changes

- 65db542: Add Tailwind CSS v4 setup instructions alongside v3. Documentation now supports both Tailwind versions with clear examples for each.
- Fix CSS comment syntax - remove curly braces that were causing PostCSS parsing errors

## 0.1.6

### Patch Changes

- Add Tailwind CSS v4 setup instructions alongside v3. Documentation now supports both Tailwind versions with clear examples for each.

## 0.1.5

### Patch Changes

- Document Tailwind CSS requirement and update consumer setup instructions. The library CSS now only includes design tokens and base styles - consumers must have Tailwind configured to process utility classes.

## 0.1.4

### Patch Changes

- Fix CSS build - inline tokens to prevent import errors in consuming applications

## 0.1.3

### Patch Changes

- Fix TypeScript errors and improve build process
- CSS improve order - tokens now load before utilities
