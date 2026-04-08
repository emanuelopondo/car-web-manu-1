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

// 2. Smooth Scroll for all Nav Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only if it's an internal link
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70, // Header offset
                    behavior: 'smooth'
                });
            }
        }
    });
});

// 3. Search Functionality
function searchFunction() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    if (input.includes("ferrari") || input.includes("lamborghini") || input.includes("porsche") || input.includes("bugatti")) {
        alert(`ACCESSING ARCHIVES... \nLoading specifications for: ${input.toUpperCase()}`);
        document.getElementById('specs').scrollIntoView({ behavior: 'smooth' });
    } else if (input.trim() !== "") {
        alert("SEARCHING DATABASE... \nPlease wait while we query global inventory.");
    } else {
        alert("SYSTEM ERROR: Input required to initiate search protocol.");
    }
}

// 4. Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
        navLinks.classList.toggle('active');
    });
}
