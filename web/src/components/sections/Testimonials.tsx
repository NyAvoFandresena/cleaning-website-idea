import { Container } from "@/components/ui/container";

const testimonials = [
  {
    content: "The best cleaning service I've found in Antananarivo. The team is always punctual, polite, and they leave my apartment spotless.",
    author: "Sarah R.",
    role: "Homeowner",
  },
  {
    content: "Ny Avo Cleaning has changed my life. I have so much more free time now, and coming home to a clean house is the best feeling.",
    author: "Marc L.",
    role: "Business Owner",
  },
  {
    content: "Trustworthy and incredibly thorough. They cleaned stains from my carpet that I thought were permanent. Highly recommended!",
    author: "Faly A.",
    role: "Teacher",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-brand-dark text-brand-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="bg-brand-medium/10 rounded-2xl p-8 border border-brand-light/10">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg text-brand-light/90 mb-6 italic">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center gap-4">
                 <div className="h-10 w-10 rounded-full bg-brand-light/20 flex items-center justify-center text-brand-light font-bold">
                    {testimonial.author[0]}
                 </div>
                 <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-brand-light/60">{testimonial.role}</div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
