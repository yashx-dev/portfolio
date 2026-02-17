import React from 'react';

const AboutSkills = () => {
  const stats = [
    { value: '1+', label: 'Year Building' },
    { value: '5+', label: 'Projects Completed' },
  ];

  const skillCategories = [
    {
      title: 'FRONTEND_',
      skills: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'TypeScript', 'React', 'Next.js']
    },
    {
      title: 'BACKEND_',
      skills: ['Node.js', 'Express', 'MongoDB', 'Flask', 'Python']
    },
    {
      title: 'DEV TOOLS_',
      skills: ['Git', 'VS Code', 'Postman',  'Figma']
    }
  ];

  return (
    <section id="about" className="py-20 md:py-24 border-t border-[#3a3a3a]">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-['Archivo'] text-[clamp(2rem,6vw,2.25rem)] font-bold tracking-[-0.05em] text-[#b8a58b] opacity-90">
            About_
          </h2>
          <div className="w-12 md:w-16 h-px bg-[#b8a58b] opacity-50 mt-4" />
        </div>

        {/* Bio Section */}
        <div className="max-w-3xl mb-12">
          <p className="text-[clamp(1rem,3vw,1.25rem)] text-[#a0a0a0] leading-relaxed mb-6">
            I'm a developer focused on learning by building. Over the past year, 
            I've completed 5+ full-stack projects using the <span className="text-[#b8a58b]">MERN</span> stack and <span className="text-[#b8a58b]">Next.js</span>. 
            I enjoy turning ideas into real, working applications.
          </p>

          <p className="text-[clamp(1rem,3vw,1.2rem)] text-[#a0a0a0] leading-relaxed">
            Currently diving deeper into <span className="text-[#b8a58b]">TypeScript</span>, exploring backend architecture, 
            and building projects that solve real problems.
          </p>
        </div>

        {/* Stats Row - Minimal */}
        <div className="flex gap-12 mb-12 pb-8 border-b border-[#3a3a3a]">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-[clamp(1.5rem,4vw,2rem)] font-bold text-[#b8a58b]">
                {stat.value}
              </div>
              <div className="text-sm text-[#a0a0a0] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <h3 className="font-['Archivo'] text-[clamp(0.875rem,2vw,1rem)] tracking-[0.05em] mb-4 pb-2 border-b border-[#3a3a3a] text-[#b8a58b] opacity-70 group-hover:border-[#b8a58b] transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-[clamp(0.75rem,1.5vw,0.875rem)] border border-[#3a3a3a] text-[#a0a0a0] hover:border-[#b8a58b] hover:text-[#b8a58b] hover:bg-[#b8a58b]/5 transition-all duration-300 cursor-default rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Stack Highlight */}
        <div className="mt-12 pt-8 border-t border-[#3a3a3a]">
          <p className="text-sm text-[#a0a0a0] mb-4">core stack //</p>
          <div className="flex flex-wrap gap-4">
            <span className="text-[#b8a58b] font-mono text-sm">MERN</span>
            <span className="text-[#a0a0a0]">/</span>
            <span className="text-[#b8a58b] font-mono text-sm">Next.js</span>
            <span className="text-[#a0a0a0]">/</span>
            <span className="text-[#b8a58b] font-mono text-sm">TypeScript</span>
            <span className="text-[#a0a0a0]">/</span>
            <span className="text-[#b8a58b] font-mono text-sm">Flask</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;