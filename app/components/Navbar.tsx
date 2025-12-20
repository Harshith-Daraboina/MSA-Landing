import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-1000 ease-out ${
      isScrolled 
        ? 'w-11/12 max-w-5xl scale-95' 
        : 'w-[95%] max-w-6xl scale-100'
    }`}>
      <div className={`rounded-full px-8 py-3 transition-all duration-1000 ease-out transform hover:scale-[1.02] ${
        isScrolled 
          ? 'bg-gray-900/80 backdrop-blur-2xl shadow-2xl border border-gray-700/50' 
          : 'bg-black/60 backdrop-blur-xl shadow-xl border border-gray-600/30'
      }`}>
        
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div className={`absolute -top-4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl transition-all duration-2000 ${
            isScrolled ? 'opacity-40 scale-75' : 'opacity-70 scale-100'
          }`} style={{ 
            animation: 'float 6s ease-in-out infinite',
            animationDelay: '0s' 
          }}></div>
          <div className={`absolute -top-4 right-1/4 w-28 h-28 bg-gradient-to-bl from-indigo-400/20 to-cyan-500/20 rounded-full blur-2xl transition-all duration-2000 ${
            isScrolled ? 'opacity-40 scale-75' : 'opacity-70 scale-100'
          }`} style={{ 
            animation: 'float 8s ease-in-out infinite reverse',
            animationDelay: '1s' 
          }}></div>
          <div className={`absolute -bottom-2 left-1/2 w-24 h-24 bg-gradient-to-t from-emerald-400/15 to-teal-500/15 rounded-full blur-2xl transition-all duration-2000 ${
            isScrolled ? 'opacity-30 scale-50' : 'opacity-60 scale-100'
          }`} style={{ 
            animation: 'float 7s ease-in-out infinite',
            animationDelay: '2s' 
          }}></div>
        </div>

        <div className="relative flex justify-between items-center">
          {/* Sleek Logo Section */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
              {/* Outer gradient border */}
              <div
                className={`w-10 h-10 rounded-xl transition-all duration-700 ${
                  isScrolled
                    ? "bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg"
                    : "bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl"
                }`}
              >
                {/* Inner white container */}
                <div className="absolute inset-0.5 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                  {/* Image with perfect fit */}
                  <img
                    src="/images/Logo2.jpg"
                    alt="Logo"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
              </div>

              {/* Green ping animation */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping opacity-75"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
            </div>
          


            <div className="hidden sm:block">
              <h1 className="text-lg font-bold tracking-tight text-white">
                MSA IIIT Dharwad
              </h1>
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 rounded-full bg-blue-400 animate-pulse"></div>
                <p className="text-xs font-medium tracking-wide text-gray-300">
                  Microsoft Student Ambassador
                </p>
              </div>
            </div>
            <div className="sm:hidden">
              <h1 className="text-base font-bold text-white">MSA</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-5 py-2.5 rounded-full font-medium text-sm uppercase tracking-wider transition-all duration-500 group text-gray-300 hover:text-white transform hover:scale-105"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'slideInDown 0.8s ease-out forwards'
                }}
              >
                <div className="relative z-10">{item.name}</div>
                <div className="absolute inset-0 rounded-full transition-all duration-400 transform scale-0 group-hover:scale-100 bg-white/10 backdrop-blur-sm border border-white/20"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-400 group-hover:w-[66%] group-hover:left-[18%] bg-gradient-to-r from-blue-400 to-purple-400"></div>
              </a>
            ))}
            
            {/* Floating CTA Button */}
           <div className="ml-4">
            <a
              href="https://chat.whatsapp.com/HiE8qUaaIpYJNA5WPuCozD"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-500 transform hover:scale-110 overflow-hidden group bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 flex items-center"
            >
              {/* Inner Content */}
              <div className="relative z-10 flex items-center space-x-2">
                {/* WhatsApp Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path d="M20.52 3.48A11.84 11.84 0 0 0 12 .64 11.82 11.82 0 0 0 .64 12c0 2.08.54 4.11 1.57 5.9L.27 23.36a.75.75 0 0 0 .94.94l5.46-1.94A11.84 11.84 0 0 0 12 23.36c6.55 0 11.84-5.29 11.84-11.84 0-3.17-1.23-6.15-3.32-8.32zM12 21.86c-1.89 0-3.73-.49-5.35-1.43a.75.75 0 0 0-.63-.07l-4.5 1.6 1.6-4.5a.75.75 0 0 0-.07-.63A9.82 9.82 0 0 1 2.14 12C2.14 6.62 6.62 2.14 12 2.14S21.86 6.62 21.86 12 17.38 21.86 12 21.86zM16.91 14.7c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.6.14-.18.28-.69.9-.85 1.08-.16.18-.32.2-.6.07a7.97 7.97 0 0 1-2.34-1.45 8.77 8.77 0 0 1-1.62-2c-.17-.3 0-.46.13-.6.14-.14.3-.36.45-.54.15-.18.2-.31.3-.52.1-.21.05-.39-.02-.54-.07-.14-.6-1.45-.82-1.99-.22-.53-.44-.46-.6-.47h-.52c-.18 0-.46.07-.7.34-.24.28-.92.9-.92 2.18 0 1.28.94 2.51 1.07 2.68.14.18 1.86 2.83 4.52 3.96 2.67 1.13 2.67.76 3.15.71.48-.05 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
                </svg>

                <span>Join</span>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
          </div>


          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="relative p-2.5 rounded-full transition-all duration-300 group text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-gray-600/30 hover:border-white/40"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 relative">
                <span className={`absolute top-1.5 left-0 w-5 h-0.5 transition-all duration-300 transform origin-center ${
                  isMenuOpen ? 'rotate-45 translate-y-1 bg-red-400' : 'bg-current'
                }`}></span>
                <span className={`absolute top-2.5 left-0 w-5 h-0.5 transition-all duration-200 ${
                  isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 bg-current'
                }`}></span>
                <span className={`absolute top-3.5 left-0 w-5 h-0.5 transition-all duration-300 transform origin-center ${
                  isMenuOpen ? '-rotate-45 -translate-y-1 bg-red-400' : 'bg-current'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-700 ease-out ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="rounded-2xl p-6 bg-gray-900/90 backdrop-blur-2xl border border-gray-700/50 shadow-2xl">
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block p-3 rounded-xl font-medium transition-all duration-400 transform hover:scale-105 text-gray-300 hover:bg-white/10 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    transform: isMenuOpen ? 'translateX(0) translateY(0)' : 'translateX(-50px) translateY(-20px)',
                    opacity: isMenuOpen ? 1 : 0,
                    transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 150}ms`
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="uppercase tracking-wider">{item.name}</span>
                    <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                  </div>
                </a>
              ))}
              
              <div className="pt-4 mt-4 border-t border-gray-700/50">
                <button 
                  className="w-full p-3 rounded-xl font-bold uppercase tracking-wider transition-all duration-500 transform hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                  style={{
                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isMenuOpen ? 1 : 0,
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 600ms'
                  }}
                >
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(20);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
