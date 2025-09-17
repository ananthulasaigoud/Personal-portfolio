import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your Public Key
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
if (!publicKey) {
  console.error('EmailJS public key is not set in environment variables');
}
emailjs.init(publicKey);

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSending(true);
    
    try {
      // Sending email using EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      
      if (!serviceId || !templateId) {
        throw new Error('EmailJS service ID or template ID is not configured');
      }
      
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: 'saigoud17092003@gmail.com',
          message: formData.message,
          reply_to: formData.email
        }
      );
      
      if (response.status === 200) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "saigoud17092003@gmail.com",
      href: "mailto:saigoud17092003@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 6305579139",
      href: "tel:+916305579139"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Nalgonda, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to work together? I'd love to hear about your project and discuss how we can bring your ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base">
                I'm always open to discussing new opportunities and interesting projects. 
                Whether you have a question about my work or want to collaborate, don't hesitate to reach out!
              </p>
            </div>
            
            <div className="grid gap-2 sm:gap-3 lg:gap-4">
              {contactInfo.map((item, index) => (
                <Card 
                  key={index}
                  className="p-3 sm:p-4 lg:p-6 glass-card hover-lift animate-scale-in border-border/20"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <a 
                    href={item.href}
                    className="flex items-center space-x-3 sm:space-x-4 group w-full"
                  >
                    <div className="p-2 sm:p-2.5 lg:p-3 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 flex-shrink-0">
                      <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-xs sm:text-sm lg:text-base group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-xs sm:text-sm truncate">{item.value}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="p-4 sm:p-5 lg:p-6 xl:p-8 glass-card border-border/20">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-1.5 lg:mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="glass-card border-border/20 focus:border-primary h-9 sm:h-10 lg:h-11 text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-1.5 lg:mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="glass-card border-border/20 focus:border-primary h-9 sm:h-10 lg:h-11 text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-1.5 lg:mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                  className="glass-card border-border/20 focus:border-primary resize-none text-sm min-h-[80px] sm:min-h-[100px] lg:min-h-[120px]"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                disabled={isSending}
                className="w-full hero-glow bg-gradient-to-r from-primary to-accent hover:shadow-2xl text-sm lg:text-base h-10 sm:h-11 lg:h-12 disabled:opacity-80 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};