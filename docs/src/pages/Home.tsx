import { Link } from "react-router-dom";
import { Button } from "../../../src/components/Button";
import Typo from "../../../src/components/Typo";
import Icon from "../../../src/components/Icon";
import { Card } from "../../../src/components/Card";
import { componentsConfig, componentCategories } from "../config/components";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: "palette",
      title: "Design Tokens",
      description: t("designTokensDescription"),
    },
    {
      icon: "dark_mode",
      title: "Dark Mode",
      description: t("darkModeDescription"),
    },
    {
      icon: "code",
      title: "TypeScript",
      description: t("typescriptDescription"),
    },
  ];

  const quickLinks = [
    {
      path: "/getting-started",
      icon: "rocket_launch",
      title: "Getting Started",
      description: t("gettingStartedDescription"),
    },
    {
      path: "/design-tokens",
      icon: "palette",
      title: "Design Tokens",
      description: t("designTokensPageDescription"),
    },
  ];

  const categoryIcons: Record<string, string> = {
    Actions: "touch_app",
    Forms: "description",
    Content: "article",
    Layout: "view_quilt",
    Overlays: "layers",
    Feedback: "notifications",
    Navigation: "navigation",
  };

  const categories = componentCategories
    .filter((category) => {
      const count = componentsConfig.filter((c) => c.category === category).length;
      return count > 0;
    })
    .map((category) => ({
      name: category,
      icon: categoryIcons[category] || "widgets",
      count: componentsConfig.filter((c) => c.category === category).length,
    }));

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <div className="inline-flex items-center flex-col justify-center gap-2 px-4 py-2 bg-[--color-brand]/10 text-[--color-brand] rounded-full">
          <Icon name="stars" size="sm" />
          <Typo variant="label-md" bold="medium">
            {t("version")} 1.6.7
          </Typo>
        </div>
        <div className="flex flex-col gap-4">
          <Typo variant="display-md" bold="bold">
            {t("buildBeautifulUIs")}
          </Typo>
          <Typo variant="body-lg" className="text-text-secondary">
            {t("homeDescription")}
          </Typo>
        </div>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Link to="/getting-started">
            <Button variant="primary" size="lg">
              {t("getStarted")}
              <Icon name="arrow_forward" />
            </Button>
          </Link>
          <a
            href="https://github.com/neoptocom/neopto-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="lg">
              <Icon name="code" />
              {t("viewOnGitHub")}
            </Button>
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Card key={feature.title} className="p-6" elevated={true} showDecorations>
            <div className="w-12 h-12 rounded-lg bg-[--color-brand]/10 flex items-center justify-center mb-4">
              <Icon name={feature.icon} size="lg" className="text-[--color-brand]" />
            </div>
            <div className="flex flex-col gap-2">
              <Typo variant="headline-sm" bold="semibold">
                {feature.title}
              </Typo>
              <Typo variant="body-sm" className="text-text-secondary">
                {feature.description}
              </Typo>
            </div>
          </Card>
        ))}
      </section>

      {/* Component Categories */}
      <section className="space-y-6">
        <div className="flex flex-col gap-2">
          <Typo variant="headline-md" bold="bold">
            Components
          </Typo>
          <Typo variant="body-md" className="text-text-secondary">
            {t("componentsDescription", { count: componentsConfig.length })}
          </Typo>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/components/category/${category.name.toLowerCase()}`}
              className="block"
            >
              <Card className="p-6 hover:border-[--color-brand] transition-colors cursor-pointer" elevated={true} showDecorations>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-background-tertiary flex items-center justify-center">
                    <Icon name={category.icon} size="md" />
                  </div>
                  <Typo variant="label-sm" className="text-text-secondary">
                    {t("componentsCount", { count: category.count })}
                  </Typo>
                </div>
                <Typo variant="headline-sm" bold="semibold">
                  {category.name}
                </Typo>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-background-secondary rounded-lg border border-gray-700 dark:border-gray-300 p-8">
        <Typo variant="headline-sm" bold="semibold" className="mb-6">
          Quick Links
        </Typo>
        <div className="grid md:grid-cols-2 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-background-tertiary transition-colors"
            >
              <Icon name={link.icon} size="md" className="text-[--color-brand]" />
              <div className="flex flex-col gap-1">
                <Typo variant="body-md" bold="medium">{link.title}</Typo>
                <Typo variant="body-sm" className="text-text-secondary">{link.description}</Typo>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

