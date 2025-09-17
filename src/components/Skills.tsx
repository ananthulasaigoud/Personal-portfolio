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
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-8 glass-card hover-lift animate-scale-in border-border/20"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 mx-auto`}>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-accent opacity-80" />
              </div>
              
              <h3 className="text-2xl font-semibold text-center mb-6">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary"
                    className="bg-secondary/40 text-foreground border-border/20 hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Experience Highlights */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold gradient-text">Fresher</div>
              <div className="text-muted-foreground">Ready to Start</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold gradient-text">3</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold gradient-text">10+</div>
              <div className="text-muted-foreground">Technologies Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};