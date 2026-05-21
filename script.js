/*
====================================
CLAV PREMIUM PORTFOLIO - script.js
VERSION: 5.0 - Elite Interactivity
====================================

🎯 Features:
- Custom cursor with particle trail
- 3D card tilt effects
- Navbar scroll detection
- Mobile responsive menu
- Smooth animations
- Intersection Observer for reveal
- Load animation

====================================
*/

// ===== CUSTOM CURSOR SYSTEM =====
class CursorManager {
    constructor() {
        this.cursor = document.getElementById('cursor');
        this.cursorFollower = document.getElementById('cursorFollower');
        this.mouseX = 0;
        this.mouseY = 0;
        this.followerX = 0;
        this.followerY = 0;
        this.particles = [];
        this.particlePool = [];
        this.maxParticles = 50;

        if (this.cursor && this.cursorFollower) {
            this.init();
        }
    }

    init() {
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        document.addEventListener('mouseleave', () => this.handleMouseLeave());
    }

    handleMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;

        if (this.cursor) {
            this.cursor.style.left = this.mouseX + 'px';
            this.cursor.style.top = this.mouseY + 'px';
        }

        // Smooth follower movement
        this.followerX += (this.mouseX - this.followerX) * 0.15;
        this.followerY += (this.mouseY - this.followerY) * 0.15;

        if (this.cursorFollower) {
            this.cursorFollower.style.left = (this.followerX - 15) + 'px';
            this.cursorFollower.style.top = (this.followerY - 15) + 'px';
        }

        // Create particles
        if (Math.random() < 0.3) {
            this.createParticle();
        }

        // Update particles
        this.updateParticles();

        // Check for interactive elements
        const element = document.elementFromPoint(this.mouseX, this.mouseY);
        this.updateCursorState(element);
    }

    handleMouseLeave() {
        if (this.cursor) this.cursor.style.opacity = '0';
        if (this.cursorFollower) this.cursorFollower.style.opacity = '0';
    }

    createParticle() {
        let particle;
        if (this.particlePool.length > 0) {
            particle = this.particlePool.pop();
        } else if (this.particles.length < this.maxParticles) {
            particle = document.createElement('div');
            particle.className = 'cursor-particle';
            document.body.appendChild(particle);
        } else {
            return;
        }

        const angle = Math.random() * Math.PI * 2;
        const velocity = 1 + Math.random() * 3;
        particle.x = this.mouseX;
        particle.y = this.mouseY;
        particle.vx = Math.cos(angle) * velocity;
        particle.vy = Math.sin(angle) * velocity;
        particle.life = 1;

        particle.style.left = particle.x + 'px';
        particle.style.top = particle.y + 'px';
        particle.style.opacity = particle.life;

        this.particles.push(particle);
    }

    updateParticles() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.15; // gravity
            p.life -= 0.02;

            p.style.left = p.x + 'px';
            p.style.top = p.y + 'px';
            p.style.opacity = p.life;

            if (p.life <= 0) {
                this.particles.splice(i, 1);
                this.particlePool.push(p);
            }
        }
    }

    updateCursorState(element) {
        const isClickable = element && (
            element.tagName === 'A' ||
            element.tagName === 'BUTTON' ||
            element.classList.contains('project-card') ||
            element.classList.contains('cta-button')
        );

        if (this.cursorFollower) {
            if (isClickable) {
                this.cursorFollower.style.transform = 'scale(1.5)';
                this.cursorFollower.style.borderColor = '#00ff88';
                this.cursorFollower.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.5)';
            } else {
                this.cursorFollower.style.transform = 'scale(1)';
                this.cursorFollower.style.borderColor = '#00ffff';
                this.cursorFollower.style.boxShadow = 'inset 0 0 10px rgba(0, 255, 255, 0.3)';
            }
        }
    }
}

// ===== NAVBAR MANAGER =====
class NavbarManager {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navMenu = document.getElementById('navbarMenu');
        this.hamburger = document.getElementById('mobileMenuToggle');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.lastScrollY = 0;
        this.scrollThreshold = 100;

        this.init();
    }

    init() {
        // Mobile menu toggle
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Close mobile menu on link click
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });

        // Navbar scroll detection
        window.addEventListener('scroll', () => this.handleScroll());

        // Set active link based on current page
        this.updateActiveLink();
    }

    toggleMobileMenu() {
        if (this.navMenu) {
            this.navMenu.classList.toggle('active');
            this.hamburger.classList.toggle('active');
        }
    }

    closeMobileMenu() {
        if (this.navMenu) {
            this.navMenu.classList.remove('active');
            this.hamburger.classList.remove('active');
        }
    }

    handleScroll() {
        const currentScrollY = window.scrollY;
        const scrollDelta = Math.abs(currentScrollY - this.lastScrollY);

        // Navbar dark on scroll
        if (currentScrollY > this.scrollThreshold) {
            if (this.navbar) {
                this.navbar.classList.add('scrolled');
            }
        } else {
            if (this.navbar) {
                this.navbar.classList.remove('scrolled');
            }
        }

        this.lastScrollY = currentScrollY;
    }

    updateActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            const isActive = href === currentPage || (currentPage === '' && href === 'index.html');
            link.classList.toggle('active', isActive);
        });
    }
}

// ===== 3D TILT EFFECT =====
class TiltManager {
    constructor() {
        this.cards = document.querySelectorAll('.project-card, .card, .team-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => this.handleMouseMove(e, card));
            card.addEventListener('mouseleave', () => this.handleMouseLeave(card));
        });
    }

    handleMouseMove(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        card.style.transition = 'none';
    }

    handleMouseLeave(card) {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        card.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
class AnimationObserver {
    constructor() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    this.observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        this.init();
    }

    init() {
        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(el => this.observer.observe(el));
    }
}

// ===== LOADING SCREEN MANAGER =====
class LoadingScreenManager {
    constructor() {
        this.loadingScreen = document.getElementById('loadingScreen');
        this.init();
    }

    init() {
        // Hide loading screen after 1.5s
        setTimeout(() => {
            if (this.loadingScreen) {
                this.loadingScreen.classList.add('hidden');
            }
        }, 1500);
    }
}

// ===== SKILL BARS ANIMATION =====
class SkillBarsManager {
    constructor() {
        this.skillBars = document.querySelectorAll('.skill-progress');
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateBar(entry.target);
                    this.observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        this.init();
    }

    init() {
        this.skillBars.forEach(bar => {
            this.observer.observe(bar);
        });
    }

    animateBar(bar) {
        const percentage = bar.getAttribute('data-percentage') || '80';
        bar.style.width = percentage + '%';
    }
}

// ===== TYPING EFFECT =====
class TypingEffect {
    constructor(elementId, texts, speed = 100, delay = 1500) {
        this.element = document.getElementById(elementId);
        this.texts = texts;
        this.speed = speed;
        this.delay = delay;
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;

        if (this.element) {
            this.start();
        }
    }

    start() {
        setTimeout(() => this.type(), this.delay);
    }

    type() {
        const currentText = this.texts[this.currentTextIndex];
        
        if (this.isDeleting) {
            this.currentCharIndex--;
        } else {
            this.currentCharIndex++;
        }

        this.element.textContent = currentText.substring(0, this.currentCharIndex);

        let typeSpeed = this.speed;
        
        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.currentCharIndex === currentText.length) {
            this.isDeleting = true;
            typeSpeed = this.delay;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            this.isDeleting = false;
            this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// ===== SMOOTH SCROLL (Vanilla Implementation) =====
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    this.smoothScrollTo(target);
                }
            });
        });
    }

    smoothScrollTo(target) {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - 70;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let start = null;

        const animation = (currentTime) => {
            if (start === null) start = currentTime;
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            const ease = progress < 0.5
                ? 2 * progress * progress
                : -1 + (4 - 2 * progress) * progress;

            window.scrollTo(0, startPosition + distance * ease);

            if (elapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    }
}

// ===== PARTICLE BACKGROUND EFFECT =====
class ParticleBackground {
    constructor(containerId, particleCount = 20) {
        this.container = document.getElementById(containerId);
        this.particleCount = particleCount;
        if (this.container) {
            this.init();
        }
    }

    init() {
        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'bg-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${5 + Math.random() * 15}px;
            height: ${5 + Math.random() * 15}px;
            background: radial-gradient(circle, rgba(0, 217, 255, 0.3), transparent);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5};
            pointer-events: none;
            animation: floatParticles ${5 + Math.random() * 10}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
        this.container.appendChild(particle);
    }
}

// ===== MAGNETIC BUTTON EFFECT =====
class MagneticButtons {
    constructor() {
        this.buttons = document.querySelectorAll('.magnetic-btn, .primary-btn');
        this.init();
    }

    init() {
        this.buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => this.handleMouseMove(e, button));
            button.addEventListener('mouseleave', (e) => this.handleMouseLeave(e, button));
        });
    }

    handleMouseMove(e, button) {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    }

    handleMouseLeave(e, button) {
        button.style.transform = 'translate(0, 0)';
        button.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }
}

// ===== INITIALIZE ALL ON DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
    // Only initialize cursor on desktop (1025px+)
    if (window.innerWidth >= 1025) {
        new CursorManager();
    }

    new NavbarManager();
    new TiltManager();
    new LoadingScreenManager();
    new SkillBarsManager();
    new SmoothScroll();
    new MagneticButtons();

    // Add animation attributes to elements if needed
    const elementsToAnimate = document.querySelectorAll(
        '.hero-content, .featured-work .section-header, .project-card, .card'
    );
    elementsToAnimate.forEach((el, index) => {
        if (!el.hasAttribute('data-animate')) {
            el.setAttribute('data-animate', '');
        }
    });

    new AnimationObserver();
});

// Handle window resize for cursor state
window.addEventListener('resize', () => {
    const cursorElements = document.querySelectorAll('.cursor, .cursor-follower');
    if (window.innerWidth < 1025) {
        cursorElements.forEach(el => el.style.display = 'none');
    } else {
        cursorElements.forEach(el => el.style.display = 'block');
    }
});

// Add CSS for cursor particle styling
const style = document.createElement('style');
style.textContent = `
    .cursor-particle {
        position: fixed;
        pointer-events: none;
        width: 4px;
        height: 4px;
        background: #00ffff;
        border-radius: 50%;
        box-shadow: 0 0 8px rgba(0, 255, 255, 0.6);
    }

    .bg-particle {
        filter: blur(2px);
    }

    @keyframes floatParticles {
        0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translate(var(--tx, 100px), var(--ty, -100px));
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log('✨ CLAV Premium Portfolio v5.0 loaded');
