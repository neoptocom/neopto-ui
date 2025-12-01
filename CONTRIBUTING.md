# Contributing to NeoPTO UI

Thanks for helping improve the NeoPTO UI component library! This guide covers the developer
workflow, Storybook documentation pipeline, and publishing expectations so consumers (and their
agents) always get up-to-date usage guidance.

## Getting started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the component playground**
   ```bash
   npm run dev
   ```
3. **Open Storybook during development**
   ```bash
   npm run storybook
   ```

## Storybook-driven documentation

Every component must ship with:

- A typed API (TypeScript definitions + JSDoc).
- Co-located CSF stories inside `src/components/**/Component.stories.tsx`.
- An MDX doc (`Component.docs.mdx`) capturing usage notes, accessibility guidance, and composition
  recipes.

### Adding or updating stories

1. Create or update the CSF file next to the component.
2. Import those stories in the matching MDX doc to add narrative sections, `<Canvas>` demos, and an
   `<ArgsTable>`.
3. Run Storybook locally (`npm run storybook`) to verify controls, docs tabs, and live code examples.

### Generating machine-readable docs

Run the docs build whenever component APIs change:

```bash
npm run storybook:docs
```

This command renders Storybook in docs mode and writes `storybook-static/docs.json`, which agents
consume for prop metadata and usage notes. Commit the updated file in pull requests that change
component APIs.

## Continuous integration

A GitHub Actions workflow runs `npm run storybook:docs` on pushes and pull requests. The build fails
if `storybook-static/docs.json` differs from what is committed, so always regenerate and commit the
artifact after prop or story changes.

## Publishing the documentation site

1. Generate the static docs bundle:
   ```bash
   npm run storybook:docs
   ```
2. Publish the `storybook-static` folder to your hosting target (GitHub Pages, Vercel, S3, etc.). For
   GitHub Pages you can run:
   ```bash
   npx gh-pages -d storybook-static
   ```
3. Update the package README with the public URL so consumers and their agents can discover the docs.

## Publishing to npm

This project uses [Changesets](https://github.com/changesets/changesets) for version management and npm publishing. This allows multiple maintainers to work together safely.

### How it works

1. **When making changes that should be published:**
   ```bash
   npm run changeset
   ```
   This will prompt you to:
   - Select which packages changed (if you have multiple)
   - Choose the version bump type (patch, minor, major)
   - Write a summary of the changes

2. **Commit the changeset file:**
   ```bash
   git add .changeset/
   git commit -m "feat: add new component"
   git push
   ```

3. **Automatic release process:**
   - When changesets are merged to `main`, a GitHub Action automatically creates a "Version Packages" PR
   - Review and merge that PR to:
     - Update the version in `package.json`
     - Update `CHANGELOG.md`
     - Publish to npm automatically

### Version bump types

- **Patch** (`1.6.7` → `1.6.8`): Bug fixes, small improvements
- **Minor** (`1.6.7` → `1.7.0`): New features, new components (backward compatible)
- **Major** (`1.6.7` → `2.0.0`): Breaking changes, API changes

### Important notes

- **Always add a changeset** when making changes that should be published
- **Don't manually bump versions** - let Changesets handle it
- **The release workflow requires `NPM_TOKEN` secret** - make sure it's set in GitHub repository settings
- Only maintainers with npm publish access can complete the release (the workflow handles this automatically)

## Release checklist

- [ ] `npm run build` succeeds.
- [ ] `npm run typecheck` passes.
- [ ] `npm run storybook:docs` has been run and `storybook-static/docs.json` is committed (if component APIs changed).
- [ ] Changeset added via `npm run changeset` (if publishing to npm).
- [ ] Documentation site is up to date.

Happy building!

















