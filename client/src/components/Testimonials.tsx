import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStartup Inc.",
      content: "Alex transformed our entire digital presence. The design system they created has been instrumental in scaling our product. Highly recommended!",
      rating: 5,
      image: "👩‍💼",
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Product Manager",
      company: "Digital Solutions",
      content: "Working with Alex was a game-changer. Their attention to detail and understanding of user experience resulted in a 40% increase in conversions.",
      rating: 5,
      image: "👨‍💼",
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      role: "Founder",
      company: "Creative Agency",
      content: "Alex brought our vision to life with exceptional design and development skills. The website has become our best marketing tool.",
      rating: 5,
      image: "👩‍🦰",
    },
    {
      id: "4",
      name: "David Park",
      role: "CTO",
      company: "Enterprise Corp",
      content: "The technical expertise and clean code delivered by Alex has significantly improved our development workflow and team productivity.",
      rating: 5,
      image: "👨‍🦱",
    },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const testimonialBgImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485830983/AmY4hHZoErwZWV9BVhi2Ra/testimonial-background-HhB8GYG6k4FfckJgKSCkBU.webp";

  return (
    <section
      id="testimonials"
      className="section-spacing bg-secondary/30"
      style={{
        backgroundImage: `url(${testimonialBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-white/80 dark:bg-black/60" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="accent-line mb-4" />
          <h2 className="text-foreground mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            What my clients say about working together. Their success is my success.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-all duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4 md:px-8"
                >
                  <div className="bg-card rounded-lg border border-border p-8 md:p-12 max-w-2xl mx-auto">
                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-primary text-primary"
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-lg text-foreground mb-8 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl">
                        {testimonial.image}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="border-foreground text-foreground hover:bg-foreground/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="border-foreground text-foreground hover:bg-foreground/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
