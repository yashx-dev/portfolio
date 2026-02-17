import Terminal from "./Terminal";

const Hero = () => {
  return (
    <section className="h-[90vh] w-screen mt-[10vh] flex items-center justify-center gap-40 lg:px-10">
      <div className="max-w-4xl text-center lg:text-left">
        <h1 className="font-['Archivo'] text-[clamp(2.5rem,8vw,4rem)] md:text-[clamp(3rem,6vw,4.5rem)] lg:text-[clamp(3.5rem,5vw,4.2rem)] font-black tracking-[-0.05em] leading-[1.1] mb-14 md:mb-12">
          Web Developer
          <br />
          <span className="text-[#b8a58b] opacity-80">
            &nbsp;& Digital Creator.
          </span>
        </h1>

        <p className="text-[clamp(1rem,3vw,1.5rem)] md:text-[clamp(1.125rem,2.5vw,1.25rem)] lg:text-[clamp(1.25rem,2vw,1.3rem)] text-[#a0a0a0] max-w-2xl mb-16 md:mb-12 leading-relaxed">
          From schema design to frontend execution, I build complete web systems
          with clarity and intent. I document my journey, experiments, and
          lessons as I grow into a stronger full-stack engineer.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 sm:justify-center lg:justify-start">
          <a href="#work">
            <button className=" px-16 py-4 border text-sm font-medium tracking-wide transition-all duration-300 text-center border-[#b8a58b] text-[#b8a58b] hover:bg-[#b8a58b] hover:text-[#0a0a0a]">
              View Work →
            </button>
          </a>
          <a href="#contact">
            <button className=" px-16 py-4 border text-sm font-medium tracking-wide transition-all duration-300 text-center border-[#3a3a3a] text-[#f0f0f0] hover:border-[#6d8a7d] hover:text-[#6d8a7d]">
              Contact
            </button>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:block mt-16">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-xs text-[#a0a0a0] hover:text-[#b8a58b] transition-colors group"
          >
            <span className="w-8 h-px bg-[#3a3a3a] group-hover:bg-[#b8a58b] transition-colors" />
            <span>Scroll to explore</span>
          </a>
        </div>
      </div>
      <Terminal />
    </section>
  );
};

export default Hero;