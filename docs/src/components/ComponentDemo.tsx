import { Card } from "../../../src/components/Card";
import Typo from "../../../src/components/Typo";

type ComponentDemoProps = {
  title?: string;
  children: React.ReactNode;
};

export default function ComponentDemo({ title, children }: ComponentDemoProps) {
  return (
    <Card className="p-6" elevated={true}>
      {title && (
        <Typo variant="body-sm" className="text-text-secondary mb-4">
          {title}
        </Typo>
      )}
      <div>{children}</div>
    </Card>
  );
}
