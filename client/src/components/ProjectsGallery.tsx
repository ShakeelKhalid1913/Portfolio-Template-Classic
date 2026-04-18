import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import ProjectDetailModal from "@/components/ProjectDetailModal";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export default function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects: Project[] = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with advanced filtering, real-time inventory, and seamless checkout experience.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485830983/AmY4hHZoErwZWV9BVhi2Ra/project-showcase-1-ieSyLr2sRYszXfx86j8Kxt.webp",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#project/1",
    },
    {
      id: "2",
      title: "Mobile Banking App",
      description: "iOS and Android banking application with biometric authentication, transaction management, and financial insights.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485830983/AmY4hHZoErwZWV9BVhi2Ra/project-showcase-2-XgGSTPELWjdt3nB8LSiQxd.webp",
      tags: ["React Native", "Firebase", "TypeScript"],
      link: "#project/2",
    },
    {
      id: "3",
      title: "Brand Identity System",
      description: "Comprehensive brand identity and design system for a tech startup including logo, color palette, and guidelines.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485830983/AmY4hHZoErwZWV9BVhi2Ra/project-showcase-3-hqzFfpfSSSwmH3KVYL7pZ.webp",
      tags: ["Figma", "Design System", "Branding"],
      link: "#project/3",
    },
    {
      id: "4",
      title: "SaaS Dashboard",
      description: "Enterprise dashboard for analytics and reporting with real-time data visualization and custom integrations.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485830983/AmY4hHZoErwZWV9BVhi2Ra/project-showcase-1-ieSyLr2sRYszXfx86j8Kxt.webp",
      tags: ["React", "D3.js", "PostgreSQL", "Next.js"],
      link: "#project/4",
    },
    {
      id: "5",
      title: "Content Management System",
      description: "Headless CMS with intuitive interface for content creators, built with modern architecture and APIs.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485830983/AmY4hHZoErwZWV9BVhi2Ra/project-showcase-2-XgGSTPELWjdt3nB8LSiQxd.webp",
      tags: ["Vue.js", "GraphQL", "Strapi", "Tailwind"],
      link: "#project/5",
    },
    {
      id: "6",
      title: "Portfolio Website",
      description: "Custom portfolio website showcasing creative work with smooth animations and optimized performance.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485830983/AmY4hHZoErwZWV9BVhi2Ra/project-showcase-3-hqzFfpfSSSwmH3KVYL7pZ.webp",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      link: "#project/6",
    },
  ];

  return (
    <section id="projects" className="section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16">
          <div className="accent-line mb-4" />
          <h2 className="text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of my recent work showcasing my expertise in design, development,
            and digital strategy. Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Projects Grid - Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-300 ease-out ${
                index === 0 || index === 3 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              onClick={() => handleProjectClick(project.id)}
            >
              {/* Project Card */}
              <div className="h-full bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 ease-out">
                {/* Image Container */}
                <div className="relative overflow-hidden h-48 md:h-56 bg-secondary">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 ease-out" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary text-xs font-medium text-muted-foreground rounded border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    className="w-full mt-4 text-primary hover:bg-primary/10"
                  >
                    View Project
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-foreground text-foreground hover:bg-foreground/10"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        projectId={selectedProject}
      />
    </section>
  );
}
