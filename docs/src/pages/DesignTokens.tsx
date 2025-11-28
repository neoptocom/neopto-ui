import Typo from "../../../src/components/Typo";
import Section from "../components/Section";
import { Card } from "../../../src/components/Card";
import { useLanguage } from "../contexts/LanguageContext";

export default function DesignTokens() {
  const { t } = useLanguage();

  const colors = [
    { name: "Brand", token: "--color-brand", value: "#22A9CB" },
    { name: "Success", token: "--success", value: "#13B59F" },
    { name: "Warning", token: "--warning", value: "#D79C2C" },
    { name: "Destructive", token: "--destructive", value: "#E03737" },
    { name: "Info", token: "--info", value: "#0E91B2" },
  ];

  const semanticColors = [
    { name: "Background", token: "--bg", light: "#F3F4F6", dark: "#242832" },
    { name: "Surface", token: "--surface", light: "#FFFFFF", dark: "#2E303B" },
    { name: "Foreground", token: "--fg", light: "#242832", dark: "#E4E7EC" },
    { name: "Muted", token: "--muted", light: "#E5E7EB", dark: "#3F424F" },
    { name: "Muted Foreground", token: "--muted-fg", light: "#6B7280", dark: "#9D9EA2" },
    { name: "Border", token: "--border", light: "#E5E7EB", dark: "#5C5E68" },
  ];

  const radiusTokens = [
    { name: "Small", token: "--radius-sm", value: "0.25rem" },
    { name: "Medium", token: "--radius-md", value: "0.375rem" },
    { name: "Large", token: "--radius-lg", value: "0.5rem" },
    { name: "Extra Large", token: "--radius-xl", value: "0.75rem" },
  ];

  const typographyVariants = [
    "display-lg",
    "display-md",
    "display-sm",
    "headline-lg",
    "headline-md",
    "headline-sm",
    "title-lg",
    "title-md",
    "title-sm",
    "body-lg",
    "body-md",
    "body-sm",
    "label-lg",
    "label-md",
    "label-sm",
    "button",
  ];

  return (
    <div className="max-w-4xl space-y-12">
      <div className="flex flex-col gap-4">
        <Typo variant="display-sm" bold="bold">
          Design Tokens
        </Typo>
        <Typo variant="body-lg" className="text-text-secondary">
          {t("designTokensSubtitle")}
        </Typo>
      </div>

      <Section title="Colors" description={t("colorsDescription")}>
        <div className="grid md:grid-cols-2 gap-4">
          {colors.map((color) => (
            <Card key={color.token} className="p-6">
              <div
                className="w-full h-20 rounded-lg mb-4"
                style={{ backgroundColor: color.value }}
              />
              <Typo variant="body-md" bold="semibold" className="mb-1">
                {color.name}
              </Typo>
              <Typo variant="body-sm" className="text-text-secondary font-mono">
                {color.token}
              </Typo>
              <Typo variant="body-sm" className="text-text-secondary font-mono">
                {color.value}
              </Typo>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Semantic Colors" description={t("semanticColorsDescription")}>
        <div className="space-y-4">
          {semanticColors.map((color) => (
            <Card key={color.token} className="p-6">
              <Typo variant="body-md" bold="semibold" className="mb-4">
                {color.name}
              </Typo>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div
                    className="w-full h-16 rounded-lg mb-2 border border-gray-700 dark:border-gray-300"
                    style={{ backgroundColor: color.light }}
                  />
                  <Typo variant="body-sm" className="text-text-secondary">
                    {t("light")}: {color.light}
                  </Typo>
                </div>
                <div>
                  <div
                    className="w-full h-16 rounded-lg mb-2 border border-gray-700 dark:border-gray-300"
                    style={{ backgroundColor: color.dark }}
                  />
                  <Typo variant="body-sm" className="text-text-secondary">
                    {t("dark")}: {color.dark}
                  </Typo>
                </div>
              </div>
              <Typo variant="body-sm" className="text-text-secondary font-mono mt-2">
                {color.token}
              </Typo>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Border Radius" description={t("borderRadiusDescription")}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {radiusTokens.map((radius) => (
            <Card key={radius.token} className="p-6">
              <div
                className="w-full h-20 rounded-lg bg-[--color-brand]/20 mb-4 flex items-center justify-center"
                style={{ borderRadius: radius.value }}
              >
                <Typo variant="body-sm" className="text-text-secondary">
                  {t("preview")}
                </Typo>
              </div>
              <Typo variant="body-md" bold="semibold" className="mb-1">
                {radius.name}
              </Typo>
              <Typo variant="body-sm" className="text-text-secondary font-mono">
                {radius.token}
              </Typo>
              <Typo variant="body-sm" className="text-text-secondary font-mono">
                {radius.value}
              </Typo>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Typography" description={t("typographyDescription")}>
        <Card className="p-6 space-y-6">
          {typographyVariants.map((variant) => (
            <div key={variant} className="border-b border-gray-700 dark:border-gray-300 last:border-0 pb-4 last:pb-0">
              <Typo variant={variant as any} className="mb-2">
                {variant.charAt(0).toUpperCase() + variant.slice(1)} {t("exampleText")}
              </Typo>
              <Typo variant="body-sm" className="text-text-secondary font-mono">
                variant="{variant}"
              </Typo>
            </div>
          ))}
        </Card>
      </Section>

      <Section title="Shadows" description={t("shadowsDescription")}>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-6">
            <div className="w-full h-20 rounded-lg bg-background-secondary mb-4" style={{ boxShadow: "var(--shadow-sm)" }}>
              <div className="h-full flex items-center justify-center">
                <Typo variant="body-sm" className="text-text-secondary">
                  {t("smallShadow")}
                </Typo>
              </div>
            </div>
            <Typo variant="body-sm" className="text-text-secondary font-mono">
              --shadow-sm
            </Typo>
          </Card>
          <Card className="p-6">
            <div className="w-full h-20 rounded-lg bg-background-secondary mb-4" style={{ boxShadow: "var(--shadow-md)" }}>
              <div className="h-full flex items-center justify-center">
                <Typo variant="body-sm" className="text-text-secondary">
                  {t("mediumShadow")}
                </Typo>
              </div>
            </div>
            <Typo variant="body-sm" className="text-text-secondary font-mono">
              --shadow-md
            </Typo>
          </Card>
          <Card className="p-6">
            <div className="w-full h-20 rounded-lg bg-background-secondary mb-4" style={{ boxShadow: "var(--shadow-elevated)" }}>
              <div className="h-full flex items-center justify-center">
                <Typo variant="body-sm" className="text-text-secondary">
                  {t("elevatedShadow")}
                </Typo>
              </div>
            </div>
            <Typo variant="body-sm" className="text-text-secondary font-mono">
              --shadow-elevated
            </Typo>
          </Card>
        </div>
      </Section>
    </div>
  );
}

