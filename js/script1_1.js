// ===============================
// LOGOUT BUTTON (ALERT VERSION)
// ===============================
document.getElementById("logout-btn").addEventListener("click", () => {
    alert("Logged out successfully!");
    // Redirect to login page or perform logout logic
});


// ===============================
// CAROUSEL LOGIC
// ===============================
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots-container");

// Create dots dynamically
slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.setAttribute("onclick", `currentSlide(${index})`);
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlides(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    slides.forEach(slide => (slide.style.display = "none"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}

// Auto slide every 3 seconds
function autoSlide() {
    moveSlide(1);
    setTimeout(autoSlide, 3000);
}

// Move slide manually
function moveSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// Navigate to a specific slide
function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

// Initialize carousel
showSlides(slideIndex);
setTimeout(autoSlide, 3000);


// ===============================
// LOGOUT ROUTE FETCH VERSION
// ===============================
document.getElementById('logout-btn').addEventListener('click', function () {
    fetch('/logout', {
        method: 'GET',
    })
    .then(response => {
        if (response.redirected) {
            window.location.href = response.url;
        }
    })
    .catch(error => {
        console.error('Error during logout:', error);
    });
});


// ===============================
// SCROLL ANIMATION FOR FEATURE CARDS
// ===============================

// Function to check if element is visible
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom >= 0
    );
}

// Add visible class when scrolled into view
function handleScroll() {
    const sections = document.querySelectorAll('.feature-card');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

// Scroll listener
window.addEventListener('scroll', handleScroll);

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
    handleScroll();
});