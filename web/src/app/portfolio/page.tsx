import { Container } from "@/components/ui/container";
import { fetchWeatherData } from "@/lib/utils";

export default function PortfolioPage() {
  return (
    <Container className="py-24">
      <div className="bg-brand-white min-h-screen">
        <div>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-dark mb-4">
              Portfolio Page example
            </h1>
            <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
              Ready to experience the joy of a spotless home? Fill out the form
              below or call us directly.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
