// 1. Smooth Scrolling for Menu Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only trigger for internal # links
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for fixed header height
                    behavior: 'smooth'
                });
            }
        }
    });
});

// 2. Change Navbar Style on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(5, 5, 5, 0.95)';
        header.style.padding = '15px 50px';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.9)';
        header.style.padding = '20px 50px';
    }
});

// 3. Simple Search Logic for the Hero Section
function searchFunction() {
    const query = document.getElementById("searchBox").value.toLowerCase();
    if (query.trim() === "") {
        alert("Please enter a car model to search.");
        return;
    }
    
    // If user searches for a car we have, jump to specs
    if (query.includes("ferrari") || query.includes("bugatti") || query.includes("porsche")) {
        document.getElementById('specs').scrollIntoView({ behavior: 'smooth' });
    } else {
        alert("Searching database for: " + query.toUpperCase() + "...");
    }
}

// 4. Hamburger Menu Toggle (Mobile)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
        navLinks.classList.toggle('active-mobile');
    });
}
