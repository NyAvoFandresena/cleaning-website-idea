import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Ny Avo Cleaning Services",
  description: "Comprehensive home cleaning solutions: Regular maintenance, deep cleaning, and move-in/out services in Antananarivo.",
};

const services = [
  {
    title: "Regular Maintenance",
    description: "Keep your home consistently fresh with our weekly, bi-weekly, or monthly cleaning schedules. Perfect for busy professionals and families who want a consistently clean home without the hassle.",
    price: "From 50,000 Ar",
    features: [
      "Dusting & Polishing of all surfaces",
      "Floors vacummed and mopped",
      "Kitchen counters and appliances cleaned",
      "Bathrooms sanitized and scrubbed",
      "Trash removal and liner replacement",
      "Bed making and linen changing (on request)"
    ],
    recommendedFor: "Busy families, professionals, maintaining cleanliness"
  },
  {
    title: "Deep Cleaning",
    description: "A thorough top-to-bottom clean that reaches every nook and cranny. This intensive service is ideal for spring cleaning or for homes that haven't been professionally cleaned in a while.",
    price: "From 120,000 Ar",
    features: [
      "Everything in Regular Maintenance",
      "Inside major appliances (fridge, oven)",
      "Grout scrubbing in bathrooms/kitchen",
      "Window sills, tracks, and frames",
      "Baseboards and door frames detailed",
      "Light fixtures and ceiling fans dusted"
    ],
    recommendedFor: "First-time customers, spring cleaning, annual refresh"
  },
  {
    title: "Move-In / Move-Out",
    description: "Ensure a fresh start or get your deposit back. We specialize in bringing empty homes to a sparkle, ready for the next chapter.",
    price: "Custom Quote",
    features: [
      "Deep cleaning of all surfaces",
      "Inside all cabinets and drawers",
      "Deep carpet cleaning (spot treatment)",
      "Wall spot cleaning and scuff removal",
      "Full disinfection of bathrooms/kitchens",
      "Balcony and patio sweeping"
    ],
    recommendedFor: "Tenants ending a lease, homeowners selling, new move-ins"
  },
];

export default function ServicesPage() {
  return (
    <Container className="py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold  mb-6">Professional Cleaning Services</h1>
        <p className="text-lg ">
          We offer a range of cleaning packages designed to fit your lifestyle and budget. 
          Whether you need a quick refresh or a deep dive, we have you covered.
        </p>
      </div>

      <div className="grid gap-12 lg:gap-16">
        {services.map((service, index) => (
          <div key={service.title} className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-brand-light/20 w-full hover:shadow-md transition-shadow">
              <div className="flex justify-between items-baseline mb-4">
                <h2 className="text-2xl font-bold text-brand-dark">{service.title}</h2>
                <span className="text-xl font-bold text-brand-medium">{service.price}</span>
              </div>
              <p className="text-brand-dark/70 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mb-8">
                <h4 className="font-semibold text-brand-dark mb-3">Includes:</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm text-brand-dark/80">
                      <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-brand-light/10">
                 <div className="text-sm italic">
                    Best for: <span className="not-italic font-medium">{service.recommendedFor}</span>
                 </div>
                 <Button asChild>
                    <Link href="/contact">Book Now</Link>
                 </Button>
              </div>
            </div>
            
            {/* Visual element or connector could go here in a more complex design */}
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center bg-brand-light/10 rounded-2xl p-12">
        <h2 className="text-2xl font-bold text-brand-dark mb-4">Need something specific?</h2>
        <p className="text-brand-dark/70 max-w-xl mx-auto mb-8">
          We understand every home is unique. Contact us for custom cleaning requirements or special requests.
        </p>
         <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Contact Support</Link>
         </Button>
      </div>
    </Container>
  );
}
