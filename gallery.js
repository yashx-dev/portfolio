// Image Gallery Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Gallery script loaded');
    
    // Create image gallery modal HTML
    const galleryModal = document.createElement('div');
    galleryModal.className = 'image-gallery-modal';
    galleryModal.innerHTML = `
        <div class="image-gallery-content">
            <button class="close-gallery">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <img class="enlarged-image" src="" alt="">
            <div class="image-description"></div>
        </div>
    `;
    document.body.appendChild(galleryModal);

    console.log('Gallery modal created');

    // Get elements
    const closeGalleryBtn = galleryModal.querySelector('.close-gallery');
    const enlargedImage = galleryModal.querySelector('.enlarged-image');
    const imageDescription = galleryModal.querySelector('.image-description');

    // Function to open image gallery
    function openImageGallery(imageSrc, altText, description) {
        console.log('Opening gallery with image:', imageSrc);
        
        // Set image source and show loading
        enlargedImage.src = imageSrc;
        enlargedImage.alt = altText || 'Project screenshot';
        enlargedImage.classList.add('image-loading');
        
        // Set description
        imageDescription.textContent = description || altText || '';
        
        // Show modal
        galleryModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Remove loading class when image loads
        enlargedImage.onload = function() {
            console.log('Image loaded successfully');
            enlargedImage.classList.remove('image-loading');
        };
        
        // Handle image error
        enlargedImage.onerror = function() {
            console.error('Failed to load image:', imageSrc);
            enlargedImage.classList.remove('image-loading');
            enlargedImage.alt = 'Image failed to load';
            imageDescription.textContent = 'Image failed to load. Please try again.';
        };
    }

    // Function to close image gallery
    function closeImageGallery() {
        console.log('Closing gallery');
        galleryModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Add click event to all project images
    const galleryTriggers = document.querySelectorAll('.image-gallery-trigger');
    console.log('Found gallery triggers:', galleryTriggers.length);
    
    galleryTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            console.log('Image clicked');
            
            // Find the image inside this trigger
            const img = this.querySelector('img');
            if (img) {
                const imageSrc = img.getAttribute('data-full-image') || img.src;
                const altText = img.alt;
                const description = img.getAttribute('data-description') || altText;
                
                console.log('Image source:', imageSrc);
                console.log('Alt text:', altText);
                
                // Open gallery
                openImageGallery(imageSrc, altText, description);
                
                // Prevent event bubbling
                e.stopPropagation();
            }
        });
    });

    // Also allow clicking directly on images
    const projectImages = document.querySelectorAll('.project-card img');
    projectImages.forEach(img => {
        img.addEventListener('click', function(e) {
            console.log('Direct image click');
            
            const imageSrc = this.getAttribute('data-full-image') || this.src;
            const altText = this.alt;
            const description = this.getAttribute('data-description') || altText;
            
            openImageGallery(imageSrc, altText, description);
            
            e.stopPropagation();
            e.preventDefault();
        });
    });

    // Close gallery on button click
    closeGalleryBtn.addEventListener('click', closeImageGallery);

    // Close gallery on overlay click
    galleryModal.addEventListener('click', function(e) {
        if (e.target === galleryModal) {
            closeImageGallery();
        }
    });

    // Close gallery on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && galleryModal.classList.contains('active')) {
            closeImageGallery();
        }
    });

    console.log('Gallery setup complete');
});