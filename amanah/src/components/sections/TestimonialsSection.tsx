import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mrs. Sarah Adebayo",
      role: "Patient",
      content: "The staff at Amanah Medical were incredibly professional and caring. The 4D ultrasound experience was amazing, and the results were delivered quickly. I highly recommend their services.",
      rating: 5,
      initials: "SA"
    },
    {
      name: "Dr. Michael Okafor",
      role: "Referring Physician",
      content: "I regularly refer my patients to Amanah Medical for diagnostic services. Their accuracy, speed, and professional reporting make them my go-to diagnostic center in Lagos.",
      rating: 5,
      initials: "MO"
    },
    {
      name: "Mrs. Fatima Hassan",
      role: "Patient",
      content: "From the moment I walked in, I felt welcomed and cared for. The laboratory results were ready same day, and the staff explained everything clearly. Excellent service!",
      rating: 5,
      initials: "FH"
    }
  ];

  return (
    <section className="py-20 bg-medical-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Patients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real experiences from patients who trust us with their healthcare needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow border-0">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-semibold">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">from 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;