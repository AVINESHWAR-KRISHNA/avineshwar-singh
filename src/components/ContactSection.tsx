import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'avineshwarkrishnasingh@gmail.com',
      description: 'Drop me a line anytime',
      gradient: 'from-primary to-secondary',
      href: 'mailto:avineshwarkrishnasingh@gmail.com',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect on LinkedIn',
      description: 'Professional networking',
      gradient: 'from-secondary to-accent',
      href: 'https://www.linkedin.com/in/avineshwar-krishna-singh',
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'View Projects',
      description: 'Code repositories & contributions',
      gradient: 'from-accent to-primary',
      href: 'https://github.com/avineshwar-krishna',
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-tech font-bold mb-6 gradient-text">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground">
            I'm always interested in hearing about new projects and opportunities in data engineering and analytics
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="font-tech text-2xl font-bold mb-8 text-secondary">
              Get In Touch
            </h3>
            
            {contactMethods.map((method, index) => (
              <a 
                key={index} 
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 neon-glow cursor-pointer group">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">{method.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-tech text-lg font-bold text-primary mb-1">
                        {method.title}
                      </h4>
                      <p className="text-foreground font-medium mb-1">
                        {method.value}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {method.description}
                      </p>
                    </div>
                    <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-primary">→</span>
                    </div>
                  </div>
                </Card>
              </a>
            ))}

            {/* Current Status */}
            <Card className="glass-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse-glow mr-3"></div>
                <span className="font-tech font-bold text-secondary">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Open to new opportunities in data engineering, ETL development, and big data analytics
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary">Remote</Badge>
                <Badge variant="secondary">Hybrid</Badge>
                <Badge variant="secondary">Full-time</Badge>
                <Badge variant="outline">Contract</Badge>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="glass-card p-8">
              <h3 className="font-tech text-2xl font-bold mb-6 gradient-text">
                Send Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Name
                    </label>
                    <Input 
                      placeholder="Your name"
                      className="glass-card border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com"
                      className="glass-card border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Subject
                  </label>
                  <Input 
                    placeholder="Project discussion / Job opportunity / Collaboration"
                    className="glass-card border-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    className="glass-card border-primary/20 focus:border-primary resize-none"
                  />
                </div>

                <Button size="lg" className="w-full neon-glow font-tech data-flow">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border/20">
          <div className="glass-card p-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-4">
              "Data is the new oil, but analytics is the refinery that turns it into value."
            </p>
            <div className="font-tech text-sm text-primary">
              Avineshwar Krishna • Senior Data Engineer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;