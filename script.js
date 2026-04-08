/* --- APEX MOTORS INTERACTIVE SCRIPTS --- */

// 1. Navbar style change on scroll
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

// 2. Search Functionality (Requirement #9)
function searchFunction() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    
    // If on index.html, it will alert. If searching specifically for models, it guides them.
    if (input.includes("ferrari") || input.includes("lamborghini") || input.includes("bugatti")) {
        alert(`SEARCHING ARCHIVES... \nDisplaying specs for: ${input.toUpperCase()}`);
        // Check if specs table exists on current page, if not, could redirect
        const specsTable = document.querySelector('.data-table');
        if (specsTable) {
            specsTable.scrollIntoView();
        }
    } else if (input.trim() !== "") {
        alert("QUERY RECEIVED: Searching global inventory database...");
    } else {
        alert("SYSTEM ERROR: Please enter a model name to search.");
    }
}

// 3. Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Optional: Toggle hamburger animation classes here
    });
}

// 4. Handle Active Navigation State
// This highlights the current page in the menu
const currentPath = window.location.pathname.split("/").pop();
const menuItems = document.querySelectorAll('.nav-links li a');

menuItems.forEach(item => {
    if (item.getAttribute('href') === currentPath) {
        item.classList.add('active-page');
    }
    // Close mobile menu on click
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 5. Contact Form Label Animation
const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('active');
    });
    input.addEventListener('blur', () => {
        if (input.value === "") {
            input.parentElement.classList.remove('active');
        }
    });
});

// 6. Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
