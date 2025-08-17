import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: '💻',
      skills: ['Python', 'PySpark', 'SQL', 'T-SQL', 'Scala'],
    },
    {
      category: 'Databases',
      icon: '🗄️',
      skills: ['Snowflake', 'PostgreSQL', 'SQL Server', 'MySQL'],
    },
    {
      category: 'ETL Tools',
      icon: '⚡',
      skills: ['Azure Databricks', 'SSIS', 'Informatica', 'Azure Data Factory'],
    },
    {
      category: 'Reporting & Visualization',
      icon: '📊',
      skills: ['Tableau', 'Power BI', 'Excel'],
    },
  ];

  const technologies = [
    'Docker', 'Kafka', 'Zookeeper', 'Debezium', 'Azure', 'Git', 'Jira',
    'Pandas', 'SQLAlchemy', 'NumPy', 'Scikit-learn', 'TensorFlow',
    'Pytest', 'Black', 'Flake8', 'Google Pub/Sub', 'REST APIs'
  ];

  return (
    <section ref={ref} id="skills" className={`py-20 relative transition-all duration-1000 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
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
            <Card key={index} className={`glass-card p-8 hover:scale-105 transition-all duration-300 neon-glow ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 200}ms` }}>
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="font-tech text-lg font-bold text-secondary">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="font-mono text-xs"
                  >
                    {skill}
                  </Badge>
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