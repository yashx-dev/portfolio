import React from 'react';

const Journey = () => {
  const timeline = [
    {
      id: 1,
      year: '2024 — Present',
      title: 'Learning Full-Stack Development',
      company: 'Self-Taught Journey',
      location: 'Online',
      description: 'Dedicated to mastering the MERN stack through hands-on projects. Building real applications to understand frontend-backend integration.',
      type: 'education'
    },
    {
      id: 2,
      year: '2023 — 2024',
      title: 'First Steps in Web Development',
      company: 'Personal Projects',
      location: 'Remote',
      description: 'Started with HTML, CSS, and JavaScript. Built 5+ projects including a weather app, todo list manager, and a simple e-commerce frontend.',
      type: 'education'
    },
    {
      id: 3,
      year: '2023',
      title: 'The Beginning',
      company: 'Learning Journey',
      location: 'Online',
      description: 'Discovered my passion for coding. Started with free resources, YouTube tutorials, and online documentation. Built my first "Hello World" in JavaScript.',
      type: 'education'
    }
  ];

  return (
    <section id="journey" className="py-20 md:py-24 border-t border-[#3a3a3a]">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-['Archivo'] text-[clamp(2rem,6vw,2.25rem)] font-bold tracking-[-0.05em] text-[#b8a58b] opacity-90">
            Journey_
          </h2>
          <div className="w-12 md:w-16 h-px bg-[#b8a58b] opacity-50 mt-4" />
        </div>

        {/* Simple Intro */}
        <div className="max-w-2xl mb-12">
          <p className="text-[clamp(1rem,3vw,1.2rem)] text-[#a0a0a0] leading-relaxed">
            My path into web development started in 2023. Here's how it's been going so far —
            from first lines of code to building full-stack applications.
          </p>
        </div>

        {/* Simple Timeline - No complex alternating layout */}
        <div className="relative">
          {/* Simple vertical line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-px h-full bg-[#3a3a3a]" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.id} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-[#b8a58b] opacity-70 z-10" />

                {/* Content - alternating left/right on desktop, full width on mobile */}
                <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                }`}>
                  <div className="border border-[#3a3a3a] p-6 hover:border-[#b8a58b] transition-all duration-300 group">
                    
                    {/* Year */}
                    <div className="flex items-center gap-3 mb-3 md:justify-end">
                      <span className="text-xs font-mono text-[#b8a58b] opacity-70">
                        {item.year}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 border border-[#6d8a7d] text-[#6d8a7d]">
                        LEARNING
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-['Archivo'] text-lg md:text-xl font-bold text-[#f0f0f0] group-hover:text-[#b8a58b] transition-colors mb-2">
                      {item.title}
                    </h3>
                    
                    {/* Company */}
                    <div className="flex items-center gap-2 text-sm text-[#a0a0a0] mb-3 md:justify-end">
                      <span>{item.company}</span>
                      <span className="w-1 h-1 bg-[#3a3a3a] rounded-full" />
                      <span>{item.location}</span>
                    </div>

                    {/* Description */}
                    <p className={`text-sm text-[#a0a0a0] leading-relaxed ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-16 text-center">
          <div className="inline-block border border-[#3a3a3a] px-6 py-4">
            <p className="text-sm text-[#a0a0a0]">
              <span className="text-[#b8a58b]">Currently:</span> Building more projects, 
              learning TypeScript, and documenting everything on Instagram
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;