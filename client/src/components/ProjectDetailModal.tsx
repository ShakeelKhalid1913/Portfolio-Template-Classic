import { Button } from "@/components/ui/button";
import { X, ExternalLink, Github } from "lucide-react";

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string | null;
}

export default function ProjectDetailModal({
  isOpen,
  onClose,
  projectId,
}: ProjectDetailModalProps) {
  if (!isOpen || !projectId) return null;

  // Sample project details - in a real app, this would come from a database
  const projectDetails: Record<
    string,
    {
      title: string;
      description: string;
      fullDescription: string;
      images: string[];
      tags: string[];
      liveUrl: string;
      githubUrl: string;
      challenge: string;
      solution: string;
      results: string[];
    }
  > = {
    "1": {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with advanced filtering",
      fullDescription:
        "A comprehensive e-commerce solution built with React and Node.js, featuring real-time inventory management, advanced product filtering, and a seamless checkout experience powered by Stripe.",
      images: [
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663485830983/AmY4hHZoErwZWV9BVhi2Ra/project-showcase-1-ieSyLr2sRYszXfx86j8Kxt.webp",
      ],
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      challenge:
        "Building a scalable platform that could handle thousands of concurrent users while maintaining real-time inventory accuracy.",
      solution:
        "Implemented WebSocket connections for real-time updates, optimized database queries with proper indexing, and used caching strategies to improve performance.",
      results: [
        "40% increase in conversion rate",
        "99.9% uptime achieved",
        "Sub-2 second page load times",
      ],
    },
  };

  const project = projectDetails[projectId] || projectDetails["1"];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-card rounded-lg border border-border w-full max-w-2xl my-8 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
            {/* Images */}
            <div className="space-y-4">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full rounded-lg"
                />
              ))}
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold text-foreground mb-2">Overview</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Challenge */}
            <div>
              <h3 className="font-semibold text-foreground mb-2">Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h3 className="font-semibold text-foreground mb-2">Solution</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Results */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Results</h3>
              <ul className="space-y-2">
                {project.results.map((result, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary font-bold">✓</span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex gap-4 p-6 border-t border-border bg-secondary/30">
            <Button
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.open(project.liveUrl, "_blank")}
            >
              View Live
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-foreground text-foreground hover:bg-foreground/10"
              onClick={() => window.open(project.githubUrl, "_blank")}
            >
              View Code
              <Github className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
