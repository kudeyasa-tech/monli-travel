"use client";

import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-page">
        <h2 className="text-[32px] font-bold text-navy md:text-[40px]">
          {t("about.heading")}
        </h2>
        <p className="mt-4 max-w-[800px] leading-relaxed text-muted">
          {t("about.description")}
        </p>
      </div>
    </section>
  );
}
