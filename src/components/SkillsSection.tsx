import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'PySpark', level: 90 },
        { name: 'SQL', level: 95 },
        { name: 'T-SQL', level: 85 },
        { name: 'Scala', level: 75 },
      ],
    },
    {
      category: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'Snowflake', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'SQL Server', level: 90 },
        { name: 'MySQL', level: 80 },
      ],
    },
    {
      category: 'ETL Tools',
      icon: '⚡',
      skills: [
        { name: 'Azure Databricks', level: 95 },
        { name: 'SSIS', level: 85 },
        { name: 'Informatica', level: 80 },
        { name: 'Azure Data Factory', level: 85 },
      ],
    },
    {
      category: 'Reporting & Visualization',
      icon: '📊',
      skills: [
        { name: 'Tableau', level: 85 },
        { name: 'Power BI', level: 90 },
        { name: 'Excel', level: 95 },
      ],
    },
  ];

  const technologies = [
    'Docker', 'Kafka', 'Zookeeper', 'Debezium', 'Azure', 'Git', 'Jira',
    'Pandas', 'SQLAlchemy', 'NumPy', 'Scikit-learn', 'TensorFlow',
    'Pytest', 'Black', 'Flake8', 'Google Pub/Sub', 'REST APIs'
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-tech font-bold mb-6 gradient-text">
            Technical Arsenal
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive expertise across the modern data engineering stack
          </p>
        </div>

        {/* Core Skills with Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card p-8 hover:scale-105 transition-all duration-300 neon-glow">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="font-tech text-lg font-bold text-secondary">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={isVisible ? skill.level : 0}
                      className="h-2 transition-all duration-1000 delay-300"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technology Cloud */}
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card p-8">
            <h3 className="font-tech text-xl font-bold text-center mb-6 gradient-text">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="font-mono text-xs hover:scale-110 transition-transform duration-200 cursor-default neon-glow"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* File Format Expertise */}
        <div className="max-w-2xl mx-auto mt-8">
          <Card className="glass-card p-6">
            <h4 className="font-tech text-lg font-bold text-center mb-4 text-primary">
              File Format Expertise
            </h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {['TXT', 'XML', 'TAB', 'CSV', 'Excel', 'JSON', 'Parquet'].map((format) => (
                <Badge key={format} variant="secondary" className="font-mono text-xs">
                  {format}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;