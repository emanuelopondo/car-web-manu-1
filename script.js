// SMOOTH NAVIGATION & SEARCH
function searchFunction() {
    let query = document.getElementById("searchBox").value.toLowerCase();
    if (query.trim() === "") {
        alert("Enter a model name.");
    } else {
        alert("SEARCHING: " + query.toUpperCase());
    }
}

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}
