import { useEffect, useRef } from 'react';
import { useSidebar } from "@/context/SidebarContext";

const Backdrop: React.FC = () => {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobileOpen && backdropRef.current) {
      backdropRef.current.focus();
    }
  }, [isMobileOpen]);

  if (!isMobileOpen) return null;

  return (
    <div
      ref={backdropRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación"
      onClick={toggleMobileSidebar}
      onKeyDown={(e) => e.key === 'Escape' && toggleMobileSidebar()}
      tabIndex={-1}
      className="fixed inset-0 z-40 bg-gray-900/50 lg:hidden"
    />
  );
};

export default Backdrop;