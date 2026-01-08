import React, { useState, useRef, useEffect } from 'react';

const Contact: React.FC = () => {
  const [activeContact, setActiveContact] = useState<number | null>(null);
  const [copied, setCopied] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const containerRef = useRef<HTMLDivElement>(null);

  const contactMethods = [
    {
      icon: "fas fa-envelope",
      text: "Email",
      link: "mailto:mlsa@iiitdwd.ac.in",
      value: "mlsa@iiitdwd.ac.in",
      description: "Send us an email for inquiries"
    },
    {
      icon: "fab fa-linkedin",
      text: "LinkedIn",
      link: "https://www.linkedin.com/company/mlsa-iiitdwd",
      value: "MLSA IIIT Dharwad",
      description: "Connect with us professionally"
    },
    {
      icon: "fab fa-github",
      text: "GitHub",
      link: "https://github.com/aryanjstar",
      value: "aryanjstar",
      description: "Explore our code repositories"
    },
    {
      icon: "fab fa-whatsapp",
      text: "WhatsApp",
      link: "https://chat.whatsapp.com/HiE8qUaaIpYJNA5WPuCozD",
      value: "Join Community",
      description: "Join our community chat"
    },
    {
      icon: "fas fa-map-marker-alt",
      text: "Location",
      link: "https://maps.google.com/?q=IIIT+Dharwad",
      value: "IIIT Dharwad",
      description: "Indian Institute of Information Technology Dharwad"
    },
    {
      icon: "fas fa-globe",
      text: "Portfolio",
      link: "https://aryanjaiswal.netlify.app",
      value: "aryanjaiswal.netlify.app",
      description: "Explore our projects"
    }
  ];

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    // Show success message (you can implement a toast notification)
    alert('Message sent successfully! We\'ll get back to you soon.');
  };

  // Parallax effect for background elements
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrolled = window.pageYOffset;
        const parallaxElements = containerRef.current.querySelectorAll('.parallax');
        parallaxElements.forEach(element => {
          const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
          (element as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="contact" className="relative py-20 bg-gray-950 overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hexagonal Grid Overlay */}
        <div className="absolute inset-0 hex-grid opacity-20"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-20 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow parallax" data-speed="0.3"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl parallax" data-speed="0.2"></div>
        
        {/* Connection Lines */}
        <div className="absolute inset-0 connection-lines"></div>
        
        {/* Floating Tech Elements */}
        <div className="absolute top-40 left-20 w-10 h-10 border border-cyan-400/30 rounded-lg transform rotate-45 animate-float-tech parallax" data-speed="0.1"></div>
        <div className="absolute bottom-40 right-32 w-6 h-6 border border-purple-400/30 rounded-full animate-float-tech parallax" data-speed="0.15" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-40 w-8 h-8 border border-blue-400/30 transform rotate-12 animate-float-tech parallax" data-speed="0.12" style={{animationDelay: '4s'}}></div>
        
        {/* Animated Scan Lines */}
        <div className="absolute inset-0 scan-lines"></div>
      </div>

      <div className="container my-10 mx-auto px-4 relative z-10" ref={containerRef}>
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Get In Touch
            </span>
          </h2>
          
          {/* Animated Tech Underline */}
          <div className="flex justify-center mb-8">
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full animate-tech-underline"></div>
          </div>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto backdrop-blur-sm bg-gray-900/30 p-4 rounded-xl border border-cyan-400/20">
            Connect with us through multiple channels. We're always excited to hear from students, developers, and tech enthusiasts!
          </p>
        </div>

        

        {/* Contact Form Section */}
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/20 animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Form Header */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Send us a Message
              </h3>
              <p className="text-gray-300 mb-6">
                Have questions or want to collaborate? Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              {/* Additional Info */}
              <div className="space-y-3">
                <div className="flex items-center text-cyan-300">
                  <i className="fas fa-clock mr-3"></i>
                  <span>Response time: Usually within 24 hours</span>
                </div>
                <div className="flex items-center text-cyan-300">
                  <i className="fas fa-users mr-3"></i>
                  <span>Community: 250+ members and growing</span>
                </div>
                <div className="flex items-center text-cyan-300">
                  <i className="fas fa-calendar mr-3"></i>
                  <span>Events: Regular workshops and hackathons</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/70 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/70 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800/70 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30 group"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <i className="fas fa-paper-plane ml-2 relative z-10"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="mt-16 bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-400/20 animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Find Us at IIIT Dharwad
          </h3>
          
          <div className="relative h-64 rounded-xl overflow-hidden border border-cyan-400/30">
            {/* Map placeholder with futuristic styling */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-purple-900/30 flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-map-marked-alt text-4xl text-cyan-400 mb-3"></i>
                <p className="text-cyan-300 font-mono">Interactive Map Loading...</p>
                <p className="text-gray-400 text-sm mt-2">Indian Institute of Information Technology Dharwad</p>
              </div>
            </div>
            
            {/* Map grid overlay */}
            <div className="absolute inset-0 map-grid opacity-30"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a
              href="https://maps.google.com/?q=IIIT+Dharwad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-300 rounded-lg transition-colors duration-300 border border-cyan-400/30"
            >
              <i className="fas fa-directions"></i>
              <span>Get Directions</span>
            </a>
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600/30 hover:bg-purple-600/50 text-purple-300 rounded-lg transition-colors duration-300 border border-purple-400/30">
              <i className="fas fa-calendar-plus"></i>
              <span>Schedule Visit</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hex-grid {
          background-image: 
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(180deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          mask-image: repeating-conic-gradient(#000 0% 25%, transparent 0% 50%);
          mask-size: 30px 30px;
        }
        
        .map-grid {
          background-image: 
            linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px),
            linear-gradient(180deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .connection-lines::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          mask-image: 
            radial-gradient(circle at 25% 25%, black 10%, transparent 20%),
            radial-gradient(circle at 75% 75%, black 10%, transparent 20%),
            radial-gradient(circle at 25% 75%, black 10%, transparent 20%),
            radial-gradient(circle at 75% 25%, black 10%, transparent 20%);
          mask-size: 100% 100%;
          mask-repeat: no-repeat;
        }
        
        .scan-lines {
          background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(6, 182, 212, 0.03) 51%,
            transparent 52%
          );
          background-size: 100% 3px;
          animation: scan 8s linear infinite;
          pointer-events: none;
        }
        
        @keyframes scan {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }
        
        @keyframes float-tech {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          33% { transform: translateY(-8px) rotate(1deg); opacity: 0.5; }
          66% { transform: translateY(4px) rotate(-0.5deg); opacity: 0.4; }
        }
        
        @keyframes tech-underline {
          0% { width: 0; opacity: 0; }
          50% { width: 6rem; opacity: 1; }
          100% { box-shadow: 0 0 12px 2px rgba(6, 182, 212, 0.7); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-float-tech { animation: float-tech 8s ease-in-out infinite; }
        .animate-tech-underline { animation: tech-underline 2s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
      `}</style>
    </section>
  );
};

export default Contact;