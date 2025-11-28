import { useParams, Link } from "react-router-dom";
import Typo from "../../../src/components/Typo";
import Icon from "../../../src/components/Icon";
import { componentsConfig, componentCategories } from "../config/components";
import { useLanguage } from "../contexts/LanguageContext";
import { TranslationKey } from "../utils/translations";

const getCategoryDescription = (category: string, t: (key: TranslationKey, params?: Record<string, string | number>) => string): string => {
  const descriptions: Record<string, TranslationKey> = {
    Actions: "actionsDescription",
    Forms: "formsDescription",
    Content: "contentDescription",
    Layout: "layoutDescription",
    Overlays: "overlaysDescription",
    Feedback: "feedbackDescription",
    Navigation: "navigationDescription",
  };
  const key = descriptions[category] || "componentsInThisCategory";
  return t(key);
};

const categoryIcons: Record<string, string> = {
  Actions: "touch_app",
  Forms: "description",
  Content: "article",
  Layout: "view_quilt",
  Overlays: "layers",
  Feedback: "notifications",
  Navigation: "navigation",
};

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const { t } = useLanguage();
  
  // Convert URL param to proper case (e.g., "actions" -> "Actions")
  const categoryName = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "";

  if (!categoryName || !componentCategories.includes(categoryName as any)) {
    return (
      <div className="text-center py-12">
        <Typo variant="headline-md" bold="bold" className="mb-4">
          {t("categoryNotFound")}
        </Typo>
        <Link to="/">
          <Typo variant="body-md" className="text-[--color-brand]">
            {t("returnToHome")}
          </Typo>
        </Link>
      </div>
    );
  }

  const componentsInCategory = componentsConfig.filter(
    (c) => c.category === categoryName
  );

  return (
    <div className="max-w-6xl space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-text-secondary">
          <Link to="/" className="hover:text-text-primary transition-colors">
            {t("home")}
          </Link>
          <span>/</span>
          <span>{categoryName}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-[--color-brand]/10 flex items-center justify-center">
            <Icon name={categoryIcons[categoryName] || "widgets"} size="lg" className="text-[--color-brand]" />
          </div>
          <div className="flex flex-col gap-2">
            <Typo variant="display-sm" bold="bold">
              {categoryName}
            </Typo>
            <Typo variant="body-lg" className="text-text-secondary">
              {getCategoryDescription(categoryName, t)}
            </Typo>
          </div>
        </div>
      </div>

      {/* Components List */}
      <div className="space-y-4">
        <Typo variant="headline-sm" bold="semibold">
          {t("componentsInCategory", { count: componentsInCategory.length })}
        </Typo>
        <ul className="space-y-2">
          {componentsInCategory.map((component) => (
            <li key={component.id}>
              <Link
                to={`/components/${component.id}`}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-background-secondary transition-colors group"
              >
                <Icon name="chevron_right" size="sm" className="text-text-tertiary group-hover:text-[--color-brand] transition-colors" />
                <div className="flex flex-col gap-1 flex-1">
                  <Typo variant="body-md" bold="medium" className="group-hover:text-[--color-brand] transition-colors">
                    {component.name}
                  </Typo>
                  <Typo variant="body-sm" className="text-text-secondary">
                    {component.description}
                  </Typo>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

