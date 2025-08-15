import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ParticleField from './ParticleField';
import heroDataBg from '@/assets/hero-data-bg.jpg';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroDataBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <ParticleField />
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Status Badge */}
          <Badge variant="secondary" className="mb-6 neon-glow font-tech">
            Available for Data Engineering Opportunities
          </Badge>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-tech font-bold mb-6 leading-tight">
            <span className="gradient-text text-glow">Senior Data</span>
            <br />
            <span className="text-secondary font-bold">Engineer</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Building Scalable Data Solutions | ETL Specialist | Big Data Expert
          </p>

          {/* Experience Badge */}
          <div className="glass-card inline-block p-6 mb-8 neon-glow">
            <div className="font-tech text-3xl font-bold gradient-text">4.5+</div>
            <div className="text-secondary text-sm font-medium mt-1">Years Experience</div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="neon-glow font-tech data-flow">
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" className="gradient-border">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Tagline */}
          <div className="glass-card p-4 max-w-md mx-auto">
            <p className="text-primary font-medium">
              💫 Transforming raw data into gold!
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;