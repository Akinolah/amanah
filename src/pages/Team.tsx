import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, MapPin, Heart, Microscope, Activity, GraduationCap } from "lucide-react";
import nigerianMaleDoctor from "@/assets/nigerian-doctor-male.jpg";
import nigerianFemaleDoctor from "@/assets/nigerian-doctor-female.jpg";
import nigerianLabScientist from "@/assets/nigerian-lab-scientist.jpg";

const Team = () => {
  const doctors = [
    {
      name: "Dr. Adebayo Johnson",
      specialty: "Chief Medical Officer & Radiologist",
      image: nigerianMaleDoctor,
      experience: "15+ years",
      bio: "Dr. Johnson is a highly experienced radiologist with expertise in diagnostic imaging and interventional radiology. He leads our imaging department and ensures the highest standards of patient care.",
      specializations: ["Digital X-Ray", "4D Ultrasound", "Echocardiography", "Interventional Procedures", "CT Scan Interpretation"],
      icon: Activity
    },
    {
      name: "Dr. Fatima Abdullahi",
      specialty: "Consultant Gynaecologist & Fertility Specialist",
      image: nigerianFemaleDoctor,
      experience: "12+ years",
      bio: "Dr. Abdullahi specializes in women's health and fertility medicine. She is passionate about helping couples achieve their dream of parenthood and providing comprehensive gynecological care.",
      specializations: ["Fertility Screening", "Prenatal Care", "Gynecological Surgery", "Family Planning", "Women's Health"],
      icon: Heart
    },
    {
      name: "Dr. Michael Okonkwo",
      specialty: "Chief Laboratory Scientist & Blood Bank Manager",
      image: nigerianLabScientist,
      experience: "18+ years",
      bio: "Dr. Okonkwo oversees our comprehensive laboratory services including our modern blood bank facility. He ensures accurate and timely test results for all patients with expertise in multiple laboratory disciplines.",
      specializations: ["Clinical Chemistry", "Hematology", "Blood Bank Services", "Microbiology", "Immunology & Serology"],
      icon: Microscope
    },
    {
      name: "Dr. Kemi Adebayo",
      specialty: "Consultant Physician & Internal Medicine",
      image: nigerianFemaleDoctor,
      experience: "14+ years",
      bio: "Dr. Adebayo provides comprehensive internal medicine services with focus on preventive care and chronic disease management. She works closely with our diagnostic team to ensure optimal patient outcomes.",
      specializations: ["Internal Medicine", "Preventive Healthcare", "Chronic Disease Management", "Health Screening", "Patient Consultation"],
      icon: Activity
    },
    {
      name: "Dr. Ibrahim Suleiman",
      specialty: "Pediatric Specialist & Family Medicine",
      image: nigerianMaleDoctor,
      experience: "10+ years",
      bio: "Dr. Suleiman specializes in pediatric care and family medicine, providing comprehensive healthcare services for patients of all ages with special expertise in children's health and development.",
      specializations: ["Pediatric Care", "Family Medicine", "Child Development", "Immunizations", "Growth Monitoring"],
      icon: Heart
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
              Meet Our Expert <span className="text-primary">Medical Team</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our team of experienced medical professionals is dedicated to providing 
              you with the highest quality diagnostic services and compassionate care.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => {
              const DoctorIcon = doctor.icon;
              return (
                <Card key={index} className="border-border hover:shadow-xl transition-all duration-300 animate-fade-in group">
                  <CardContent className="p-0">
                    {/* Doctor Image */}
                    <div className="relative h-80 overflow-hidden rounded-t-lg">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className="absolute top-4 right-4 w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center">
                        <DoctorIcon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Doctor Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {doctor.name}
                      </h3>
                      <p className="text-primary font-medium mb-4">
                        {doctor.specialty}
                      </p>

                      {/* Experience */}
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="w-4 h-4 text-primary animate-bounce-subtle" />
                        <span className="text-sm text-muted-foreground font-medium">
                          {doctor.experience} experience
                        </span>
                      </div>

                      {/* Bio */}
                      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                        {doctor.bio}
                      </p>

                      {/* Specializations */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <DoctorIcon className="w-4 h-4 text-primary" />
                          Services & Specializations
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {doctor.specializations.map((spec, specIndex) => (
                            <span
                              key={specIndex}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-medical-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Join Our <span className="text-primary">Growing Team</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for passionate medical professionals who share our 
              commitment to excellence in patient care. If you're interested in joining 
              our team, we'd love to hear from you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous learning and professional development opportunities
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Growth</h3>
                <p className="text-sm text-muted-foreground">
                  Career advancement in a supportive, collaborative environment
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Make a real difference in patients' lives every day
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-muted-foreground mb-4">
                Send your CV and cover letter to:
              </p>
              <a 
                href="mailto:careers@amanahmedical.com" 
                className="text-primary font-medium hover:underline"
              >
                careers@amanahmedical.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;