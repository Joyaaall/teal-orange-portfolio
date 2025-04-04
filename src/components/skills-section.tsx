
import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

export function SkillsSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const skills: Skill[] = [
    { name: "UI/UX Design", level: 85, category: "Design" },
    { name: "Web Design", level: 90, category: "Design" },
    { name: "Brand Identity", level: 75, category: "Design" },
    { name: "HTML & CSS", level: 95, category: "Development" },
    { name: "JavaScript", level: 85, category: "Development" },
    { name: "React", level: 80, category: "Development" },
    { name: "Python", level: 70, category: "Development" },
    { name: "Photoshop", level: 90, category: "Tools" },
    { name: "Figma", level: 85, category: "Tools" },
    { name: "Git", level: 75, category: "Tools" },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Group skills by category
  const categories = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});
  
  return (
    <section id="skills" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="retro-underline inline-block pb-2 mb-4">Skills</h2>
          <p className="text-lg max-w-3xl mx-auto">My technical and creative expertise</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(categories).map(([category, categorySkills]) => (
            <div key={category} className="bg-card rounded-lg shadow-md p-6 border border-border">
              <h3 className="text-xl font-bold mb-6">{category}</h3>
              <div className="space-y-6">
                {categorySkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress transition-all duration-1000 ease-out"
                        style={{ 
                          width: visible ? `${skill.level}%` : "0%",
                          transition: `width 1.5s ease-in-out ${Math.random() * 0.5}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
