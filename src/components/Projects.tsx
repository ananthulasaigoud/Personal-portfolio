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
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden glass-card hover-lift animate-scale-in group border-border/20 h-full flex flex-col"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-grow line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="text-[10px] sm:text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-2 pt-3 sm:pt-4">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 glass-card hover:bg-primary/20 text-xs sm:text-sm h-8 sm:h-9"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
                      <span>Demo</span>
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 glass-card hover:bg-secondary/40 text-xs sm:text-sm h-8 sm:h-9"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
                      <span>Code</span>
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