import { useEffect, useRef, useState } from 'react';
import { Code, Database, Wrench, Heart } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'C', level: 75 },
        { name: 'C++', level: 80 },
        { name: 'SQL', level: 85 },
        { name: 'HTML', level: 85 }
      ]
    },
    {
      title: 'Development Tools',
      icon: Wrench,
      skills: [
        { name: 'Visual Studio Code', level: 95 },
        { name: 'Microsoft Excel', level: 80 },
        { name: 'MS Word', level: 85 }
      ]
    },
    {
      title: 'Core Competencies',
      icon: Database,
      skills: [
        { name: 'Data Structures & Algorithms', level: 85 },
        { name: 'Software Design Principles', level: 80 },
        { name: 'Problem Solving', level: 90 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: Heart,
      skills: [
        { name: 'Time Management', level: 90 },
        { name: 'Adaptability', level: 95 },
        { name: 'Teamwork', level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and competencies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="fade-in portfolio-card p-8"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-accent font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className={`skill-progress ${isVisible ? 'animate-skill-fill' : ''}`}
                        style={{
                          '--skill-width': `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="fade-in text-center portfolio-card p-6" style={{ animationDelay: '0.8s' }}>
            <div className="text-3xl font-bold text-accent mb-2">5+</div>
            <div className="text-muted-foreground">Programming Languages</div>
          </div>
          <div className="fade-in text-center portfolio-card p-6" style={{ animationDelay: '0.9s' }}>
            <div className="text-3xl font-bold text-accent mb-2">3+</div>
            <div className="text-muted-foreground">Development Tools</div>
          </div>
          <div className="fade-in text-center portfolio-card p-6" style={{ animationDelay: '1s' }}>
            <div className="text-3xl font-bold text-accent mb-2">6+</div>
            <div className="text-muted-foreground">Core Competencies</div>
          </div>
          <div className="fade-in text-center portfolio-card p-6" style={{ animationDelay: '1.1s' }}>
            <div className="text-3xl font-bold text-accent mb-2">4+</div>
            <div className="text-muted-foreground">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;