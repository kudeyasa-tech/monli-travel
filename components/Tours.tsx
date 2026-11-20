"use client";

import { useLanguage } from "./LanguageProvider";
import type { TranslationKey } from "@/lib/i18n";

const vehicles = [
  { id: "alza", icon: "car" },
  { id: "alphard", icon: "car" },
  { id: "van15", icon: "van" },
  { id: "van18", icon: "van" },
  { id: "bus31", icon: "bus" },
  { id: "bus44", icon: "bus" },
] as const;

const iconClass = "h-6 w-6";

function VehicleIcon({ type }: { type: (typeof vehicles)[number]["icon"] }) {
  if (type === "van") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClass}
      >
        <path d="M3.5 16V9.8a2.3 2.3 0 0 1 2.3-2.3h8.4l6.3 3.9V16" />
        <path d="M3.5 16h17" />
        <path d="M14.2 7.5V16" />
        <path d="M5.8 11.8h8.4" />
        <circle cx="7.2" cy="16" r="1.7" />
        <circle cx="16.8" cy="16" r="1.7" />
      </svg>
    );
  }

  if (type === "bus") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClass}
      >
        <rect x="3" y="6.5" width="18" height="10.5" rx="2.2" />
        <path d="M6.5 9.8h2.6M11 9.8h2.6M15.5 9.8h2" />
        <path d="M3 13.2h18" />
        <circle cx="7.2" cy="17" r="1.7" />
        <circle cx="16.8" cy="17" r="1.7" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
    >
      <path d="M3.5 15.5v-2.2l1.9-4.4A2.8 2.8 0 0 1 8 7.2h8a2.8 2.8 0 0 1 2.6 1.7l1.9 4.4v2.2" />
      <path d="M3.5 15.5h17" />
      <path d="M6.5 11.5h11" />
      <circle cx="7.2" cy="15.5" r="1.7" />
      <circle cx="16.8" cy="15.5" r="1.7" />
    </svg>
  );
}

export default function Tours() {
  const { t } = useLanguage();

  return (
    <section
      id="tours"
      aria-labelledby="fleet-heading"
      className="section-pad bg-surface"
    >
      <div className="container-page">
        <h2
          id="fleet-heading"
          className="text-[32px] font-bold text-navy md:text-[40px]"
        >
          {t("tours.heading")}
        </h2>
        <p className="mt-4 max-w-[800px] leading-relaxed text-muted">
          {t("tours.description")}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <article
              key={vehicle.id}
              className="rounded-card border border-navy/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-gold/10 text-navy">
                  <VehicleIcon type={vehicle.icon} />
                </span>
                <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold whitespace-nowrap text-navy">
                  {t(`tours.vehicles.${vehicle.id}.seats` as TranslationKey)}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-navy">
                {t(`tours.vehicles.${vehicle.id}.name` as TranslationKey)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {t(`tours.vehicles.${vehicle.id}.description` as TranslationKey)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
