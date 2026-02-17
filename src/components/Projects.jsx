import { FaInstagram } from "react-icons/fa";
const Projects = () => {
  const projects =[
  {
    title: "MULTI-VENDOR_ECOMMERCE",
    description: "Building a complete e-commerce platform where multiple sellers can list products, manage inventory, and track orders. Features include seller dashboard, product reviews, and payment integration.",
    tags: ["MERN", "Next.js", "Tailwind", "Redux", "Node.js", "MongoDB"],
    liveUrl: "https://github.com/YashKh-09/multi-vendor-ecommerce",
    codeUrl: "https://github.com/YashKh-09/multi-vendor-ecommerce",
  },
  {
    title: "SAAS_PROJECT_MANAGER",
    description: "Developing a project management tool with workspace creation, task assignments, real-time updates, and team collaboration features. Inspired by tools like Trello and Asana.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Socket.io", "Tailwind"],
    liveUrl: "https://github.com/YashKh-09/saas-project-manager",
    codeUrl: "https://github.com/YashKh-09/saas-project-manager",
  },
  {
    title: "AI_IMAGE_GENERATOR",
    description: "Creating an AI-powered app that generates images from text prompts. Integrates with OpenAI API, includes user galleries, and prompt history. Learning prompt engineering along the way.",
    tags: ["MERN", "OpenAI API", "Tailwind", "Cloudinary", "JWT"],
    liveUrl: "https://github.com/YashKh-09/ai-image-generator",
    codeUrl: "https://github.com/YashKh-09/ai-image-generator",
  },
  {
    title: "AUTH_SYSTEM_TEMPLATE",
    description: "Building a complete authentication system with email verification, password reset, OAuth (Google/GitHub), and role-based access control. Ready to use in any project.",
    tags: ["Next.js", "MongoDB", "NextAuth", "JWT", "TypeScript"],
    liveUrl: "https://github.com/YashKh-09/auth-system-template",
    codeUrl: "https://github.com/YashKh-09/auth-system-template",
  },
];

  return (
    <section id="work" className="py-20 md:py-24 border-t border-[#3a3a3a]">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-['Archivo'] text-[clamp(2rem,6vw,2.25rem)] font-bold tracking-[-0.05em] text-[#b8a58b] opacity-90">
            Projects_
          </h2>
          <div className="w-12 md:w-16 h-px bg-[#b8a58b] opacity-50 mt-4" />
        </div>

        {/* Projects Grid - Simple 2 column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-[#3a3a3a] hover:border-[#b8a58b] transition-all duration-500 p-6 md:p-8"
            >
              {/* Title */}
              <h3 className="font-['Archivo'] text-[clamp(1.25rem,4vw,1.5rem)] md:text-[clamp(1.5rem,3vw,1.75rem)] font-bold tracking-[-0.02em] text-[#f0f0f0] mb-4 group-hover:text-[#b8a58b] transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[#a0a0a0] text-[clamp(0.875rem,2.5vw,1rem)] leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tags - Minimal */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-[clamp(0.7rem,2vw,0.75rem)] text-[#a0a0a0]"
                  >
                    {tag}
                    {tagIndex < project.tags.length - 1 && (
                      <span className="ml-2 text-[#3a3a3a]">/</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Links - Simple */}
              <div className="flex gap-8">
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#a0a0a0] hover:text-[#b8a58b] transition-colors"
                >
                  Live Demo →
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#a0a0a0] hover:text-[#b8a58b] transition-colors"
                >
                  Code →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Link */}
        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/yashkh.layer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm text-[#a0a0a0] hover:text-[#b8a58b] transition-colors group"
          >
            <span className="w-8 h-px bg-[#3a3a3a] group-hover:bg-[#b8a58b] transition-colors" />
            <FaInstagram /> <span> Follow my coding journey on Instagram</span>
            <span className="w-8 h-px bg-[#3a3a3a] group-hover:bg-[#b8a58b] transition-colors" />
          </a>
        </div>

        {/* Optional: Small note */}
        <p className="text-center text-xs text-[#3a3a3a] mt-4">
          more projects coming soon
        </p>
      </div>
    </section>
  );
};

export default Projects;
