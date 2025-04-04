
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  links: {
    github?: string;
    live?: string;
  };
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "2D Game in Unity",
      description: "A 2D platformer game created using Unity and C#, featuring custom character animations and levels.",
      image: "https://placehold.co/600x400/90AEAD/FFFFFF?text=Unity+Game&font=montserrat",
      tech: ["Unity", "C#", "Game Design"],
      links: {
        github: "https://github.com/joyalaliyas/unity-game",
      }
    },
    {
      title: "Device Spoofing & Cloud Storage",
      description: "A secure cloud storage solution with device spoofing protection to prevent unauthorized access.",
      image: "https://placehold.co/600x400/90AEAD/FFFFFF?text=Cloud+Storage&font=montserrat",
      tech: ["Python", "AWS", "Security"],
      links: {
        github: "https://github.com/joyalaliyas/cloud-storage",
        live: "https://cloud-storage-demo.example.com"
      }
    },
    {
      title: "OnTrack Bus Alert",
      description: "A real-time bus tracking system that provides alerts about arrival times and delays to users.",
      image: "https://placehold.co/600x400/90AEAD/FFFFFF?text=Bus+Alert&font=montserrat",
      tech: ["React", "Node.js", "Maps API"],
      links: {
        github: "https://github.com/joyalaliyas/ontrack",
        live: "https://ontrack-bus.example.com"
      }
    },
    {
      title: "Women's Safety at Night",
      description: "A mobile application focused on enhancing women's safety with features like emergency contacts and location sharing.",
      image: "https://placehold.co/600x400/90AEAD/FFFFFF?text=Safety+App&font=montserrat",
      tech: ["React Native", "Firebase", "Maps"],
      links: {
        github: "https://github.com/joyalaliyas/safety-app",
      }
    }
  ];
  
  return (
    <section id="projects" className="section-padding bg-soft-beige/30 dark:bg-dark-teal/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="retro-underline inline-block pb-2 mb-4">Projects</h2>
          <p className="text-lg max-w-3xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group overflow-hidden"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="relative overflow-hidden mb-4 rounded-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark-teal/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    {project.links.github && (
                      <Button asChild variant="outline" size="icon" className="bg-background/20 backdrop-blur-sm border-white text-white hover:bg-background/40">
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {project.links.live && (
                      <Button asChild variant="outline" size="icon" className="bg-background/20 backdrop-blur-sm border-white text-white hover:bg-background/40">
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label="View Live Demo">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
