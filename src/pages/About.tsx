import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Target, MapPin, Clock } from "lucide-react";
import nigerianMedicalFacility from "@/assets/nigerian-medical-facility.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "We build lasting relationships through consistent, reliable medical services."
    },
    {
      icon: Users,
      title: "Patient-Centered Care",
      description: "Every patient receives personalized attention and compassionate care."
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description: "We strive for the highest standards in all our medical services."
    },
    {
      icon: Target,
      title: "Precision & Accuracy",
      description: "State-of-the-art technology ensures accurate and reliable results."
    }
  ];

  const locations = [
    {
      name: "Akesan Branch (Main)",
      address: "123 Medical Avenue, Akesan, Lagos State",
      phone: "+234 802 123 4567",
      hours: "Mon-Sat: 8:00 AM - 6:00 PM"
    },
    {
      name: "Victoria Island Branch",
      address: "45 Ahmadu Bello Way, Victoria Island, Lagos",
      phone: "+234 802 123 4568",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM"
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
              About <span className="text-primary">Amanah Medical Diagnostics</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Committed to providing exceptional diagnostic services with cutting-edge technology, 
              experienced professionals, and unwavering dedication to patient care since 2009.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Our Story & Mission
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2009, Amanah Medical Diagnostics has been at the forefront of 
                  providing comprehensive diagnostic services to the Lagos community. What 
                  started as a vision to make quality healthcare accessible to all has grown 
                  into one of the most trusted medical diagnostic centers in Lagos State.
                </p>
                <p>
                  Our name "Amanah" reflects our core values - trust, reliability, and 
                  responsibility. We believe that every patient deserves accurate, timely, 
                  and compassionate medical care, which is why we've invested in the latest 
                  medical technology and assembled a team of highly qualified professionals.
                </p>
                <p>
                  Today, we operate two state-of-the-art facilities and have served over 
                  5,000 patients, maintaining our commitment to excellence in diagnostic 
                  services while continuously expanding our capabilities to meet the evolving 
                  healthcare needs of our community.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={nigerianMedicalFacility}
                alt="Amanah Medical Diagnostics Facility"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-medical-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape our commitment to excellent patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-white border-0 shadow-md text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Locations</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Convenient locations to serve you better across Lagos State.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {location.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{location.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">{location.hours}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 text-primary font-bold">📞</span>
                      <span className="text-muted-foreground">{location.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;