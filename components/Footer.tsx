import Image from "next/image";

const socialLinks = [
  {
    href: "https://api.whatsapp.com/send/?phone=60122885688&text=Hi+Monlitravel%2C+I+would+like+to+plan+a+booking.&type=phone_number&app_absent=0",
    label: "Monlitravel on WhatsApp",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/p/Mon-Li-Travel-Tour-Sdn-Bhd-100054277611095/",
    label: "Monlitravel on Facebook",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.6c0-.9.3-1.6 1.6-1.6H17V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.1H8v3h2.5V21h3z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/monlitravel?evlk=MTN6dHZiMXBndnFqeA%3D%3D",
    label: "Monlitravel on Instagram",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3 md:py-16">
        <div className="md:col-span-2">
          <a
            href="#home"
            className="inline-flex rounded-card bg-white p-2.5 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy focus-visible:outline-none"
          >
            <Image
              src="/monli-travel-logo.webp"
              alt="Monlitravel"
              width={1600}
              height={724}
              sizes="(min-width: 768px) 124px, 106px"
              className="h-12 w-auto md:h-14"
            />
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Monlitravel designs curated tours and travel packages worldwide, so
            every journey feels effortless.
          </p>

          <ul className="mt-6 flex items-center gap-3">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy focus-visible:outline-none"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-[0.18em] text-white/60 uppercase">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              <a
                href="mailto:monlitravel@hotmail.com"
                className="transition-colors duration-200 hover:text-white"
              >
                monlitravel@hotmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+60122885688"
                className="transition-colors duration-200 hover:text-white"
              >
                +60 12-288 5688
              </a>
            </li>
            <li>
              <address className="not-italic">
                53-3A, 2, Jalan Metro Perdana Barat 1,
                <br />
                Taman Usahawan Kepong, 52100 Kuala Lumpur,
                <br />
                Wilayah Persekutuan Kuala Lumpur
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6">
          <p className="text-xs text-white/60">
            © 2026 Monlitravel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
