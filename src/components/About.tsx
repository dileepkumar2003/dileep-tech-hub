import { useEffect, useRef } from 'react';
import { Brain, Code2, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Brain,
      title: 'AI & ML Expertise',
      description: 'Strong foundation in artificial intelligence and machine learning technologies'
    },
    {
      icon: Code2,
      title: 'Technical Skills',
      description: 'Proficient in Python, data structures, algorithms, and software development'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Data-driven approach to building scalable and impactful solutions'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Excellent teamwork and communication skills in dynamic environments'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am an aspiring <span className="text-accent font-semibold">Artificial Intelligence and Machine Learning</span> professional 
                with strong technical expertise in Python, data-driven problem-solving, and scalable application development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am passionate about leveraging technology to build impactful solutions, enhance collaboration, 
                and contribute to innovation in dynamic and challenging environments.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently <span className="text-primary font-semibold">open to opportunities</span> and actively building projects 
                that showcase my skills in AI/ML, software development, and problem-solving.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="fade-in">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center">
                    <Brain className="w-24 h-24 text-accent-foreground" />
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-xl flex items-center justify-center animate-float">
                  <Code2 className="w-8 h-8 text-accent-foreground" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-xl flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <Lightbulb className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="fade-in portfolio-card p-6 text-center group"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <highlight.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;