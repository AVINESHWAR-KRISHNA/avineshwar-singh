import { Card } from '@/components/ui/card';
import CountUp from 'react-countup';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const achievements = [
    {
      icon: '🚀',
      title: 'Performance Optimization',
      description: 'Reduced ETL processing time by 90% through advanced optimization techniques',
      stat: '90',
      suffix: '%',
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Developed custom data quality framework reducing manual testing effort by 80%',
      stat: '80',
      suffix: '%',
    },
    {
      icon: '📈',
      title: 'Scale',
      description: 'Managed data pipelines processing over 10GB of data daily with 99.9% uptime',
      stat: '10',
      suffix: 'GB+',
    },
  ];

  return (
    <section ref={ref} id="about" className={`py-20 relative transition-all duration-1000 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-tech font-bold mb-6 gradient-text">
            Transforming Complex Data Challenges
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Senior Data Engineer with extensive experience in designing and implementing robust data architectures. 
            Specialized in building scalable ETL pipelines and optimizing data workflows for large-scale systems. 
            Strong background in distributed computing and big data technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className={`glass-card p-8 text-center hover:scale-105 transition-transform duration-300 neon-glow ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 200}ms` }}>
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <div className="font-tech text-3xl font-bold mb-2 gradient-text">
                <CountUp
                  end={parseInt(achievement.stat)}
                  duration={2.5}
                  delay={index * 0.5}
                />
                {achievement.suffix}
              </div>
              <h3 className="font-tech text-lg font-semibold mb-3 text-secondary">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Terminal-style About */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 font-mono text-sm">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-muted-foreground">terminal</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex">
                <span className="text-primary mr-2">$</span>
                <span className="text-secondary">whoami</span>
              </div>
              <div className="text-muted-foreground ml-4 mb-4">
                Senior Data Engineer & Solution Architect
              </div>
              
              <div className="flex">
                <span className="text-primary mr-2">$</span>
                <span className="text-secondary">cat expertise.txt</span>
              </div>
              <div className="text-muted-foreground ml-4 space-y-1">
                <div>• ETL Pipeline Design & Optimization</div>
                <div>• Data Warehouse Architecture</div>
                <div>• Real-time Data Processing</div>
                <div>• Data Quality & Governance</div>
                <div>• Cloud Infrastructure (Azure)</div>
                <div>• Big Data Technologies</div>
              </div>
              
              <div className="flex items-center mt-4">
                <span className="text-primary mr-2">$</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;