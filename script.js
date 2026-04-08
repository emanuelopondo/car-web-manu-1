// Smooth Scroll for Nav Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Reuse your existing scroll logic for the navbar background
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.style.background = window.scrollY > 50 ? 'rgba(10, 10, 10, 0.98)' : 'rgba(10, 10, 10, 0.9)';
});
