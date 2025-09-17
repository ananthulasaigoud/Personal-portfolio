import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-10 lg:py-12 px-3 sm:px-4 lg:px-6 border-t border-border/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold gradient-text mb-0.5 sm:mb-1 lg:mb-2">Ananthula Sai</h3>
            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-3 sm:space-x-4 lg:space-x-6">
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
        
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 lg:pt-8 border-t border-border/20 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground px-4">
            {currentYear} Ananthula Sai. All rights reserved. • Made with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};