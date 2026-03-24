import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/ranklocal_logo.png";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-b border-border/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="RankLocal" className="h-12" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.href
                  ? "text-primary"
                  : "text-dark-foreground/70"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="hero" size="default" asChild>
            <Link to="/local-launch-kit">Get Started</Link>
          </Button>
          <Button variant="hero-outline" size="default" asChild>
            <Link to="/contact">Book a Call</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-dark-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark border-t border-border/10 px-4 pb-6 pt-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block text-sm font-medium py-2 transition-colors",
                location.pathname === link.href
                  ? "text-primary"
                  : "text-dark-foreground/70"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="space-y-2">
            <Button variant="hero" size="default" className="w-full" asChild>
              <Link to="/local-launch-kit" onClick={() => setMobileOpen(false)}>
                Get Started
              </Link>
            </Button>
            <Button variant="hero-outline" size="default" className="w-full" asChild>
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                Book a Call
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
