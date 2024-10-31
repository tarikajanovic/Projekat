function toggleMobileMenu() {
    const menuToggle = document.querySelector('.linkovi');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    } else {
        console.error("Menu toggle or navigation links element not found.");
    }
}

// Display Current Year in Footer
function displayCurrentYear() {
    const yearElement = document.getElementById('current-year'); // Add <span id="current-year"></span> in your footer
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }
}

// Call the function to activate it
displayCurrentYear();

// Smooth Scroll to Sections
function smoothScroll() {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Call the function to activate smooth scrolling
smoothScroll();

// Toggle Map Border Color
function toggleMapBorderColor() {
    const mapContainer = document.querySelector('.map-container iframe');
    const colors = ['aliceblue', 'lightblue', 'lightgreen', 'pink'];
    let colorIndex = 0;

    document.querySelector('.map-container').addEventListener('click', () => {
        colorIndex = (colorIndex + 1) % colors.length;
        if (mapContainer) {
            mapContainer.style.borderColor = colors[colorIndex];
        }
    });
}

// Call the function to enable map border color toggle
toggleMapBorderColor();

document.addEventListener('DOMContentLoaded', () => {
    displayCurrentYear();
    smoothScroll();
    toggleMapBorderColor();
    toggleMobileMenu();
});