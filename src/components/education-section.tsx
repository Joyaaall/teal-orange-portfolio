
import { useEffect, useRef, useState } from "react";

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: "education" | "experience";
}

export function EducationSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const timelineItems: TimelineItem[] = [
    {
      year: "2023",
      title: "Python Developer",
      subtitle: "EdTech Startup",
      description: "Developed educational applications and tools for students using Python and Django.",
      type: "experience"
    },
    {
      year: "2022",
      title: "Application Development Workshop",
      subtitle: "Tech Conference",
      description: "Led a workshop teaching students how to create mobile applications with React Native.",
      type: "experience"
    },
    {
      year: "2021",
      title: "B.Tech in Computer Science",
      subtitle: "University of Technology",
      description: "Graduated with honors, specializing in AI and Machine Learning.",
      type: "education"
    },
    {
      year: "2020",
      title: "Python Learning Program",
      subtitle: "Online Coding Bootcamp",
      description: "Completed an intensive Python programming course with focus on data analysis.",
      type: "education"
    },
    {
      year: "2019",
      title: "Frontend Developer Intern",
      subtitle: "Web Design Agency",
      description: "Worked on client projects using HTML, CSS, and JavaScript to build responsive websites.",
      type: "experience"
    },
    {
      year: "2018",
      title: "Diploma in Graphic Design",
      subtitle: "Design Institute",
      description: "Learned principles of visual communication, typography, and digital design tools.",
      type: "education"
    }
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
  
  // Separate education and experience
  const education = timelineItems.filter(item => item.type === "education");
  const experience = timelineItems.filter(item => item.type === "experience");
  
  return (
    <section id="education" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="retro-underline inline-block pb-2 mb-4">Education & Experience</h2>
          <p className="text-lg max-w-3xl mx-auto">My academic background and professional journey</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-orange-red text-3xl mr-2">🎓</span> Education
            </h3>
            <div className="space-y-2">
              {education.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item ${visible ? "animate-fade-in" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className="absolute left-[-40px] top-0 bg-orange-red text-white px-2 py-1 text-sm rounded">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-muted-foreground">{item.subtitle}</p>
                  <p className="mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-orange-red text-3xl mr-2">💼</span> Experience
            </h3>
            <div className="space-y-2">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item ${visible ? "animate-fade-in" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.2 + 0.3}s` }}
                >
                  <span className="absolute left-[-40px] top-0 bg-orange-red text-white px-2 py-1 text-sm rounded">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-muted-foreground">{item.subtitle}</p>
                  <p className="mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
