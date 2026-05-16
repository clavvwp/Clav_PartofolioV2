/*
========================================
CLAV PREMIUM PORTFOLIO - script.js
VERSION: 3.0 (PREMIUM FUTURISTIC EDITION)

⚡ ADVANCED FEATURES:
1. Premium Smooth Scroll (Lenis)
2. Advanced GSAP Animations
3. Scroll Trigger Effects
4. Custom Interactive Cursor
5. Magnetic Button Effects
6. Particle System
7. Dynamic Background Interactions
8. Text Reveal & Stagger Animations
9. Parallax Effects
10. Click-driven Modal Animations

========================================
*/

// ===== ADVANCED ANIMATION CONFIG =====
const animConfig = {
    cursorSpeed: 0.12,
    cursorFollowerSpeed: 0.06,
    lenisSmoothness: 1.2,
    loadingDuration: 2.5,
    hoverScaleAmount: 1.08,
    magneticForce: 0.25,
    scrollAnimDuration: 0.8,
    staggerDelay: 0.08,
    particleCount: 50,
    mouseTrailDistance: 30
};

// ===== GLOBAL STATE =====
let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0, followerX = 0, followerY = 0;
let lenis = null, activeFilter = 'all', currentPage = getCurrentPage();
let isLoadingComplete = false;
let magneticButtons = [];

// Get current page from URL
function getCurrentPage() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('work')) return 'work';
    if (path.includes('about')) return 'about';
    if (path.includes('services')) return 'services';
    if (path.includes('gallery')) return 'gallery';
    if (path.includes('team')) return 'team';
    if (path.includes('project')) return 'project';
    if (path.includes('contact')) return 'contact';
    return 'home';
}

// Capitalize text utility
function capitalizeText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// Navigate to project detail page
function navigateToProject(projectId) {
    window.location.href = `project.html?id=${projectId}`;
}

// ===== PREMIUM LOADING SCREEN WITH CINEMATIC ENTRANCE =====
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (!loadingScreen) return;

    const loadingLogo = document.querySelector('.loading-logo');
    const loadingProgress = document.querySelector('.loading-progress');

    // Cinematic logo reveal
    if (loadingLogo) {
        gsap.from(loadingLogo, {
            opacity: 0,
            scale: 0.2,
            rotation: -20,
            duration: 0.8,
            ease: 'back.out'
        });

        // Pulsing glow effect
        gsap.to(loadingLogo, {
            textShadow: [
                '0 0 20px rgba(0, 217, 255, 0.5)',
                '0 0 40px rgba(187, 0, 255, 0.4)',
                '0 0 20px rgba(0, 217, 255, 0.5)'
            ],
            duration: 2,
            repeat: -1,
            ease: 'sine.inOut'
        });
    }

    // Smooth progress bar animation
    if (loadingProgress) {
        gsap.to(loadingProgress, {
            width: '100%',
            duration: 2,
            ease: 'cubic.out'
        });
    }

    // Hide loading screen with blur transition
    setTimeout(() => {
        gsap.to(loadingScreen, {
            opacity: 0,
            backdropFilter: 'blur(10px)',
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: () => {
                loadingScreen.classList.add('hidden');
                isLoadingComplete = true;
                
                // Trigger initial page animations after loading completes
                animatePageElements();
            }
        });
    }, animConfig.loadingDuration);
}

// ===== LENIS SMOOTH SCROLL INITIALIZATION =====
function initLenis() {
    lenis = new Lenis({
        duration: 0.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 2.5,
        smoothTouch: true,
        touchMultiplier: 4.0,
        infinite: false
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Integrate with GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
}

// ===== ADVANCED CUSTOM CURSOR WITH PARTICLE TRAIL =====
function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursorFollower');

    if (!cursor || !cursorFollower) return;

    // Cursor particle trail system
    let particles = [];
    const particlePool = [];

    function createParticle(x, y) {
        if (particles.length > animConfig.particleCount) {
            const p = particles.shift();
            p.element.remove();
        }

        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 3px;
            height: 3px;
            background: rgba(0, 217, 255, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9997;
            left: ${x}px;
            top: ${y}px;
            box-shadow: 0 0 8px rgba(0, 217, 255, 0.8);
        `;
        document.body.appendChild(particle);

        gsap.to(particle, {
            opacity: 0,
            scale: 0,
            duration: 0.8,
            ease: 'power2.out',
            onComplete: () => {
                particle.remove();
            }
        });

        particles.push({ element: particle, x, y });
    }

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Create particle trail every 10px
        if (Math.random() > 0.7) {
            createParticle(mouseX, mouseY);
        }
    });

    // Smooth cursor animation
    function animateCursor() {
        cursorX += (mouseX - cursorX) * animConfig.cursorSpeed;
        cursorY += (mouseY - cursorY) * animConfig.cursorSpeed;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        followerX += (mouseX - followerX) * animConfig.cursorFollowerSpeed;
        followerY += (mouseY - followerY) * animConfig.cursorFollowerSpeed;

        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Interactive cursor on hover
    const interactiveElements = document.querySelectorAll('a, button, .cta-button, input, textarea, .project-card, .service-card');
    interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            cursor.style.opacity = '0.2';
            cursorFollower.style.boxShadow = '0 0 25px rgba(0, 217, 255, 0.8)';
            gsap.to(cursorFollower, { scale: 1.5, duration: 0.2 });
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.opacity = '1';
            cursorFollower.style.boxShadow = '0 0 10px rgba(0, 217, 255, 0.4)';
            gsap.to(cursorFollower, { scale: 1, duration: 0.2 });
        });
    });
}

// ===== PREMIUM NAVBAR WITH SMART BEHAVIOR =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    // Update active link
    navLinks.forEach((link) => {
        link.classList.remove('active');
        const href = link.getAttribute('href').toLowerCase();
        if (currentPage === 'home' && href.includes('index')) {
            link.classList.add('active');
        } else if (href.includes(currentPage)) {
            link.classList.add('active');
        }
    });

    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navbarMenu.style.display = navbarMenu.style.display === 'flex' ? 'none' : 'flex';
            mobileMenuToggle.classList.toggle('active');
            
            // Animate menu items
            gsap.from(navbarMenu.querySelectorAll('li'), {
                opacity: 0,
                y: -20,
                stagger: 0.08,
                duration: 0.4
            });
        });
    }

    // Smart navbar hide/show on scroll
    let lastScrollY = 0;
    if (lenis) {
        lenis.on('scroll', (e) => {
            const delta = e - lastScrollY;
            if (delta > 100) {
                navbar.classList.add('hidden');
                lastScrollY = e;
            } else if (delta < -100) {
                navbar.classList.remove('hidden');
                lastScrollY = e;
            }
        });
    }

    // Navbar glow on mouse position
    document.addEventListener('mousemove', (e) => {
        if (navbar && isLoadingComplete) {
            const navRect = navbar.getBoundingClientRect();
            const distance = Math.hypot(
                e.clientX - navRect.left - navRect.width / 2,
                e.clientY - navRect.top - navRect.height / 2
            );
            
            if (distance < 300) {
                const opacity = Math.max(0, 1 - distance / 300) * 0.2;
                navbar.style.boxShadow = `0 10px 40px rgba(0, 217, 255, ${0.08 + opacity}), inset 0 1px 0 rgba(255, 255, 255, 0.08)`;
            } else {
                navbar.style.boxShadow = `0 10px 40px rgba(0, 217, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.08)`;
            }
        }
    });
}

// ===== HERO SECTION ANIMATIONS =====
function initHeroSection() {
    const hero = document.getElementById('hero');
    if (!hero) return;

    // Parallax layers
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    parallaxLayers.forEach((layer) => {
        const depth = parseFloat(layer.getAttribute('data-depth')) || 0;
        gsap.to(layer, {
            y: () => window.innerHeight * depth * 0.3,
            scrollTrigger: {
                trigger: hero,
                start: 'top top',
                end: 'bottom center',
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;
                    layer.style.transform = `translateY(${progress * 100 * depth}px)`;
                }
            }
        });
    });

    // Generate particles
    generateHeroParticles();

    // Scroll indicator animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        gsap.to(scrollIndicator, {
            y: 10,
            opacity: 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }
}

// Generate floating particles in hero
function generateHeroParticles() {
    const container = document.getElementById('particlesContainer');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        const delay = Math.random() * 3;
        particle.style.setProperty('--delay', delay + 's');
        
        gsap.to(particle, {
            y: -Math.random() * 200 - 100,
            opacity: [0, 0.6, 0],
            duration: Math.random() * 3 + 2,
            repeat: -1,
            delay: delay,
            ease: 'sine.inOut'
        });

        container.appendChild(particle);
    }
}

// ===== FEATURED PROJECTS RENDER WITH 3D EFFECTS =====
function renderFeaturedProjects() {
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;

    const featuredProjects = projects.slice(0, 3);
    grid.innerHTML = '';

    featuredProjects.forEach((project, index) => {
        const card = document.createElement('a');
        card.href = '#';
        card.className = 'project-card';
        card.onclick = (e) => {
            e.preventDefault();
            // Animated transition to project page
            gsap.to(card, {
                scale: 1.05,
                duration: 0.2,
                onComplete: () => navigateToProject(project.id)
            });
        };

        card.innerHTML = `
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='img/placeholder.svg'">
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-meta">
                    <span class="project-year">${project.year}</span>
                    <span class="project-category">${capitalizeText(project.category)}</span>
                </div>
            </div>
        `;

        grid.appendChild(card);

        // 3D tilt effect on mouse move
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -12;
            const rotateY = ((x - centerX) / centerX) * 12;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                y: -15,
                duration: 0.4,
                ease: 'power2.out',
                transformPerspective: 1200
            });

            gsap.to(card.querySelector('.project-image'), {
                scale: 1.1,
                duration: 0.4,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                y: 0,
                duration: 0.6,
                ease: 'elastic.out(1, 0.6)'
            });
            gsap.to(card.querySelector('.project-image'), {
                scale: 1,
                duration: 0.6,
                ease: 'power2.out'
            });
        });
    });
}

// ===== MAGNETIC BUTTON EFFECTS =====
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.magnetic-btn, .cta-button');
    
    buttons.forEach((button) => {
        let bounds;
        
        button.addEventListener('mouseenter', () => {
            bounds = button.getBoundingClientRect();
        });
        
        button.addEventListener('mousemove', (e) => {
            if (!bounds) return;
            
            const x = e.clientX - bounds.left - bounds.width / 2;
            const y = e.clientY - bounds.top - bounds.height / 2;
            
            const distance = Math.sqrt(x * x + y * y);
            const maxDistance = Math.sqrt(
                bounds.width * bounds.width + bounds.height * bounds.height
            ) / 2;
            
            if (distance < maxDistance * 1.5) {
                const force = 1 - distance / (maxDistance * 1.5);
                gsap.to(button, {
                    x: x * force * animConfig.magneticForce,
                    y: y * force * animConfig.magneticForce,
                    duration: 0.3,
                    ease: 'power2.out',
                    overwrite: 'auto'
                });
            }
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.6)'
            });
        });
    });
}

// ===== SCROLL TRIGGER ANIMATIONS =====
function initScrollAnimations() {
    // Fade in sections on scroll
    gsap.utils.toArray('section').forEach((section) => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 20%',
                scrub: false,
                markers: false
            }
        });
    });

    // Parallax effect on images
    gsap.utils.toArray('.parallax-image').forEach((img) => {
        gsap.to(img, {
            y: () => img.offsetHeight * 0.2,
            scrollTrigger: {
                trigger: img,
                start: 'top center',
                end: 'bottom center',
                scrub: 1,
                markers: false
            }
        });
    });
}

// ===== PAGE ELEMENT ANIMATIONS AFTER LOADING =====
function animatePageElements() {
    // Hero title word reveal
    const titleWords = document.querySelectorAll('.text-reveal-word');
    if (titleWords.length > 0) {
        gsap.to(titleWords, {
            opacity: 1,
            y: 0,
            stagger: animConfig.staggerDelay,
            duration: 0.8,
            ease: 'back.out'
        });
    }

    // Fade in content
    gsap.from('.hero-subtitle, .hero-cta', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        delay: 0.4,
        ease: 'power2.out'
    });

    // Animate project cards
    const cards = document.querySelectorAll('.project-card');
    if (cards.length > 0) {
        gsap.from(cards, {
            opacity: 0,
            y: 30,
            stagger: animConfig.staggerDelay,
            duration: 0.8,
            delay: 0.2,
            ease: 'back.out',
            scrollTrigger: {
                trigger: '.featured-grid',
                start: 'top 80%'
            }
        });
    }
}

// ===== INIT: RENDER PROJECT DATA =====
function renderProjects() {
    const projectsList = document.querySelector('.projects-list');
    if (!projectsList) return;

    projectsList.innerHTML = '';
    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

    filteredProjects.forEach((project, index) => {
        const card = document.createElement('a');
        card.href = '#';
        card.className = 'project-card';
        card.style.animationDelay = `${index * animConfig.staggerDelay}s`;
        card.onclick = (e) => {
            e.preventDefault();
            navigateToProject(project.id);
        };

        card.innerHTML = `
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='img/placeholder.svg'">
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-meta">
                    <span class="project-year">${project.year}</span>
                    <span class="project-category">${capitalizeText(project.category)}</span>
                </div>
            </div>
        `;

        projectsList.appendChild(card);
    });
}

// ===== INIT: RENDER SERVICES =====
function renderServices() {
    const servicesGrid = document.querySelector('.services-grid');
    if (!servicesGrid) return;

    servicesGrid.innerHTML = '';
    services.forEach((service, index) => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.style.animationDelay = `${index * animConfig.staggerDelay}s`;
        card.innerHTML = `
            <div class="service-icon">${service.icon}</div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
        `;
        servicesGrid.appendChild(card);
    });
}

// ===== RESPONSIVE DESIGN HANDLER =====
function handleResponsive() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    if (window.innerWidth <= 768) {
        if (mobileMenuToggle) mobileMenuToggle.style.display = 'flex';
    } else {
        if (mobileMenuToggle) mobileMenuToggle.style.display = 'none';
        const navbarMenu = document.getElementById('navbarMenu');
        if (navbarMenu) navbarMenu.style.display = 'flex';
    }
}

// ===== MAIN INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen();
    initLenis();
    initCustomCursor();
    initNavbar();
    initHeroSection();
    initMagneticButtons();
    initScrollAnimations();

    // Render page-specific content
    renderFeaturedProjects();
    renderProjects();
    renderServices();

    // Handle responsive
    handleResponsive();
    window.addEventListener('resize', handleResponsive);

    // Add scroll progress indicator
    gsap.ticker.add(() => {
        const scrollProgress = lenis.actualScroll / (document.documentElement.scrollHeight - window.innerHeight);
        const progressBar = document.querySelector('.scroll-progress');
        if (progressBar) {
            progressBar.style.width = scrollProgress * 100 + '%';
        }
    });
});

// Utility: Project data (from previous script)
const projects = [
    {
        id: 1,
        title: "First Portofolio Project",
        category: "development",
        year: "2024",
        image: "img/project1.png",
        description: "A cutting-edge interactive platform designed for seamless user engagement. Built with modern web technologies and stunning animations.",
        gallery: ["img/project1.png", "img/project2.png"],
        role: "Design & Development"
    },
    {
        id: 2,
        title: "Company Profile Project",
        category: "Design",
        year: "2024",
        image: "img/project2.png",
        description: "Elegant branding and design system for luxury hospitality brand. Focused on minimalism and premium user experience.",
        gallery: ["img/project2.png", "img/project3.png"],
        role: "Design"
    },
    {
        id: 3,
        title: "Hospital Project",
        category: "development",
        year: "2025",
        image: "img/project3.png",
        description: "Revolutionary e-commerce platform with advanced filtering and personalization. Optimized for conversion and user retention.",
        gallery: ["img/project3.png", "img/project4.png"],
        role: "Development"
    },
    {
        id: 4,
        title: "Admin Page Project",
        category: "Development",
        year: "2025",
        image: "img/project4.png",
        description: "Complete rebranding for innovative health tech startup. Logo, guidelines, and digital presence redesign.",
        gallery: ["img/project4.png", "img/project5.png"],
        role: "Design"
    },
    {
        id: 5,
        title: "Base Create Studio",
        category: "design",
        year: "2023",
        image: "img/project5.jpg",
        description: "Portfolio website for creative agency. Showcasing work with smooth interactions and stunning visuals.",
        gallery: ["img/project5.jpg", "img/project6.jpg"],
        role: "Design & Development"
    },
    {
        id: 6,
        title: "AVVR Experience",
        category: "development",
        year: "2023",
        image: "img/project6.jpg",
        description: "Immersive VR experience platform with real-time interactions. Push boundaries of web-based VR technology.",
        gallery: ["img/project6.jpg", "img/project1.jpg"],
        role: "Development"
    }
];

// Services data
const services = [
    {
        id: 1,
        title: "UI/UX Design",
        description: "Beautiful and functional interfaces that delight users and drive conversions.",
        icon: "🎨"
    },
    {
        id: 2,
        title: "Web Development",
        description: "Fast, responsive, and modern websites built with the latest technologies.",
        icon: "💻"
    },
    {
        id: 3,
        title: "Branding",
        description: "Complete brand identity solutions including logos, guidelines, and materials.",
        icon: "✨"
    },
    {
        id: 4,
        title: "Motion Design",
        description: "Eye-catching animations and motion graphics that bring stories to life.",
        icon: "🎬"
    },
    {
        id: 5,
        title: "Strategy Consulting",
        description: "Data-driven insights to help you reach your business goals and maximize growth.",
        icon: "🎯"
    },
    {
        id: 6,
        title: "3D Visualization",
        description: "Immersive 3D renderings and visualizations for products and spaces.",
        icon: "🌐"
    }
];

// ===== RENDER: ALL PROJECTS (WORK PAGE) =====
function renderAllProjects(filterType = 'all') {
    const list = document.getElementById('projectsList');
    if (!list) return;

    const filtered = filterType === 'all' 
        ? projects 
        : projects.filter(p => p.category === filterType);

    list.innerHTML = '';

    filtered.forEach((project, index) => {
        const card = document.createElement('a');
        card.href = '#';
        card.className = 'project-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.onclick = (e) => {
            e.preventDefault();
            navigateToProject(project.id);
        };

        card.innerHTML = `
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='img/placeholder.svg'">
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-meta">
                    <span class="project-year">${project.year}</span>
                    <span class="project-category">${capitalizeText(project.category)}</span>
                </div>
            </div>
        `;

        list.appendChild(card);

        // Add 3D hover animations with GSAP
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate rotation based on cursor position relative to center
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg
            const rotateY = ((x - centerX) / centerX) * 10;
            
            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                y: -10,
                boxShadow: '0 20px 50px rgba(0, 217, 255, 0.2)',
                duration: 0.4,
                ease: 'power2.out',
                transformPerspective: 1200
            });
            
            // Parallax effect on image wrapper
            gsap.to(card.querySelector('.project-image-wrapper'), {
                x: ((x - centerX) / centerX) * 5,
                y: ((y - centerY) / centerY) * 5,
                duration: 0.4,
                ease: 'power2.out'
            });
            
            gsap.to(card.querySelector('.project-image'), {
                scale: 1.08,
                duration: 0.4,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                y: 0,
                boxShadow: '0 0 0px rgba(0, 217, 255, 0)',
                duration: 0.6,
                ease: 'elastic.out(1, 0.5)'
            });
            
            gsap.to(card.querySelector('.project-image-wrapper'), {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: 'elastic.out(1, 0.5)'
            });
            
            gsap.to(card.querySelector('.project-image'), {
                scale: 1,
                duration: 0.6,
                ease: 'power2.out'
            });
        });
    });
}

// ===== INIT: WORK PAGE FILTERS =====
function initWorkFilters() {
    const filterButtons = document.querySelectorAll('.filter-tag');
    if (filterButtons.length === 0) return;

    filterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            filterButtons.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            activeFilter = filter;
            renderAllProjects(filter);
            animateOnScroll();
        });
    });
}

// ===== LOAD: PROJECT DETAIL PAGE =====
function loadProjectDetail(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) {
        window.location.href = 'work.html';
        return;
    }

    // Fill hero
    const heroImage = document.getElementById('projectHeroImage');
    if (heroImage) {
        heroImage.style.backgroundImage = `url(${project.image})`;
    }

    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectMeta').textContent = `${project.year} • ${capitalizeText(project.category)}`;
    document.getElementById('projectDescription').textContent = project.description;
    document.getElementById('projectCategory').textContent = capitalizeText(project.category);
    document.getElementById('projectYear').textContent = project.year;
    document.getElementById('projectRole').textContent = project.role;

    // Fill gallery
    const gallery = document.getElementById('projectGallery');
    if (gallery) {
        gallery.innerHTML = project.gallery.map((img, i) => `
            <div class="gallery-image" style="animation-delay: ${i * 0.1}s">
                <img src="${img}" alt="Gallery ${i + 1}" onerror="this.src='img/placeholder.svg'">
            </div>
        `).join('');
    }
}

// ===== NAVIGATE: TO PROJECT PAGE =====
function navigateToProject(projectId) {
    sessionStorage.setItem('projectId', projectId);
    window.location.href = 'project.html';
}

// ===== RENDER: SERVICES PAGE =====
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;

    grid.innerHTML = services.map((service, index) => `
        <div class="service-card" style="animation-delay: ${index * 0.1}s">
            <div class="service-icon">${service.icon}</div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
        </div>
    `).join('');
}

// ===== RENDER: PROCESS TIMELINE =====
function renderProcess() {
    const timeline = document.getElementById('processTimeline');
    if (!timeline) return;

    timeline.innerHTML = processSteps.map((step, index) => `
        <div class="process-step" style="animation-delay: ${index * 0.2}s">
            <div class="process-number">${step.step}</div>
            <h3 class="process-title">${step.title}</h3>
            <p class="process-description">${step.description}</p>
        </div>
    `).join('');
}

// ===== RENDER: PRICING PLANS =====
function renderPricing() {
    const grid = document.getElementById('pricingGrid');
    if (!grid) return;

    grid.innerHTML = pricingPlans.map((plan, index) => `
        <div class="pricing-card ${plan.featured ? 'featured' : ''}" style="animation-delay: ${index * 0.2}s">
            ${plan.featured ? '<div class="pricing-label">MOST POPULAR</div>' : ''}
            <h3 class="pricing-name">${plan.name}</h3>
            <div class="pricing-price">${plan.price}</div>
            <p class="pricing-description">${plan.description}</p>
            <ul class="pricing-features">
                ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <a href="contact.html" class="cta-button magnetic-btn" style="width: 100%; text-align: center;">Choose Plan →</a>
        </div>
    `).join('');
}

// ===== RENDER: GALLERY PAGE =====
function renderGallery(filterType = 'all') {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    const filtered = filterType === 'all' ? galleryItems : galleryItems.filter(item => item.category === filterType);
    
    grid.innerHTML = filtered.map((item, index) => `
        <div class="gallery-item" data-id="${item.id}" style="animation-delay: ${index * 0.05}s">
            <div style="font-size: 3rem;">${item.icon}</div>
            <div class="gallery-overlay"></div>
        </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const id = item.dataset.id;
            const galleryItem = galleryItems.find(g => g.id == id);
            if (galleryItem) {
                openLightbox(galleryItem);
            }
        });
    });
}

// ===== LIGHTBOX FUNCTIONS =====
function openLightbox(item) {
    const modal = document.getElementById('lightboxModal');
    const img = document.getElementById('lightboxImage');
    const title = document.getElementById('lightboxTitle');
    const category = document.getElementById('lightboxCategory');

    img.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect fill='%231a1a1a' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' font-size='80' fill='%2300d9ff' text-anchor='middle' dominant-baseline='central'%3E${item.icon}%3C/text%3E%3C/svg%3E`;
    title.textContent = item.title;
    category.textContent = capitalizeText(item.category);
    modal.classList.add('active');

    gsap.from(modal, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
    });
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    modal.classList.remove('active');
}

// ===== INIT: GALLERY PAGE =====
function initGalleryPage() {
    renderGallery('all');

    const galleryTags = document.querySelectorAll('.gallery-tag');
    galleryTags.forEach(tag => {
        tag.addEventListener('click', () => {
            galleryTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            const filter = tag.dataset.filter;
            renderGallery(filter);
            animateOnScroll();
        });
    });

    const lightboxClose = document.getElementById('lightboxClose');
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    const modal = document.getElementById('lightboxModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeLightbox();
            }
        });
    }
}

// ===== RENDER: TEAM PAGE =====
function renderTeam() {
    const grid = document.getElementById('teamGrid');
    if (!grid) return;

    grid.innerHTML = teamMembers.map((member, index) => `
        <div class="team-member" style="animation-delay: ${index * 0.1}s">
            <div class="team-avatar">${member.emoji}</div>
            <h3 class="team-name">${member.name}</h3>
            <p class="team-role">${member.role}</p>
            <p class="team-bio">${member.bio}</p>
            <div class="team-socials">
                <a href="${member.socials.instagram}" class="team-social-link" title="Instagram">f</a>
                <a href="${member.socials.twitter}" class="team-social-link" title="Twitter">𝕏</a>
                <a href="${member.socials.linkedin}" class="team-social-link" title="LinkedIn">in</a>
            </div>
        </div>
    `).join('');
}

// ===== RENDER: TESTIMONIALS =====
function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return;

    grid.innerHTML = testimonials.map((testimonial, index) => `
        <div class="testimonial" style="animation-delay: ${index * 0.1}s">
            <div class="testimonial-stars">${testimonial.stars}</div>
            <div class="testimonial-quote">"</div>
            <p class="testimonial-text">${testimonial.text}</p>
            <p class="testimonial-author">${testimonial.author}</p>
            <p class="testimonial-role">${testimonial.role}</p>
        </div>
    `).join('');
}

// ===== RENDER: STATS =====
function renderStats() {
    const grid = document.getElementById('statsGrid');
    if (!grid) return;

    grid.innerHTML = stats.map((stat, index) => `
        <div class="stat" style="animation-delay: ${index * 0.1}s">
            <div class="stat-number">${stat.number}</div>
            <h3 class="stat-label">${stat.label}</h3>
            <p class="stat-description">${stat.description}</p>
        </div>
    `).join('');
}

// ===== INIT: MAGNETIC BUTTONS =====
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.magnetic-btn, .cta-button');
    
    buttons.forEach((btn) => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(btn, {
                x: x * animConfig.magneticForce,
                y: y * animConfig.magneticForce,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.5)'
            });
        });

        // Add glow on hover
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                boxShadow: `0 0 30px rgba(0, 217, 255, 0.6), 0 0 60px rgba(0, 217, 255, 0.3)`,
                duration: 0.3
            });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                boxShadow: '0 0 0px rgba(0, 217, 255, 0)',
                duration: 0.3
            });
        });
    });
}

// ===== SCROLL ANIMATIONS WITH GSAP =====
function animateOnScroll() {
    // Animate project cards
    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                once: true,
                markers: false
            },
            opacity: 0,
            y: 50,
            x: index % 2 === 0 ? -30 : 30,
            rotation: index % 2 === 0 ? -3 : 3,
            duration: animConfig.scrollAnimDuration,
            ease: 'power2.out'
        });
    });

    // Animate section titles with glow effect
    gsap.utils.toArray('.section-title').forEach((title) => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                once: true
            },
            opacity: 0,
            x: -50,
            duration: animConfig.scrollAnimDuration,
            ease: 'power3.out'
        });
    });

    // Add glow animation to titles on scroll
    gsap.utils.toArray('.section-title').forEach((title) => {
        gsap.to(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                onEnter: () => {
                    title.style.animation = 'neonPulse 2s ease-in-out infinite';
                }
            }
        });
    });

    // Animate about preview text
    gsap.utils.toArray('.about-preview-text').forEach((text) => {
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                start: 'top 80%',
                once: true
            },
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power2.out'
        });
    });

    // Animate skill items with stagger
    gsap.utils.toArray('.skill-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                once: true
            },
            opacity: 0,
            y: 40,
            rotation: -5,
            duration: animConfig.scrollAnimDuration,
            delay: index * animConfig.staggerDelay,
            ease: 'back.out'
        });
    });

    // Animate gallery images with parallax
    gsap.utils.toArray('.gallery-image').forEach((image, index) => {
        gsap.from(image, {
            scrollTrigger: {
                trigger: image,
                start: 'top 80%',
                once: true
            },
            opacity: 0,
            y: 50,
            scale: 0.8,
            duration: animConfig.scrollAnimDuration,
            delay: index * 0.15,
            ease: 'power2.out'
        });

        // Parallax effect on scroll
        gsap.to(image, {
            scrollTrigger: {
                trigger: image,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.5,
                markers: false
            },
            y: -50,
            opacity: 0.9
        });
    });

    // Animate form inputs
    gsap.utils.toArray('.form-group').forEach((group, index) => {
        gsap.from(group, {
            scrollTrigger: {
                trigger: group,
                start: 'top 85%',
                once: true
            },
            opacity: 0,
            x: index % 2 === 0 ? -30 : 30,
            duration: animConfig.scrollAnimDuration,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });

    // Animate hero title letter by letter
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        gsap.utils.toArray('.text-reveal-word').forEach((word, index) => {
            gsap.from(word, {
                opacity: 0,
                y: 30,
                rotation: -10,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'back.out'
            });
        });
    }

    // Animate CTA buttons
    gsap.utils.toArray('.cta-button').forEach((btn, index) => {
        gsap.from(btn, {
            scrollTrigger: {
                trigger: btn,
                start: 'top 85%',
                once: true
            },
            opacity: 0,
            scale: 0.8,
            y: 20,
            duration: animConfig.scrollAnimDuration,
            delay: index * 0.1,
            ease: 'elastic.out(1, 0.5)'
        });
    });

    // Add continuous glow pulse to neon elements
    gsap.utils.toArray('[class*="btn"]').forEach((btn) => {
        gsap.to(btn, {
            scrollTrigger: {
                trigger: btn,
                start: 'top 80%',
                onEnter: () => {
                    gsap.to(btn, {
                        boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)',
                        duration: 1.5,
                        repeat: -1,
                        yoyo: true,
                        ease: 'sine.inOut'
                    });
                },
                once: false
            }
        });
    });

    // Scroll-triggered text reveal
    gsap.utils.toArray('.page-subtitle').forEach((subtitle) => {
        gsap.from(subtitle, {
            scrollTrigger: {
                trigger: subtitle,
                start: 'top 80%',
                once: true
            },
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // Animate contact info items
    gsap.utils.toArray('.contact-info-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                once: true
            },
            opacity: 0,
            x: 30,
            duration: animConfig.scrollAnimDuration,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });

    // Parallax background elements
    gsap.utils.toArray('.hero-subtitle').forEach((text) => {
        gsap.to(text, {
            scrollTrigger: {
                trigger: text,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.3,
                markers: false
            },
            y: 30
        });
    });

    // Staggered animation for all list items
    const projectLists = gsap.utils.toArray('.projects-list, .featured-grid');
    projectLists.forEach((list) => {
        gsap.from(list.children, {
            scrollTrigger: {
                trigger: list,
                start: 'top 80%',
                once: true
            },
            opacity: 0,
            y: 40,
            duration: animConfig.scrollAnimDuration,
            stagger: animConfig.staggerDelay,
            ease: 'power2.out'
        });
    });

    // Scroll-triggered filter buttons animation
    gsap.utils.toArray('.filter-tag').forEach((tag, index) => {
        gsap.from(tag, {
            opacity: 0,
            scale: 0.8,
            duration: animConfig.scrollAnimDuration,
            delay: index * 0.05,
            ease: 'back.out'
        });
    });

    // ===== NEW PAGE ANIMATIONS =====

    // Service cards animation with rotation
    gsap.utils.toArray('.service-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                once: true
            },
            opacity: 0,
            y: 60,
            rotation: index % 2 === 0 ? 5 : -5,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'back.out'
        });
    });

    // Process timeline animation
    gsap.utils.toArray('.process-step').forEach((step, index) => {
        gsap.from(step, {
            scrollTrigger: {
                trigger: step,
                start: 'top 85%',
                once: true
            },
            opacity: 0,
            scale: 0.7,
            y: 50,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'back.out'
        });
    });

    // Pricing cards animation
    gsap.utils.toArray('.pricing-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                once: true
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power2.out'
        });
    });

    // Gallery items animation
    gsap.utils.toArray('.gallery-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                once: true
            },
            opacity: 0,
            scale: 0.6,
            rotation: Math.random() * 20 - 10,
            duration: 0.8,
            delay: index * 0.05,
            ease: 'elastic.out(1, 0.5)'
        });
    });

    // Team members animation
    gsap.utils.toArray('.team-member').forEach((member, index) => {
        gsap.from(member, {
            scrollTrigger: {
                trigger: member,
                start: 'top 85%',
                once: true
            },
            opacity: 0,
            y: 60,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'back.out'
        });
    });

    // Testimonials animation
    gsap.utils.toArray('.testimonial').forEach((testimonial, index) => {
        gsap.from(testimonial, {
            scrollTrigger: {
                trigger: testimonial,
                start: 'top 85%',
                once: true
            },
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            y: 30,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });

    // Stats animation with number count
    gsap.utils.toArray('.stat').forEach((stat, index) => {
        gsap.from(stat, {
            scrollTrigger: {
                trigger: stat,
                start: 'top 85%',
                once: true,
                onEnter: () => {
                    const numElement = stat.querySelector('.stat-number');
                    if (numElement) {
                        gsap.from(numElement, {
                            duration: 2,
                            ease: 'power2.out'
                        });
                    }
                }
            },
            opacity: 0,
            scale: 0.5,
            y: 50,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'back.out'
        });
    });
}

// ===== INIT: CONTACT PAGE PARTICLES =====
function initContactHeroParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        container.appendChild(particle);

        // Animate particle
        gsap.to(particle, {
            opacity: 0,
            y: -100,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 0.5,
            repeat: -1,
            ease: 'power1.inOut'
        });
    }

    // Create initial particles
    for (let i = 0; i < 50; i++) {
        createParticle();
    }
}

// ===== INIT: HERO CTA BUTTONS =====
function initContactHeroCTA() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = btn.dataset.action;
            
            if (action === 'start-project' || action === 'say-hello') {
                // Scroll to form
                const formSection = document.querySelector('.contact-form-section');
                if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    // Focus on first input
                    setTimeout(() => {
                        const firstInput = formSection.querySelector('input');
                        if (firstInput) firstInput.focus();
                    }, 800);
                }
            }
        });

        // Button hover animation
        btn.addEventListener('mouseenter', function() {
            gsap.to(this, { scale: 1.05, duration: 0.3 });
        });

        btn.addEventListener('mouseleave', function() {
            gsap.to(this, { scale: 1, duration: 0.3 });
        });
    });
}

// ===== INIT: ENHANCED CONTACT FORM ANIMATIONS =====
function initContactFormAnimations() {
    const formGroups = document.querySelectorAll('.form-group');
    
    // Stagger animation for form groups
    gsap.from(formGroups, {
        opacity: 0,
        x: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.2
    });

    // Input interactions
    formGroups.forEach((group, index) => {
        const input = group.querySelector('input, textarea');
        if (!input) return;

        input.addEventListener('focus', function() {
            gsap.to(this, { scale: 1.02, duration: 0.3 });
        });

        input.addEventListener('blur', function() {
            gsap.to(this, { scale: 1, duration: 0.3 });
        });
    });

    // Submit button animation
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('mouseenter', function() {
            gsap.to(this, { 
                y: -5,
                boxShadow: '0 20px 50px rgba(0, 217, 255, 0.6)',
                duration: 0.3 
            });
        });

        submitBtn.addEventListener('mouseleave', function() {
            gsap.to(this, { 
                y: 0,
                boxShadow: '0 10px 30px rgba(0, 217, 255, 0.4)',
                duration: 0.3 
            });
        });
    }
}

// ===== INIT: CONTACT INFO ANIMATIONS =====
function initContactInfoAnimations() {
    const infoItems = document.querySelectorAll('.contact-info-item');
    
    gsap.from(infoItems, {
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        delay: 0.4,
        scrollTrigger: {
            trigger: '.contact-info-section',
            start: 'top 80%',
            once: true
        }
    });

    // Add hover glow effect to info items
    infoItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            gsap.to(this, { 
                x: 8,
                color: 'var(--neon-blue)',
                duration: 0.3 
            });
        });

        item.addEventListener('mouseleave', function() {
            gsap.to(this, { 
                x: 0,
                duration: 0.3 
            });
        });
    });
}

// ===== INIT: CURSOR GLOW ON HERO =====
function initCursorGlowOnHero() {
    const heroSection = document.querySelector('.contact-hero');
    if (!heroSection) return;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    });

    // Smooth follow animation
    gsap.ticker.add(() => {
        targetX += (mouseX - targetX) * 0.1;
        targetY += (mouseY - targetY) * 0.1;

        // Could add visual glow indicator here if needed
    });
}

// ===== INIT: CONTACT FORM =====
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill all fields');
            return;
        }

        // Show success message
        const formResponse = document.getElementById('formResponse');
        
        // Animate form out
        gsap.to(form, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            onComplete: () => {
                form.style.display = 'none';
                formResponse.style.display = 'block';
                
                // Animate success message in
                gsap.from(formResponse, {
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.5,
                    ease: 'back.out'
                });
            }
        });

        // Reset form after delay
        setTimeout(() => {
            form.reset();
            
            // Animate form back in
            gsap.to(form, {
                opacity: 1,
                y: 0,
                duration: 0.3,
                onStart: () => {
                    form.style.display = 'flex';
                    formResponse.style.display = 'none';
                }
            });
        }, 5000);

        // Here you would typically send to a server
        console.log('Form submitted:', { name, email, subject, message });
    });
}

// ===== UTILITY: CAPITALIZE TEXT =====
function capitalizeText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// ===== INIT: 3D HERO PARALLAX =====
function init3DParallaxHero() {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const layers = hero.querySelectorAll('.parallax-layer');
    
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Normalize mouse coordinates from -1 to 1
        const mouseX = (e.clientX - centerX) / (rect.width / 2);
        const mouseY = (e.clientY - centerY) / (rect.height / 2);

        layers.forEach(layer => {
            const depth = parseFloat(layer.getAttribute('data-depth')) || 0.2;
            const x = mouseX * 20 * depth;
            const y = mouseY * 20 * depth;
            const rotateX = -mouseY * 2 * depth;
            const rotateY = mouseX * 2 * depth;

            gsap.to(layer, {
                x: x,
                y: y,
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.8,
                ease: 'power2.out',
                overwrite: 'auto'
            });
        });
    });

    hero.addEventListener('mouseleave', () => {
        layers.forEach(layer => {
            gsap.to(layer, {
                x: 0,
                y: 0,
                rotateX: 0,
                rotateY: 0,
                duration: 1,
                ease: 'elastic.out(1, 0.5)',
                overwrite: 'auto'
            });
        });
    });
}

// ===== INIT: HERO PARTICLES =====
function initHeroParticles() {
    const container = document.getElementById('particlesContainer');
    if (!container) return;

    const particleCount = 30;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < particleCount; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        
        // Random properties
        const size = Math.random() * 4 + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const z = (Math.random() - 0.5) * 500;
        const duration = Math.random() * 10 + 10;
        
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${left}%`;
        p.style.top = `${top}%`;
        p.style.transform = `translateZ(${z}px)`;

        fragment.appendChild(p);

        // Animate drifting
        gsap.to(p, {
            y: `-=${Math.random() * 100 + 50}`,
            x: `+=${(Math.random() - 0.5) * 50}`,
            rotation: Math.random() * 360,
            duration: duration,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: Math.random() * -10 // Random start time
        });
    }

    container.appendChild(fragment);
}

// ===== INIT: ALL ON PAGE LOAD =====
function init() {
    // Core
    initLoadingScreen();
    initLenis();
    initCustomCursor();
    initNavbar();
    initMagneticButtons();

    // Page-specific
    if (currentPage === 'home') {
        init3DParallaxHero();
        initHeroParticles();
        renderFeaturedProjects();
        animateOnScroll();
        initHomePageAnimations();
    } else if (currentPage === 'work') {
        renderAllProjects('all');
        initWorkFilters();
        animateOnScroll();
    } else if (currentPage === 'services') {
        renderServices();
        renderProcess();
        renderPricing();
        animateOnScroll();
    } else if (currentPage === 'gallery') {
        initGalleryPage();
        animateOnScroll();
    } else if (currentPage === 'team') {
        renderTeam();
        renderTestimonials();
        renderStats();
        animateOnScroll();
    } else if (currentPage === 'project') {
        const projectId = parseInt(sessionStorage.getItem('projectId')) || 1;
        loadProjectDetail(projectId);
        animateOnScroll();
    } else if (currentPage === 'contact') {
        initContactHeroParticles();
        initContactHeroCTA();
        initContactForm();
        initContactFormAnimations();
        initContactInfoAnimations();
        initCursorGlowOnHero();
        animateOnScroll();
    } else if (currentPage === 'about') {
        animateOnScroll();
    }

    // Global scroll animations
    animateOnScroll();

    console.log('✓ Clav Portfolio loaded successfully');
    console.log('✓ Page:', currentPage);
    console.log('✓ Projects:', projects.length);
    console.log('✓ All animations activated!');
}

// ===== HOME PAGE SPECIAL ANIMATIONS =====
function initHomePageAnimations() {
    // Animate scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        gsap.to(scrollIndicator, {
            y: 10,
            opacity: 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }

    // Featured grid stagger animation
    const featuredCards = document.querySelectorAll('.project-card');
    gsap.from(featuredCards, {
        opacity: 0,
        y: 50,
        rotation: -5,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out',
        delay: 0.3
    });

    // Animate about preview section
    const aboutPreview = document.querySelector('.about-preview');
    if (aboutPreview) {
        gsap.from(aboutPreview, {
            scrollTrigger: {
                trigger: aboutPreview,
                start: 'top 80%',
                once: true
            },
            opacity: 0,
            y: 60,
            duration: 1,
            ease: 'power2.out'
        });
    }

    // CTA section entrance
    const ctaSection = document.querySelector('.cta-section');
    if (ctaSection) {
        gsap.from(ctaSection, {
            scrollTrigger: {
                trigger: ctaSection,
                start: 'top 80%',
                once: true
            },
            opacity: 0,
            scale: 0.9,
            duration: 1,
            ease: 'back.out'
        });
    }
}

// ===== RUN ON DOM READY =====
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ===== ON WINDOW RESIZE =====
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});
