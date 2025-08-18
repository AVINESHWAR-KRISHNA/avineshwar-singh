import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const projects = [
    {
      title: 'ETL - Batch & Historical',
      description: 'Enterprise-scale ETL pipeline for efficient data transfer between delta tables and on-premise SQL server.',
      features: [
        'Created ETL pipeline leveraging multiple technologies for data transfer',
        'Optimized load time using Python concurrency and parallel Databricks workflows',
        'Implemented comprehensive data validation and quality checks',
        'Added webhooks for notifications and dashboard monitoring',
      ],
      technologies: ['PySpark', 'Azure Databricks', 'SQL Server', 'Unity Catalog', 'Git'],
      gradient: 'from-primary to-secondary',
      icon: '🏗️',
    },
    {
      title: 'ETL - DataStreaming',
      description: 'Real-time data streaming pipeline using Google Pub/Sub for efficient data distribution.',
      features: [
        'Built real-time streaming pipeline with Google Pub/Sub integration',
        'Implemented data transformation and multi-server distribution',
        'Added parallel processing and retry mechanisms',
        'Orchestrated via Windows service with auto-recovery',
      ],
      technologies: ['Python', 'SQL Server', 'Google Pub/Sub', 'Pandas', 'SQLAlchemy'],
      gradient: 'from-secondary to-accent',
      icon: '🚀',
    },
    {
      title: 'ML - Stock Prediction Model',
      description: 'Machine learning pipeline for stock market analysis and prediction using multiple models.',
      features: [
        'Developed ML pipeline for Yahoo Finance data extraction',
        'Implemented data cleansing and technical indicator generation',
        'Trained and maintained multiple prediction models',
        'Created action recommendation system based on model predictions',
      ],
      technologies: ['Python', 'Scikit-learn', 'Keras', 'XGBoost', 'yfinance'],
      gradient: 'from-accent to-primary',
      icon: '📈',
    },
    {
      title: 'Testing Tool - ETL',
      description: 'Python GUI application for automated ETL validation and testing.',
      features: [
        'Developed automated ETL validation GUI tool',
        'Implemented smoke testing and standard checks',
        'Added support for heterogeneous data source comparison',
        'Automated validation summary reporting',
      ],
      technologies: ['Python', 'Pandas', 'Dask', 'SQLAlchemy', 'Snowflake'],
      gradient: 'from-primary via-secondary to-accent',
      icon: '🧪',
    },
  ];

  return (
    <section ref={ref} id="projects" className={`py-20 relative transition-all duration-1000 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-tech font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Innovative data solutions that drive business impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`glass-card group overflow-hidden relative cursor-pointer ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-8">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{project.icon}</span>
                  <h3 className="font-tech text-xl font-bold gradient-text">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <span className="text-primary mr-2 mt-1 text-xs">▶</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="font-mono text-xs hover:scale-110 transition-transform duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full neon-glow"
                    onClick={() => window.open('https://github.com/avineshwar-krishna', '_blank')}
                  >
                    View on GitHub
                  </Button>
                </div>
              </div>

              {/* Data Flow Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 data-flow"></div>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <Card className="glass-card p-8 max-w-2xl mx-auto group cursor-pointer">
            <h3 className="font-tech text-xl font-bold mb-4 gradient-text">
              Explore More Projects
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for additional projects and contributions to the data engineering community
            </p>
            <Button 
              size="lg" 
              className="neon-glow font-tech"
              onClick={() => window.open('https://github.com/avineshwar-krishna', '_blank')}
            >
              Visit GitHub Profile
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;