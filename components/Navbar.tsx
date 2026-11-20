"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";
import type { TranslationKey } from "@/lib/i18n";

const navLinks: { href: string; labelKey: TranslationKey }[] = [
  { href: "#home", labelKey: "nav.home" },
  { href: "#destinations", labelKey: "nav.destinations" },
  { href: "#tours", labelKey: "nav.tours" },
  { href: "#about", labelKey: "nav.about" },
  { href: "#faq", labelKey: "nav.faq" },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-navy/10 bg-white transition-shadow duration-200 ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="container-page flex h-20 items-center justify-between gap-6"
      >
        <a
          href="#home"
          className="inline-flex shrink-0 items-center rounded-card focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <Image
            src="/monli-travel-logo.webp"
            alt="Monlitravel"
            width={1600}
            height={724}
            loading="eager"
            sizes="(min-width: 768px) 124px, 97px"
            className="h-11 w-auto md:h-14"
          />
        </a>

        <div className="hidden items-center gap-6 lg:flex lg:gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-body transition-colors duration-200 hover:text-navy"
                >
                  {t(link.labelKey)}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn-gold px-5 py-2.5 text-sm">
            {t("nav.bookNow")}
          </a>

          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <LanguageSwitcher />

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-card text-navy transition-colors duration-200 hover:bg-surface focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            {isOpen ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-6 w-6"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-6 w-6"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-navy/10 bg-white lg:hidden"
        >
          <ul className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-card px-3 py-2.5 text-base font-medium text-body transition-colors duration-200 hover:bg-surface hover:text-navy"
                >
                  {t(link.labelKey)}
                </a>
              </li>
            ))}
          </ul>

          <div className="container-page pb-5">
            <a
              href="#contact"
              onClick={closeMenu}
              className="btn btn-gold w-full"
            >
              {t("nav.bookNow")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
