import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/sections/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Ny Avo Cleaning Services",
  description:
    "Get a free quote today. Call us or fill out the form to book your cleaning service.",
};

export default function ContactPage() {
  return (
    <div className="bg-brand-white min-h-screen">
      <Container className="py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-dark mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
            Ready to experience the joy of a spotless home? Fill out the form
            below or call us directly.
          </p>
        </div>

        <ContactForm />

        <div className="mt-16 grid gap-8 md:grid-cols-3 text-center">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-brand-light/10">
            <h3 className="font-bold text-brand-dark mb-2">Phone</h3>
            <p className="text-brand-dark/70">+261 34 00 000 00</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-brand-light/10">
            <h3 className="font-bold text-brand-dark mb-2">Email</h3>
            <p className="text-brand-dark/70">contact@nyavo.com</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-brand-light/10">
            <h3 className="font-bold text-brand-dark mb-2">Location</h3>
            <p className="text-brand-dark/70">Antananarivo, Madagascar</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
