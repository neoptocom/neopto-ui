import { useParams, Link } from "react-router-dom";
import Typo from "../../../src/components/Typo";
import Section from "../components/Section";
import CodeBlock from "../components/CodeBlock";
import ComponentDemo from "../components/ComponentDemo";
import PropsTable from "../components/PropsTable";
import { componentsConfig } from "../config/components";
import { getComponentExamples } from "../utils/componentExamples";
import { getComponentProps } from "../config/componentProps";
import { useLanguage } from "../contexts/LanguageContext";

export default function ComponentShowcase() {
  const { id } = useParams<{ id: string }>();
  const component = componentsConfig.find((c) => c.id === id);
  const { t } = useLanguage();

  if (!component) {
    return (
      <div className="text-center py-12">
        <Typo variant="headline-md" bold="bold" className="mb-4">
          {t("componentNotFound")}
        </Typo>
        <Link to="/">
          <Typo variant="body-md" className="text-[--color-brand]">
            {t("returnToHome")}
          </Typo>
        </Link>
      </div>
    );
  }

  const examples = getComponentExamples(component.id);
  const props = getComponentProps(component.id);

  return (
    <div className="max-w-4xl space-y-12">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-text-secondary">
          <Link to="/" className="hover:text-text-primary transition-colors">
            {t("home")}
          </Link>
          <span>/</span>
          <span>{component.name}</span>
        </div>
        <div className="flex flex-col gap-4">
          <Typo variant="display-sm" bold="bold">
            {component.name}
          </Typo>
          <Typo variant="body-lg" className="text-text-secondary">
            {component.description}
          </Typo>
        </div>
      </div>

      {/* Installation */}
      <Section title="Installation">
        <CodeBlock code={component.importPath} language="tsx" />
      </Section>

      {/* Props */}
      {props.length > 0 && (
        <Section title="Props">
          <PropsTable props={props} />
        </Section>
      )}

      {/* Examples */}
      {examples.map((example, index) => (
        <Section
          key={index}
          title={example.title}
          description={example.description}
        >
          <div className="space-y-4">
            <ComponentDemo title={example.demoTitle}>
              {example.demo}
            </ComponentDemo>
            {example.code && (
              <CodeBlock code={example.code} language="tsx" />
            )}
          </div>
        </Section>
      ))}
    </div>
  );
}

