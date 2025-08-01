import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Navigation,
  Car
} from "lucide-react";

const Contact = () => {
  const locations = [
    {
      name: "Akesan Branch (Main)",
      address: "123 Medical Avenue, Akesan, Lagos State, Nigeria",
      phone: "+234 802 123 4567",
      email: "akesan@amanahmedical.com",
      hours: {
        weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
        saturday: "Saturday: 9:00 AM - 4:00 PM", 
        sunday: "Sunday: Emergency Only"
      },
      services: ["All Services Available", "24/7 Emergency", "Laboratory", "Imaging"]
    },
    {
      name: "Victoria Island Branch",
      address: "45 Ahmadu Bello Way, Victoria Island, Lagos State, Nigeria",
      phone: "+234 802 123 4568",
      email: "vi@amanahmedical.com",
      hours: {
        weekdays: "Monday - Friday: 9:00 AM - 5:00 PM",
        saturday: "Saturday: 10:00 AM - 2:00 PM",
        sunday: "Sunday: Closed"
      },
      services: ["Laboratory Services", "Consultations", "Basic Imaging"]
    }
  ];

  const quickActions = [
    {
      title: "Emergency Line",
      description: "24/7 Emergency medical support",
      action: "Call Now",
      icon: Phone,
      link: "tel:+2348021234567"
    },
    {
      title: "WhatsApp Support", 
      description: "Instant messaging for appointments",
      action: "Chat Now",
      icon: MessageSquare,
      link: "https://wa.me/2348021234567"
    },
    {
      title: "Get Directions",
      description: "Navigate to our Akesan location",
      action: "View Map",
      icon: Navigation,
      link: "https://maps.google.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-medical-light to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Contact <span className="text-primary">Amanah Medical</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're here to help you with all your healthcare needs. Get in touch with us 
              through any of the convenient methods below.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {action.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {action.description}
                    </p>
                    <a href={action.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="medicalOutline" size="sm">
                        {action.action}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Locations</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Visit us at any of our convenient locations across Lagos State.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    {location.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">{location.address}</p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <a href={`tel:${location.phone}`} className="text-primary hover:underline">
                          {location.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a href={`mailto:${location.email}`} className="text-primary hover:underline">
                          {location.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground mb-2">Operating Hours</p>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>{location.hours.weekdays}</p>
                        <p>{location.hours.saturday}</p>
                        <p>{location.hours.sunday}</p>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground mb-2">Available Services</p>
                      <div className="flex flex-wrap gap-2">
                        {location.services.map((service, serviceIndex) => (
                          <span
                            key={serviceIndex}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-medical-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Find Us on the <span className="text-primary">Map</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Easily locate our Akesan branch for your visit.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-border overflow-hidden">
              <div className="h-96 bg-muted flex items-center justify-center">
                {/* Placeholder for Google Maps embed */}
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium text-foreground mb-2">
                    Interactive Map
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Google Maps integration would be embedded here
                  </p>
                  <Button variant="medicalOutline">
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Medical Emergency?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Call our 24/7 emergency line for immediate medical assistance
            </p>
            <a href="tel:+2348021234567">
              <Button variant="secondary" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Emergency: +234 802 123 4567
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;