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
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with expertise in modern web technologies. 
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Building digital experiences with passion
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in both frontend and backend development, 
              I specialize in creating web applications that not only look great 
              but also perform exceptionally well. I'm constantly learning new 
              technologies and staying up-to-date with industry trends.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, 
              contributing to open source projects, or mentoring fellow developers 
              in the community.
            </p>
          </div>
          
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="p-6 glass-card hover-lift animate-scale-in border-border/20"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
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