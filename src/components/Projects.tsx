import { useEffect, useRef } from 'react';
import { Calendar, Eye, Shield, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: 'Sports Academy Training Scheduler',
      description: 'Built a comprehensive application to create personalized training schedules for sports academies based on user preferences, athlete profiles, and coaching requirements.',
      icon: Calendar,
      technologies: ['Python', 'Data Structures', 'Algorithm Design', 'User Interface'],
      features: [
        'Personalized training schedule generation',
        'User preference integration',
        'Academy management system',
        'Performance optimization algorithms'
      ],
      type: 'Application Development',
      status: 'Completed'
    },
    {
      title: 'Smart AI Proctoring System',
      description: 'Developed an advanced AI-powered system for online exam monitoring using real-time facial recognition, behavioral analysis, and anomaly detection to ensure exam integrity.',
      icon: Shield,
      technologies: ['Python', 'AI/ML', 'Computer Vision', 'Facial Recognition', 'Behavioral Analysis'],
      features: [
        'Real-time facial recognition',
        'Behavioral pattern analysis',
        'Anomaly detection algorithms',
        'Automated monitoring reports',
        'Multi-user session handling'
      ],
      type: 'AI/ML Project',
      status: 'Completed'
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my technical expertise through innovative solutions and practical applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="fade-in group portfolio-card p-8 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <project.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                      {project.type}
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Actions */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <button className="flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors duration-300 text-sm font-medium">
                  <Eye className="w-4 h-4" />
                  View Details
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-muted/50 text-muted-foreground rounded-lg hover:bg-muted transition-colors duration-300 text-sm font-medium">
                  <Github className="w-4 h-4" />
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Info */}
        <div className="mt-16 text-center fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="portfolio-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects and learning new technologies. 
              Check back soon for updates on my latest work in AI/ML and software development.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/dileepkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl hover:bg-accent-light transition-colors duration-300 font-medium"
              >
                <Github className="w-5 h-5" />
                View All Projects
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;