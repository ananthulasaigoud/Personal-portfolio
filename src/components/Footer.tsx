import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 sm:py-12 px-4 sm:px-6 border-t border-border/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold gradient-text mb-1 sm:mb-2">Ananthula Sai</h3>
            <p className="text-sm sm:text-base text-muted-foreground">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-4 sm:space-x-6">
            <a 
              href="https://github.com/ananthulasaigoud" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ananthulasai/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a 
              href="mailto:saigoud17092003@gmail.com" 
              className="p-1.5 sm:p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 sm:pt-8 border-t border-border/20 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            {currentYear} Ananthula Sai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};