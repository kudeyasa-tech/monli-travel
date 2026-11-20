const faqs = [
  {
    question: "How do I book a tour or vehicle?",
    answer:
      "Send us your travel dates, group size and destination through the contact form or at monlitravel@hotmail.com. We'll confirm availability and prepare a quote for you.",
  },
  {
    question: "Can I customise my itinerary?",
    answer:
      "Yes. Our tours are a starting point — tell us what you'd like to see and how long you'd like to stay, and we'll tailor the route and pace to your group.",
  },
  {
    question: "Which vehicle is right for my group?",
    answer:
      "Use our fleet as a guide: 6–7 seaters suit small families, 15–18-seater vans fit medium groups, and 31–44-seater buses are best for large groups. Not sure? Tell us your group size and luggage needs and we'll recommend the right option.",
  },
  {
    question: "Are your tours suitable for children?",
    answer:
      "Absolutely. Family travel is at the heart of what we do, and we're happy to suggest itineraries and vehicles that work well for younger travellers.",
  },
  {
    question: "What is included in a tour package?",
    answer:
      "Inclusions vary by itinerary because every trip is tailored. Before you confirm, we'll send a clear breakdown of what is covered — such as transport, activities and accommodation — plus anything you need to arrange yourself.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking as early as possible, especially for weekends, school holidays and larger groups. Send us your dates and we'll let you know what's available.",
  },
];

export default function Faq() {
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
            Frequently Asked Questions
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Answers to the questions we hear most often. If yours isn&apos;t
            here, our team is happy to help.
          </p>
          <a href="#contact" className="btn btn-gold mt-8">
            Contact Us
          </a>
        </div>

        <div className="space-y-4 lg:col-span-8">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-card border border-navy/10 bg-white transition-shadow duration-200 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-card px-6 py-5 text-base font-semibold text-navy transition-colors duration-200 hover:bg-surface focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:outline-none [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
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
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
