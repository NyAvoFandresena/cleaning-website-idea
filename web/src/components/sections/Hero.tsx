import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-white pt-16 pb-32 md:pt-24 md:pb-48 lg:pt-32 lg:pb-56">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-light/30 via-brand-white to-transparent" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl xl:text-6xl">
                Experience the Joy of a{" "}
                <span className="text-brand-medium">Spotless Home</span>
              </h1>
              <p className="max-w-[600px] text-lg text-brand-dark/70 md:text-xl">
                Professional, reliable, and friendly cleaning services tailored
                to your lifestyle. Let us handle the mess while you focus on
                what matters most.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-brand-dark/60">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-white bg-brand-light flex items-center justify-center text-xs"
                  >
                    {/* User Avatar Placeholder */}
                    👤
                  </div>
                ))}
              </div>
              <p>Trusted by 500+ homeowners</p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-brand-light/20 shadow-xl">
              {/* Hero Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-brand-medium/20">
                <img src="images/cleaners.png" alt="cleaners" srcset="" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur rounded-lg shadow-sm border border-brand-light/20">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark">
                      100% Satisfaction
                    </p>
                    <p className="text-xs text-brand-dark/60">
                      Guaranteed quality service
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
