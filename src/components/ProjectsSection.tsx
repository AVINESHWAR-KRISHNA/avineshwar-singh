import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const projects = [
    {
      title: 'ETL - Batch & Historical',
      description: 'Enterprise-scale ETL pipeline for data transfer between delta tables and on-premise SQL server with 8 months development duration.',
      company: 'R1 RCM',
      duration: '8 months',
      features: [
        'Created ETL pipeline leveraging multiple technologies to transfer data from delta tables to on-premise SQL server and back to delta table',
        'Optimized load time utilizing Python concurrency thread pool executor for parallelizing loads and implementing parallelization in Databricks workflow to save DBU cost',
        'Added data validation checks to ensure quality of data and provide summary report',
        'Added webhooks for notifying pipeline status through team channel and mail, creating logs to build Databricks dashboard for stakeholders',
      ],
      technologies: ['PySpark', 'Azure Databricks', 'Workflow', 'Python', 'SQL Server', 'Unity Catalog', 'Git'],
      gradient: 'from-primary to-secondary',
      icon: '🏗️',
    },
    {
      title: 'ETL - DataStreaming',
      description: 'Real-time data streaming pipeline to subscribe data from Google Pub/Sub and distribute to specific servers with 5 months development.',
      company: 'R1 RCM',
      duration: '5 months',
      features: [
        'Built real-time data streaming pipeline to subscribe data from Google Pub/Sub and push to server',
        'Transformation of data and further distributing feeds to specific servers and databases',
        'Added parallelism using thread pool executor for load balancing and retry mechanism as well as logging',
        'Orchestrated process through Windows service auto recover from failures and notification system for real-time alerts',
      ],
      technologies: ['Python', 'SQL Server', 'Google Pub/Sub', 'Pandas', 'SQLAlchemy', 'Google-Pubsub-v1', 'Git'],
      gradient: 'from-secondary to-accent',
      icon: '🚀',
    },
    {
      title: 'ML - Model (Stock Prediction)',
      description: 'Machine learning pipeline for stock market analysis and prediction using multiple models with 4 months self-learning development.',
      company: 'Self Learning',
      duration: '4 months',
      features: [
        'Developed ML pipeline to extract historical stock data from Yahoo Finance',
        'Data cleansing and technical indicator for action generation and feature extraction',
        'Training multiple models and retraining if already exists',
        'Recommendation for taking action from multiple model predictions',
      ],
      technologies: ['Python', 'Scikit-learn', 'Keras', 'XGBoost', 'SciPy', 'Pandas', 'NumPy', 'yfinance'],
      gradient: 'from-accent to-primary',
      icon: '📈',
      projectLink: 'Project Link', // Mentioned in resume but no actual URL provided
    },
    {
      title: 'Testing Tool - ETL',
      description: 'Python GUI application for automating ETL validation with heterogeneous data sources developed over 6 months.',
      company: 'Assimilate Solutions, A SitusAMC Company',
      duration: '6 months',
      features: [
        'Developed Python GUI application for automating ETL validation',
        'Automated smoke testing and standard checks',
        'Data comparison from heterogeneous sources (Snowflake, SQL Server, CSV, Excel, TSV, TAB)',
        'Automated summary report from validation',
      ],
      technologies: ['Python', 'Pandas', 'Dask', 'SQLAlchemy', 'Snowflake-connector', 'Datacompy', 'Git'],
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto card-container">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`glass-card overflow-hidden relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
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

                <div className="mb-4">
                  <div className="text-sm text-secondary font-semibold mb-1">
                    {project.company}
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    Duration: {project.duration}
                  </div>
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