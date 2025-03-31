"use client";

import { useSidebar } from "@/context/SidebarContext";
import AppHeader from "@/layout/AppHeader";
import AppSidebar from "@/layout/AppSidebar";
import Backdrop from "@/layout/Backdrop";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

 
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]";

  return (
    <div className="min-h-screen xl:flex">
      {/* Sidebar - Navigation Landmark */}
      <nav 
        aria-label="Main navigation"
        className={isMobileOpen ? "fixed z-50" : ""}
      >
        <AppSidebar />
      </nav>
      
      <Backdrop />

      {/* Main Content Area */}
      <div 
        className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}
      >
        {/* Header - Banner Landmark */}
        <header role="banner">
          <AppHeader />
        </header>

        {/* Page Content - Main Landmark */}
        <main 
          id="main-content"
          tabIndex={-1}
          className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6"
        >
          {children}
        </main>

        {/* Footer - Contentinfo Landmark */}
        <footer
          role="contentinfo"
          aria-label="Page footer"
          className="col-span-2 bg-brand-500 text-white text-center p-4"
        >
          <p>{" ©2025 Milton's Enterprise. All rights reserved."}</p>
        </footer>
      </div>
    </div>
  );
}