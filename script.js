// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            // Toggle menu visibility
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('block');
            
            // Update aria-expanded attribute
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
            
            // Animate the hamburger icon
            const svg = mobileMenuButton.querySelector('svg');
            if (!isExpanded) {
                // Transform to X
                svg.innerHTML = `
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                `;
            } else {
                // Transform back to hamburger
                svg.innerHTML = `
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                `;
            }
        });
        
        // Close mobile menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('block');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
                
                // Reset hamburger icon
                const svg = mobileMenuButton.querySelector('svg');
                svg.innerHTML = `
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                `;
            });
        });
    }
    
    // Terminal cursor blinking effect
    const terminalCursors = document.querySelectorAll('.terminal-cursor');
    
    terminalCursors.forEach(cursor => {
        let isVisible = true;
        
        // Start the blinking animation
        setInterval(() => {
            if (cursor) {
                cursor.style.opacity = isVisible ? '0' : '1';
                isVisible = !isVisible;
            }
        }, 500); // Blink every 500ms
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Only process internal links
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Nav link active state on scroll
    const sections = document.querySelectorAll('section');
    const navLinksArray = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    function updateActiveNavLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinksArray.forEach(link => {
            // Reset all links
            link.classList.remove('text-[#545643]', 'border-[#545643]');
            link.classList.add('text-[#80727B]');
            
            // Add active class to current section link
            const linkSection = link.getAttribute('data-section');
            if (linkSection === current) {
                link.classList.remove('text-[#80727B]');
                link.classList.add('text-[#545643]');
                
                // Add border for mobile nav links
                if (link.classList.contains('mobile-nav-link')) {
                    link.classList.add('border-[#545643]');
                }
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Initial call on page load
    
    // Back to top functionality
    const backToTopLinks = document.querySelectorAll('.back-to-top');
    
    backToTopLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
});