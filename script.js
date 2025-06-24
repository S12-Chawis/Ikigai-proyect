// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => observer.observe(el));
});

// Modal functionality
function openReflectionModal() {
    const modal = document.getElementById('reflectionModal');
    modal.style.display = 'block';
    
    // Add fade-in effect
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

function closeReflectionModal() {
    const modal = document.getElementById('reflectionModal');
    modal.style.opacity = '0';
    
    // Wait for fade-out animation before hiding
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('reflectionModal');
    if (event.target === modal) {
        closeReflectionModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeReflectionModal();
    }
});

// Smooth scrolling for anchor links (if any)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add some interactive effects to the Ikigai diagram
document.addEventListener('DOMContentLoaded', () => {
    const diagramSections = document.querySelectorAll('.diagram-section');
    
    diagramSections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            // Add a subtle glow effect
            section.style.filter = 'brightness(1.2)';
        });
        
        section.addEventListener('mouseleave', () => {
            // Remove the glow effect
            section.style.filter = 'brightness(1)';
        });
    });
});

// Add parallax effect to the header (subtle)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    const rate = scrolled * -0.5;
    
    if (header) {
        header.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation for the page
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Optional: Add some console logging for debugging
console.log('Ikigai website loaded successfully! 🎯');
console.log('Features:');
console.log('- Responsive design');
console.log('- Scroll animations');
console.log('- Interactive Ikigai diagram');
console.log('- Reflection modal');
console.log('- Smooth interactions'); 