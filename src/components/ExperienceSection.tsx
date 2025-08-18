import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const experiences = [
    {
      title: 'Software Engineer ETL',
      company: 'R1 RCM',
      period: 'Sep 2022 - Present',
      description: [
        'Designed and maintained ETL pipelines (SQL, Python, SSIS, Azure Databricks, Pyspark) for data transformation, ensuring data accuracy, reliability, and accessibility for BI.',
        'Analyzed complex datasets to identify patterns, trends, and insights, informing business decisions and optimizing data processing/analysis.',
        'Collaborated with cross-functional teams to maintain data consistency throughout the ETL pipeline, meeting business requirements.',
        'Proactively identified and resolved data quality issues using various tools and techniques, delivering high-quality data for stakeholders.',
        'Migrated ETL solutions, slashing workload from 3 FTE to 0.5 FTE while maintaining quality through 90% workflow efficiency gains.',
      ],
      technologies: ['Azure Databricks', 'PySpark', 'Python', 'SQL', 'SSIS'],
      isActive: true,
    },
    {
      title: 'Quality Engineer ETL',
      company: 'Assimilate Solutions, A SitusAMC Company',
      period: 'Jan 2021 - Sep 2022',
      description: [
        'Owned data validation for data service scrum team, ensuring data integrity using SQL queries and automated Python scripts on Snowflake.',
        'Validated Informatica mappings and workflows for accurate data processing and loading.',
        'Documented test cases and results for efficient data quality tracking and monitoring.',
        'Collaborated with onshore teams and stakeholders to meet data quality requirements.',
      ],
      technologies: ['Python', 'SQL', 'Snowflake', 'Informatica'],
      isActive: false,
    },
    {
      title: 'Associate Analyst',
      company: 'GlobalLogic',
      period: 'Oct 2019 - Jan 2020',
      description: [
        'Leveraged crowd-sourced data to train Google Lens for rich shopping experiences.',
        'Collaborated on training Google Lens models for enhanced shopping experiences.',
        'Improved team efficiency and quality through data analysis and reporting.',
      ],
      technologies: ['Data Analysis', 'Machine Learning', 'Google Lens'],
      isActive: false,
    },
  ];

  return (
    <section ref={ref} id="experience" className={`py-20 relative transition-all duration-1000 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-tech font-bold mb-6 gradient-text">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground">
            Building scalable data solutions across diverse industries
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-16 ${
              index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
            }`}>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
                <div className={`w-4 h-4 rounded-full border-2 ${
                  exp.isActive 
                    ? 'bg-primary border-primary shadow-neon' 
                    : 'bg-card border-secondary'
                } animate-pulse-glow`}></div>
              </div>

              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                <Card className={`glass-card p-8 group cursor-pointer ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: `${index * 300}ms` }}>
                  <div className="mb-4">
                    <h3 className="text-xl font-tech font-bold text-primary mb-2">
                      {exp.title}
                    </h3>
                    <div className="text-secondary font-semibold mb-1">
                      {exp.company}
                    </div>
                    <div className="text-sm text-muted-foreground font-mono">
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2 mt-1 text-xs">▶</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;