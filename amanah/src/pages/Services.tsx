import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Stethoscope, 
  Microscope, 
  Heart, 
  Users,
  Clock,
  Shield,
  CheckCircle 
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceCategories = [
    {
      title: "Diagnostic Imaging",
      description: "Advanced imaging services with state-of-the-art equipment",
      icon: Monitor,
      services: [
        {
          name: "Digital X-Ray",
          description: "High-resolution digital radiography with instant results",
          features: ["Instant Digital Results", "Low Radiation Exposure", "Enhanced Image Quality", "Same-day Reports"],
          duration: "15 minutes"
        },
        {
          name: "4D Ultrasound",
          description: "Real-time imaging for comprehensive diagnostic assessment",
          features: ["Real-time 4D Imaging", "High Resolution", "Safe & Non-invasive", "Expert Interpretation"],
          duration: "30-45 minutes"
        },
        {
          name: "Echocardiography",
          description: "Cardiac ultrasound for heart function assessment",
          features: ["Heart Function Analysis", "Valve Assessment", "Blood Flow Evaluation", "Detailed Reporting"],
          duration: "45 minutes"
        }
      ]
    },
    {
      title: "Laboratory Services",
      description: "Comprehensive laboratory testing with accurate results",
      icon: Microscope,
      services: [
        {
          name: "Haematology",
          description: "Complete blood count and blood-related disorders",
          features: ["Full Blood Count", "Blood Film", "Coagulation Studies", "Same-day Results"],
          duration: "2-4 hours"
        },
        {
          name: "Microbiology",
          description: "Infection detection and antibiotic sensitivity testing",
          features: ["Culture & Sensitivity", "Gram Staining", "Parasite Detection", "Rapid Tests"],
          duration: "24-48 hours"
        },
        {
          name: "Chemical Pathology",
          description: "Biochemical analysis for organ function assessment",
          features: ["Liver Function Tests", "Kidney Function", "Lipid Profile", "Diabetes Screening"],
          duration: "4-6 hours"
        },
        {
          name: "Blood Bank Services",
          description: "Safe blood collection, screening and storage services",
          features: ["Blood Donation", "Blood Screening", "Blood Storage", "Emergency Supply"],
          duration: "30-60 minutes"
        },
        {
          name: "Immunology & Serology",
          description: "Antibody testing and immune system evaluation",
          features: ["HIV Testing", "Hepatitis Screening", "Autoimmune Tests", "Allergy Testing"],
          duration: "2-4 hours"
        }
      ]
    },
    {
      title: "Women's Health",
      description: "Specialized services for women's healthcare needs",
      icon: Heart,
      services: [
        {
          name: "Fertility Screening",
          description: "Comprehensive fertility assessment for couples",
          features: ["Hormone Analysis", "Ovulation Monitoring", "Male Factor Testing", "Genetic Counseling"],
          duration: "1-2 hours"
        },
        {
          name: "Gynaecology Consultation",
          description: "Expert consultation with female specialists",
          features: ["Routine Check-ups", "Preventive Screening", "Treatment Planning", "Counseling Services"],
          duration: "30-60 minutes"
        },
        {
          name: "Prenatal Care",
          description: "Comprehensive care throughout pregnancy",
          features: ["Regular Monitoring", "Ultrasound Scans", "Risk Assessment", "Nutritional Guidance"],
          duration: "45 minutes"
        }
      ]
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
              Our Medical <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive diagnostic services powered by advanced technology and delivered 
              by experienced medical professionals you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {serviceCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div key={categoryIndex} className="mb-20">
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <CategoryIcon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <Card key={serviceIndex} className="border-border hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {service.name}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Service Details */}
                        <div className="border-t border-border pt-4">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4 text-primary" />
                              <span className="text-muted-foreground">Duration:</span>
                            </div>
                            <span className="font-medium">{service.duration}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-medical-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Schedule Your <span className="text-primary">Appointment?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your diagnostic tests today and take the first step towards better health. 
              Our team is ready to provide you with the highest quality care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-appointment">
                <Button variant="medical" size="lg">
                  Book Appointment
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="medicalOutline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;