import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

const TengoNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Como funciona", href: "#how-it-works" },
    { label: "Recursos", href: "#features" },
    { label: "Para quem", href: "#use-cases" },
    { label: "Preços", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tengo-background/80 backdrop-blur-lg border-b border-tengo-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/tengo" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-tengo-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl text-tengo-foreground">tengo</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-tengo-muted hover:text-tengo-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-tengo-foreground hover:bg-tengo-surface">
              Login
            </Button>
            <Button className="bg-tengo-primary hover:bg-tengo-primary/90 text-white">
              Começar grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-tengo-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-tengo-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-tengo-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left px-4 py-2 text-tengo-muted hover:text-tengo-foreground hover:bg-tengo-surface rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 mt-4 px-4">
                <Button variant="ghost" className="w-full justify-start text-tengo-foreground">
                  Login
                </Button>
                <Button className="w-full bg-tengo-primary hover:bg-tengo-primary/90 text-white">
                  Começar grátis
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TengoNav;
