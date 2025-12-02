"use client";

import { Button } from "@/components/ui/button";
import { Clock, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
  { href: "#apropos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Lun - Sam : 9h00 - 12h30 / 14h00 - 18h00
            </span>
          </div>
          <a
            href="tel:0320000000"
            className="flex items-center gap-2 font-semibold hover:underline"
          >
            <Phone className="w-4 h-4" />
            03 20 00 00 00
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <a href="#accueil" className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-heading)] text-2xl tracking-wide text-foreground">
              <img
                src="/logo_jcperf.jpg"
                alt="logo JC Perf"
                className="rounded-full w-12 h-12 object-cover"
              />
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Prendre RDV
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full mt-2">
                Prendre RDV
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
