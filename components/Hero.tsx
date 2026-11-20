"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-navy">
      <Image
        src="/hero-travel.jpg"
        alt={t("hero.imageAlt")}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-navy/50"
      />

      <div className="container-page relative z-10 py-16">
        <div className="max-w-3xl">
          <h1 className="text-[34px] leading-[1.1] font-bold text-white sm:text-5xl md:text-[56px]">
            {t("hero.title")}
          </h1>

          <p className="mt-5 max-w-[600px] text-base text-white/90 sm:text-lg">
            {t("hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href="#contact" className="btn btn-gold w-full sm:w-auto">
              {t("hero.bookNow")}
            </a>
            <a
              href="#tours"
              className="btn btn-outline-light w-full sm:w-auto"
            >
              {t("hero.exploreTours")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
