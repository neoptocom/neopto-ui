import Typo from "../../../src/components/Typo";
import Section from "../components/Section";
import { Card } from "../../../src/components/Card";
import { useLanguage } from "../contexts/LanguageContext";

export default function DesignTokens() {
  const { t } = useLanguage();

  const colors = [
    { nameKey: "colorBrand" as const, token: "--color-brand", value: "#22A9CB" },
    { nameKey: "colorSuccess" as const, token: "--success", value: "#13B59F" },
    { nameKey: "colorWarning" as const, token: "--warning", value: "#D79C2C" },
    { nameKey: "colorDestructive" as const, token: "--destructive", value: "#E03737" },
    { nameKey: "colorInfo" as const, token: "--info", value: "#0E91B2" },
  ];

  const semanticColors = [
    { nameKey: "colorBackground" as const, token: "--bg", light: "#F3F4F6", dark: "#242832" },
    { nameKey: "colorSurface" as const, token: "--surface", light: "#FFFFFF", dark: "#2E303B" },
    { nameKey: "colorForeground" as const, token: "--fg", light: "#242832", dark: "#E4E7EC" },
    { nameKey: "colorMuted" as const, token: "--muted", light: "#E5E7EB", dark: "#3F424F" },
    { nameKey: "colorMutedForeground" as const, token: "--muted-fg", light: "#6B7280", dark: "#9D9EA2" },
    { nameKey: "colorBorder" as const, token: "--border", light: "#E5E7EB", dark: "#5C5E68" },
  ];

  const radiusTokens = [
    { nameKey: "radiusSmall" as const, token: "--radius-sm", value: "0.25rem" },
    { nameKey: "radiusMedium" as const, token: "--radius-md", value: "0.375rem" },
    { nameKey: "radiusLarge" as const, token: "--radius-lg", value: "0.5rem" },
    { nameKey: "radiusXl" as const, token: "--radius-xl", value: "0.75rem" },
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
          {t("designTokensTitle")}
        </Typo>
        <Typo variant="body-lg" className="text-text-secondary">
          {t("designTokensSubtitle")}
        </Typo>
      </div>

      <Section title={t("colors")} description={t("colorsDescription")}>
        <div className="grid md:grid-cols-2 gap-4">
          {colors.map((color) => (
            <Card key={color.token} className="p-6">
              <div
                className="w-full h-20 rounded-lg mb-4"
                style={{ backgroundColor: color.value }}
              />
              <Typo variant="body-md" bold="semibold" className="mb-1">
                {t(color.nameKey)}
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

      <Section title={t("semanticColors")} description={t("semanticColorsDescription")}>
        <div className="space-y-4">
          {semanticColors.map((color) => (
            <Card key={color.token} className="p-6">
              <Typo variant="body-md" bold="semibold" className="mb-4">
                {t(color.nameKey)}
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

      <Section title={t("borderRadius")} description={t("borderRadiusDescription")}>
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
                {t(radius.nameKey)}
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

      <Section title={t("typography")} description={t("typographyDescription")}>
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

      <Section title={t("shadows")} description={t("shadowsDescription")}>
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






