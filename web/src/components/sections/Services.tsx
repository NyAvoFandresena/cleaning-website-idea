import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Regular Maintenance",
    description:
      "Keep your home consistently fresh with our weekly, bi-weekly, or monthly cleaning schedules. Perfect for busy professionals and families.",
    price: "From 50,000 Ar",
    features: [
      "Dusting & Polishing",
      "Floors & Carpets",
      "Kitchen & Bathrooms",
      "Trash Removal",
    ],
  },
  {
    title: "Deep Cleaning",
    description:
      "A thorough top-to-bottom clean that reaches every nook and cranny. Ideal for spring cleaning or homes that haven't been cleaned professionally in a while.",
    price: "From 120,000 Ar",
    features: [
      "Inside Appliances",
      "Grout Scrubbing",
      "Window Sills & Tracks",
      "Baseboards & Doors",
    ],
  },
  {
    title: "Move-In / Move-Out",
    description:
      "Ensure a fresh start or get your deposit back. We clean empty homes to prepare them for the next chapter.",
    price: "Custom Quote",
    features: [
      "Inside Cabinets",
      "Deep Carpet Cleaning",
      "Wall Spot Cleaning",
      "Disinfection",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-brand-light/10">
      <Container>
        <div className="text-center mb-16">
          <span className="text-brand-medium font-semibold uppercase tracking-wider text-sm">
            Our Services
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">
            Cleaning Solutions for Every Need
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col bg-white rounded-2xl shadow-sm border border-brand-light/20 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-8 flex-1">
                <h3 className="text-xl font-bold text-brand-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-brand-dark/70 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-brand-medium mb-6">
                  {service.price}
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-brand-dark/80"
                    >
                      <svg
                        className="w-5 h-5 mr-3 text-green-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-brand-white border-t border-brand-light/10">
                <Button className="w-full" asChild variant="outline">
                  <Link href="/contact">Book This Service</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="link" asChild size="lg">
            <Link href="/services">View All Services & Pricing &rarr;</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
