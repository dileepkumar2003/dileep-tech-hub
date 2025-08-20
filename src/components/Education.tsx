import { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
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

  const educationData = [
    {
      degree: 'B.E. in Artificial Intelligence & Machine Learning',
      institution: 'Ballari Institute of Technology & Management',
      duration: '2020 - 2024',
      grade: 'CGPA: 6.95',
      type: 'Bachelor\'s Degree',
      description: 'Specialized in AI/ML with comprehensive coursework in machine learning algorithms, data structures, software engineering, and artificial intelligence applications.',
      highlights: [
        'Core focus on AI/ML technologies',
        'Strong foundation in programming and algorithms',
        'Project-based learning approach',
        'Industry-relevant curriculum'
      ]
    },
    {
      degree: '12th Standard (Higher Secondary)',
      institution: 'High School',
      duration: '2020 - 2022',
      grade: '79.89%',
      type: 'Higher Secondary Education',
      description: 'Completed higher secondary education with strong performance in mathematics and science subjects, laying the foundation for engineering studies.',
      highlights: [
        'Strong performance in STEM subjects',
        'Solid mathematical foundation',
        'Prepared for engineering entrance exams'
      ]
    },
    {
      degree: '10th Standard (Secondary)',
      institution: 'High School',
      duration: '2018 - 2020',
      grade: '60.5%',
      type: 'Secondary Education',
      description: 'Completed secondary education with focus on core subjects and foundational learning that prepared for higher studies.',
      highlights: [
        'Foundation in core subjects',
        'Developed study habits and discipline',
        'Preparation for higher secondary education'
      ]
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and educational background in artificial intelligence and technology
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-accent/20 transform md:-translate-x-1/2"></div>

            {educationData.map((edu, index) => (
              <div
                key={edu.degree}
                className={`relative mb-12 fade-in ${
                  index % 2 === 0 ? 'md:text-right md:pr-1/2' : 'md:pl-1/2 md:ml-8'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 border-4 border-background shadow-lg"></div>

                {/* Education Card */}
                <div className={`portfolio-card p-6 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : ''
                }`}>
                  {/* Card Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                          {edu.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.institution}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          {edu.grade}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">
                      Key Highlights
                    </h4>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="fade-in text-center portfolio-card p-6" style={{ animationDelay: '0.8s' }}>
            <div className="text-2xl font-bold text-accent mb-2">4 Years</div>
            <div className="text-muted-foreground">Engineering Degree</div>
          </div>
          <div className="fade-in text-center portfolio-card p-6" style={{ animationDelay: '0.9s' }}>
            <div className="text-2xl font-bold text-accent mb-2">AI & ML</div>
            <div className="text-muted-foreground">Specialization</div>
          </div>
          <div className="fade-in text-center portfolio-card p-6" style={{ animationDelay: '1s' }}>
            <div className="text-2xl font-bold text-accent mb-2">6.95</div>
            <div className="text-muted-foreground">CGPA Achieved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;