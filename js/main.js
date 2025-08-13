document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navBrand = document.getElementById('navBrand');
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');
    let ticking = false;

    // Theme Toggle Functionality
    if (themeToggle && themeIcon) {
        // Check for saved theme preference or default to dark mode
        const savedTheme = localStorage.getItem('theme') || 'dark';
        
        function updateThemeButton(theme) {
            if (theme === 'light') {
                themeIcon.textContent = '☀️';
            } else {
                themeIcon.textContent = '🌙';
            }
        }
        
        function switchTheme() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const isCurrentlyLight = currentTheme === 'light';
            
            if (isCurrentlyLight) {
                // Switch to dark mode
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
                updateThemeButton('dark');
            } else {
                // Switch to light mode
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                updateThemeButton('light');
            }
        }
        
        // Apply the saved theme on load
        if (savedTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            updateThemeButton('light');
        } else {
            document.documentElement.removeAttribute('data-theme');
            updateThemeButton('dark');
        }
        
        // Add click event listener
        themeToggle.addEventListener('click', switchTheme);
    }

    // Navbar Brand Logic for Home Page
    function updateNavbarBrand() {
        if (!navBrand) return;
        
        // Check if we're on the home page
        const isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
        
        if (isHomePage) {
            // On home page, check if hero name is visible
            const heroName = document.querySelector('.hero-text h1');
            if (heroName) {
                const heroNameRect = heroName.getBoundingClientRect();
                const navbarHeight = navbar ? navbar.offsetHeight : 70;
                
                // Show navbar brand when hero name is hidden behind navbar
                const shouldShowBrand = heroNameRect.bottom <= navbarHeight;
                navBrand.style.opacity = shouldShowBrand ? '1' : '0';
            }
        } else {
            // On all other pages, always show the brand
            navBrand.style.opacity = '1';
        }
    }

    // Scroll Handler
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class for styling
        if (navbar) {
            if (scrollTop > 20) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        
        // Update navbar brand
        updateNavbarBrand();
        
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
    }

    // Initialize everything
    updateNavbarBrand(); // Set initial state
    
    // Listen to scroll events
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Update navbar brand on page load and resize
    window.addEventListener('resize', updateNavbarBrand);
});