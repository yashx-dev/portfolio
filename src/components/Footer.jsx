import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 md:py-8 border-t border-[#3a3a3a] mt-12 md:mt-16">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-xs text-[#a0a0a0] order-2 sm:order-1">
            © {currentYear}
          </div>
          <div className="text-xs text-[#a0a0a0] italic order-1 sm:order-2">
            Built with precision
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
