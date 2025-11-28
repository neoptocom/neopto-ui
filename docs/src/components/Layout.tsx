import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBackground } from "../../../src/components/AppBackground";
import Sidebar from "./Sidebar";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <AppBackground>
      <div className="min-h-screen flex flex-col">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="flex flex-1 overflow-hidden pt-0">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} currentPath={location.pathname} />
          <main className="flex-1 overflow-y-auto lg:ml-80">
            <div className="max-w-7xl mx-auto px-6 py-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </AppBackground>
  );
}
