import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Github, Linkedin, Code, MapPin, Send, Download, CheckCircle } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form will be handled by Web3Forms
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dileepkumar37688@gmail.com',
      href: 'mailto:dileepkumar37688@gmail.com',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 76766 20859',
      href: 'tel:+917676620859',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Karnataka, India',
      href: '#',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/dileepkumar2003',
      color: 'hover:bg-gray-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dileep-kumar-e-441292322/',
      color: 'hover:bg-blue-600'
    },
    {
      icon: Code,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/dileepkumar',
      color: 'hover:bg-orange-600'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="portfolio-card p-8 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently <span className="text-accent font-semibold">open to opportunities</span> and 
                actively seeking roles in AI/ML, software development, and data science. 
                Let's discuss how we can work together to create innovative solutions.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors duration-300 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <p className="text-foreground font-medium">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Download Resume Button */}
              <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-accent text-accent-foreground rounded-xl hover:bg-accent-light transition-all duration-300 font-semibold hover:shadow-lg hover:-translate-y-1 mb-8">
                <Download className="w-5 h-5" />
                Download Resume
              </button>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-foreground/10 text-foreground rounded-xl hover:text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                      title={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="portfolio-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form 
                  action="https://api.web3forms.com/submit" 
                  method="POST" 
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  {/* API Key */}
                  <input type="hidden" name="access_key" value="11584e5b-19d2-4c73-9e6b-b73db0753f64" />
                  
                  {/* Success Redirect */}
                  <input type="hidden" name="redirect" value="https://your-portfolio-url.com/thank-you" />

                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-accent text-accent-foreground rounded-xl hover:bg-accent-light transition-all duration-300 font-semibold hover:shadow-lg hover:-translate-y-1"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you have a specific project in mind or just want to explore possibilities, 
              I'm here to help turn your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:dileepkumar37688@gmail.com"
                className="px-8 py-3 bg-accent text-accent-foreground rounded-xl hover:bg-accent-light transition-colors duration-300 font-medium"
              >
                Email Me Directly
              </a>
              <a
                href="https://www.linkedin.com/in/dileep-kumar-e-441292322/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-accent text-accent rounded-xl hover:bg-accent hover:text-accent-foreground transition-colors duration-300 font-medium"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;