import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Microscope, 
  Monitor, 
  Heart, 
  Users,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesHighlight = () => {
  const services = [
    {
      icon: Monitor,
      title: "Digital X-Ray",
      description: "Advanced digital radiography with instant results and enhanced image quality.",
      features: ["Instant Results", "Low Radiation", "High Quality Images"]
    },
    {
      icon: Stethoscope,
      title: "4D Ultrasound",
      description: "State-of-the-art ultrasound technology for comprehensive diagnostic imaging.",
      features: ["Real-time Imaging", "High Resolution", "Safe Procedure"]
    },
    {
      icon: Microscope,
      title: "Laboratory Services",
      description: "Complete pathology and laboratory testing with accurate and fast results.",
      features: ["Blood Tests", "Microbiology", "Chemical Pathology"]
    },
    {
      icon: Heart,
      title: "Fertility Screening",
      description: "Comprehensive fertility assessments for couples planning to start a family.",
      features: ["Hormone Testing", "Genetic Screening", "Counseling"]
    },
    {
      icon: Users,
      title: "Gynaecology",
      description: "Specialized women's health services with female specialists available.",
      features: ["Women's Health", "Prenatal Care", "Regular Checkups"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive <span className="text-primary">Medical Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From diagnostic imaging to laboratory testing, we provide complete healthcare 
            solutions with the latest technology and experienced medical professionals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-1 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all cursor-pointer">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button variant="medical" size="lg">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;