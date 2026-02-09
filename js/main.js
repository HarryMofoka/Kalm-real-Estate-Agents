document.addEventListener('DOMContentLoaded', () => {
    // 1. Loader Logic
    const loader = document.getElementById('loader');
    
    // Simulate loading time or wait for window load
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            // Trigger Hero Animations after loader is gone
            triggerHeroAnimations();
        }, 1500); // 1.5s delay for effect
    });

    function triggerHeroAnimations() {
        // Find reveal-text elements in hero and set them to running or add class
        // In css I set animation-play-state: running if I added a .paused class, 
        // but here I used a simple approach. 
        // Let's just manually reset animations or let them run. 
        // Actually, CSS keyframes run on load. 
        // To sync with loader, let's add a class to body or hero when loaded.
        const hero texts = document.querySelectorAll('.hero-title .reveal-text, .hero-subtitle');
        texts.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.2}s`;
            el.classList.add('visible'); // If we change CSS to wait for this class
        });
    }

    // 2. Mobile Menu
    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const navOverlay = document.getElementById('nav-overlay');
    const navLinks = document.querySelectorAll('.mobile-nav-links a');

    function toggleMenu() {
        navOverlay.classList.toggle('open');
        document.body.style.overflow = navOverlay.classList.contains('open') ? 'hidden' : '';
    }

    menuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
    
    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // 3. Init Lucide Icons
    lucide.createIcons();

    // 4. Scroll Reveal
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Unobserve after reveal
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));

    // 5. Testimonial/Property Slider
    const track = document.getElementById('slider-track');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let slideIndex = 0;
    
    // Calculate items per view based on window width
    function getItemsPerView() {
        return window.innerWidth >= 768 ? 2 : 1;
    }
    
    function updateSlider() {
        const items = document.querySelectorAll('.slide-card');
        if (items.length === 0) return;
        
        const cardWidth = items[0].offsetWidth; // includes padding
        const gap = 32; // 2rem
        const moveAmount = (cardWidth + gap) * slideIndex;
        
        track.style.transform = `translateX(-${moveAmount}px)`;
        
        // Button States
        const totalItems = items.length;
        const itemsPerView = getItemsPerView();
        const maxIndex = totalItems - itemsPerView; /* This prevents empty space at end */
        
        prevBtn.style.opacity = slideIndex === 0 ? '0.5' : '1';
        prevBtn.style.pointerEvents = slideIndex === 0 ? 'none' : 'auto';
        
        nextBtn.style.opacity = slideIndex >= maxIndex ? '0.5' : '1';
        nextBtn.style.pointerEvents = slideIndex >= maxIndex ? 'none' : 'auto';
    }

    nextBtn.addEventListener('click', () => {
        const items = document.querySelectorAll('.slide-card');
        const itemsPerView = getItemsPerView();
        if (slideIndex < items.length - itemsPerView) {
            slideIndex++;
            updateSlider();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (slideIndex > 0) {
            slideIndex--;
            updateSlider();
        }
    });

    // Handle Resize
    window.addEventListener('resize', updateSlider);
    updateSlider(); // Initial call

    // 6. Services Dynamic Section
    const serviceText = document.getElementById('service-text');
    const progressBar = document.getElementById('progress-bar');
    const bgIds = ['bg-1', 'bg-2', 'bg-3'];
    const services = [
        "Selling Property",
        "Buying Property",
        "Renting Property" // Or "Valuation"
    ];
    let serviceIndex = 0;
    const duration = 5000; // 5 seconds per slide
    let serviceInterval;

    function animateService() {
        // Text Animation Out
        serviceText.classList.remove('anim-text-enter');
        serviceText.classList.add('anim-text-exit');

        setTimeout(() => {
            // Update Text
            serviceText.textContent = services[serviceIndex];
            
            // Text Animation In
            serviceText.classList.remove('anim-text-exit');
            serviceText.classList.add('anim-text-enter');
        }, 600); // match animation duration

        // Background Crossfade
        bgIds.forEach((id, idx) => {
            const el = document.getElementById(id);
            if (idx === serviceIndex) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });

        // Progress Bar Reset & Animate
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';
        
        // Force reflow
        void progressBar.offsetWidth;
        
        progressBar.style.transition = `width ${duration}ms linear`;
        progressBar.style.width = '100%';

        // Increment Index
        serviceIndex = (serviceIndex + 1) % services.length;
    }

    // Start Loop
    // Initial State
    progressBar.style.width = '100%';
    progressBar.style.transition = `width ${duration}ms linear`;
    serviceIndex = 1; // Prepare next
    serviceInterval = setInterval(animateService, duration);


    // 7. Accordion Logic
    const accordions = document.querySelectorAll('.accordion-item');
    
    accordions.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            const content = item.querySelector('.accordion-content');
            
            // Close all
            accordions.forEach(other => {
                other.classList.remove('active');
                other.querySelector('.accordion-content').style.maxHeight = 0;
            });
            
            if (!isActive) {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
