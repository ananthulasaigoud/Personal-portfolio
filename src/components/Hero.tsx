import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroBg})`
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90" />
      </div>

      {/* Floating Elements - Adjusted for mobile */}
      <div className="absolute top-10 left-10 w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-float" />
      <div className="absolute bottom-16 right-10 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 animate-float" style={{
        animationDelay: '1s'
      }} />

      {/* Main Content */}
      <div className="relative z-10 text-center w-full px-4 max-w-4xl mx-auto animate-slide-up">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Ananthula Sai</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            Blending design, code, and AI to create seamless digital experiences.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
          <Button size="lg" className="w-full sm:w-auto hero-glow animate-glow-pulse bg-gradient-to-r from-primary to-accent hover:shadow-2xl transition-all duration-300" onClick={() => scrollToSection('projects')}>
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto glass-card hover:bg-secondary/20 transition-all duration-300" onClick={() => scrollToSection('contact')}>
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-12 sm:mb-16">
          <a href="https://github.com/ananthulasaigoud" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover-lift" aria-label="GitHub">
            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="https://www.linkedin.com/in/ananthulasai/" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover-lift" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="mailto:saigoud17092003@gmail.com" className="p-2 sm:p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover-lift" aria-label="Email">
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="cursor-pointer animate-bounce" onClick={() => scrollToSection('about')}>
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-muted-foreground hover:text-primary transition-colors" />
        </div>
      </div>
    </section>
  );
};