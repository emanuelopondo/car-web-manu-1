// Toggle Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Search functionality
function searchFunction() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    if (input.trim() !== "") {
        alert("SEARCHING DATABASE for: " + input.toUpperCase());
    } else {
        alert("SYSTEM ERROR: Please enter a model name.");
    }
}
