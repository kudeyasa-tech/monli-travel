export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-navy text-white">
      <div className="container-page">
        <h2 className="text-[32px] font-bold text-white md:text-[40px]">
          Get In Touch
        </h2>
        <p className="mt-4 max-w-[800px] leading-relaxed text-white/80">
          Ready to plan your next family adventure? Contact our travel experts
          today.
        </p>

        <form className="mt-10 grid max-w-2xl gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                className="w-full rounded-card border border-white/20 bg-white/10 px-4 py-3 text-white transition-colors duration-200 placeholder:text-white/40 focus:border-gold focus:ring-2 focus:ring-gold focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
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
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Tell us about your dream trip"
              className="w-full resize-y rounded-card border border-white/20 bg-white/10 px-4 py-3 text-white transition-colors duration-200 placeholder:text-white/40 focus:border-gold focus:ring-2 focus:ring-gold focus:outline-none"
            />
          </div>

          <div>
            <button type="button" className="btn btn-gold w-full sm:w-auto">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
