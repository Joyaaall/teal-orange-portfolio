
import { Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/joyalaliyas", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/joyalaliyas", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/joyalaliyas", label: "Instagram" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-muted-teal/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-orange-red/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 animate-fade-in">
          <h1 className="font-bold mb-4">
            Hi, I'm 
            <span className="text-orange-red"> Joyal Aliyas</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 font-medium">
            <span className="gradient-text">Blending Creativity with Technology</span>
          </h2>
          <p className="text-lg mb-8 max-w-lg">
            A passionate developer and designer crafting beautiful digital experiences. 
            Combining technical expertise with an eye for aesthetics to create 
            intuitive and engaging solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button asChild className="bg-orange-red hover:bg-orange-red/90 text-white">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button asChild variant="outline" className="border-dark-teal dark:border-soft-beige">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-transform hover:scale-110"
                aria-label={link.label}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Profile image with decorative elements */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-full border-4 border-orange-red relative z-10 animate-scale-in">
              <img
                src="https://placehold.co/400x400/90AEAD/FFFFFF?text=Joyal+Aliyas&font=montserrat"
                alt="Joyal Aliyas"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-dashed border-muted-teal rounded-full -m-4 animate-spin-slow"></div>
            <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-orange-red/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
