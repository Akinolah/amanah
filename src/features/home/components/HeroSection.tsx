import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import nigerianMedicalFacility from "@/assets/nigerian-medical-facility.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-medical-light to-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in">
                Your One-Stop{" "}
                <span className="text-primary animate-pulse">Diagnostic Centre</span> in{" "}
                <span className="text-primary">Akesan, Lagos</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Advanced medical diagnostics with compassionate care. State-of-the-art
                equipment, experienced professionals, and comprehensive health solutions
                under one roof.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 sm:gap-6 items-center animate-bounce-subtle">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-xs sm:text-sm font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-emergency animate-pulse-glow" />
                <span className="text-xs sm:text-sm font-medium">24/7 Emergency</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary animate-bounce-subtle" />
                <span className="text-xs sm:text-sm font-medium">Expert Team</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book-appointment">
                <Button variant="medical" size="lg" className="w-full sm:w-auto">
                  Book Appointment
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="medicalOutline" size="lg" className="w-full sm:w-auto">
                  View Services
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Patients Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={nigerianMedicalFacility}
                alt="Amanah Medical Diagnostics Centre"
                className="w-full h-[400px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Trusted Care</div>
                  <div className="text-sm text-muted-foreground">Safe & Reliable</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;