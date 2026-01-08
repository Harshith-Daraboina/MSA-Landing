import React, { useState, useRef, useEffect } from 'react';

interface Event {
  title: string;
  date: string;
  description: string;
  image?: string;
  status: 'past' | 'upcoming';
  category?: string;
  registrationLink?: string;
  attendees?: number;
  duration?: string;
}

const Events: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [viewMode, setViewMode] = useState<'timeline' | 'grid'>('timeline');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [autoPlay, setAutoPlay] = useState(true);
  const timelineRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Sample event images (replace with your actual event images)
  const eventImages = [
    "/images/IMG_1.jpg",
    // "/images/IMG_3.jpg",
    "/images/IMG_4.jpg",
    "/images/IMG_2.jpg",
    "/images/IMG_6.jpg",
    "/images/IMG_5.jpg",
  ];

  const eventTitles = [
    "IOT Workshop 2024",
    // "Hackathon Finals",
    "LOGIC LEAGUE 1.0",
    "Community Meetup",
    "GET TO GEATHER ",
    "CODING CONTEST"
  ];

  const eventDescriptions = [
    "Hands-on workshop on Internet of Things and smart devices(ESP8266, Raspberry Pi, etc.)",
    // "Annual coding competition with exciting prizes",
    "Competitive programming event for all skill levels",
    "Networking event with industry professionals",
    "Fun activities and games to foster community spirit",
    "Competitive coding event to test your skills"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  const goToNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % eventImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + eventImages.length) % eventImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  const events: Event[] = [
    {
      title: "Empowering Your Tech Journey",
      date: "26th July 2024",
      description: "An event focusing on how to be an MLSA and hands-on experience with Git and GitHub.",
      image: "/images/IMG_1.jpg",
      status: 'past',
      category: "Workshop",
      attendees: 120,
      duration: "2 hours"
    },
    {
      title: "Establishment of MLSA Chapter",
      date: "24th October 2024",
      description: "An offline event introducing the MLSA program, its tiers, benefits, & how you can be a part of it.",
      image: "/images/IMG_2.jpg",
      status: 'past',
      category: "Official Launch",
      attendees: 85,
      duration: "1.5 hours"
    },
    {
      title: "Kickstart Your Web Dev Journey",
      date: "28th December 2024",
      description: "An online event providing an overview and roadmap of web development technologies.",
      image: "/images/IMG_3.jpg",
      status: 'past',
      category: "Webinar",
      attendees: 200,
      duration: "2 hours"
    },
    {
      title: "Get Together Session",
      date: "27th February 2025",
      description: "A fun-filled session designed to connect, interact, and engage with each other while enjoying exciting games and activities.",
      image: "/images/IMG_6.jpg",
      status: 'past',
      category: "Networking",
      attendees: 65,
      duration: "3 hours"
    },
    {
      title: "FIFS Gamethon ",
      date: "27th February 2025",
      description: "A thrilling gaming event featuring popular games like Valorant, FIFA, and Among Us with exciting prizes.",
      image: "/images/IMG_8.png",
      status: 'past',
      category: "Competition",
      attendees: 65,
      duration: "3 hours"
    },
    {
      title: "UI/UX Designing Workshop",
      date: "5th February 2025",
      description: "Learn the fundamentals of UI/UX design and get hands-on experience with Figma.",
      status: 'past',
      category: "Workshop",
      attendees: 90,
      duration: "2.5 hours"
    },
    {
      title: "Open Source Workshop",
      date: "Coming Soon",
      description: "Explore the world of open-source development and learn how to contribute effectively.",
      status: 'upcoming',
      category: "Workshop",
      registrationLink: "#register",
      duration: "3 hours"
    },
    {
      title: "IoT-Powered Smart Robot Car Workshop",
      date: "12th-13th March 2025",
      description: "Build a smart robotic car using ESP8266/ESP32 and essential electronic components.",
      status: 'upcoming',
      category: "Hands-on",
      registrationLink: "#register",
      duration: "6 hours"
    },
    {
      title: "MLSA Logic League 1.0",
      date: "7th March 2025",
      description: "A competitive programming event featuring debugging and coding contests.",
      status: 'past',
      category: "Competition",
      attendees: 45,
      duration: "4 hours"
    },
    {
      title: "MLSA Logic League 2.0",
      date: "28th March 2025",
      description: "A competitive programming event featuring debugging and coding contests.",
      status: 'upcoming',
      category: "Competition",
      registrationLink: "#register",
      duration: "4 hours"
    },
    {
      title: "Cybersecurity Basics",
      date: "Coming Soon",
      description: "An insightful session with a seasoned Cybersecurity Expert.",
      status: 'upcoming',
      category: "Expert Session",
      registrationLink: "#register",
      duration: "2 hours"
    },
    {
      title: "DSA Importance & Workshop",
      date: "3rd October 2025",
      description: "A comprehensive workshop on Data Structures and Algorithms.",
      status: 'upcoming',
      category: "Expert Session",
      registrationLink: "#register",
      duration: "3 hours"
    },
    {
      title: "Cybersecurity Unplugged",
      date: "15th March 2025",
      description: "An insightful session with a seasoned Cybersecurity Expert.",
      status: 'upcoming',
      category: "Expert Session",
      registrationLink: "#register",
      duration: "2 hours"
    }
  ];

  // Get unique categories for filtering
  const categories = ['all', ...new Set(events.map(event => event.category || 'Uncategorized'))];

  // Filter events based on search and category
  const filteredEvents = events.filter(event => {
    const matchesSearch = searchQuery === '' || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && viewMode === 'timeline') {
      autoPlayRef.current = setInterval(() => {
        setActiveEvent(prev => (prev + 1) % filteredEvents.length);
      }, 5000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, filteredEvents.length, viewMode]);

  // Smooth scroll to position with spring effect
  const smoothScrollTo = (target: number, duration: number = 700) => {
    if (!timelineRef.current) return;
    
    const start = timelineRef.current.scrollLeft;
    const change = target - start;
    const startTime = performance.now();
    
    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (easeOutQuint)
      const ease = 1 - Math.pow(1 - progress, 5);
      
      if (timelineRef.current) {
        timelineRef.current.scrollLeft = start + change * ease;
      }
      
      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
      }
    };
    
    setIsScrolling(true);
    animationFrameRef.current = requestAnimationFrame(animateScroll);
  };

  // Handle mouse events for dragging timeline
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (timelineRef.current?.offsetLeft || 0));
    setScrollLeft(timelineRef.current?.scrollLeft || 0);
    
    // Cancel any ongoing animations
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // After dragging, snap to the nearest event
    if (timelineRef.current) {
      const scrollPosition = timelineRef.current.scrollLeft + timelineRef.current.offsetWidth / 2;
      const eventElements = timelineRef.current.querySelectorAll('.event-card');
      
      let closestEvent = 0;
      let closestDistance = Infinity;
      
      eventElements.forEach((element, index) => {
        const distance = Math.abs((element as HTMLElement).offsetLeft - scrollPosition);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestEvent = index;
        }
      });
      
      const eventElement = eventElements[closestEvent] as HTMLElement;
      if (eventElement) {
        const targetScroll = eventElement.offsetLeft - timelineRef.current.offsetWidth / 2 + eventElement.offsetWidth / 2;
        smoothScrollTo(targetScroll);
        setActiveEvent(closestEvent);
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (timelineRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (timelineRef.current) {
      timelineRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (timelineRef.current?.offsetLeft || 0));
    setScrollLeft(timelineRef.current?.scrollLeft || 0);
    
    // Cancel any ongoing animations
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (timelineRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (timelineRef.current) {
      timelineRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // After dragging, snap to the nearest event
    if (timelineRef.current) {
      const scrollPosition = timelineRef.current.scrollLeft + timelineRef.current.offsetWidth / 2;
      const eventElements = timelineRef.current.querySelectorAll('.event-card');
      
      let closestEvent = 0;
      let closestDistance = Infinity;
      
      eventElements.forEach((element, index) => {
        const distance = Math.abs((element as HTMLElement).offsetLeft - scrollPosition);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestEvent = index;
        }
      });
      
      const eventElement = eventElements[closestEvent] as HTMLElement;
      if (eventElement) {
        const targetScroll = eventElement.offsetLeft - timelineRef.current.offsetWidth / 2 + eventElement.offsetWidth / 2;
        smoothScrollTo(targetScroll);
        setActiveEvent(closestEvent);
      }
    }
  };

  // Auto-scroll to active event
  useEffect(() => {
    if (timelineRef.current && !isDragging && viewMode === 'timeline') {
      const eventElements = timelineRef.current.querySelectorAll('.event-card');
      const eventElement = eventElements[activeEvent] as HTMLElement;
      
      if (eventElement) {
        const targetScroll = eventElement.offsetLeft - timelineRef.current.offsetWidth / 2 + eventElement.offsetWidth / 2;
        smoothScrollTo(targetScroll);
      }
    }
  }, [activeEvent, isDragging, viewMode]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  const EventCard: React.FC<{ event: Event; index: number }> = ({ event, index }) => (
    <div 
      className={`event-card relative flex-shrink-0 w-80 h-96 mx-4 transition-all duration-500 cursor-pointer ${
        activeEvent === index && viewMode === 'timeline' ? 'scale-105 z-10' : 'scale-95 opacity-80'
      }`}
      onClick={() => !isScrolling && setActiveEvent(index)}
    >
      <div className={`h-full rounded-2xl overflow-hidden border-2 backdrop-blur-md flex flex-col transform transition-all duration-500 ${
        event.status === 'past' 
          ? 'bg-blue-900/30 border-blue-700/50 shadow-lg shadow-blue-500/20' 
          : 'bg-purple-900/30 border-purple-700/50 shadow-lg shadow-purple-500/20'
      } ${activeEvent === index && viewMode === 'timeline' ? 'ring-2 ring-cyan-400/50' : ''}`}>
        {/* Event image or placeholder */}
        <div className="h-40 relative overflow-hidden">
          {event.image ? (
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          ) : (
            <div className={`w-full h-full flex items-center justify-center transition-all duration-500 ${
              event.status === 'past' ? 'bg-blue-800/50' : 'bg-purple-800/50'
            }`}>
              <div className="text-4xl transform transition-transform duration-500 hover:scale-110">
                {event.status === 'past' ? '📅' : '🚀'}
              </div>
            </div>
          )}
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-cyan-400/30">
            {event.category}
          </div>
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border ${
            event.status === 'past' 
              ? 'bg-green-500/90 text-white border-green-400/50' 
              : 'bg-yellow-500/90 text-black border-yellow-400/50'
          }`}>
            {event.status === 'past' ? 'Completed' : 'Upcoming'}
          </div>
        </div>
        
        {/* Event content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2 text-white transition-all duration-300 hover:text-cyan-300">{event.title}</h3>
          <div className="flex items-center mb-4 text-cyan-300">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{event.date}</span>
          </div>
          <p className="text-gray-300 mb-6 flex-grow">{event.description}</p>
          
          {/* Event metadata */}
          <div className="flex justify-between items-center mb-4 text-sm text-cyan-300">
            {event.duration && (
              <div className="flex items-center">
                <i className="fas fa-clock mr-1"></i>
                <span>{event.duration}</span>
              </div>
            )}
            {event.attendees && (
              <div className="flex items-center">
                <i className="fas fa-users mr-1"></i>
                <span>{event.attendees} attendees</span>
              </div>
            )}
          </div>
          
          {event.status === 'upcoming' ? (
            <a
              href={event.registrationLink || "#register"}
              className="mt-auto relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30 group text-center"
            >
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ) : (
            <div className="mt-auto flex items-center justify-between text-sm text-gray-400">
              <span>Event completed</span>
              <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                View Photos <i className="fas fa-external-link-alt ml-1"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const EventGrid: React.FC = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {filteredEvents.map((event, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 border border-cyan-400/30 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
        >
          <div className="h-48 relative overflow-hidden">
            {event.image ? (
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className={`w-full h-full flex items-center justify-center ${
                event.status === 'past' ? 'bg-blue-800/50' : 'bg-purple-800/50'
              }`}>
                <div className="text-4xl">
                  {event.status === 'past' ? '📅' : '🚀'}
                </div>
              </div>
            )}
            <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-cyan-400/30">
              {event.category}
            </div>
            <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border ${
              event.status === 'past' 
                ? 'bg-green-500/90 text-white border-green-400/50' 
                : 'bg-yellow-500/90 text-black border-yellow-400/50'
            }`}>
              {event.status === 'past' ? 'Completed' : 'Upcoming'}
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2 text-white">{event.title}</h3>
            <div className="flex items-center mb-3 text-cyan-300 text-sm">
              <i className="fas fa-calendar-alt mr-2"></i>
              <span>{event.date}</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">{event.description}</p>
            
            {event.status === 'upcoming' ? (
              <a
                href={event.registrationLink || "#register"}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-center block"
              >
                Register Now
              </a>
            ) : (
              <div className="text-center text-gray-400 text-sm">
                Event completed
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="events" className="relative py-20 bg-gray-950 overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hexagonal Grid Overlay */}
        <div className="absolute inset-0 hex-grid opacity-20"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        
        {/* Connection Lines */}
        <div className="absolute inset-0 connection-lines"></div>
        
        {/* Floating Tech Elements */}
        <div className="absolute top-40 left-1/4 w-10 h-10 border border-cyan-400/30 rounded-lg transform rotate-45 animate-float-tech"></div>
        <div className="absolute bottom-40 right-1/3 w-6 h-6 border border-purple-400/30 rounded-full animate-float-tech" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 border border-blue-400/30 transform rotate-12 animate-float-tech" style={{animationDelay: '4s'}}></div>
        
        {/* Animated Scan Lines */}
        <div className="absolute inset-0 scan-lines"></div>
      </div>

      <div className="container my-10 mx-auto px-4 relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Events Timeline
            </span>
          </h2>
          
          {/* Animated Tech Underline */}
          <div className="flex justify-center mb-8">
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full animate-tech-underline"></div>
          </div>
          
          

        {/* Event Slideshow */}
        <div className="mb-20 animate-fade-in-up">
          <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl group border border-cyan-400/20">
            <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out">
              {eventImages.map((image, index) => (
                <div 
                  key={index} 
                  className="w-full h-full flex-shrink-0 relative transition-transform duration-700"
                  style={{ 
                    transform: `translateX(-${currentSlide * 100}%)`,
                    opacity: index === currentSlide ? 1 : 0,
                    transition: 'opacity 0.7s ease-in-out',
                    position: 'absolute',
                    top: 0,
                    left: `${index * 100}%`
                  }}
                >
                  <img 
                    src={image} 
                    alt={`Event ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h4 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {eventTitles[index]}
                    </h4>
                    <p className="text-cyan-200 mb-4">{eventDescriptions[index]}</p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300">MSA IIIT Dharwad Event</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button 
              onClick={goToPrevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-cyan-500/80 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={goToNextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-cyan-500/80 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {eventImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-cyan-500 scale-125' : 'bg-white/60 hover:bg-white'
                  }`}
                ></button>
              ))}
            </div>

            {/* Slide counter */}
            <div className="absolute top-6 right-6 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {currentSlide + 1} / {eventImages.length}
            </div>
          </div>
        </div>

        {/* Calendar Integration */}
        <div className="mt-16 bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-400/20">
          <h3 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Subscribe to Our Calendar
          </h3>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-300 flex-1">
              Never miss an event! Subscribe to our calendar and get automatic updates for all upcoming events.
            </p>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30">
                <i className="fab fa-google mr-2"></i>Google Calendar
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30">
                <i className="fas fa-calendar-alt mr-2"></i>iCalendar
              </button>
            </div>
          </div>
        </div>

        </div>
        
        
        {/* Results Count */}
        <div className="text-cyan-300 mb-6 text-center">
          Showing {filteredEvents.length} of {events.length} events
        </div>

        {viewMode === 'timeline' ? (
          <>
            {/* Timeline navigation */}
            <div className="flex justify-center mb-10">
              <div className="bg-gray-800/50 rounded-full p-2 flex backdrop-blur-sm border border-cyan-400/20">
                <button 
                  onClick={() => setActiveEvent(prev => Math.max(0, prev - 1))}
                  disabled={activeEvent === 0 || isScrolling}
                  className="px-4 py-2 rounded-full bg-gray-700/80 hover:bg-cyan-600/80 transition-colors mr-2 disabled:opacity-50 disabled:cursor-not-allowed text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="flex items-center px-4">
                  <span className="text-cyan-400 font-medium">{activeEvent + 1}</span>
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-gray-400">{filteredEvents.length}</span>
                </div>
                <button 
                  onClick={() => setActiveEvent(prev => Math.min(filteredEvents.length - 1, prev + 1))}
                  disabled={activeEvent === filteredEvents.length - 1 || isScrolling}
                  className="px-4 py-2 rounded-full bg-gray-700/80 hover:bg-cyan-600/80 transition-colors ml-2 disabled:opacity-50 disabled:cursor-not-allowed text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Timeline container */}
            <div className="relative">
              {/* Timeline line with gradient animation */}
              <div className="absolute left-0 right-0 top-40 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40 animate-pulse"></div>
              </div>
              
              {/* Scrollable timeline */}
              <div 
                ref={timelineRef}
                className="flex overflow-x-auto py-10 px-4 scrollbar-hide"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onTouchMove={handleTouchMove}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
              >
                <div className="flex items-center">
                  {filteredEvents.map((event, index) => (
                    <React.Fragment key={index}>
                      <EventCard event={event} index={index} />
                      {/* Connector line between events with animation */}
                      {index < filteredEvents.length - 1 && (
                        <div className="flex items-center justify-center w-16 relative">
                          <div className="w-0.5 h-16 bg-gradient-to-b from-cyan-500 to-purple-500 opacity-30"></div>
                          <div className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white animate-ping opacity-75"></div>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Event indicator dots */}
            {/* <div className="flex justify-center mt-8">
              <div className="flex space-x-3">
                {filteredEvents.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => !isScrolling && setActiveEvent(index)}
                    disabled={isScrolling}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeEvent === index 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 scale-125' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    } ${isScrolling ? 'opacity-50' : ''}`}
                  ></button>
                ))}
              </div>
            </div> */}
          </>
        ) : (
          <EventGrid />
        )}

        {/* Controls Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-gray-900/50 backdrop-blur-xl rounded-2xl p-4 border border-cyan-400/20">
          {/* View Toggle */}
          <div className="flex items-center">
            <span className="text-cyan-300 mr-3">View:</span>
            <div className="flex bg-gray-800/70 rounded-lg p-1">
              <button
                onClick={() => setViewMode('timeline')}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  viewMode === 'timeline' 
                    ? 'bg-cyan-600 text-white shadow-lg' 
                    : 'text-cyan-300 hover:text-white'
                }`}
              >
                <i className="fas fa-timeline mr-2"></i>Timeline
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-cyan-600 text-white shadow-lg' 
                    : 'text-cyan-300 hover:text-white'
                }`}
              >
                <i className="fas fa-th-large mr-2"></i>Grid
              </button>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-cyan-400"></i>
              </div>
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800/70 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-gray-800/70 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Auto-play Toggle */}
          {viewMode === 'timeline' && (
            <div className="flex items-center">
              <span className="text-cyan-300 mr-3">Auto-play:</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoPlay}
                  onChange={() => setAutoPlay(!autoPlay)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
              </label>
            </div>
          )}
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
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
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

        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-float-tech { animation: float-tech 8s ease-in-out infinite; }
        .animate-tech-underline { animation: tech-underline 2s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-ping { animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; }
      `}</style>
    </section>
  );
};

export default Events;