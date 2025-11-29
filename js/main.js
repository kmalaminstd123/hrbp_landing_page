// GSAP Animations and Interactivity
gsap.registerPlugin(ScrollTrigger);

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hero section animations
gsap.from('.hero-badge', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.2
});

gsap.from('.hero-title', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.4
});

gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.6
});

gsap.from('.hero-stats', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.8
});

gsap.from('.hero-cta', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 1
});

// Floating cards animation
gsap.from('.floating-card', {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    stagger: 0.2,
    delay: 1.2
});

// Counter animation for stats
const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Trigger counter animation when in view
const statNumbers = document.querySelectorAll('.stat-number');
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            animateCounter(entry.target);
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

statNumbers.forEach(stat => statObserver.observe(stat));

// Section animations with ScrollTrigger
gsap.utils.toArray('.section-badge').forEach(badge => {
    gsap.from(badge, {
        scrollTrigger: {
            trigger: badge,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.6
    });
});

gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8
    });
});

gsap.utils.toArray('.section-subtitle').forEach(subtitle => {
    gsap.from(subtitle, {
        scrollTrigger: {
            trigger: subtitle,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: 0.2
    });
});

// Responsibility items animation
gsap.utils.toArray('.responsibility-item').forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -50,
        duration: 0.6,
        delay: index * 0.1
    });
});

// HRBP Model animation
gsap.from('.model-center', {
    scrollTrigger: {
        trigger: '.hrbp-model',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    scale: 0,
    duration: 1,
    ease: 'back.out(1.7)'
});

gsap.utils.toArray('.model-orbit').forEach((orbit, index) => {
    gsap.from(orbit, {
        scrollTrigger: {
            trigger: '.hrbp-model',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0,
        duration: 0.8,
        delay: 0.3 + (index * 0.2),
        ease: 'back.out(1.7)'
    });
});

// Benefit cards animation
gsap.utils.toArray('.benefit-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: (index % 3) * 0.15
    });
});

// Program cards animation
gsap.utils.toArray('.program-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.8,
        delay: index * 0.2
    });
});

// Programs CTA animation
gsap.from('.programs-cta', {
    scrollTrigger: {
        trigger: '.programs-cta',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 1
});

// Accreditation cards animation
gsap.utils.toArray('.accreditation-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        rotation: -5,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'back.out(1.2)'
    });
});

// Accreditation benefits animation
gsap.utils.toArray('.benefit-item').forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: index * 0.1
    });
});

// CTA section animation
gsap.from('.cta-wrapper', {
    scrollTrigger: {
        trigger: '.cta-wrapper',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    scale: 0.95,
    duration: 1
});

gsap.utils.toArray('.cta-features li').forEach((li, index) => {
    gsap.from(li, {
        scrollTrigger: {
            trigger: '.cta-features',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -30,
        duration: 0.6,
        delay: index * 0.1
    });
});

// Footer animation
gsap.from('.footer', {
    scrollTrigger: {
        trigger: '.footer',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 0.8
});

// Parallax effect for hero background
gsap.to('.hero-background', {
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    },
    y: 200,
    opacity: 0.5
});

// Add hover effect enhancements
document.querySelectorAll('.benefit-card, .program-card, .accreditation-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Button hover animations
document.querySelectorAll('.btn-primary, .btn-outline-light, .btn-outline-primary').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        gsap.to(this.querySelector('i'), {
            x: 5,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    btn.addEventListener('mouseleave', function() {
        gsap.to(this.querySelector('i'), {
            x: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Mobile menu close on link click
const navLinks = document.querySelectorAll('.nav-link');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    gsap.to('body', {
        opacity: 1,
        duration: 0.5
    });
});

// Set initial body opacity
document.body.style.opacity = '0';

console.log('HRBP Landing Page - Animations Loaded Successfully');
