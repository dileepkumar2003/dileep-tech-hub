import { useEffect, useRef } from 'react';
import { Award, FileText, Trophy, Users, ExternalLink } from 'lucide-react';

const Achievements = () => {
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

  const certifications = [
    {
      title: 'Getting Started with Enterprise-Grade Data Science',
      provider: 'IBM',
      icon: FileText,
      type: 'Data Science',
      description: 'Comprehensive introduction to enterprise-level data science practices, tools, and methodologies.',
      skills: ['Data Analysis', 'Statistical Methods', 'Data Visualization', 'Business Intelligence'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Artificial Intelligence using Python',
      provider: 'Infosys',
      icon: FileText,
      type: 'AI/ML',
      description: 'In-depth course covering AI concepts, machine learning algorithms, and Python implementation.',
      skills: ['Python Programming', 'Machine Learning', 'AI Algorithms', 'Neural Networks'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Java for Beginners',
      provider: 'Infosys',
      icon: FileText,
      type: 'Programming',
      description: 'Fundamental Java programming concepts including OOP principles and application development.',
      skills: ['Java Programming', 'Object-Oriented Programming', 'Software Development', 'Problem Solving'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const achievement = {
    title: 'Ideathon Participant',
    provider: 'GM University',
    icon: Trophy,
    type: 'Competition',
    description: 'Participated in a competitive ideathon showcasing innovative solutions and creative problem-solving skills.',
    highlights: [
      'Innovative solution development',
      'Team collaboration and leadership',
      'Presentation and communication skills',
      'Creative problem-solving approach'
    ],
    color: 'from-purple-500 to-purple-600'
  };

  return (
    <section id="achievements" ref={sectionRef} className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that demonstrate my commitment to continuous learning
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="fade-in group portfolio-card p-6 hover:shadow-xl scale-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Certificate Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                      {cert.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground mt-1">
                    {cert.provider}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                  Key Skills
                </h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Certificate Button */}
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors duration-300 text-sm font-medium">
                <FileText className="w-4 h-4" />
                View Certificate
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        {/* Special Achievement */}
        <div className="max-w-2xl mx-auto">
          <div className="fade-in accent-card p-8 text-center" style={{ animationDelay: '0.4s' }}>
            <div className="flex justify-center mb-6">
              <div className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center`}>
                <achievement.icon className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <div className="mb-4">
              <span className="px-4 py-2 bg-accent-foreground/20 text-accent-foreground text-sm font-semibold rounded-full">
                {achievement.type}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-accent-foreground mb-2">
              {achievement.title}
            </h3>
            <p className="text-lg font-medium text-accent-foreground/80 mb-4">
              {achievement.provider}
            </p>
            
            <p className="text-accent-foreground/90 mb-6 leading-relaxed">
              {achievement.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {achievement.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-accent-foreground/90">
                  <Users className="w-4 h-4 flex-shrink-0" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="fade-in text-center portfolio-card p-6" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl font-bold text-accent mb-2">4</div>
            <div className="text-muted-foreground">Total Achievements</div>
          </div>
          <div className="fade-in text-center portfolio-card p-6" style={{ animationDelay: '0.7s' }}>
            <div className="text-3xl font-bold text-accent mb-2">3</div>
            <div className="text-muted-foreground">Certifications</div>
          </div>
          <div className="fade-in text-center portfolio-card p-6" style={{ animationDelay: '0.8s' }}>
            <div className="text-3xl font-bold text-accent mb-2">2</div>
            <div className="text-muted-foreground">Tech Companies</div>
          </div>
          <div className="fade-in text-center portfolio-card p-6" style={{ animationDelay: '0.9s' }}>
            <div className="text-3xl font-bold text-accent mb-2">1</div>
            <div className="text-muted-foreground">Competition</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;