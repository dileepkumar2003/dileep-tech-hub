import { ArrowRight, Download, Github, Linkedin, Code } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary-light rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-light rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <p className="text-accent-foreground/80 text-lg mb-4">Hello, I'm</p>
          </div>

          {/* Name */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Dileep Kumar <span className="text-accent">Edara</span>
            </h1>
          </div>

          {/* Tagline */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <p className="text-xl md:text-2xl text-accent-foreground/90 mb-8 leading-relaxed">
              AI & ML Enthusiast | Problem Solver | Tech Innovator
            </p>
          </div>

          {/* Description */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <p className="text-lg text-accent-foreground/80 mb-12 max-w-2xl mx-auto">
              Passionate about leveraging artificial intelligence and machine learning to build impactful solutions 
              that drive innovation and solve real-world problems.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in opacity-0 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <button
              onClick={scrollToContact}
              className="group px-8 py-4 bg-accent text-accent-foreground rounded-xl hover:bg-accent-light transition-all duration-300 font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Download Resume
              <Download className="w-5 h-5 group-hover:animate-bounce" />
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 border-2 border-accent-foreground/30 text-accent-foreground rounded-xl hover:bg-accent-foreground/10 transition-all duration-300 font-semibold flex items-center gap-2 hover:-translate-y-1"
            >
              Let's Connect
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in opacity-0 flex justify-center gap-6" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <a
              href="https://github.com/dileepkumar2003"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent-foreground/10 text-accent-foreground rounded-xl hover:bg-accent-foreground/20 hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/dileep-kumar-e-441292322/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent-foreground/10 text-accent-foreground rounded-xl hover:bg-accent-foreground/20 hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://leetcode.com/u/dileepkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent-foreground/10 text-accent-foreground rounded-xl hover:bg-accent-foreground/20 hover:scale-110 transition-all duration-300"
            >
              <Code className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-accent-foreground/60 hover:text-accent-foreground transition-colors duration-300"
          >
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;