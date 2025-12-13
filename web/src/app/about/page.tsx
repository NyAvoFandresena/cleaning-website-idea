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
        {/* 1. HERO SECTION */}
        {/* Visual goal: Professionalism. Background should be a clean, high-res image of the team or a sparkling room. */}
        <section className="relative w-full py-0 md:py-32 bg-brand-dark flex items-center justify-center overflow-hidden">
          {/* Abstract shapes or image overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-medium to-brand-dark"></div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-white mb-6 leading-tight">
              Setting the New Standard for{" "}
              <span className="text-brand-medium">Clean.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-light max-w-2xl mx-auto">
              Antananarivo’s first structured multi-service cleaning and home
              maintenance company. Professional, vetted, and reliable.
            </p>
          </div>
        </section>

        {/* 2. OUR STORY / MISSION */}
        <section className=" md:py-24 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-3 bg-brand-light/30 text-brand-medium text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold mb-6 text-brand-dark">
                Why We Started
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
                  <img
                    className="w-full "
                    src="images/manager.png"
                    alt=""
                    srcset=""
                  />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE VALUES / STATS */}
        <section className="bg-slate-50 border-y border-brand-light/30 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-dark">
                The Difference is in the Details
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Vetted Staff */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto bg-brand-light/20 text-brand-medium rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 text-brand-dark">
                  Vetted & Trained
                </h4>
                <p className="text-slate-600">
                  Our team consists of cleaners and technicians who undergo
                  strict training. We provide uniforms, PPE, and fair wages.
                </p>
              </div>

              {/* Card 2: Quality Control */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto bg-brand-light/20 text-brand-medium rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 text-brand-dark">
                  Quality Checklists
                </h4>
                <p className="text-slate-600">
                  We don't just "clean." We follow specific checklists for every
                  package, verified by supervisors to ensure consistency.
                </p>
              </div>

              {/* Card 3: Directory */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto bg-brand-light/20 text-brand-medium rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 text-brand-dark">
                  More Than Cleaning
                </h4>
                <p className="text-slate-600">
                  We are building Madagascar's most trusted home services
                  directory. Need a plumber or electrician? We connect you with
                  pros.
                </p>
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
              href="/booking"
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
