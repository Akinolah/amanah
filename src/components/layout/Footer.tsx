import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">A</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">Amanah Medical Diagnostics</h2>
                <p className="text-sm opacity-90">Your Trusted Healthcare Partner</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4 max-w-md">
              Providing comprehensive diagnostic services with state-of-the-art technology
              and experienced medical professionals in Akesan, Lagos.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:opacity-80 cursor-pointer transition-transform hover:scale-110" />
              <svg className="w-5 h-5 hover:opacity-80 cursor-pointer transition-transform hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
              </svg>
              <Instagram className="w-5 h-5 hover:opacity-80 cursor-pointer transition-transform hover:scale-110" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:opacity-80">Home</Link></li>
              <li><Link to="/about" className="hover:opacity-80">About Us</Link></li>
              <li><Link to="/services" className="hover:opacity-80">Services</Link></li>
              <li><Link to="/team" className="hover:opacity-80">Our Team</Link></li>
              <li><Link to="/book-appointment" className="hover:opacity-80">Book Appointment</Link></li>
              <li><Link to="/contact" className="hover:opacity-80">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p>123 Medical Avenue</p>
                  <p>Akesan, Lagos State</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+234 802 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@amanahmedical.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-1" />
                <div>
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                  <p>Sun: Emergency Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2024 Amanah Medical Diagnostics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;