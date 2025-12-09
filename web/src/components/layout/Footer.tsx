import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Cleaning Website</h3>
            <p className="text-brand-light/80 max-w-sm">
              Professional, reliable, and friendly house cleaning services.
              We treat your home with the care it deserves.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-brand-light">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-brand-medium transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-brand-medium transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-brand-medium transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-brand-medium transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-brand-light">Contact</h4>
            <ul className="space-y-2 text-brand-white/80">
              <li>123 Cleaning Street</li>
              <li>Antananarivo, Madagascar</li>
              <li>+261 34 00 000 00</li>
              <li>contact@nyavo.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-brand-light/10 text-center text-sm text-brand-light/60">
          © {new Date().getFullYear()} Ny Avo Cleaning. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
