import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-float" />
      <div className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 animate-float" style={{
      animationDelay: '1s'
    }} />
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-slide-up">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Ananthula Sai</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full Stack Developer & UI/UX Enthusiast crafting digital experiences that make a difference
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="hero-glow animate-glow-pulse bg-gradient-to-r from-primary to-accent hover:shadow-2xl transition-all duration-300" onClick={() => scrollToSection('projects')}>
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="glass-card hover:bg-secondary/20 transition-all duration-300" onClick={() => scrollToSection('contact')}>
            Get In Touch
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16">
          <a href="#" className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover-lift">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover-lift">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover-lift">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="cursor-pointer animate-bounce" onClick={() => scrollToSection('about')}>
          <ChevronDown className="w-8 h-8 mx-auto text-muted-foreground hover:text-primary transition-colors" />
        </div>
      </div>
    </section>;
};