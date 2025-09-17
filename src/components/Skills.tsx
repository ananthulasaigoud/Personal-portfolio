import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React (Basics)", "TypeScript", "Tailwind CSS"],
      color: "from-primary/20 to-accent/20"
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "SQL", "Supabase", "REST APIs"],
      color: "from-accent/20 to-primary/20"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Vite", "Netlify"],
      color: "from-primary/20 to-secondary/20"
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-5 sm:p-6 md:p-8 glass-card hover-lift animate-scale-in border-border/20"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 sm:mb-6 mx-auto`}>
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-r from-primary to-accent opacity-80" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary"
                    className="text-xs sm:text-sm bg-secondary/40 text-foreground border-border/20 hover:bg-primary/20 hover:text-primary transition-colors cursor-default px-2 py-0.5 sm:px-2.5 sm:py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Experience Highlights */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">Fresher</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Ready to Start</div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">3</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">10+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};