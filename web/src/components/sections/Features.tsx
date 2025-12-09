import { Container } from "@/components/ui/container";

const features = [
  {
    title: "Trusted Professionals",
    description: "Every cleaner is thoroughly vetted, background-checked, and trained to deliver excellence.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Eco-Friendly Products",
    description: "We use safe, non-toxic cleaning solutions that are tough on dirt but safe for your family and pets.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.618 6.318a4.5 4.5 0 000 6.364L12 20.364l7.382-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Customer Focused",
    description: "Your satisfaction is our priority. We offer flexible scheduling and a 100% happiness guarantee.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section className="py-24 bg-brand-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Why Choose Ny Avo?
          </h2>
          <p className="mt-4 text-lg text-brand-dark/60 max-w-2xl mx-auto">
            We bring a higher standard of cleanliness to your home with our dedicated team and premium services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-8 rounded-2xl bg-white border border-brand-light/20 shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-12 w-12 rounded-lg bg-brand-light/30 text-brand-medium flex items-center justify-center mb-6 group-hover:bg-brand-medium group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-brand-dark/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
