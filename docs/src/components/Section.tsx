import Typo from "../../../src/components/Typo";

type SectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function Section({ title, description, children }: SectionProps) {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2">
        <Typo variant="headline-md" bold="semibold">
          {title}
        </Typo>
        {description && (
          <Typo variant="body-md" className="text-text-secondary">
            {description}
          </Typo>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
}
