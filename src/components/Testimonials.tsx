import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Managing Partner",
      firm: "Mitchell & Associates",
      content: "Monogamy transformed our document management completely. What used to take hours now takes minutes. The AI automation is simply phenomenal.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "James Chen",
      role: "Senior Attorney",
      firm: "Chen Legal Group",
      content: "The workflow automation has saved our firm countless hours. The security features give us peace of mind with sensitive client data.",
      rating: 5,
      avatar: "JC"
    },
    {
      name: "Emily Rodriguez",
      role: "Legal Operations Director",
      firm: "Rodriguez Law Firm",
      content: "Implementation was seamless and the ROI was immediate. Our team productivity increased by 40% in the first month alone.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <section className="px-6 py-24 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Trusted by Leading Law Firms
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See what legal professionals are saying about our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.firm}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
