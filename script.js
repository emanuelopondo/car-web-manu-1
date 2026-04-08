// Smooth Scroll for Nav Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            const target = document.querySelector(hash);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70, // Header offset
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Change Navbar background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.style.background = window.scrollY > 50 ? 'rgba(10, 10, 10, 0.98)' : 'rgba(10, 10, 10, 0.9)';
});

// Original Search Protocol
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

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
        navLinks.classList.toggle('active');
    });
}
