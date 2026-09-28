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
import Link from "next/link";

export function NavbarDemo() {
  const navItems = [
    { name: "ghar", link: "/" }, // ✅ FIXED
    { name: "Services", link: "/service" }, // ✅ FIXED
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
    { name: "How We Work", link: "/HowWeWork" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar className="bg-black border-b border-neutral-800">

        {/* ================= DESKTOP ================= */}
        <NavBody>

          {/* ✅ Logo (NO wrapping) */}
          <NavbarLogo className="cursor-pointer" />

          <NavItems
            items={navItems}
            className="text-white"
          />

          <div className="flex items-center gap-4">
            <NavbarButton variant="primary">
              Call Now
            </NavbarButton>
          </div>

        </NavBody>

        {/* ================= MOBILE ================= */}
        <MobileNav>

          <MobileNavHeader>

            {/* ✅ Logo */}
            <NavbarLogo className="cursor-pointer" />

            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            />

          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="bg-black"
          >
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white py-2"
              >
                {item.name}
              </Link>
            ))}

            <div className="flex flex-col gap-4 mt-4">
              <NavbarButton
                variant="secondary"
                className="text-white"
              >
                View Services
              </NavbarButton>

              <NavbarButton variant="primary">
                Call Now
              </NavbarButton>
            </div>
          </MobileNavMenu>

        </MobileNav>

      </Navbar>
    </div>
  );
}