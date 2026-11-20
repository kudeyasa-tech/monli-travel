"use client";

import { useEffect, useRef, useState } from "react";
import { languages } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const current = languages.find((item) => item.code === language) ?? languages[0];

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={t("nav.switchLanguage")}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="inline-flex h-11 items-center gap-2 rounded-card px-2.5 text-navy transition-colors duration-200 hover:bg-surface focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:outline-none md:px-3"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.3 2.5 3.5 5.6 3.5 9S14.3 18.5 12 21c-2.3-2.5-3.5-5.6-3.5-9S9.7 5.5 12 3Z" />
        </svg>
        <span className="text-sm font-semibold">{current.short}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label={t("nav.switchLanguage")}
          className="absolute top-full right-0 z-50 mt-2 w-44 overflow-hidden rounded-card border border-navy/10 bg-white py-1 shadow-lg"
        >
          {languages.map((item) => {
            const isActive = item.code === language;

            return (
              <button
                key={item.code}
                type="button"
                role="menuitemradio"
                aria-checked={isActive}
                onClick={() => {
                  setLanguage(item.code);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors duration-200 hover:bg-surface focus-visible:bg-surface focus-visible:outline-none ${
                  isActive
                    ? "font-semibold text-navy"
                    : "font-medium text-body"
                }`}
              >
                {item.label}
                {isActive && (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0 text-gold"
                  >
                    <path d="M5 12.5l4.5 4.5L19 7" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
