import * as React from "react";

export type AppBackgroundProps = {
  /** Content to render inside the background */
  children: React.ReactNode;
  /** Background image URL for light mode */
  lightImage?: string;
  /** Background image URL for dark mode */
  darkImage?: string;
  /** Additional CSS classes */
  className?: string;
};

export function AppBackground({
  children,
  lightImage,
  darkImage,
  className = "",
}: AppBackgroundProps) {
  const hasImages = lightImage || darkImage;

  // Base classes
  const baseClasses = "min-h-screen transition-colors";

  // Gradient fallback when no images provided
  const gradientClasses = !hasImages
    ? "bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    : "";

  // Background image styles
  const getBackgroundStyle = (): React.CSSProperties => {
    if (!hasImages) return {};

    return {
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };
  };

  return (
    <>
      {/* Light mode background image */}
      {lightImage && (
        <div
          className="fixed inset-0 -z-10 dark:hidden"
          style={{
            backgroundImage: `url(${lightImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      {/* Dark mode background image */}
      {darkImage && (
        <div
          className="fixed inset-0 -z-10 hidden dark:block"
          style={{
            backgroundImage: `url(${darkImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      {/* Content container */}
      <div
        className={[baseClasses, gradientClasses, className]
          .filter(Boolean)
          .join(" ")}
        style={hasImages ? {} : undefined}
      >
        {children}
      </div>
    </>
  );
}

