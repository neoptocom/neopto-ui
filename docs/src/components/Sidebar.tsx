import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { componentsConfig, componentCategories } from "../config/components";
import Typo from "../../../src/components/Typo";
import Icon from "../../../src/components/Icon";
import { useLanguage } from "../contexts/LanguageContext";
import { VERSION } from "../config/version";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
};

export default function Sidebar({ isOpen, onClose, currentPath }: SidebarProps) {
  const { t } = useLanguage();
  // Get the category for the currently active component
  const getActiveCategory = () => {
    if (!currentPath.startsWith("/components/")) return null;
    const activeComponentId = currentPath.replace("/components/", "");
    const activeComponent = componentsConfig.find((c) => c.id === activeComponentId);
    return activeComponent ? activeComponent.category : null;
  };

  const activeCategory = getActiveCategory();
  const [openCategories, setOpenCategories] = useState<string[]>(
    activeCategory ? [activeCategory] : []
  );

  // Update open categories when path changes
  useEffect(() => {
    if (!currentPath.startsWith("/components/")) return;
    
    const activeComponentId = currentPath.replace("/components/", "");
    const activeComponent = componentsConfig.find((c) => c.id === activeComponentId);
    const newActiveCategory = activeComponent ? activeComponent.category : null;
    
    if (newActiveCategory) {
      setOpenCategories((prev) => {
        if (!prev.includes(newActiveCategory)) {
          return [...prev, newActiveCategory];
        }
        return prev;
      });
    }
  }, [currentPath]);

  const menuItems = [
    { path: "/", label: t("home"), icon: "home" },
    { path: "/getting-started", label: "Getting Started", icon: "rocket_launch" },
    { path: "/design-tokens", label: "Design Tokens", icon: "palette" },
  ];

  const isActive = (path: string) => {
    // Exact match for home page
    if (path === "/") {
      return currentPath === "/";
    }
    // Exact match or starts with path (for nested routes)
    return currentPath === path || currentPath.startsWith(path + "/");
  };
  
  // Check if a component page is active
  const isComponentPageActive = (componentId: string) => {
    return currentPath === `/components/${componentId}`;
  };
  
  // Check if a category page is active
  const isCategoryPageActive = (category: string) => {
    const categoryPath = `/components/category/${category.toLowerCase()}`;
    return currentPath === categoryPath;
  };
  
  const toggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };
  
  const isCategoryOpen = (category: string) => openCategories.includes(category);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-[65px] z-40
          h-[calc(100vh-65px)]
          w-80
          bg-gray-100 dark:bg-[#0d1117] border-r border-gray-700 dark:border-gray-300
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          overflow-y-auto
        `}
        style={{ direction: 'rtl' }}
      >
        <div style={{ direction: 'ltr' }} className="p-2">
          {/* Version */}
          <div className="px-4 py-3 flex items-center justify-center">
            <div className="inline-flex items-center justify-center  gap-2 px-3 py-1.5 bg-[--color-brand]/10 text-[--color-brand] rounded-full">
              <Icon name="stars" size="sm" />
              <Typo variant="label-sm" bold="medium">
                Version {VERSION}
              </Typo>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="space-y-1 mb-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`
                  flex items-center gap-3 px-4 py-4 rounded-lg
                  transition-colors
                  ${
                    isActive(item.path)
                      ? "bg-(--color-brand) text-white"
                      : "text-text-primary hover:bg-black/10 dark:hover:bg-white/10"
                  }
                `}
              >
                <Icon 
                  name={item.icon} 
                  size="sm" 
                  className={isActive(item.path) ? "text-white" : "text-text-secondary"}
                />
                <Typo variant="body-sm" className={`mb-0 ${isActive(item.path) ? "text-white" : ""}`}>{item.label}</Typo>
              </Link>
            ))}
          </nav>

          {/* Components Section */}
          <div className="mb-4">
            <Typo variant="label-md" bold="semibold" className="text-text-secondary uppercase tracking-wide px-4 mb-0">
              Components
            </Typo>
          </div>

          {/* Components by Category */}
          <nav className="space-y-1">
            {componentCategories.map((category) => {
              const categoryComponents = componentsConfig.filter(
                (c) => c.category === category
              );

              if (categoryComponents.length === 0) return null;
              
              const isOpen = isCategoryOpen(category);
              const isCategoryActive = isCategoryPageActive(category);

              return (
                <div key={category}>
                  {/* Category Header (Dropdown Toggle) */}
                  <button
                    onClick={() => toggleCategory(category)}
                    className={`
                      block px-4 py-4 rounded-lg
                      transition-colors w-full flex items-center justify-between
                      ${
                        isCategoryActive
                          ? "bg-(--color-brand) text-white"
                          : "text-text-primary hover:bg-black/10 dark:hover:bg-white/10"
                      }
                    `}
                  >
                    <Typo variant="body-sm" className={`mb-0 ${isCategoryActive ? "text-white" : ""}`}>{category}</Typo>
                    <Icon
                      name={isOpen ? "expand_less" : "expand_more"}
                      size="sm"
                      className={isCategoryActive ? "text-white" : "text-text-primary"}
                    />
                  </button>
                  
                  {/* Category Items (Dropdown Content) */}
                  {isOpen && (
                    <div className="space-y-1 ml-2  border-l border-gray-700 dark:border-gray-300">
                      {categoryComponents.map((component) => {
                        const path = `/components/${component.id}`;
                        const isComponentActive = isComponentPageActive(component.id);
                        return (
                          <Link
                            key={component.id}
                            to={path}
                            onClick={onClose}
                            className={`
                              block px-4 py-2 rounded-lg
                              transition-colors
                              ${
                                isComponentActive
                                  ? "bg-(--color-brand) text-white"
                                  : "text-text-primary hover:bg-black/10 dark:hover:bg-white/10"
                              }
                            `}
                          >
                            <Typo variant="body-sm" className={`mb-0 ${isComponentActive ? "text-white" : ""}`}>{component.name}</Typo>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}

