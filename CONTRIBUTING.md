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

## Release checklist

- [ ] `npm run build` succeeds.
- [ ] `npm run typecheck` passes.
- [ ] `npm run storybook:docs` has been run and `storybook-static/docs.json` is committed.
- [ ] Changeset added if publishing to npm via `npm run changeset`.
- [ ] Storybook static build deployed (see above).

Happy building!

















