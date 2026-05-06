/*
========================================
CLAV PREMIUM PORTFOLIO - script.js
VERSION: 2.0 (Multi-page Edition)

⚡ QUICK CUSTOMIZATION:
1. Project Data → const projects = [...]
2. Animation Speed → const animConfig = {...}
3. Cursor Settings → cursorConfig object
4. Contact Email → Update in HTML

========================================
*/

// ===== SERVICE DATA =====
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

const processSteps = [
    { step: 1, title: "Discovery", description: "Understanding your goals, audience, and brand." },
    { step: 2, title: "Strategy", description: "Developing comprehensive solutions tailored to you." },
    { step: 3, title: "Creation", description: "Bringing ideas to life with creativity and precision." },
    { step: 4, title: "Launch", description: "Delivering excellence and ongoing support." }
];

const pricingPlans = [
    {
        name: "Starter",
        price: "$2,999",
        description: "Perfect for small projects and startups",
        features: ["UI/UX Design", "2 Revisions", "Responsive Design", "Assets Delivery"],
        featured: false
    },
    {
        name: "Professional",
        price: "$7,999",
        description: "Ideal for growing businesses",
        features: ["Everything in Starter", "Development", "6 Revisions", "3 Months Support", "SEO Optimization"],
        featured: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For complex, large-scale projects",
        features: ["Everything in Professional", "Custom Solutions", "Unlimited Revisions", "12 Months Support", "Team Collaboration"],
        featured: false
    }
];

const galleryItems = [
    { id: 1, title: "Brand Identity", category: "branding", icon: "🎨" },
    { id: 2, title: "Web Design", category: "design", icon: "🖼️" },
    { id: 3, title: "Development", category: "development", icon: "💻" },
    { id: 4, title: "Motion Graphics", category: "design", icon: "🎬" },
    { id: 5, title: "App Interface", category: "design", icon: "📱" },
    { id: 6, title: "Full Stack", category: "development", icon: "🔧" },
    { id: 7, title: "UX Research", category: "design", icon: "🔍" },
    { id: 8, title: "Cloud Solutions", category: "development", icon: "☁️" }
];

const teamMembers = [
    {
        name: "Alex Chen",
        role: "Creative Director",
        bio: "Passionate about transforming ideas into visual experiences",
        emoji: "👨‍🎨",
        socials: { instagram: "#", twitter: "#", linkedin: "#" }
    },
    {
        name: "Sarah Johnson",
        role: "Lead Developer",
        bio: "Full-stack expert with 8+ years of experience",
        emoji: "👩‍💻",
        socials: { instagram: "#", twitter: "#", linkedin: "#" }
    },
    {
        name: "Marcus Williams",
        role: "UX Designer",
        bio: "Obsessed with user-centered design and accessibility",
        emoji: "👨‍🎓",
        socials: { instagram: "#", twitter: "#", linkedin: "#" }
    },
    {
        name: "Emma Davis",
        role: "Brand Strategist",
        bio: "Helping brands tell their story through strategy",
        emoji: "👩‍💼",
        socials: { instagram: "#", twitter: "#", linkedin: "#" }
    }
];

const testimonials = [
    {
        text: "Clav transformed our digital presence. Absolutely amazing work!",
        author: "John Smith",
        role: "CEO, TechStartup",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        text: "Professional, creative, and delivered beyond our expectations.",
        author: "Emma Wilson",
        role: "Marketing Director, Global Corp",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        text: "The best investment we made for our brand. Highly recommended!",
        author: "David Brown",
        role: "Founder, Innovation Labs",
        stars: "⭐⭐⭐⭐⭐"
    }
];

const stats = [
    { number: "150+", label: "Projects Completed", description: "Delivered excellence consistently" },
    { number: "50+", label: "Happy Clients", description: "Trust and satisfaction guaranteed" },
    { number: "8+", label: "Years Experience", description: "Proven track record" },
    { number: "24/7", label: "Support Available", description: "Always here to help" }
];
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
        category: "Development",
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

// ===== EDITABLE: ANIMATION CONFIG =====
const animConfig = {
    cursorSpeed: 0.12,              // Cursor follow speed (lower = smoother)
    cursorFollowerSpeed: 0.06,      // Follower speed
    lenisSmoothness: 1.2,          // Scroll smoothness (1-2)
    loadingDuration: 2000,         // Loading screen duration (ms)
    hoverScaleAmount: 1.05,        // Image hover zoom
    magneticForce: 0.3,            // Magnetic button force
    scrollAnimDuration: 0.8,       // Scroll animation duration
    staggerDelay: 0.1              // Stagger delay between elements
};

// ===== STATE MANAGEMENT =====
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;
let lenis = null;
let activeFilter = 'all';
let currentPage = getCurrentPage();

// ===== UTILITY: GET CURRENT PAGE =====
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('work')) return 'work';
    if (path.includes('about')) return 'about';
    if (path.includes('services')) return 'services';
    if (path.includes('gallery')) return 'gallery';
    if (path.includes('team')) return 'team';
    if (path.includes('project')) return 'project';
    if (path.includes('contact')) return 'contact';
    return 'home';
}

// ===== INIT: LOADING SCREEN WITH ANIMATIONS =====
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingLogo = document.querySelector('.loading-logo');
    const loadingProgress = document.querySelector('.loading-progress');
    
    // Animate logo
    if (loadingLogo) {
        gsap.from(loadingLogo, {
            opacity: 0,
            scale: 0.5,
            rotation: -10,
            duration: 0.6,
            ease: 'back.out'
        });

        // Add glow effect to logo
        gsap.to(loadingLogo, {
            textShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }
    
    setTimeout(() => {
        gsap.to(loadingScreen, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: () => {
                loadingScreen.classList.add('hidden');
            }
        });
    }, animConfig.loadingDuration);
}

// ===== INIT: LENIS SMOOTH SCROLL =====
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
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
}

// ===== INIT: CUSTOM CURSOR =====
function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursorFollower');

    if (!cursor || !cursorFollower) return;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
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

    // Hide on elements
    const interactiveElements = document.querySelectorAll('a, button, .cta-button, input, textarea');
    interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            cursor.style.opacity = '0.3';
            cursorFollower.style.opacity = '0.8';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.opacity = '1';
            cursorFollower.style.opacity = '0.5';
        });
    });
}

// ===== INIT: NAVBAR =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    // Update active link based on current page
    navLinks.forEach((link) => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (currentPage === 'home' && href === 'index.html') {
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
        });
    }

    // Hide navbar on scroll down, show on scroll up
    let lastScrollY = 0;
    if (lenis) {
        lenis.on('scroll', (e) => {
            if (e > lastScrollY + 100) {
                navbar.classList.add('hidden');
                lastScrollY = e;
            } else if (e < lastScrollY - 100) {
                navbar.classList.remove('hidden');
                lastScrollY = e;
            }
        });
    }
}

// ===== RENDER: FEATURED PROJECTS (HOME PAGE) =====
function renderFeaturedProjects() {
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;

    const featuredProjects = projects.slice(0, 3);
    grid.innerHTML = '';

    featuredProjects.forEach((project, index) => {
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

        grid.appendChild(card);

        // Add hover animations with GSAP
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -15,
                duration: 0.3,
                ease: 'power2.out'
            });
            
            gsap.to(card.querySelector('.project-image'), {
                scale: 1.1,
                duration: 0.5,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
            
            gsap.to(card.querySelector('.project-image'), {
                scale: 1,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });
}

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

        // Add hover animations with GSAP
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -15,
                boxShadow: '0 20px 50px rgba(0, 217, 255, 0.2)',
                duration: 0.3,
                ease: 'power2.out'
            });
            
            gsap.to(card.querySelector('.project-image'), {
                scale: 1.1,
                duration: 0.5,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                boxShadow: '0 0 0px rgba(0, 217, 255, 0)',
                duration: 0.3,
                ease: 'power2.out'
            });
            
            gsap.to(card.querySelector('.project-image'), {
                scale: 1,
                duration: 0.5,
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
        form.style.display = 'none';
        formResponse.style.display = 'block';

        // Reset form
        setTimeout(() => {
            form.reset();
            form.style.display = 'flex';
            formResponse.style.display = 'none';
        }, 5000);

        // Here you would typically send to a server
        console.log('Form submitted:', { name, email, subject, message });
    });
}

// ===== UTILITY: CAPITALIZE TEXT =====
function capitalizeText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
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
        initContactForm();
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
