// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Simple Search Alert
function searchFunction() {
    const input = document.getElementById("searchBox").value;
    if (input) {
        alert("ACCESSING ARCHIVES FOR: " + input.toUpperCase());
    } else {
        alert("PLEASE ENTER A MODEL TO DISCOVER.");
    }
}
