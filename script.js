// Search logic as called in HTML button
function searchFunction() {
    const input = document.getElementById("searchBox").value;
    if (input) {
        alert("Analyzing APEX database for: " + input);
    }
}

// Mobile Navbar logic
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
