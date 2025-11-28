import Typo from "../../../src/components/Typo";
import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";
import { useLanguage } from "../contexts/LanguageContext";

export default function GettingStarted() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl space-y-12">
      <div className="flex flex-col gap-4">
        <Typo variant="display-sm" bold="bold">
          Getting Started
        </Typo>
        <Typo variant="body-lg" className="text-text-secondary">
          {t("gettingStartedSubtitle")}
        </Typo>
      </div>

      <Section
        title="Installation"
        description={t("installationDescription")}
      >
        <CodeBlock
          code={`npm install @neoptocom/neopto-ui
npm install -D tailwindcss@latest @tailwindcss/postcss`}
          language="bash"
        />
      </Section>

      <Section
        title="Configuration"
        description={t("configurationDescription")}
      >
        <Typo variant="body-md" className="mb-4">
          {t("createPostcssFile", { file: "postcss.config.js" })}
        </Typo>
        <CodeBlock
          code={`export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};`}
          language="javascript"
        />
      </Section>

      <Section
        title="CSS Setup"
        description={t("cssSetupDescription")}
      >
        <Typo variant="body-md" className="mb-4">
          {t("inYourMainCss", { file: "src/index.css" })}
        </Typo>
        <CodeBlock
          code={`@import "tailwindcss";

/* Enable dark mode support */
@variant dark (&:where(.dark, .dark *));

/* Scan the component library source files */
@source "../node_modules/@neoptocom/neopto-ui/src";

/* Import library tokens and styles */
@import "@neoptocom/neopto-ui/styles";`}
          language="css"
        />
        <Typo variant="body-md" className="mt-4">
          {t("thenImportCss", { file: "src/main.tsx" })}
        </Typo>
        <CodeBlock
          code={`import "./index.css";`}
          language="tsx"
        />
      </Section>

      <Section
        title="Basic Usage"
        description={t("basicUsageDescription")}
      >
        <CodeBlock
          code={`import { Button, Input, Typo } from "@neoptocom/neopto-ui";

function App() {
  return (
    <div className="p-8">
      <Typo variant="headline-lg">Welcome!</Typo>
      <Input placeholder="Enter your name" />
      <Button variant="primary">Get Started</Button>
    </div>
  );
}`}
          language="tsx"
        />
      </Section>

      <Section
        title="Dark Mode"
        description={t("darkModeSectionDescription")}
      >
        <CodeBlock
          code={`// ${t("enableDarkMode")}
document.documentElement.classList.add("dark");

// ${t("disableDarkMode")}
document.documentElement.classList.remove("dark");

// ${t("toggleDarkModeCode")}
document.documentElement.classList.toggle("dark");`}
          language="tsx"
        />
      </Section>

      <Section
        title="App Background"
        description={t("appBackgroundDescription")}
      >
        <CodeBlock
          code={`import { AppBackground } from "@neoptocom/neopto-ui";

function App() {
  return (
    <AppBackground>
      <YourApp />
    </AppBackground>
  );
}`}
          language="tsx"
        />
      </Section>

      <Section
        title="Requirements"
        description={t("requirementsDescription")}
      >
        <div className="bg-[--warning]/10 border border-[--warning]/20 rounded-lg p-4">
          <Typo variant="body-md" className="text-[--warning]">
            {t("requirementsWarning")}
          </Typo>
        </div>
      </Section>
    </div>
  );
}

