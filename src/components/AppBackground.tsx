import * as React from "react";
import * as assets from "../assets";

export type AppBackgroundProps = {
  /** Content to render inside the background */
  children: React.ReactNode;
  /** Background image URL for light mode (defaults to library's light background) */
  lightImage?: string;
  /** Background image URL for dark mode (defaults to library's dark background) */
  darkImage?: string;
  /** Additional CSS classes */
  className?: string;
};

export function AppBackground({
  children,
  lightImage = assets.bgLight,
  darkImage = assets.bgDark,
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
          className="fixed inset-0 z-[-10] transition-opacity duration-500 opacity-100 dark:opacity-0"
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
          className="fixed inset-0 z-[-10] transition-opacity duration-500 opacity-0 dark:opacity-100"
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

