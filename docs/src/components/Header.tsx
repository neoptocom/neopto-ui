import { useState, useEffect } from "react";
import { Button } from "../../../src/components/Button";
import Icon from "../../../src/components/Icon";
import Typo from "../../../src/components/Typo";
import logoLight from "../../../src/assets/logo-neopto-light.svg";
import logoDark from "../../../src/assets/logo-neopto-dark.svg";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../utils/translations";

type HeaderProps = {
  onMenuClick: () => void;
};

export default function Header({ onMenuClick }: HeaderProps) {
  const [isDark, setIsDark] = useState(true);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    // Initialize dark mode on mount
    if (!document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.add("dark");
    }
    
    // Check initial theme
    setIsDark(document.documentElement.classList.contains("dark"));
    
    // Listen for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Close language menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".language-selector")) {
        setShowLanguageMenu(false);
      }
    };

    if (showLanguageMenu) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showLanguageMenu]);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle("dark", newIsDark);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setShowLanguageMenu(false);
  };

  return (
    <header className="sticky top-0 z-60 bg-gray-100 dark:bg-[#0d1117] border-b border-gray-700 dark:border-gray-300">
      <div className=" mx-auto px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-background-tertiary transition-colors"
            aria-label={t("toggleMenu")}
          >
            <Icon name="menu" size="md" />
          </button>
          <div className="hidden sm:flex items-center gap-1">
            <img 
              src={isDark ? logoDark : logoLight} 
              alt="NeoPTO" 
              className="h-10 w-auto"
            />
            <Typo variant="headline-sm" bold="bold" className="mb-0 mt-2">
              UI
            </Typo>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/neoptocom/neopto-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-background-tertiary transition-colors"
            aria-label={t("githubRepository")}
          >
            <Icon name="code" size="md" />
          </a>
          
          {/* Language Selector */}
          <div className="relative language-selector">
            <Button
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              variant="ghost"
              size="sm"
              aria-label="Select language"
            >
              <Icon name="language" size="md" />
              <span className="hidden sm:inline uppercase">
                {language}
              </span>
            </Button>
            {showLanguageMenu && (
              <div className="absolute right-0 mt-2 w-32 bg-gray-100 dark:bg-[#0d1117] border border-gray-700 dark:border-gray-300 rounded-lg shadow-lg overflow-hidden z-50">
                <button
                  onClick={() => handleLanguageChange("pt")}
                  className={`w-full px-4 py-2 text-left transition-colors cursor-pointer ${
                    language === "pt" 
                      ? "bg-[--color-brand]/10 text-[--color-brand]" 
                      : "hover:bg-black/10 dark:hover:bg-white/10"
                  }`}
                >
                  <Typo variant="body-sm" className="mb-0">Português</Typo>
                </button>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`w-full px-4 py-2 text-left transition-colors cursor-pointer ${
                    language === "en" 
                      ? "bg-[--color-brand]/10 text-[--color-brand]" 
                      : "hover:bg-black/10 dark:hover:bg-white/10"
                  }`}
                >
                  <Typo variant="body-sm" className="mb-0">English</Typo>
                </button>
              </div>
            )}
          </div>

          <Button
            onClick={toggleDarkMode}
            variant="ghost"
            size="sm"
            aria-label={t("toggleDarkMode")}
          >
            <Icon name={isDark ? "light_mode" : "dark_mode"} />
            <span className="hidden sm:inline">
              {isDark ? t("dark") : t("light")}
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}

