import Typo from "../../../src/components/Typo";

type Prop = {
  name: string;
  type: string;
  default?: string;
  description?: string;
  required?: boolean;
};

type PropsTableProps = {
  props: Prop[];
};

export default function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-700 dark:border-gray-300">
            <th className="text-left p-3">
              <Typo variant="body-sm" bold="semibold">
                Prop
              </Typo>
            </th>
            <th className="text-left p-3">
              <Typo variant="body-sm" bold="semibold">
                Type
              </Typo>
            </th>
            <th className="text-left p-3">
              <Typo variant="body-sm" bold="semibold">
                Default
              </Typo>
            </th>
            <th className="text-left p-3">
              <Typo variant="body-sm" bold="semibold">
                Description
              </Typo>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b border-gray-700 dark:border-gray-300">
              <td className="p-3">
                <Typo variant="body-sm" className="font-mono">
                  {prop.name}
                  {prop.required && (
                    <span className="text-[--destructive] ml-1">*</span>
                  )}
                </Typo>
              </td>
              <td className="p-3">
                <Typo variant="body-sm" className="font-mono text-text-secondary">
                  {prop.type}
                </Typo>
              </td>
              <td className="p-3">
                <Typo variant="body-sm" className="font-mono text-text-secondary">
                  {prop.default || "-"}
                </Typo>
              </td>
              <td className="p-3">
                <Typo variant="body-sm" className="text-text-secondary">
                  {prop.description || "-"}
                </Typo>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
