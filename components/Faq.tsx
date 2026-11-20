"use client";

import { useLanguage } from "./LanguageProvider";
import type { TranslationKey } from "@/lib/i18n";

const faqIds = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;

export default function Faq() {
  const { t } = useLanguage();

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-pad bg-surface"
    >
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2
            id="faq-heading"
            className="text-[32px] font-bold text-navy md:text-[40px]"
          >
            {t("faq.heading")}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">{t("faq.description")}</p>
          <a href="#contact" className="btn btn-gold mt-8">
            {t("faq.contactUs")}
          </a>
        </div>

        <div className="space-y-4 lg:col-span-8">
          {faqIds.map((id) => (
            <details
              key={id}
              className="group rounded-card border border-navy/10 bg-white transition-shadow duration-200 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-card px-6 py-5 text-base font-semibold text-navy transition-colors duration-200 hover:bg-surface focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:outline-none [&::-webkit-details-marker]:hidden">
                <span>{t(`faq.${id}.question` as TranslationKey)}</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p className="px-6 pb-6 text-sm leading-relaxed text-muted">
                {t(`faq.${id}.answer` as TranslationKey)}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
