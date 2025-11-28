import { useState } from "react";
import Icon from "../../../src/components/Icon";

type CodeBlockProps = {
  code: string;
  language?: string;
};

export default function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative group">
      <div className="absolute top-2 right-2 z-10">
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-lg bg-background-secondary/80 backdrop-blur-sm hover:bg-background-tertiary transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Copy code"
        >
          <Icon name={copied ? "check" : "content_copy"} size="sm" />
        </button>
      </div>
      <pre className="bg-[#0d1117] dark:bg-[#0d1117] rounded-lg p-4 overflow-x-auto border border-gray-700 dark:border-gray-300">
        <code className={`language-${language} text-sm`}>{code}</code>
      </pre>
    </div>
  );
}
