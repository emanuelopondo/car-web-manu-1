// Keep original flow - Search functionality updated for client-facing Performance Lab
function searchFunction() {
    const input = document.getElementById('searchBox').value.toUpperCase();
    
    // Redirects to Lab section if keywords are found
    if (input.includes("LAB") || input.includes("TUNING") || input.includes("PERFORMANCE")) {
        window.location.href = "#performance-lab";
    } else if (input.includes("CONTACT") || input.includes("INQUIRE")) {
        window.location.href = "#contact";
    } else if (input) {
        alert("Analyzing APEX technical specifications for: " + input);
    }
}

// Keep original Hamburger logic exactly as first sent
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Ensure navbar links close the mobile menu when clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
