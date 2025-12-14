import { Container } from "@/components/ui/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Ny Avo Cleaning Services",
  description:
    "Learn about our professional cleaning team and mission to provide trustworthy service.",
};

export default function AboutPage() {
  return (
    <Container className="py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className=" text-4xl font-bold  mb-8">About Ny Avo Cleaning</h1>
        <p className="text-lg max-w-2xl">
          We are a dedicated team of cleaning professionals based in
          Antananarivo. Our mission is to provide top-quality cleaning services
          that you can trust.
        </p>

        {/* 2. OUR STORY / MISSION */}
        <section className=" md:py-24 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-4 text-brand-medium text-lg font-extrabold uppercase tracking-wider">
                Our Mission
              </h2>

              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  For too long, households and businesses in Antananarivo have
                  faced a common challenge:
                  <strong> finding reliable help</strong>. The market was
                  dominated by informal cleaners providing inconsistent service,
                  leaving property owners frustrated.
                </p>
                <p>
                  We launched to change that. We aren't just a cleaning crew; we
                  are a professional operation. With trained staff, transparent
                  pricing, and comprehensive packages like our signature
                  <span className="text-brand-medium font-semibold">
                    {" "}
                    "Back to New"
                  </span>{" "}
                  refresh, we bring peace of mind to homeowners, Airbnb hosts,
                  and office managers.
                </p>
              </div>
            </div>
            {/* Image Placeholder: Represents a supervisor checking work or a happy team */}
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl bg-stale-200 group">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 bg-slate-100">
                <span className="font-medium text-sm">
                  <img className="w-full " src="images/manager.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE VALUES / STATS */}
        <section className="relative py-20">
          <div className="max-w-6xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl font-extrabold  mb-4">
                The Difference Is in the Details
              </h2>
              <p className="text-slate-600 text-lg">
                Thoughtfully designed processes that deliver consistency, trust,
                and exceptional results every time.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Feature 1 */}
              <div className="relative bg-white p-8 rounded-2xl border border-slate-100 hover:border-brand-light transition motion-safe:hover:-translate-y-1">
                <span className="absolute top-0 left-0 h-full w-1 bg-brand-medium rounded-l-2xl" />

                <div className="flex items-start gap-4">
                  <div className="text-brand-medium mt-1">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-2">
                      Vetted & Trained
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      Our team consists of cleaners and technicians who undergo
                      strict training. We provide uniforms, PPE, and fair wages.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative bg-white p-8 rounded-2xl border border-slate-100 hover:border-brand-light transition motion-safe:hover:-translate-y-1">
                <span className="absolute top-0 left-0 h-full w-1 bg-brand-medium rounded-l-2xl" />

                <div className="flex items-start gap-4">
                  <div className="text-brand-medium mt-1">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-2">
                      Quality Checklists
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      We don’t just clean. Every service follows detailed
                      checklists, verified by supervisors to ensure consistent
                      quality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative bg-white p-8 rounded-2xl border border-slate-100 hover:border-brand-light transition motion-safe:hover:-translate-y-1">
                <span className="absolute top-0 left-0 h-full w-1 bg-brand-medium rounded-l-2xl" />

                <div className="flex items-start gap-4">
                  <div className="text-brand-medium mt-1">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-2">
                      More Than Cleaning
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      We’re building Madagascar’s most trusted home services
                      directory — from cleaners to plumbers and electricians.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. TEAM STRUCTURE HIGHLIGHT */}
        {/* This builds trust by showing capacity */}
        <section className="py-20 px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark">
            Our Operational Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Role 1 */}
            <div className="bg-brand-white p-6 rounded-xl border border-brand-light shadow-sm text-center">
              <div className="w-12 h-12 bg-brand-dark text-white mx-auto rounded-full mb-3 flex items-center justify-center text-lg font-bold">
                S
              </div>
              <h3 className="font-bold text-lg text-brand-dark">Supervisors</h3>
              <p className="text-xs text-brand-medium uppercase mt-1 tracking-wide">
                Quality Control
              </p>
            </div>

            {/* Role 2 */}
            <div className="bg-brand-white p-6 rounded-xl border border-brand-light shadow-sm text-center">
              <div className="w-12 h-12 bg-brand-medium text-white mx-auto rounded-full mb-3 flex items-center justify-center text-lg font-bold">
                C
              </div>
              <h3 className="font-bold text-lg text-brand-dark">Cleaners</h3>
              <p className="text-xs text-brand-medium uppercase mt-1 tracking-wide">
                Home & Office
              </p>
            </div>

            {/* Role 3 */}
            <div className="bg-brand-white p-6 rounded-xl border border-brand-light shadow-sm text-center">
              <div className="w-12 h-12 bg-brand-light text-brand-dark mx-auto rounded-full mb-3 flex items-center justify-center text-lg font-bold">
                T
              </div>
              <h3 className="font-bold text-lg text-brand-dark">Technicians</h3>
              <p className="text-xs text-brand-medium uppercase mt-1 tracking-wide">
                Repairs & Maintenance
              </p>
            </div>

            {/* Role 4 */}
            <div className="bg-brand-white p-6 rounded-xl border border-brand-light shadow-sm text-center">
              <div className="w-12 h-12 bg-slate-200 text-brand-dark mx-auto rounded-full mb-3 flex items-center justify-center text-lg font-bold">
                A
              </div>
              <h3 className="font-bold text-lg text-brand-dark">Admin</h3>
              <p className="text-xs text-brand-medium uppercase mt-1 tracking-wide">
                Support & Booking
              </p>
            </div>
          </div>
        </section>

        {/* 5. CTA SECTION */}
        <section className="w-full bg-brand-medium py-20 text-center text-white px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for a Professional Clean?
          </h2>
          <p className="text-brand-white/90 mb-10 max-w-2xl mx-auto text-lg">
            Experience the difference of a trained team. Book your standard
            clean or request a custom "Back to New" quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-brand-dark text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-900 transition shadow-lg"
            >
              Book Now
            </a>
            <a
              href="/services"
              className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-medium transition"
            >
              View Packages
            </a>
          </div>
        </section>
      </div>
      {/* TODO: Add more content here */}
    </Container>
  );
}
