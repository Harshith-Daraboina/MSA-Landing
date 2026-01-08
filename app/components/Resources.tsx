import React, { useState, useRef, useEffect } from 'react';

interface Resource {
  title: string;
  description: string;
  link: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration?: string;
}

const Resources: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const resources: Resource[] = [
    {
      title: "Microsoft Azure AI Essentials",
      description: "Learn the essentials of AI with Microsoft Azure for free on Linkedin.",
      link: "https://www.linkedin.com/learning/paths/microsoft-azure-ai-essentials-professional-certificate-by-microsoft-and-linkedin",
      category: "AI/ML",
      level: "beginner",
      duration: "8 hours"
    },
    {
      title: "Web & App Dev with Microsoft",
      description: "Get started with web and app development using Microsoft technologies.",
      link: "https://developer.microsoft.com/en-us/javascript/?wt.mc_id=studentamb_360446",
      category: "Web Development",
      level: "beginner",
      duration: "10 hours"
    },
    {
      title: "Generative AI Course By Microsoft",
      description: "Discover the power of generative AI with this comprehensive course.",
      link: "https://learn.microsoft.com/en-gb/training/paths/design-dream-destination-ai/?wt.mc_id=fsi_generativeai_explore_wwl/?wt.mc_id=studentamb_360446",
      category: "AI/ML",
      level: "intermediate",
      duration: "12 hours"
    },
    {
      title: "msa Contributor ID Guide",
      description: "Learn how to use, curate and share your msa Contributor ID effectively.",
      link: "https://stdntpartners.sharepoint.com/sites/SAProgramHandbook/SitePages/Need-content-to-use-with-your-Sharing-ID-(1).aspx/?wt.mc_id=studentamb_360446",
      category: "Community",
      level: "beginner",
      duration: "2 hours"
    },
    {
      title: "Azure Fundamentals Certification",
      description: "Prepare for the AZ-900 exam with Microsoft's official learning path.",
      link: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
      category: "Cloud",
      level: "beginner",
      duration: "15 hours"
    },
    {
      title: "Power Platform Fundamentals",
      description: "Build solutions with Power Apps, Power Automate, and Power BI.",
      link: "https://learn.microsoft.com/en-us/training/paths/power-platform-fundamentals/",
      category: "Low-Code",
      level: "beginner",
      duration: "9 hours"
    },
    {
      title: "Advanced Python for AI",
      description: "Master Python programming for artificial intelligence applications.",
      link: "https://learn.microsoft.com/en-us/training/paths/advanced-python/",
      category: "Programming",
      level: "advanced",
      duration: "20 hours"
    },
    {
      title: "GitHub Copilot Workshop",
      description: "Leverage AI pair programming with GitHub Copilot effectively.",
      link: "https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/",
      category: "Tools",
      level: "intermediate",
      duration: "5 hours"
    }
  ];

  const categories = ['all', 'AI/ML', 'Web Development', 'Cloud', 'Programming', 'Low-Code', 'Tools', 'Community'];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'from-green-500 to-emerald-500';
      case 'intermediate': return 'from-yellow-500 to-amber-500';
      case 'advanced': return 'from-red-500 to-pink-500';
      default: return 'from-cyan-500 to-blue-500';
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case 'beginner': return 'Beginner';
      case 'intermediate': return 'Intermediate';
      case 'advanced': return 'Advanced';
      default: return level;
    }
  };

  return (
    <section id="resources" className="relative py-20 bg-gray-950 overflow-hidden">
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
              Learning Resources
            </span>
          </h2>
          
          {/* Animated Tech Underline */}
          <div className="flex justify-center mb-8">
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full animate-tech-underline"></div>
          </div>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto backdrop-blur-sm bg-gray-900/30 p-4 rounded-xl border border-cyan-400/20">
            Discover curated learning paths and resources to enhance your skills with Microsoft technologies
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-400/20 animate-fade-in-up">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/70 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                      : 'bg-gray-800/70 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-500/20'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-up">
          {filteredResources.map((resource, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden border-2 backdrop-blur-md transition-all duration-500 transform ${
                hoveredCard === index ? 'scale-105 z-10 shadow-2xl shadow-cyan-500/20' : 'scale-100'
              } bg-gradient-to-br from-gray-900/70 to-gray-800/70 border-cyan-400/30`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 ${
                hoveredCard === index ? 'opacity-100' : ''
              }`}></div>

              {/* Level Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getLevelColor(resource.level)} text-white z-10`}>
                {getLevelText(resource.level)}
              </div>

              {/* Resource Content */}
              <div className="p-6 flex flex-col h-full relative z-1">
                {/* Category Tag */}
                <span className="inline-block px-3 py-1 mb-4 bg-cyan-900/50 text-cyan-300 text-xs font-mono rounded-full border border-cyan-400/30 self-start">
                  {resource.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-white transition-colors duration-300 hover:text-cyan-300">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 flex-grow">
                  {resource.description}
                </p>

                {/* Duration */}
                {resource.duration && (
                  <div className="flex items-center text-sm text-cyan-300 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{resource.duration}</span>
                  </div>
                )}

                {/* Action Button */}
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30 group text-center"
                >
                  <span className="relative z-10">Explore Resource</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Animated Arrow */}
                  <svg className="w-5 h-5 ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Binary Code Decoration */}
              <div className="absolute bottom-2 right-2 text-cyan-400/20 text-xs font-mono">
                101010
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="mb-6 text-cyan-400">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-300 mb-2">No resources found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
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

export default Resources;