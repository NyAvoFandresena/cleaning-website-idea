import { Container } from "@/components/ui/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Ny Avo Cleaning Services",
  description: "Learn about our professional cleaning team and mission to provide trustworthy service.",
};

export default function AboutPage() {
  return (
    <Container className="py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className=" text-4xl font-bold  mb-8">About Ny Avo Cleaning</h1>
        <p className="text-lg max-w-2xl">
          We are a dedicated team of cleaning professionals based in Antananarivo.
          Our mission is to provide top-quality cleaning services that you can trust.
        </p>
      </div>
      {/* TODO: Add more content here */}
    </Container>
  );
}
