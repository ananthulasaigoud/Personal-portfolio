import { Card } from "@/components/ui/card";
import { Code, Palette, Rocket } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with modern best practices"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that users love"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed and user experience"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate fresher developer eager to start my career in web development. 
            I love learning new technologies and turning ideas into beautiful, functional applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start mb-12 sm:mb-16">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Ready to contribute and grow in tech
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                As a fresh graduate with a strong foundation in web development, 
                I've completed 3 personal projects that showcase my skills in React, 
                Node.js, TypeScript, and Supabase. I'm excited to bring my enthusiasm 
                and fresh perspective to a dynamic development team.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                I'm actively seeking placement opportunities where I can apply my technical 
                skills, continue learning, and contribute to meaningful projects. My goal 
                is to grow as a developer while delivering quality solutions.
              </p>
            </div>
          </div>
          
          <div className="grid gap-4 sm:gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="p-4 sm:p-6 glass-card hover-lift animate-scale-in border-border/20"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 flex-shrink-0">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};