import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <footer className="bg-brand-surfaceAlt border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-brand-text">
              simple<span className="text-brand-accent">core</span>
            </span>
          </div>
          <p className="text-brand-muted text-sm">
            © {new Date().getFullYear()} Simplecore. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm text-brand-muted">
            <a href="#services" className="hover:text-brand-text transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-brand-text transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
