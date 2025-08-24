import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const certifications = [
    {
      icon: '🐍',
      title: 'Data Science with Python',
      subtitle: 'for Data Analysis',
      tags: ['Python', 'Data Analysis'],
      gradient: 'from-primary to-secondary',
    },
    {
      icon: '❄️',
      title: 'Snowflake',
      subtitle: 'The Complete Masterclass',
      tags: ['Data Warehouse', 'Cloud'],
      gradient: 'from-secondary to-accent',
    },
    {
      icon: '🐍',
      title: 'The Complete Python Bootcamp',
      subtitle: 'From Zero to Hero in Python',
      tags: ['Python', 'Programming'],
      gradient: 'from-accent to-primary',
    },
    {
      icon: '⚡',
      title: 'Complete Scala 3',
      subtitle: 'development masterclass',
      tags: ['Scala', 'Functional Programming'],
      gradient: 'from-primary via-secondary to-accent',
    },
    {
      icon: '📊',
      title: 'Power BI',
      subtitle: 'Essential Training',
      tags: ['Data Visualization', 'Business Intelligence'],
      gradient: 'from-secondary to-primary',
    },
    {
      icon: '📈',
      title: 'Tableau',
      subtitle: 'Essential Training',
      tags: ['Data Visualization', 'Analytics'],
      gradient: 'from-accent to-secondary',
    },
  ];

  return (
    <section ref={ref} id="certifications" className={`py-20 relative transition-all duration-1000 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-tech font-bold mb-6 gradient-text">
            Certifications & Learning
          </h2>
          <p className="text-xl text-muted-foreground">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto card-container">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className={`glass-card overflow-hidden relative group ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-6">
                <div className="content-block">
                  <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">{cert.icon}</div>
                  
                  <h3 className="font-tech text-lg font-bold text-center mb-2 gradient-text group-hover:scale-105 transition-transform duration-300">
                    {cert.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-center text-sm mb-4 group-hover:text-foreground transition-colors duration-300">
                    {cert.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {cert.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs font-mono hover:scale-110 transition-transform duration-200 group-hover:border-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Data Flow Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 data-flow"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;