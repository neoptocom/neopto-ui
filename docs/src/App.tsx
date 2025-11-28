import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import GettingStarted from "./pages/GettingStarted";
import DesignTokens from "./pages/DesignTokens";
import ComponentShowcase from "./pages/ComponentShowcase";
import CategoryPage from "./pages/CategoryPage";
import { componentsConfig } from "./config/components";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/design-tokens" element={<DesignTokens />} />
          <Route path="/components/category/:category" element={<CategoryPage />} />
          <Route path="/components/:id" element={<ComponentShowcase />} />
        </Routes>
      </Layout>
    </LanguageProvider>
  );
}

export default App;

