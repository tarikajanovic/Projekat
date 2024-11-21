function animateHeaderOnScroll() {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.transform = 'translateY(0)';
            header.style.opacity = '0.9';
            header.style.padding = '0.5rem 1rem';
        } else {
            header.style.transform = 'translateY(-20px)';
            header.style.opacity = '1';
            header.style.padding = '1rem 2rem';
        }
    });
}

animateHeaderOnScroll();

function addRippleEffectToContact() {
    const contact = document.querySelector('.contact');

    contact.addEventListener('mouseenter', () => {
        contact.style.boxShadow = '0px 0px 20px 5px rgba(58, 28, 113, 0.5)';
        contact.style.transition = 'box-shadow 0.5s ease-in-out';
    });

    contact.addEventListener('mouseleave', () => {
        contact.style.boxShadow = 'none';
    });
}

addRippleEffectToContact();

function toggleMenu() {
    const menuToggle = document.querySelector('.linkovi');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        menuToggle.querySelectorAll('.bar').forEach((bar, index) => {
            bar.style.transform = navLinks.classList.contains('nav-active')
                ? `rotate(${index === 0 ? 45 : -45}deg)`
                : 'rotate(0deg)';
            bar.style.transition = `transform 0.3s ease ${index * 0.1}s`;
        });
    });
}

toggleMenu();

function fadeInMapOnLoad() {
    const mapSection = document.querySelector('.map-container');

    mapSection.style.opacity = '0';
    mapSection.style.transform = 'translateY(50px)';
    mapSection.style.transition = 'opacity 1s ease, transform 1s ease';

    // Trigger the animation after a short delay
    window.addEventListener('load', () => {
        mapSection.style.opacity = '1';
        mapSection.style.transform = 'translateY(0)';
    });
}

fadeInMapOnLoad();

function animateHeadersOnLoad() {
    const headers = document.querySelectorAll('h1');

    headers.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = 'scale(0.8)';
        header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

        // Trigger the animation after a slight delay
        window.addEventListener('load', () => {
            setTimeout(() => {
                header.style.opacity = '1';
                header.style.transform = 'scale(1)';
            }, 200); // Delay to ensure all styles are applied properly
        });
    });
}

animateHeadersOnLoad();

function addHeaderHoverEffect() {
    const headers = document.querySelectorAll('h1');

    headers.forEach(header => {
        // Set up the transition for smooth effect
        header.style.transition = 'color 0.5s ease, text-shadow 0.5s ease';

        // Add event listeners for hover effect
        header.addEventListener('mouseover', () => {
            header.style.color = '#ff6347'; // A vibrant orange color
            header.style.textShadow = '2px 2px 10px #d76d77'; // Add glowing effect
        });

        header.addEventListener('mouseout', () => {
            header.style.color = ''; // Reset to default
            header.style.textShadow = ''; // Reset shadow
        });
    });
}

addHeaderHoverEffect();

