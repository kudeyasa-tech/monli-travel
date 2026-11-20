"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "./LanguageProvider";

const WHATSAPP_NUMBER = "60122885688";

export default function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = t("contact.whatsappTemplate", { name, email, message });
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section id="contact" className="section-pad bg-navy text-white">
      <div className="container-page">
        <h2 className="text-[32px] font-bold text-white md:text-[40px]">
          {t("contact.heading")}
        </h2>
        <p className="mt-4 max-w-[800px] leading-relaxed text-white/80">
          {t("contact.description")}
        </p>

        <form onSubmit={handleSubmit} className="mt-10 grid max-w-2xl gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                {t("contact.name")}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={t("contact.namePlaceholder")}
                className="w-full rounded-card border border-white/20 bg-white/10 px-4 py-3 text-white transition-colors duration-200 placeholder:text-white/40 focus:border-gold focus:ring-2 focus:ring-gold focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                {t("contact.email")}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-card border border-white/20 bg-white/10 px-4 py-3 text-white transition-colors duration-200 placeholder:text-white/40 focus:border-gold focus:ring-2 focus:ring-gold focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-medium text-white/80"
            >
              {t("contact.message")}
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder={t("contact.messagePlaceholder")}
              className="w-full resize-y rounded-card border border-white/20 bg-white/10 px-4 py-3 text-white transition-colors duration-200 placeholder:text-white/40 focus:border-gold focus:ring-2 focus:ring-gold focus:outline-none"
            />
          </div>

          <div>
            <button type="submit" className="btn btn-gold w-full sm:w-auto">
              {t("contact.send")}
            </button>
            <p className="mt-3 text-xs text-white/60">
              {t("contact.whatsappNote")}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
