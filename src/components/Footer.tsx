import { Github, Linkedin, Code, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/dileepkumar2003',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/dileep-kumar-e-441292322/',
      label: 'LinkedIn'
    },
    {
      icon: Code,
      href: 'https://leetcode.com/u/dileepkumar',
      label: 'LeetCode'
    },
    {
      icon: Mail,
      href: 'mailto:dileepkumar37688@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Dileep Kumar Edara
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              AI & ML Enthusiast passionate about building innovative solutions 
              that make a difference. Currently open to exciting opportunities 
              in technology and software development.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary-foreground/10 text-primary-foreground rounded-xl hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 animate-pulse-soft"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-primary-foreground/80 hover:text-accent transition-colors duration-300 py-1"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:dileepkumar37688@gmail.com"
                className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                dileepkumar37688@gmail.com
              </a>
              <a
                href="tel:+917676620859"
                className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                +91 76766 20859
              </a>
              <p className="text-primary-foreground/80">
                Karnataka, India
              </p>
            </div>
            <div className="mt-6">
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-3 bg-accent text-accent-foreground rounded-xl hover:bg-accent-light transition-colors duration-300 font-medium"
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © 2024 Dileep Kumar Edara. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-accent animate-pulse" />
              <span>using React & TailwindCSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;