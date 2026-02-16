// Change Navbar style on scroll
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

// Search Functionality
function searchFunction() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    
    if (input.includes("ferrari") || input.includes("lamborghini") || input.includes("porsche") || input.includes("bugatti")) {
        // In a real app, this would filter results.
        // For the demo, we show a professional interaction.
        alert(`ACCESSING ARCHIVES... \nLoading specifications for: ${input.toUpperCase()}`);
        document.getElementById('specs').scrollIntoView();
    } else if (input.trim() !== "") {
        alert("SEARCHING DATABASE... \nPlease wait while we query global inventory.");
    } else {
        alert("SYSTEM ERROR: Input required to initiate search protocol.");
    }
}

// Optional: Simple Form Animation for labels (handled in CSS mostly)
const inputs = document.querySelectorAll('.form-group input, .form-group textarea');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('active');
    });
    input.addEventListener('blur', () => {
        if(input.value === "") {
            input.parentElement.classList.remove('active');
        }
    });
});