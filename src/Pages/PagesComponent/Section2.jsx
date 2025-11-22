import React, { useEffect, useState } from 'react';
import { Code2, Smartphone, Rocket, Palette, Plug, Zap } from 'lucide-react';
import { Link, Navigate } from 'react-router';

const servicesData = [
  {
    "id": 1,
    "title": "Modern Frontend Development",
    "description": "I build high-performance, scalable, and clean user interfaces using React, Next.js, and Tailwind CSS.",
    "icon": Code2
  },
  {
    "id": 2,
    "title": "Responsive Web Design",
    "description": "I create fully responsive, mobile-first websites that look perfect on every device and screen size.",
    "icon": Smartphone
  },
  {
    "id": 3,
    "title": "Landing Page & Portfolio Development",
    "description": "I design and develop fast, conversion-focused landing pages and modern portfolio websites.",
    "icon": Rocket
  },
  {
    "id": 4,
    "title": "Custom UI Component Development",
    "description": "I develop reusable, scalable UI components using React and Tailwind for a clean, consistent interface.",
    "icon": Palette
  },
  {
    "id": 5,
    "title": "API Integration & Data Handling",
    "description": "I integrate REST APIs and third-party services to make your applications dynamic and data-driven.",
    "icon": Plug
  },
  {
    "id": 6,
    "title": "Website Optimization & Bug Fixing",
    "description": "I boost website speed, fix UI bugs, solve JS errors, and enhance overall performance for smooth user experience.",
    "icon": Zap
  }
];

const Card = ({ title, desc, icon: Icon, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`
        group relative
        transform transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      <div className="
        relative overflow-hidden
        bg-gradient-to-br from-gray-900/30 to-gray-950/30
        border border-gray-800
        rounded-2xl p-6
        transition-all duration-500
        hover:border-blue-500/50
        hover:shadow-xl hover:shadow-blue-500/10
        hover:-translate-y-2
        h-full
      ">
        {/* Gradient overlay on hover */}
        <div className="
          absolute inset-0 
          bg-gradient-to-br from-blue-500/5 to-purple-500/5
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        "></div>

        {/* Icon */}
        <div className="
          relative mb-4
          w-14 h-14 
          flex items-center justify-center
          bg-gradient-to-br from-blue-500/10 to-purple-500/10
          rounded-xl
          group-hover:scale-110
          transition-transform duration-500
        ">
          <Icon className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-500" />
        </div>

        {/* Content */}
        <div className="relative space-y-3">
          <h3 className="
            text-xl font-bold 
            bg-gradient-to-r from-white to-gray-300
            bg-clip-text text-transparent
            group-hover:from-blue-400 group-hover:to-purple-400
            transition-all duration-500
          ">
            {title}
          </h3>
          <p className="
            text-gray-400 text-sm leading-relaxed
            group-hover:text-gray-300
            transition-colors duration-500
          ">
            {desc}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="
          absolute bottom-0 left-0 right-0 h-1
          bg-gradient-to-r from-blue-500 to-purple-500
          transform scale-x-0 group-hover:scale-x-100
          transition-transform duration-500 origin-left
        "></div>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setData(servicesData);
      setIsLoaded(true);
    }, 300);
  }, []);

  return (
    <div className='min-h-screen bg-gray-950/60 text-white px-4 sm:px-10 md:px-20 lg:px-32 py-20'>
      {/* Header */}
      <div className='max-w-7xl mx-auto'>
        <div className={`
          text-center mb-16
          transform transition-all duration-1000
          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
        `}>
          <div className="inline-block mb-4">
            <span className="
              px-4 py-2 
              bg-gradient-to-r from-blue-500/10 to-purple-500/10
              border border-blue-500/20
              rounded-full
              text-sm font-medium
              text-blue-400
            ">
              Services
            </span>
          </div>
          
          <h2 className='
            text-4xl sm:text-5xl md:text-6xl 
            font-bold 
            bg-gradient-to-r from-white via-blue-100 to-purple-100
            bg-clip-text text-transparent
            mb-6
          '>
            What I Do?
          </h2>
          
          <p className='
            max-w-2xl mx-auto 
            text-base sm:text-lg 
            text-gray-400 
            leading-relaxed
          '>
            I create modern and responsive web experiences that feel smooth, fast, and user-friendly.
            My focus is to turn ideas into clean, functional interfaces using React, Next.js, and Tailwind.
            <span className="block mt-2 text-blue-400/80">
              I love helping people and brands bring their digital vision to life.
            </span>
          </p>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {data.map((item, index) => (
            <Card
              key={item.id}
              title={item.title}
              desc={item.description}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`
          text-center mt-20
          transform transition-all duration-1000 delay-500
          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}>
          <Link to={"/contacts"}>
            <button onClick={()=> onscroll(0, 0)}  className="
                px-8 py-4
                bg-gradient-to-r from-blue-500 to-purple-600
                hover:from-blue-600 hover:to-purple-700
                rounded-full
                font-semibold
                transform hover:scale-105
                transition-all duration-300
                shadow-lg shadow-blue-500/25
            
            ">
                Let's Work Together
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}