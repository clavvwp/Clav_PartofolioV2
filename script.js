/*
========================================
CLAV PREMIUM PORTFOLIO - script.js
VERSION: 4.0 (ULTRA CINEMATIC 3D)

🚀 COMPLETE REFACTOR:
✔ Advanced 3D mouse tilt
✔ Cinematic animations
✔ Performance optimized
✔ Smooth scroll with Lenis
✔ GSAP ScrollTrigger
✔ Interactive cursor
✔ Magnetic buttons
✔ All bugs fixed

========================================
*/

// ===== ANIMATION CONFIG =====
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
    tiltSpeed: 0.3
};

// ===== GLOBAL STATE =====
let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0, followerX = 0, followerY = 0;
let lenis = null, activeFilter = 'all', currentPage = getCurrentPage();
let isLoadingComplete = false;
let magneticButtons = [];
let resizeTimeout = null;

// Get current page
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

// Capitalize text
function capitalizeText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
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
    
    // Re-initialize on window resize
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            ScrollTrigger.refresh();
            init3DTilt();
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

// ===== ADVANCED CUSTOM CURSOR =====
function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursorFollower');

    if (!cursor || !cursorFollower) return;

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
    const interactiveElements = document.querySelectorAll('a, button, .cta-button, input, textarea, .project-card, .service-card, .filter-tag');
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

// ===== 3D TILT EFFECT =====
function init3DTilt() {
    const tiltElements = document.querySelectorAll('.project-card, .service-card, .team-member, .gallery-item');

    tiltElements.forEach((element) => {
        if (!element || element.classList.contains('tilt-initialized')) return;
        element.classList.add('tilt-initialized');

        let bounds;
        let tiltTimeline = null;

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

            // Mouse follow light effect
            const lightX = (x / bounds.width) * 100;
            const lightY = (y / bounds.height) * 100;

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
                    '--light-x': lightX + '%',
                    '--light-y': lightY + '%',
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
}

// ===== GLOBAL UTILITIES =====
function navigateToProject(projectId) {
    window.location.href = `project.html?id=${projectId}`;
}

// ===== SAMPLE DATA (can be customized) =====
const projects = [
    {
        id: 1,
        title: 'Modern Portfolio Design',
        category: 'design',
        year: '2024',
        image: 'img/project1.jpg'
    },
    {
        id: 2,
        title: 'Web Application Platform',
        category: 'development',
        year: '2024',
        image: 'img/project2.jpg'
    },
    {
        id: 3,
        title: 'Brand Identity System',
        category: 'design',
        year: '2023',
        image: 'img/project3.jpg'
    }
];

const services = [
    {
        id: 1,
        title: 'Web Design',
        description: 'Beautiful and functional web designs that captivate and convert.',
        icon: '🎨'
    },
    {
        id: 2,
        title: 'Frontend Development',
        description: 'High-performance, responsive web applications with modern tech.',
        icon: '💻'
    },
    {
        id: 3,
        title: 'UI/UX Design',
        description: 'User-centered interfaces that deliver seamless experiences.',
        icon: '✨'
    },
    {
        id: 4,
        title: 'Motion Design',
        description: 'Engaging animations and interactions that bring life to your brand.',
        icon: '🎬'
    },
    {
        id: 5,
        title: 'Branding',
        description: 'Complete brand identity solutions that tell your story.',
        icon: '🎯'
    },
    {
        id: 6,
        title: 'Responsive Design',
        description: 'Perfect layouts across all devices and screen sizes.',
        icon: '📱'
    }
];

// ===== RENDER FUNCTIONS =====
function renderFeaturedProjects() {
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;

    grid.innerHTML = '';
    projects.slice(0, 3).forEach((project) => {
        const card = document.createElement('a');
        card.href = '#';
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-image-wrapper">
                <div class="light-layer"></div>
                <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%231a1a1a%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%23666%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EImage%3C/text%3E%3C/svg%3E'">
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

    init3DTilt();
}

function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;

    grid.innerHTML = '';
    services.forEach((service, index) => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s forwards`;
        card.style.opacity = '0';
        card.innerHTML = `
            <div class="service-icon">${service.icon}</div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <div class="service-hover-glow"></div>
        `;
        grid.appendChild(card);
    });

    init3DTilt();
}

// Render on page load
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedProjects();
    renderServices();
});
