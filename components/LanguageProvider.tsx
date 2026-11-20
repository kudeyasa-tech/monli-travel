"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LANGUAGE,
  STORAGE_KEY,
  isLanguage,
  translations,
  type Language,
  type TranslationKey,
} from "@/lib/i18n";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey, variables?: Record<string, string>) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(stored)) setLanguageState(stored);
  }, []);

  useEffect(() => {
    const syncDocument = () => {
      document.documentElement.lang = language;
      document.title = translations[language]["meta.title"];

      const description = document.querySelector('meta[name="description"]');
      if (description) {
        description.setAttribute(
          "content",
          translations[language]["meta.description"],
        );
      }
    };

    syncDocument();

    // Re-apply after hydration, since Next.js restores its static metadata then.
    const frame = window.requestAnimationFrame(syncDocument);
    return () => window.cancelAnimationFrame(frame);
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const t = useCallback(
    (key: TranslationKey, variables?: Record<string, string>) => {
      const template = translations[language][key] ?? translations.en[key];
      if (!variables) return template;

      return template.replace(/\{(\w+)\}/g, (_, name: string) =>
        variables[name] ?? `{${name}}`,
      );
    },
    [language],
  );

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
