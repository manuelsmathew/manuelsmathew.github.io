// Navigation and Section Management
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links and sections
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.getElementById('navbar');

    // Handle navigation between sections
    function showSection(sectionId) {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show the selected section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }


        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Add click listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
            
            // Update URL hash without scrolling
            history.pushState(null, null, `#${sectionId}`);
        });
    });


    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        const hash = window.location.hash.substring(1) || 'home';
        showSection(hash);
    });

    // Initialize with current hash or default to home
    const initialSection = window.location.hash.substring(1) || 'home';
    showSection(initialSection);


    // Smooth header shrinking effect
    const navBrand = document.getElementById('navBrand');
    const navThemeToggle = document.getElementById('navThemeToggle');
    const heroSection = document.getElementById('heroSection');
    
    let ticking = false;
    
    // Smooth easing function for better transitions
    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
    
    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Get hero section height dynamically
        const heroHeight = heroSection ? heroSection.offsetHeight : 400;
        
        // Smoother transition with extended range
        const transitionStart = heroHeight * 0.05; // Start at 5% of hero height
        const transitionEnd = heroHeight * 0.95; // End at 95% of hero height
        const rawProgress = Math.max(0, Math.min(1, (scrollTop - transitionStart) / (transitionEnd - transitionStart)));
        
        // Apply smooth easing curve for ultra-smooth transitions
        const scrollProgress = easeInOutCubic(rawProgress);
        
        // Find the content container to pull it up
        const contentContainer = document.querySelector('#home .container');
        
        // Smooth hero shrinking and content pulling
        if (heroSection && scrollTop > transitionStart) {
            // Smoother scaling with easing
            const scaleY = Math.max(0.08, 1 - (scrollProgress * 0.92)); // Scale from 1 to 0.08
            const translateY = scrollProgress * -50; // More dramatic upward movement
            heroSection.style.transform = `scaleY(${scaleY}) translateY(${translateY}px)`;
            heroSection.style.transformOrigin = 'top center';
            
            // Pull content up more aggressively to eliminate any gap
            if (contentContainer) {
                const pullUp = scrollProgress * -(heroHeight * 0.5); // Pull content up by 50% of hero height
                contentContainer.style.transform = `translateY(${pullUp}px)`;
            }
        }
        
        // Simultaneous navbar transition with smooth easing
        if (scrollProgress > 0.02) { // Start extremely early
            const navRawProgress = Math.min((scrollProgress - 0.02) / 0.8, 1); // Fade over 80% of the transition
            const navProgress = easeInOutCubic(navRawProgress); // Apply easing to navbar too
            
            // Show name in navbar gradually with easing
            navBrand.style.opacity = navProgress;
            navBrand.style.transform = `translateY(${1.5 * (1 - navProgress)}px)`;
            
            // Keep navigation links always visible
            navThemeToggle.style.opacity = 1;
            navThemeToggle.style.transform = 'translateX(0px)';
            
            // Add scrolled class for styling
            if (navProgress > 0.15) {
                navbar.classList.add('scrolled');
            }
        } else {
            // Reset to initial state
            navBrand.style.opacity = 0;
            navBrand.style.transform = 'translateY(1.5px)';
            navThemeToggle.style.opacity = 1;
            navThemeToggle.style.transform = 'translateX(0px)';
            navbar.classList.remove('scrolled');
            
            // Reset hero section and content
            if (heroSection && scrollTop <= transitionStart) {
                heroSection.style.transform = 'none';
                if (contentContainer) {
                    contentContainer.style.transform = 'none';
                }
            }
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
});

// Presentations Gallery Filtering
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const presentationItems = document.querySelectorAll('.presentation-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter presentation items
            presentationItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// Modal Functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Focus trap for accessibility
        modal.focus();
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.style.display === 'block') {
                    closeModal(modal.id);
                }
            });
        }
    });
});

// Smooth animations for cards on scroll
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and interactive elements
    const animatedElements = document.querySelectorAll(
        '.card, .research-card, .news-item, .presentation-card, .course-card, .feedback-card'
    );

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Static title - no dynamic typing effect needed

// Research card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const researchCards = document.querySelectorAll('.research-card');
    
    researchCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.research-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });

        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.research-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
});

// Course materials accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const materialLinks = document.querySelectorAll('.material-link');
    
    materialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add a subtle animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Here you would normally handle the actual file download or navigation
            console.log('Material accessed:', this.textContent.trim());
        });
    });
});

// Social links functionality
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default if it's a placeholder link (#)
            if (href === '#' || !href || href === '') {
                e.preventDefault();
                console.log('Placeholder social link clicked');
                return;
            }
            
            // For real URLs, allow normal navigation and add ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// News items click functionality
document.addEventListener('DOMContentLoaded', function() {
    const newsItems = document.querySelectorAll('.news-item');
    
    newsItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add a subtle highlight effect using CSS variables
            this.style.backgroundColor = 'var(--card-hover)';
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 200);
            
            // Here you could expand the news item or navigate to full article
            console.log('News item clicked:', this.querySelector('h3').textContent);
        });

        // Make news items keyboard accessible
        item.setAttribute('tabindex', '0');
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});

// Add CSS for ripple animation
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .social-link {
            position: relative;
            overflow: hidden;
        }
        
        .research-icon {
            transition: transform 0.3s ease;
        }
        
        .news-item {
            cursor: pointer;
            transition: background-color 0.2s ease;
        }
        
        .news-item:hover {
            background-color: var(--card-hover);
        }
    `;
    document.head.appendChild(style);
});

// Performance optimization: Lazy load images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[src*="placeholder"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Here you would replace with actual image URLs
                // For demo purposes, we're keeping the placeholder
                img.style.opacity = '1';
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        imageObserver.observe(img);
    });
});

// Accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    // Add ARIA labels and roles
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.setAttribute('role', 'navigation');
        navMenu.setAttribute('aria-label', 'Main navigation');
    }


    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        border-radius: 0 0 4px 4px;
        z-index: 1001;
        transition: top 0.3s ease;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '0';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.prepend(skipLink);

    // Add main content ID for skip link
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.id = 'main-content';
        mainContent.setAttribute('tabindex', '-1');
    }
});

// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    function updateThemeToggles(theme) {
        const isLight = theme === 'light';
        themeToggle.checked = isLight;
    }
    
    function switchTheme() {
        const isLight = themeToggle.checked;
        
        if (isLight) {
            // Switch to light mode
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            // Switch to dark mode
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        }
        
        
        // Add transition effect
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }
    
    
    // Apply the saved theme
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        updateThemeToggles('light');
    } else {
        document.documentElement.removeAttribute('data-theme');
        updateThemeToggles('dark');
    }
    
    // Theme toggle event listeners
    themeToggle.addEventListener('change', switchTheme);
});

// Enhanced Touch Interactions for Mobile
document.addEventListener('DOMContentLoaded', function() {
    // Add touch feedback for interactive elements
    const interactiveElements = document.querySelectorAll(
        '.research-card, .presentation-card, .course-card, .news-item, .feedback-card, .social-link, .material-link, .filter-btn, .view-btn'
    );

    interactiveElements.forEach(element => {
        // Add touch start effect
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
            this.style.transition = 'transform 0.1s ease';
        }, { passive: true });

        // Remove touch effect
        element.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        }, { passive: true });

        // Handle touch cancel
        element.addEventListener('touchcancel', function() {
            this.style.transform = '';
        }, { passive: true });
    });

    // Improve mobile navigation experience
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('touchstart', function() {
            this.style.backgroundColor = 'rgba(79, 70, 229, 0.1)';
            this.style.borderRadius = '8px';
        }, { passive: true });

        link.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.backgroundColor = '';
                this.style.borderRadius = '';
            }, 200);
        }, { passive: true });
    });

    // Add swipe gesture support for mobile navigation (basic implementation)
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            const currentSection = document.querySelector('.section.active');
            if (!currentSection) return;
            
            const sections = ['home', 'presentations', 'publications', 'teaching'];
            const currentIndex = sections.indexOf(currentSection.id);
            
            if (diff > 0 && currentIndex < sections.length - 1) {
                // Swipe left - next section
                const nextSection = sections[currentIndex + 1];
                const nextLink = document.querySelector(`[data-section="${nextSection}"]`);
                if (nextLink) nextLink.click();
            } else if (diff < 0 && currentIndex > 0) {
                // Swipe right - previous section
                const prevSection = sections[currentIndex - 1];
                const prevLink = document.querySelector(`[data-section="${prevSection}"]`);
                if (prevLink) prevLink.click();
            }
        }
    }
});

// Enhanced Smooth Scrolling Animation System
document.addEventListener('DOMContentLoaded', function() {
    // Create smooth scroll animation for internal links
    function smoothScrollTo(target, duration = 800) {
        const targetElement = typeof target === 'string' ? document.querySelector(target) : target;
        if (!targetElement) return;

        const targetPosition = targetElement.offsetTop - 80; // Account for fixed navbar
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Easing function for smooth animation
        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // Add smooth scrolling to any anchor links (if they exist)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                smoothScrollTo(targetElement);
                
                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });

    // Parallax scrolling effect for hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            if (scrolled < window.innerHeight) {
                heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        }, { passive: true });
    }

    // Smooth fade-in animations for sections
    const sectionsToAnimate = document.querySelectorAll('.section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    sectionsToAnimate.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });
});