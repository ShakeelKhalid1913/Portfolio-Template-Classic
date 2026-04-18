import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485830983/AmY4hHZoErwZWV9BVhi2Ra/hero-background-TogRSkmSzbwfkQR7ztBoVw.webp";

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-white/10 dark:bg-black/40" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Accent Line */}
            <div className="accent-line" />

            {/* Heading */}
            <div>
              <h1 className="text-foreground mb-4">
                Creative Designer & Developer
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                I craft beautiful digital experiences through thoughtful design
                and clean code. Specializing in web design, development, and
                brand identity.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                View My Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground/10"
              >
                Get In Touch
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right - Avatar Placeholder */}
          <div className="hidden md:flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border-2 border-primary/30">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-6xl">👤</span>
                </div>
                <p className="text-sm text-muted-foreground">Professional Avatar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
