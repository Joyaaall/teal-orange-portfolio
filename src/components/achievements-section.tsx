
import { useRef, useState } from "react";

interface Achievement {
  title: string;
  description: string;
  image: string;
}

export function AchievementsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const achievements: Achievement[] = [
    {
      title: "APJ KTU Startup Cell Idea Competition",
      description: "First place in the university's startup competition for innovative tech solution.",
      image: "https://placehold.co/800x600/90AEAD/FFFFFF?text=Startup+Competition&font=montserrat"
    },
    {
      title: "Design Hackathon 2022",
      description: "Won best UI/UX design award for creating an accessible mobile interface.",
      image: "https://placehold.co/800x600/90AEAD/FFFFFF?text=Design+Hackathon&font=montserrat"
    },
    {
      title: "Open Source Contribution",
      description: "Recognized for significant contributions to a popular open source project.",
      image: "https://placehold.co/800x600/90AEAD/FFFFFF?text=Open+Source&font=montserrat"
    },
    {
      title: "Web Development Conference",
      description: "Selected speaker at regional web development conference on modern frameworks.",
      image: "https://placehold.co/800x600/90AEAD/FFFFFF?text=Web+Dev+Conference&font=montserrat"
    }
  ];
  
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };
  
  return (
    <section id="achievements" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="retro-underline inline-block pb-2 mb-4">Achievements</h2>
          <p className="text-lg max-w-3xl mx-auto">Recognition of my work and contributions</p>
        </div>
      </div>
      
      <div className="relative">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-none pb-6 cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
        >
          <div className="flex space-x-6 pl-4 pr-16">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className="flex-shrink-0 w-80 bg-card rounded-lg overflow-hidden shadow-md border border-border hover:border-orange-red transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto px-4 mt-6 text-center">
        <p className="text-muted-foreground text-sm">
          <span className="inline-block">Drag to scroll →</span>
        </p>
      </div>
    </section>
  );
}
