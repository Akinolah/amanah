import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Clock } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, CONTACT_INFO } from "@/config/constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-emergency text-emergency-foreground py-2 animate-pulse-glow">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2 md:gap-4 flex-wrap">
            <div className="flex items-center gap-1 animate-bounce-subtle">
              <Phone className="w-4 h-4" />
              <span className="font-medium">{CONTACT_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{CONTACT_INFO.hours}</span>
            </div>
          </div>
          <div className="hidden sm:block">
            <span className="font-bold animate-pulse">🚨 Emergency? Call us now!</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-medical-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Amanah Medical</h1>
              <p className="text-xs text-muted-foreground">Diagnostics Centre</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(link.path)
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/book-appointment">
              <Button variant="medical" size="lg">
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-transparent backdrop-blur-md animate-slide-in-right">
            <div className="py-4 space-y-4 bg-white/95 backdrop-blur-sm rounded-b-lg mx-2 px-4 shadow-lg">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block py-3 font-medium transition-all duration-300 hover:text-primary hover:translate-x-2 ${
                    isActive(link.path) ? "text-primary font-bold border-l-4 border-primary pl-4" : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/book-appointment" onClick={() => setIsMenuOpen(false)}>
                <Button variant="medical" size="lg" className="w-full mt-4 animate-bounce-subtle">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;