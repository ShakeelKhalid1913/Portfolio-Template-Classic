import { Figma, Palette, Zap, Users } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  features: string[];
}

export default function Services() {
  const services: Service[] = [
    {
      id: "1",
      title: "Web Design",
      description: "Beautiful, user-centric web designs that convert visitors into customers.",
      price: "$2,500",
      icon: <Figma className="w-8 h-8" />,
      features: ["UI/UX Design", "Wireframing", "Prototyping", "Design Systems"],
    },
    {
      id: "2",
      title: "Development",
      description: "Full-stack development with modern technologies and best practices.",
      price: "$3,500",
      icon: <Zap className="w-8 h-8" />,
      features: ["Frontend Development", "Backend APIs", "Database Design", "Deployment"],
    },
    {
      id: "3",
      title: "Branding",
      description: "Comprehensive brand identity that tells your story and resonates with your audience.",
      price: "$2,000",
      icon: <Palette className="w-8 h-8" />,
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"],
    },
    {
      id: "4",
      title: "Consulting",
      description: "Strategic guidance on digital transformation, technology selection, and team building.",
      price: "$150/hr",
      icon: <Users className="w-8 h-8" />,
      features: ["Strategy Sessions", "Technical Review", "Team Training", "Mentoring"],
    },
  ];

  return (
    <section id="services" className="section-spacing bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16">
          <div className="accent-line mb-4" />
          <h2 className="text-foreground mb-4">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I offer a range of services tailored to help your business grow and succeed
            in the digital landscape. Let's work together to bring your vision to life.
          </p>
        </div>

        {/* Services Grid - Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`transition-all duration-300 ease-out ${
                index % 2 === 1 ? "md:translate-y-8" : ""
              }`}
            >
              {/* Service Card */}
              <div className="h-full bg-card rounded-lg border border-border p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 ease-out group">
                {/* Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary font-bold">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="pt-6 border-t border-border">
                  <div className="text-3xl font-bold text-primary">
                    {service.price}
                  </div>
                  <button className="mt-4 w-full px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
