# @neoptocom/neopto-ui

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
