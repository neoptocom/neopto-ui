export type Language = "pt" | "en";

export const translations = {
  pt: {
    // Header
    toggleMenu: "Alternar menu",
    githubRepository: "Repositório GitHub",
    toggleDarkMode: "Modo claro/escuro",
    light: "Claro",
    dark: "Escuro",
    
    // Home Page
    version: "Versão",
    buildBeautifulUIs: "Crie Interfaces responsivas com NeoPTO",
    homeDescription: "Uma biblioteca moderna de componentes React construída com Tailwind CSS v4 e TypeScript. Inclui modo escuro, design tokens e documentação completa.",
    getStarted: "Começar",
    viewOnGitHub: "Ver no GitHub",
    designTokens: "Design Tokens",
    designTokensDescription: "Construído com um sistema abrangente de design tokens para estilização consistente e fácil personalização de temas.",
    darkMode: "Dark Mode",
    darkModeDescription: "Suporte completo ao modo escuro com transições suaves e detecção automática de tema.",
    typescript: "TypeScript",
    typescriptDescription: "Componentes totalmente tipados com suporte a IntelliSense e definições de tipo abrangentes.",
    components: "Componentes",
    componentsDescription: "Explore {count} componentes prontos para uso organizados por categoria.",
    componentsCount: "{count} componentes",
    quickLinks: "Quick Links",
    gettingStarted: "Começar",
    gettingStartedDescription: "Aprenda como instalar e usar a biblioteca",
    designTokensPage: "Design Tokens",
    designTokensPageDescription: "Explore cores, tipografia e espaçamento",
    
    // Getting Started Page
    gettingStartedTitle: "Começar",
    gettingStartedSubtitle: "Aprenda como instalar e usar NeoPTO UI em seu projeto React.",
    installation: "Instalação",
    installationDescription: "Instale a biblioteca e as dependências necessárias",
    configuration: "Configuração",
    configurationDescription: "Configure Tailwind CSS v4 e PostCSS",
    createPostcssFile: "Crie um arquivo {file} na raiz do seu projeto:",
    cssSetup: "CSS Setup",
    cssSetupDescription: "Configure seu arquivo CSS para usar a biblioteca",
    inYourMainCss: "Em seu arquivo CSS principal (ex.: {file}):",
    thenImportCss: "Em seguida, importe seu CSS em seu {file}:",
    basicUsage: "Basic Usage",
    basicUsageDescription: "Comece a usar componentes em seu aplicativo",
    darkModeSection: "Dark Mode",
    darkModeSectionDescription: "Alternar modo escuro adicionando a classe dark ao elemento raiz",
    enableDarkMode: "Habilitar modo escuro",
    disableDarkMode: "Desabilitar modo escuro",
    toggleDarkModeCode: "Alternar modo escuro",
    appBackground: "App Background",
    appBackgroundDescription: "Use o componente AppBackground para fundos de página",
    requirements: "Requirements",
    requirementsDescription: "Informações importantes sobre dependências",
    requirementsWarning: "⚠️ Esta biblioteca requer Tailwind CSS v4+. Certifique-se de ter a versão mais recente instalada.",
    
    // Design Tokens Page
    designTokensTitle: "Design Tokens",
    designTokensSubtitle: "Explore os tokens de design system usados em toda a biblioteca de componentes.",
    colors: "Cores",
    colorsDescription: "Cores da marca e semânticas",
    semanticColors: "Cores semânticas",
    semanticColorsDescription: "Cores que se adaptam ao modo claro/escuro",
    borderRadius: "Border Radius",
    borderRadiusDescription: "Tokens de raio para cantos arredondados",
    typography: "Tipografia",
    typographyDescription: "Variantes e pesos de tipografia",
    shadows: "Sombras",
    shadowsDescription: "Tokens de elevação e sombra",
    smallShadow: "Small Shadow",
    mediumShadow: "Medium Shadow",
    elevatedShadow: "Elevated Shadow",
    preview: "Preview",
    exampleText: "Exemplo",
    
    // Sidebar
    home: "Home",
    
    // Component Showcase
    componentNotFound: "Componente não encontrado",
    returnToHome: "Voltar para home",
    props: "Props",
    
    // Category Page
    categoryNotFound: "Categoria não encontrada",
    componentsInCategory: "({count}) Componentes",
    componentsInThisCategory: "Componentes nesta categoria.",
    
    // Category Descriptions
    actionsDescription: "Componentes interativos que acionam ações e interações do usuário.",
    formsDescription: "Componentes de entrada para coletar e validar dados do usuário.",
    contentDescription: "Componentes para exibir texto, imagens e outro conteúdo.",
    layoutDescription: "Componentes estruturais para organizar e dispor conteúdo.",
    overlaysDescription: "Componentes que aparecem acima de outro conteúdo, como modais e diálogos.",
    feedbackDescription: "Componentes que fornecem feedback visual aos usuários, como estados de carregamento.",
    navigationDescription: "Componentes para navegar entre diferentes seções e páginas.",
  },
  en: {
    // Header
    toggleMenu: "Toggle menu",
    githubRepository: "GitHub Repository",
    toggleDarkMode: "Toggle dark mode",
    light: "Light",
    dark: "Dark",
    
    // Home Page
    version: "Version",
    buildBeautifulUIs: "Build Beautiful UIs with NeoPTO",
    homeDescription: "A modern React component library built with Tailwind CSS v4 and TypeScript. Features dark mode, design tokens, and comprehensive documentation.",
    getStarted: "Get Started",
    viewOnGitHub: "View on GitHub",
    designTokens: "Design Tokens",
    designTokensDescription: "Built with a comprehensive design token system for consistent styling and easy theming.",
    darkMode: "Dark Mode",
    darkModeDescription: "Full dark mode support with smooth transitions and automatic theme detection.",
    typescript: "TypeScript",
    typescriptDescription: "Fully typed components with IntelliSense support and comprehensive type definitions.",
    components: "Components",
    componentsDescription: "Explore {count} ready-to-use components organized by category.",
    componentsCount: "{count} components",
    quickLinks: "Quick Links",
    gettingStarted: "Getting Started",
    gettingStartedDescription: "Learn how to install and use the library",
    designTokensPage: "Design Tokens",
    designTokensPageDescription: "Explore colors, typography, and spacing",
    
    // Getting Started Page
    gettingStartedTitle: "Getting Started",
    gettingStartedSubtitle: "Learn how to install and use NeoPTO UI in your React project.",
    installation: "Installation",
    installationDescription: "Install the library and required dependencies",
    configuration: "Configuration",
    configurationDescription: "Set up Tailwind CSS v4 and PostCSS",
    createPostcssFile: "Create a {file} file in your project root:",
    cssSetup: "CSS Setup",
    cssSetupDescription: "Configure your CSS file to use the library",
    inYourMainCss: "In your main CSS file (e.g., {file}):",
    thenImportCss: "Then import your CSS in your {file}:",
    basicUsage: "Basic Usage",
    basicUsageDescription: "Start using components in your app",
    darkModeSection: "Dark Mode",
    darkModeSectionDescription: "Toggle dark mode by adding the dark class to your root element",
    enableDarkMode: "Enable dark mode",
    disableDarkMode: "Disable dark mode",
    toggleDarkModeCode: "Toggle dark mode",
    appBackground: "App Background",
    appBackgroundDescription: "Use the AppBackground component for full-page backgrounds",
    requirements: "Requirements",
    requirementsDescription: "Important information about dependencies",
    requirementsWarning: "⚠️ This library requires Tailwind CSS v4+. Make sure you have the latest version installed.",
    
    // Design Tokens Page
    designTokensTitle: "Design Tokens",
    designTokensSubtitle: "Explore the design system tokens used throughout the component library.",
    colors: "Colors",
    colorsDescription: "Brand and semantic colors",
    semanticColors: "Semantic Colors",
    semanticColorsDescription: "Colors that adapt to light/dark mode",
    borderRadius: "Border Radius",
    borderRadiusDescription: "Radius tokens for rounded corners",
    typography: "Typography",
    typographyDescription: "Typography variants and weights",
    shadows: "Shadows",
    shadowsDescription: "Elevation and shadow tokens",
    smallShadow: "Small Shadow",
    mediumShadow: "Medium Shadow",
    elevatedShadow: "Elevated Shadow",
    preview: "Preview",
    exampleText: "Example Text",
    
    // Sidebar
    home: "Home",
    
    // Component Showcase
    componentNotFound: "Component not found",
    returnToHome: "Return to home",
    props: "Props",
    
    // Category Page
    categoryNotFound: "Category not found",
    componentsInCategory: "Components ({count})",
    componentsInThisCategory: "Components in this category.",
    
    // Category Descriptions
    actionsDescription: "Interactive components that trigger actions and user interactions.",
    formsDescription: "Input components for collecting and validating user data.",
    contentDescription: "Components for displaying text, images, and other content.",
    layoutDescription: "Structural components for organizing and arranging content.",
    overlaysDescription: "Components that appear above other content, such as modals and dialogs.",
    feedbackDescription: "Components that provide visual feedback to users, such as loading states.",
    navigationDescription: "Components for navigating between different sections and pages.",
  },
} as const;

export type TranslationKey = keyof typeof translations.pt;

export const getTranslation = (key: TranslationKey, lang: Language, params?: Record<string, string | number>): string => {
  const translation = translations[lang][key] || translations.pt[key];
  
  if (params) {
    return translation.replace(/\{(\w+)\}/g, (match, paramKey) => {
      return params[paramKey]?.toString() || match;
    });
  }
  
  return translation;
};

