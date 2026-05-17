/*
========================================
CLAV PREMIUM PORTFOLIO - script.js
VERSION: 5.0 (ULTIMATE CINEMATIC EDITION)

✨ MERGED & OPTIMIZED:
✔ Advanced 3D mouse tilt & parallax
✔ Ultra-smooth Lenis scroll
✔ GSAP ScrollTrigger animations
✔ Interactive magnetic cursor
✔ Magnetic buttons with glow
✔ Particle systems optimization
✔ Mobile-optimized performance
✔ Responsive animations
✔ Enhanced features from v3 + v4
✔ All edge cases handled
✔ Better memory management
✔ Improved animations

========================================
*/

// ===== PREMIUM ANIMATION CONFIG =====
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
    mouseTrailDistance: 30,
    tiltMaxAngle: 25,
    tiltSpeed: 0.3,
    isMobile: window.innerWidth <= 768
};

// ===== GLOBAL STATE =====
let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0, followerX = 0, followerY = 0;
let lenis = null, activeFilter = 'all', currentPage = getCurrentPage();
let isLoadingComplete = false;
let magneticButtons = [];
let resizeTimeout = null;
let particlePool = [];

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

// Check if device is mobile
function isMobileDevice() {
    return window.innerWidth <= 768;
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    
    initLoadingScreen();
    initLenis();
    initCustomCursor();
    initNavbar();
    initMobileMenu();
    initHeroSection();
    initMagneticButtons();
    init3DTilt();
    initScrollAnimations();
    
    // Re-initialize on resize with debouncing
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            animConfig.isMobile = isMobileDevice();
            ScrollTrigger.refresh();
            if (!animConfig.isMobile) {
                init3DTilt();
            }
        }, 250);
    });
});

// ===== LOADING SCREEN =====
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (!loadingScreen) return;

    const loadingLogo = document.querySelector('.loading-logo');
    const loadingProgress = document.querySelector('.loading-progress');

    if (loadingLogo) {
        gsap.from(loadingLogo, {
            opacity: 0,
            scale: 0.2,
            rotation: -20,
            duration: 0.8,
            ease: 'back.out'
        });

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

    if (loadingProgress) {
        gsap.to(loadingProgress, {
            width: '100%',
            duration: 2,
            ease: 'cubic.out'
        });
    }

    setTimeout(() => {
        gsap.to(loadingScreen, {
            opacity: 0,
            backdropFilter: 'blur(10px)',
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: () => {
                loadingScreen.classList.add('hidden');
                isLoadingComplete = true;
            }
        });
    }, animConfig.loadingDuration);
}

// ===== LENIS SMOOTH SCROLL =====
function initLenis() {
    if (typeof Lenis === 'undefined') {
        console.warn('Lenis not loaded');
        return;
    }

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

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
}

// ===== CUSTOM CURSOR WITH PARTICLE TRAIL =====
function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursorFollower');

    if (!cursor || !cursorFollower) return;

    // Hide cursor on mobile
    if (animConfig.isMobile) {
        cursor.style.display = 'none';
        cursorFollower.style.display = 'none';
        return;
    }

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Create particle trail
        if (Math.random() > 0.7) {
            createCursorParticle(mouseX, mouseY);
        }
    });

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

    // Interactive cursor hover
    const interactiveElements = document.querySelectorAll('a, button, .cta-button, input, textarea, .project-card, .service-card, .filter-tag, .gallery-item, .team-member');
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

    document.addEventListener('mouseenter', () => {
        gsap.to(cursor, { opacity: 1, duration: 0.3 });
        gsap.to(cursorFollower, { opacity: 1, duration: 0.3 });
    });

    document.addEventListener('mouseleave', () => {
        gsap.to(cursor, { opacity: 0, duration: 0.3 });
        gsap.to(cursorFollower, { opacity: 0, duration: 0.3 });
    });
}

function createCursorParticle(x, y) {
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
        x: (Math.random() - 0.5) * 100,
        y: (Math.random() - 0.5) * 100,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: () => {
            particle.remove();
        }
    });
}

// ===== NAVBAR =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach((link) => {
        link.classList.remove('active');
        const href = link.getAttribute('href').toLowerCase();
        if (currentPage === 'home' && href.includes('index')) {
            link.classList.add('active');
        } else if (href.includes(currentPage)) {
            link.classList.add('active');
        }
    });

    // Smart navbar hide/show
    let lastScrollY = 0;
    let isHidden = false;
    
    if (lenis) {
        lenis.on('scroll', (e) => {
            if (window.innerWidth < 768) return;
            
            const delta = e - lastScrollY;
            if (delta > 100 && !isHidden) {
                navbar.classList.add('hidden');
                isHidden = true;
                lastScrollY = e;
            } else if (delta < -100 && isHidden) {
                navbar.classList.remove('hidden');
                isHidden = false;
                lastScrollY = e;
            }
        });
    }

    // Navbar glow on mouse position
    document.addEventListener('mousemove', (e) => {
        if (navbar && isLoadingComplete && window.innerWidth > 1024) {
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

// ===== MOBILE MENU =====
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    if (!mobileMenuToggle || !navbarMenu) return;

    mobileMenuToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        
        if (navbarMenu.classList.contains('active')) {
            gsap.from(navbarMenu.querySelectorAll('li'), {
                opacity: 0,
                y: -20,
                stagger: 0.08,
                duration: 0.4
            });
        }
    });

    // Close menu on link click
    navbarMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navbarMenu.classList.remove('active');
        });
    });
}

// ===== HERO SECTION =====
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

    // Scroll indicator
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

function generateHeroParticles() {
    const container = document.getElementById('particlesContainer');
    if (!container) return;

    const existingParticles = container.querySelectorAll('.particle');
    if (existingParticles.length > 0) return; // Already generated

    // Reduce particles on mobile
    const particleCount = animConfig.isMobile ? 15 : 30;
    for (let i = 0; i < particleCount; i++) {
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

// ===== 3D TILT EFFECT (Desktop Only) =====
function init3DTilt() {
    if (animConfig.isMobile) return;
    
    const tiltElements = document.querySelectorAll('.project-card, .service-card, .team-member, .gallery-item');

    tiltElements.forEach((element) => {
        if (!element || element.classList.contains('tilt-initialized')) return;
        element.classList.add('tilt-initialized');

        let bounds;

        element.addEventListener('mouseenter', () => {
            bounds = element.getBoundingClientRect();
        });

        element.addEventListener('mousemove', (e) => {
            if (!bounds) return;

            const x = e.clientX - bounds.left;
            const y = e.clientY - bounds.top;
            const centerX = bounds.width / 2;
            const centerY = bounds.height / 2;

            const rotateX = ((y - centerY) / centerY) * -animConfig.tiltMaxAngle;
            const rotateY = ((x - centerX) / centerX) * animConfig.tiltMaxAngle;

            gsap.to(element, {
                rotateX: rotateX,
                rotateY: rotateY,
                transformPerspective: 1200,
                duration: animConfig.tiltSpeed,
                ease: 'power2.out',
                overwrite: 'auto'
            });

            // Update light position
            const lightLayer = element.querySelector('.light-layer');
            if (lightLayer) {
                gsap.to(lightLayer, {
                    '--light-x': ((x / bounds.width) * 100) + '%',
                    '--light-y': ((y / bounds.height) * 100) + '%',
                    duration: animConfig.tiltSpeed,
                    ease: 'power2.out'
                });
            }
        });

        element.addEventListener('mouseleave', () => {
            gsap.to(element, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.6,
                ease: 'elastic.out(1, 0.6)',
                overwrite: 'auto'
            });

            const lightLayer = element.querySelector('.light-layer');
            if (lightLayer) {
                gsap.to(lightLayer, {
                    '--light-x': '50%',
                    '--light-y': '50%',
                    duration: 0.6,
                    ease: 'power2.out'
                });
            }
        });
    });
}

// ===== MAGNETIC BUTTONS =====
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.magnetic-btn, .cta-button');
    
    buttons.forEach((button) => {
        let bounds;
        
        button.addEventListener('mouseenter', () => {
            bounds = button.getBoundingClientRect();
        });
        
        button.addEventListener('mousemove', (e) => {
            if (!bounds || animConfig.isMobile) return;
            
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
                ease: 'elastic.out(1, 0.6)',
                overwrite: 'auto'
            });
        });
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    // Animate sections on scroll
    gsap.utils.toArray('.featured-work, .about-preview, .cta-section, .work-section, .services-section, .gallery-section, .about-content, .team-members-section, .contact-content').forEach((section) => {
        if (!section) return;

        gsap.from(section, {
            opacity: 0,
            y: 30,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 30%',
                scrub: false,
                onEnter: () => {
                    gsap.to(section, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power2.out'
                    });
                }
            }
        });
    });

    // Animate project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 40,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 40%',
                scrub: false,
                onEnter: () => {
                    gsap.to(card, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: 'power2.out'
                    });
                }
            }
        });
    });

    // Animate service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 40,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 40%',
                scrub: false,
                onEnter: () => {
                    gsap.to(card, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: 'power2.out'
                    });
                }
            }
        });
    });

    // Animate team members
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        gsap.from(member, {
            opacity: 0,
            y: 40,
            scrollTrigger: {
                trigger: member,
                start: 'top 85%',
                end: 'top 40%',
                scrub: false,
                onEnter: () => {
                    gsap.to(member, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: 'power2.out'
                    });
                }
            }
        });
    });

    // Animate gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            scale: 0.9,
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                end: 'top 40%',
                scrub: false,
                onEnter: () => {
                    gsap.to(item, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        delay: index * 0.05,
                        ease: 'power2.out'
                    });
                }
            }
        });
    });

    // Animate skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            y: 30,
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                end: 'top 40%',
                scrub: false,
                onEnter: () => {
                    gsap.to(item, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: 'power2.out'
                    });
                }
            }
        });
    });
}

// ===== PROJECT DATA =====
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

// Process steps
const processSteps = [
    { step: "01", title: "Research & Discovery", description: "Understanding your goals, audience, and market landscape." },
    { step: "02", title: "Strategy & Planning", description: "Developing a comprehensive roadmap and strategic approach." },
    { step: "03", title: "Design & Development", description: "Creating beautiful, functional solutions with cutting-edge technology." },
    { step: "04", title: "Launch & Support", description: "Deploying your project and providing ongoing optimization support." }
];

// Pricing plans
const pricingPlans = [
    {
        name: "Starter",
        price: "$999",
        description: "Perfect for small projects and startups",
        featured: false,
        features: ["5 pages", "Mobile responsive", "Basic SEO", "1 revision round"]
    },
    {
        name: "Professional",
        price: "$2,499",
        description: "Ideal for growing businesses",
        featured: true,
        features: ["Up to 15 pages", "Full SEO optimization", "Animations & interactions", "3 revision rounds", "Analytics setup"]
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For complex, large-scale projects",
        featured: false,
        features: ["Unlimited pages", "Advanced integrations", "Custom solutions", "Dedicated support", "Post-launch optimization"]
    }
];

// Gallery items
const galleryItems = [
    { id: 1, title: "Web Design", category: "design", icon: "🎨" },
    { id: 2, title: "Branding", category: "design", icon: "✨" },
    { id: 3, title: "Development", category: "development", icon: "💻" },
    { id: 4, title: "Motion Design", category: "animation", icon: "🎬" },
    { id: 5, title: "3D Art", category: "design", icon: "🌐" },
    { id: 6, title: "UI Design", category: "design", icon: "🖌️" },
    { id: 7, title: "Web App", category: "development", icon: "🚀" },
    { id: 8, title: "Photography", category: "photography", icon: "📸" }
];

// Team members
const teamMembers = [
    {
        name: "Clavin",
        role: "Lead Designer",
        bio: "Creative visionary with 5+ years of design experience.",
        emoji: "👨‍💼",
        socials: { instagram: "#", twitter: "#", linkedin: "#" }
    },
    {
        name: "Luna",
        role: "Developer",
        bio: "Full-stack developer passionate about clean code.",
        emoji: "👩‍💻",
        socials: { instagram: "#", twitter: "#", linkedin: "#" }
    },
    {
        name: "Alex",
        role: "Strategy",
        bio: "Business strategist focused on growth and innovation.",
        emoji: "👨‍📊",
        socials: { instagram: "#", twitter: "#", linkedin: "#" }
    },
    {
        name: "Mia",
        role: "Creative Director",
        bio: "Art director with eye for compelling visuals.",
        emoji: "👩‍🎨",
        socials: { instagram: "#", twitter: "#", linkedin: "#" }
    }
];

// Testimonials
const testimonials = [
    { text: "The team delivered beyond our expectations. Exceptional work!", author: "John Doe", role: "CEO, Tech Startup", stars: "⭐⭐⭐⭐⭐" },
    { text: "Professional, creative, and deadline-oriented. Highly recommended!", author: "Jane Smith", role: "Founder, Design Studio", stars: "⭐⭐⭐⭐⭐" },
    { text: "Amazing results and fantastic communication throughout.", author: "Mike Johnson", role: "Manager, Digital Agency", stars: "⭐⭐⭐⭐⭐" }
];

// Stats
const stats = [
    { number: "50+", label: "Projects", description: "Successfully completed projects" },
    { number: "30+", label: "Clients", description: "Happy and satisfied clients" },
    { number: "5+", label: "Years", description: "Years of industry experience" },
    { number: "100%", label: "Satisfaction", description: "Client satisfaction rate" }
];

// ===== RENDER FUNCTIONS =====
function renderFeaturedProjects() {
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;

    const featuredProjects = projects.slice(0, 3);
    grid.innerHTML = '';

    featuredProjects.forEach((project) => {
        const card = document.createElement('a');
        card.href = '#';
        card.className = 'project-card';
        card.onclick = (e) => {
            e.preventDefault();
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
    });
}

function renderAllProjects(filterType = 'all') {
    const list = document.getElementById('projectsList');
    if (!list) return;

    const filtered = filterType === 'all' 
        ? projects 
        : projects.filter(p => p.category.toLowerCase() === filterType.toLowerCase());

    list.innerHTML = '';

    filtered.forEach((project) => {
        const card = document.createElement('a');
        card.href = '#';
        card.className = 'project-card';
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
    });
}

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
        });
    });
}

function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    services.forEach((service) => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <div class="service-icon">${service.icon}</div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
        `;
        grid.appendChild(card);
    });
}

function renderProcess() {
    const timeline = document.getElementById('processTimeline');
    if (!timeline) return;
    timeline.innerHTML = '';
    processSteps.forEach((step) => {
        const stepEl = document.createElement('div');
        stepEl.className = 'process-step';
        stepEl.innerHTML = `
            <div class="process-number">${step.step}</div>
            <h3 class="process-title">${step.title}</h3>
            <p class="process-description">${step.description}</p>
        `;
        timeline.appendChild(stepEl);
    });
}

function renderPricing() {
    const grid = document.getElementById('pricingGrid');
    if (!grid) return;
    grid.innerHTML = '';
    pricingPlans.forEach((plan) => {
        const card = document.createElement('div');
        card.className = plan.featured ? 'pricing-card featured' : 'pricing-card';
        card.innerHTML = `
            ${plan.featured ? '<div class="pricing-label">MOST POPULAR</div>' : ''}
            <h3 class="pricing-name">${plan.name}</h3>
            <div class="pricing-price">${plan.price}</div>
            <p class="pricing-description">${plan.description}</p>
            <ul class="pricing-features">
                ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <a href="contact.html" class="cta-button magnetic-btn" style="width: 100%; text-align: center;">Choose Plan →</a>
        `;
        grid.appendChild(card);
    });
}

function renderGallery(filterType = 'all') {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    const filtered = filterType === 'all' ? galleryItems : galleryItems.filter(item => item.category === filterType);
    
    grid.innerHTML = '';
    filtered.forEach((item) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.id = item.id;
        galleryItem.innerHTML = `
            <div style="font-size: 3rem;">${item.icon}</div>
            <div class="gallery-overlay"></div>
        `;
        galleryItem.addEventListener('click', () => {
            openLightbox(item);
        });
        grid.appendChild(galleryItem);
    });
}

function openLightbox(item) {
    const modal = document.getElementById('lightboxModal');
    if (!modal) return;
    
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
    if (modal) {
        modal.classList.remove('active');
    }
}

function initGalleryPage() {
    renderGallery('all');

    const galleryTags = document.querySelectorAll('.gallery-tag');
    galleryTags.forEach(tag => {
        tag.addEventListener('click', () => {
            galleryTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            const filter = tag.dataset.filter;
            renderGallery(filter);
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

function renderTeam() {
    const grid = document.getElementById('teamGrid');
    if (!grid) return;

    grid.innerHTML = '';
    teamMembers.forEach((member) => {
        const card = document.createElement('div');
        card.className = 'team-member';
        card.innerHTML = `
            <div class="team-avatar">${member.emoji}</div>
            <h3 class="team-name">${member.name}</h3>
            <p class="team-role">${member.role}</p>
            <p class="team-bio">${member.bio}</p>
            <div class="team-socials">
                <a href="${member.socials.instagram}" class="team-social-link" title="Instagram">f</a>
                <a href="${member.socials.twitter}" class="team-social-link" title="Twitter">𝕏</a>
                <a href="${member.socials.linkedin}" class="team-social-link" title="LinkedIn">in</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return;

    grid.innerHTML = '';
    testimonials.forEach((testimonial) => {
        const card = document.createElement('div');
        card.className = 'testimonial';
        card.innerHTML = `
            <div class="testimonial-stars">${testimonial.stars}</div>
            <div class="testimonial-quote">"</div>
            <p class="testimonial-text">${testimonial.text}</p>
            <p class="testimonial-author">${testimonial.author}</p>
            <p class="testimonial-role">${testimonial.role}</p>
        `;
        grid.appendChild(card);
    });
}

function renderStats() {
    const grid = document.getElementById('statsGrid');
    if (!grid) return;

    grid.innerHTML = '';
    stats.forEach((stat) => {
        const card = document.createElement('div');
        card.className = 'stat';
        card.innerHTML = `
            <div class="stat-number">${stat.number}</div>
            <h3 class="stat-label">${stat.label}</h3>
            <p class="stat-description">${stat.description}</p>
        `;
        grid.appendChild(card);
    });
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !subject || !message) {
            alert('Please fill all fields');
            return;
        }

        const formResponse = document.getElementById('formResponse');
        
        gsap.to(form, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            onComplete: () => {
                form.style.display = 'none';
                formResponse.style.display = 'block';
                
                gsap.from(formResponse, {
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.5,
                    ease: 'back.out'
                });
            }
        });

        setTimeout(() => {
            form.reset();
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
    });
}

function loadProjectDetail(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) {
        window.location.href = 'work.html';
        return;
    }

    const heroImage = document.getElementById('projectHeroImage');
    if (heroImage) {
        heroImage.style.backgroundImage = `url(${project.image})`;
    }

    const titleEl = document.getElementById('projectTitle');
    if (titleEl) titleEl.textContent = project.title;
    
    const metaEl = document.getElementById('projectMeta');
    if (metaEl) metaEl.textContent = `${project.year} • ${capitalizeText(project.category)}`;
    
    const descEl = document.getElementById('projectDescription');
    if (descEl) descEl.textContent = project.description;
    
    const catEl = document.getElementById('projectCategory');
    if (catEl) catEl.textContent = capitalizeText(project.category);
    
    const yearEl = document.getElementById('projectYear');
    if (yearEl) yearEl.textContent = project.year;
    
    const roleEl = document.getElementById('projectRole');
    if (roleEl) roleEl.textContent = project.role;

    const gallery = document.getElementById('projectGallery');
    if (gallery) {
        gallery.innerHTML = project.gallery.map((img, i) => `
            <div class="gallery-image" style="animation-delay: ${i * 0.1}s">
                <img src="${img}" alt="Gallery ${i + 1}" onerror="this.src='img/placeholder.svg'">
            </div>
        `).join('');
    }
}

function getProjectIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || sessionStorage.getItem('projectId');
}

// ===== PAGE LOAD =====
window.addEventListener('load', () => {
    renderFeaturedProjects();
    renderAllProjects();
    renderServices();
    renderProcess();
    renderPricing();
    initGalleryPage();
    renderTeam();
    renderTestimonials();
    renderStats();
    initContactForm();
    initWorkFilters();

    // Load project detail if on project page
    if (currentPage === 'project') {
        const projectId = parseInt(getProjectIdFromUrl());
        if (projectId) {
            loadProjectDetail(projectId);
        }
    }
});


