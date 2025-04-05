let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        navbar.classList.add("hidden");
    } else {
        navbar.classList.remove("hidden");
    }
    lastScrollTop = currentScroll;
});
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".images-container .images");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                images.forEach(img => img.classList.add("show")); 
                observer.disconnect(); 
            }
        });
    }, { threshold: 0.2 });

    images.forEach(img => observer.observe(img));
});
