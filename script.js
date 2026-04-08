// Change Navbar style on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
        header.style.padding = '15px 50px';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.9)';
        header.style.padding = '20px 50px';
    }
});

// Search Functionality
function searchFunction() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    if (input.includes("ferrari") || input.includes("lamborghini") || input.includes("porsche") || input.includes("bugatti")) {
        alert(`ACCESSING ARCHIVES... \nLoading specifications for: ${input.toUpperCase()}`);
        document.getElementById('specs').scrollIntoView();
    } else if (input.trim() !== "") {
        alert("SEARCHING DATABASE... \nPlease wait while we query global inventory.");
    } else {
        alert("SYSTEM ERROR: Input required to initiate search protocol.");
    }
}

// Form label animation
const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
inputs.forEach(input => {
    input.addEventListener('focus', () => { input.parentElement.classList.add('active'); });
    input.addEventListener('blur', () => {
        if (input.value === "") { input.parentElement.classList.remove('active'); }
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });
}

// Close menu when a nav link is clicked
const menuLinks = document.querySelectorAll('.nav-links li a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Mobile Dropdown Toggle
const dropdownTriggers = document.querySelectorAll('.dropdown > a');
dropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
        const parent = this.parentElement;
        if (window.innerWidth <= 768) {
            e.preventDefault();
            parent.classList.toggle('open');
        }
    });
});