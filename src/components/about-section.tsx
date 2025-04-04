
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-soft-beige/30 dark:bg-dark-teal/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="retro-underline inline-block pb-2 mb-4">About Me</h2>
          <p className="text-lg max-w-3xl mx-auto">Get to know more about me and my background</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-4">My Story</h3>
            <p className="mb-4">
              With a unique background that spans both graphic design and computer science, 
              I bring a multidisciplinary approach to every project. My journey began in visual arts, 
              which gave me a strong foundation in aesthetics and user-centric design thinking.
            </p>
            <p className="mb-4">
              As I transitioned into the world of technology, I discovered my passion for coding and 
              problem-solving. This dual expertise allows me to create digital experiences that are not 
              only technically robust but also visually compelling and intuitive.
            </p>
            <p className="mb-6">
              I'm constantly exploring new technologies and design trends to expand my skill set and keep 
              my work fresh and innovative. Whether it's developing a complex application or designing a 
              user interface, I approach each project with creativity, technical skill, and attention to detail.
            </p>
            
            <Button asChild className="bg-orange-red hover:bg-orange-red/90 text-white">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <FileText className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>
          
          <div data-aos="fade-left" className="animate-slide-in-right">
            <div className="bg-card rounded-lg shadow-md p-6 border border-border">
              <h3 className="text-2xl font-bold mb-6">Tools & Technologies</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-background hover:bg-muted/40 transition-colors">
                  <div className="text-3xl mb-2">✏️</div>
                  <h4 className="font-medium">Design</h4>
                  <p className="text-sm text-muted-foreground">Photoshop, Figma</p>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-background hover:bg-muted/40 transition-colors">
                  <div className="text-3xl mb-2">💻</div>
                  <h4 className="font-medium">Frontend</h4>
                  <p className="text-sm text-muted-foreground">HTML, CSS, JavaScript</p>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-background hover:bg-muted/40 transition-colors">
                  <div className="text-3xl mb-2">⚙️</div>
                  <h4 className="font-medium">Backend</h4>
                  <p className="text-sm text-muted-foreground">Python, Node.js</p>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-background hover:bg-muted/40 transition-colors">
                  <div className="text-3xl mb-2">🛠️</div>
                  <h4 className="font-medium">Tools</h4>
                  <p className="text-sm text-muted-foreground">Git, VS Code</p>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-background hover:bg-muted/40 transition-colors">
                  <div className="text-3xl mb-2">📱</div>
                  <h4 className="font-medium">Mobile</h4>
                  <p className="text-sm text-muted-foreground">React Native</p>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-background hover:bg-muted/40 transition-colors">
                  <div className="text-3xl mb-2">🧠</div>
                  <h4 className="font-medium">Learning</h4>
                  <p className="text-sm text-muted-foreground">AI, Cloud</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
