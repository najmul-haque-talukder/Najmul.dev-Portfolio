import React, { Suspense, useEffect, useState } from 'react';
import ProjectCard from '../../Components/ProjectCard';

const Section5 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/Database/projects")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);




  return (
    <div className='text-white bg-black border-b border-gray-800 pb-20'>
      <div className='py-10 px-4 sm:px-10 md:px-20 xl:px-40 2xl:px-60'>
        
        {/* Heading */}
        <div className='mb-10'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-center max-w-4xl mx-auto pb-3'>
            Creativity Meets Code
          </h1>
          <p className='text-sm sm:text-base text-gray-300 text-center max-w-xl sm:max-w-2xl mx-auto'>
            A collection of the projects I’ve built over time — <br />
            <span className='font-semibold text-white'>
              each one helping me grow, learn, and improve as a developer.
            </span>
          </p>
        </div>


        <marquee direction="left" className="text-xl p-4">Projects in on The Working Stage... <span className='text-2xl text-yellow-200'>Very soon Project are Showing in the Web inshaa-allah</span></marquee>
        {/* Project Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8'>
          { data && data.map(item => (
            
                <ProjectCard
                key={item.id}
                title={item.title}
                desc={item.description}
                img={item.image}
                tech={item.tech}
                liveLink={item.liveLink}
                codeLink={item.codeLink}
                />
          ))} 
        </div>

      </div>
    </div>
  );
};

export default Section5;
