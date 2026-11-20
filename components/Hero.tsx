import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-navy">
      <Image
        src="/hero-travel.jpg"
        alt="Sunrise over a mountain lake surrounded by pine forest and alpine peaks"
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
            Discover the World with Monlitravel
          </h1>

          <p className="mt-5 max-w-[600px] text-base text-white/90 sm:text-lg">
            Professional travel experiences tailored just for you.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href="#contact" className="btn btn-gold w-full sm:w-auto">
              Book Now
            </a>
            <a
              href="#tours"
              className="btn btn-outline-light w-full sm:w-auto"
            >
              Explore Tours
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
