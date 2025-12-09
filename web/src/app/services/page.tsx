import { Container } from "@/components/ui/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Ny Avo Cleaning Services",
  description: "Comprehensive home cleaning solutions: Regular maintenance, deep cleaning, and move-in/out services.",
};

export default function ServicesPage() {
  return (
    <Container className="py-24">
      <h1 className="text-4xl font-bold text-brand-dark mb-8">Our Services</h1>
      <p className="text-lg text-brand-dark/70 max-w-2xl mb-12">
        Explore our wide range of cleaning solutions.
      </p>
      {/* TODO: Reuse Services or Features components with more detail */}
    </Container>
  );
}
