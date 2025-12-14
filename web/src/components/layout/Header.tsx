"use client";

import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="relative sticky top-0 z-50 w-full border-b border-brand-light/20 bg-brand-white/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold text-brand-dark">
              Cleaning Website
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-dark/80 transition-colors hover:text-brand-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="primary" size="sm" asChild>
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">
                {mobileOpen ? "Close menu" : "Open menu"}
              </span>
              {!mobileOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </Button>
          </div>
        </div>
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-full z-50 md:hidden mt-2"
          >
            <div className="mx-4 rounded-md bg-brand-white/95 border border-brand-light/20 p-4 shadow-sm">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2 text-base font-medium text-brand-dark/90 hover:bg-brand-light/50"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="pt-2">
                  <Button variant="primary" size="sm" asChild>
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
