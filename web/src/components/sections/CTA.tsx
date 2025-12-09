import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CTA() {
  return (
    <section className="py-24 bg-brand-medium text-white">
      <Container>
        <div className="flex flex-col items-center text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Ready for a Spotless Home?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl">
            Join hundreds of satisfied customers who trust Ny Avo for their cleaning needs. 
            Get your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" className="font-bold border-2 border-transparent hover:border-white" asChild>
              <Link href="/contact">Book Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-brand-medium" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
