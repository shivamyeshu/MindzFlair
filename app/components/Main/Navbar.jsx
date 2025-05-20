"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function NavbarFuck() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Analyze Playlist",
      link: "/analyze",
    },
    {
      name: "Get Transcript",
      link: "/transcript",
    },
    {
      name: "Generate Summary",
      link: "/summary",
    },
  
  ];

  const handleInternalNav = (link) => {
    setIsMobileMenuOpen(false);
    router.push(link);
  };

  const handleExternalNav = (url) => {
    setIsMobileMenuOpen(false);
    window.location.href = url;
  };

  return (
    <div className="relative w-full">
      <div className="fixed top-0 left-0 w-full z-50 bg-opacity-80">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems
              items={navItems.map((item) => ({
                ...item,
                onClick: () => handleInternalNav(item.link),
              }))}
            />
            <div className="flex items-center gap-4 cursor-pointer text-white">
              <NavbarButton
                onClick={() =>
                  handleExternalNav("https://summary.mindzflair.com")
                }
                variant="primary"
                className="w-full"
              >
                Top Summary  
              </NavbarButton>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <button
                  key={`mobile-link-${idx}`}
                  onClick={() => handleInternalNav(item.link)}
                  className="relative text-left text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </button>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() =>
                    handleExternalNav("https://mindzflair.com")
                  }
                  variant="primary"
                  className="w-full"
                >
                 Top Summary
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
    </div>
  );
}
