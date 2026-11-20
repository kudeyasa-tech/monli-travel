"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import type { TranslationKey } from "@/lib/i18n";

const destinations: {
  id: "kl" | "cameron";
  image: string;
  href: string;
}[] = [
  {
    id: "kl",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
    href: "#contact",
  },
  {
    id: "cameron",
    image: "/cameron-highlands.jpg",
    href: "#contact",
  },
];

export default function PopularDestinations() {
  const { t } = useLanguage();

  return (
    <section
      id="destinations"
      aria-labelledby="family-destinations-heading"
      className="section-pad bg-surface"
    >
      <div className="container-page">
        <div className="text-center">
          <h2
            id="family-destinations-heading"
            className="text-[32px] font-bold text-navy md:text-[40px]"
          >
            {t("destinations.heading")}
          </h2>
          <p className="mx-auto mt-4 mb-12 max-w-[600px] text-muted">
            {t("destinations.subtitle")}
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {destinations.map((destination) => {
            const name = t(`destinations.${destination.id}.name` as TranslationKey);

            return (
              <article
                key={destination.id}
                className="group overflow-hidden rounded-card bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 focus-within:shadow-lg"
              >
                <div className="relative aspect-video">
                  <Image
                    src={destination.image}
                    alt={t(`destinations.${destination.id}.imageAlt` as TranslationKey)}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy">{name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                    {t(`destinations.${destination.id}.description` as TranslationKey)}
                  </p>

                  <div className="mt-6 flex justify-end">
                    <a
                      href={destination.href}
                      aria-label={t("destinations.enquireAria", { name })}
                      className="inline-flex items-center justify-center rounded-card border border-navy px-5 py-2.5 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-navy hover:text-white focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      {t("destinations.enquire")}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
