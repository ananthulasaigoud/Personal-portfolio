import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Ananth Farms",
      description: "A modern agriculture management website that helps farmers track expenses, incomes, and payments with detailed analytics for better financial decision-making. Built with React and modern web technologies for optimal user experience.",
      tags: ["React", "Vite", "TypeScript", "Supabase"],
      liveUrl: "http://ananthfarms.netlify.app/",
      githubUrl: "https://github.com/ananthulasaigoud/Ananth_Farms_Demo_Repo",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=300&fit=crop&crop=entropy&auto=format"
    },
    {
      title: "Ananth Delights",
      description: "A delightful food service platform featuring menu displays and ordering functionality. Responsive design with modern UI/UX principles.",
      tags: ["React", "Node.js", "Supabase", "Tailwind"],
      liveUrl: "http://ananthdelights.netlify.app/",
      githubUrl: "https://github.com/ananthulasaigoud/Ananth_Delights_Demo_repo",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop&crop=entropy&auto=format"
    },
    {
      title: "Smart Attendance System (For Client)",
      description: "A comprehensive attendance management system for educational institutions. Features real-time tracking and reporting capabilities.",
      tags: ["React", "TypeScript", "SQL", "Vite"],
      liveUrl: "https://tfiattendance.netlify.app/",
      githubUrl: "https://github.com/ananthulasaigoud/Smart-Attendance-Demo-Repo",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop&crop=entropy&auto=format"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden glass-card hover-lift animate-scale-in group border-border/20"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-2 pt-4">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 glass-card hover:bg-primary/20"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 glass-card hover:bg-secondary/40"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work? Check out my GitHub profile!
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="glass-card hover:bg-primary/20"
            asChild
          >
            <a href="https://github.com/ananthulasaigoud" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};