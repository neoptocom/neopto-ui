# @neoptocom/neopto-ui

## 1.2.1

### Patch Changes

- Fixed Card decorations z-index to render above app-background images. Added AppBackgroundWithDecorations story to showcase the combination.

## 1.2.0

### Minor Changes

- Added lightImage and darkImage props to Card component for app-background variant, allowing consumers to pass custom background image URLs.

## 1.1.1

### Patch Changes

- Fixed Card app-background variant z-index stacking and wrapper inheritance to ensure backgrounds are visible and layout styles work correctly.

## 1.1.0

### Minor Changes

- Added lightImage and darkImage props to Card component for app-background variant. Consumers can now pass custom image URLs or use bundled defaults.

## 1.0.2

### Patch Changes

- Fixed Card component background image visibility with proper z-index layering. Updated wrapper to inherit layout properties (display, flex, gap) for better layout compatibility.

## 1.0.1

### Patch Changes

- Fixed Card component to properly render children as direct descendants for layout styles (gap, flex, grid) to work correctly. Removed wrapper div that was breaking layout inheritance.

## 1.0.0

### Major Changes

- - BREAKING: Renamed Input variant from "borderless" to "inline"
  - Removed height and padding from inline variant for more flexible inline usage

## 0.14.0

### Minor Changes

- - Added elevated prop to Card component for shadow effect
  - Added --shadow-elevated design token for reusable elevated shadow across project

## 0.13.0

### Minor Changes

- - Added app-background variant to Card component with light/dark mode background images

## 0.12.3

### Patch Changes

- - Fixed Card component to respect custom position style prop (e.g., position: absolute)

## 0.12.2

### Patch Changes

- - Fixed Card component inner wrapper div to fill 100% height when fixed height is set on parent

## 0.12.1

### Patch Changes

- - Changed Card component default `showDecorations` to false
  - Added Separator component with comprehensive Storybook stories
  - Added Card component Storybook stories

## 0.12.0

### Minor Changes

- - Added MessageBubble component for chat interfaces
  - Added Google Fonts (Poppins and Roboto) loading in CSS
  - Fixed Typo component to properly support custom color classes
  - Aligned border radius tokens with Tailwind defaults (rounded-2xl now uses standard 16px)
  - Added Input borderless variant support

## 0.9.1

### Patch Changes

- **New component: Card**: Glassmorphism card container
  - Beautiful frosted glass effect with 75px backdrop blur
  - Semi-transparent blue background: rgba(112, 133, 233, 0.05)
  - 30px border radius for smooth corners
  - Default 24px padding (customizable via className)
  - Safari compatible with WebKit prefix
  - Full HTML div props support (onClick, className, style, etc.)
  - Perfect for modals, content containers, and overlay elements
  - Works great with BackgroundBlur component

## 0.9.0

### Minor Changes

- **New component: BackgroundBlur**: Blur overlay wrapper for modals and popups
  - Smooth 500ms fade in/out transitions with opacity animation
  - 10px backdrop blur with 10% black overlay
  - Click-to-close functionality (optional via `onClose` prop)
  - Smart event handling - clicks on children don't trigger close
  - Configurable z-index (default: 40)
  - Auto-mount/unmount with proper transition timing
  - Safari compatible with WebKit prefix
  - Flexible positioning with className support
  - Perfect for modals, drawers, and overlay content

## 0.8.1

### Patch Changes

- **Chip component enhancement**: Add custom color support
  - Add `backgroundColor` prop for custom background colors
  - Add `textColor` prop for custom text colors
  - Custom colors override variant styles with inline styles (no specificity conflicts)
  - Supports all CSS color formats: hex, rgb, rgba, CSS variables, etc.
  - Backward compatible - existing variants work the same way
  - Proper style prop merging

## 0.8.0

### Minor Changes

- **Typo component enhancement**: Update typography with precise design system specifications
  - Add exact font sizes, line-heights, and letter-spacing from Figma design system
  - All Display variants (57px, 45px, 36px) with proper line-heights
  - All Headline variants (32px, 28px, 24px) with proper line-heights
  - All Title variants (22px, 16px, 14px) with letter-spacing adjustments
  - All Label variants (14px, 12px, 11px) with letter-spacing
  - All Body variants (16px, 14px, 12px) with letter-spacing
  - Typography specs now applied via inline styles and always preserved
  - Fix style prop merging to preserve fontFamily, fontSize, lineHeight, and letterSpacing
  - Users can still override other style properties without breaking typography

## 0.7.5

### Patch Changes

- **Documentation update**: Add dark mode variant configuration to setup guides
  - Updated README and CONSUMER_SETUP with `@variant dark` requirement
  - Added important note that this line is required for dark mode to work
  - Clarifies setup for AppBackground and other dark mode features
  - Consumers must add `@variant dark (&:where(.dark, .dark *));` to their CSS

## 0.7.4

### Patch Changes

- **AppBackground defaults**: Built-in NeoPTO backgrounds now used by default
  - `AppBackground` now automatically uses library's light/dark SVG backgrounds
  - Consumers no longer need to import `assets` for branded backgrounds
  - Simply use `<AppBackground>{children}</AppBackground>` out of the box
  - Custom images can still be provided via `lightImage` and `darkImage` props
  - Updated documentation with simpler usage examples

## 0.7.3

### Patch Changes

- **Fix dark mode detection**: Configure Tailwind v4 dark mode variant properly
  - Add explicit `@variant dark` configuration for class-based dark mode
  - Fix AppBackground opacity transitions not responding to theme changes
  - Adjust z-index layering for proper background stacking (light: -10, dark: -9)
  - Dark mode now properly toggles between light and dark backgrounds with smooth transitions

## 0.7.2

### Patch Changes

- **Fix AppBackground transitions**: Add smooth fade transition between light and dark mode backgrounds
  - Changed from `hidden/block` to `opacity-0/opacity-100` for smooth transitions
  - Added 500ms transition duration for elegant theme switching

## 0.7.1

### Patch Changes

- **Add background SVG assets**: Include official NeoPTO background images
  - `assets.bgLight` - White background with cyan gradient blur
  - `assets.bgDark` - Dark (#191C28) background with cyan gradient blur
  - Export all assets for easy consumer access
  - Update dev playground to showcase actual backgrounds

### Usage

```tsx
import { AppBackground, assets } from "@neoptocom/neopto-ui";

<AppBackground lightImage={assets.bgLight} darkImage={assets.bgDark}>
  <YourApp />
</AppBackground>;
```

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
