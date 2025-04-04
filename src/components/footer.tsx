
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/joyalaliyas", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/joyalaliyas", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/joyalaliyas", label: "Instagram" },
    { icon: Mail, href: "mailto:joyalaliyas123@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-dark-teal text-soft-beige py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Joyal Aliyas</h3>
            <p className="mb-4">Blending Creativity with Technology</p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft-beige hover:text-orange-red transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-orange-red transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-orange-red transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-orange-red transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-orange-red transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="mb-2">joyalaliyas123@gmail.com</p>
            <p>Kerala, India</p>
          </div>
        </div>
        
        <div className="border-t border-muted-teal/30 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Joyal Aliyas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
