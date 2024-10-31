
function toggleMobileMenu() {
    const menuToggle = document.querySelector('.linkovi');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}


toggleMobileMenu();


function validateContactForm() {
    const emailInput = document.getElementById('email'); // Assuming there’s an input field with id="email"
    const phoneInput = document.getElementById('phone'); // Assuming there’s an input field with id="phone"
    
    if (emailInput && phoneInput) {
        if (emailInput.value === '' || phoneInput.value === '') {
            alert('Please fill in all required fields.');
            return false;
        }
        alert('Thank you! Your message has been sent.');
        return true;
    }
    return false;
}


function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname;

    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active-link');
        }
    });
}


highlightActiveLink();