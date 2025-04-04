
import { Camera, Headphones, Map, Palette } from "lucide-react";

interface Interest {
  icon: typeof Camera;
  title: string;
  description: string;
}

export function InterestsSection() {
  const interests: Interest[] = [
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and creating visual stories through the lens."
    },
    {
      icon: Headphones,
      title: "Music",
      description: "Exploring different genres and creating playlists for every mood."
    },
    {
      icon: Map,
      title: "Travel",
      description: "Discovering new cultures and gaining inspiration from different places."
    },
    {
      icon: Palette,
      title: "Design",
      description: "Experimenting with visual styles and following design trends."
    }
  ];
  
  return (
    <section id="interests" className="section-padding bg-soft-beige/30 dark:bg-dark-teal/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="retro-underline inline-block pb-2 mb-4">Interests</h2>
          <p className="text-lg max-w-3xl mx-auto">When I'm not coding, you'll find me...</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((interest, index) => (
            <div
              key={interest.title}
              className="bg-card rounded-lg p-6 text-center border border-border hover:border-orange-red transition-all duration-300 group hover:shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-muted-teal/20 text-orange-red group-hover:bg-orange-red group-hover:text-white transition-colors duration-300">
                <interest.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
              <p className="text-muted-foreground">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
