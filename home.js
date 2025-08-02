// Tilt effect for category cards
function tiltCard(card) {
    card.style.transform = "perspective(1000px) rotateX(5deg) rotateY(5deg)";
    card.style.boxShadow = "15px 15px 30px rgba(0,0,0,0.2)";
    
    card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
        card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
    });
}

// Add to cart animation
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function() {
        const cartCount = document.querySelector(".cart-count");
        cartCount.textContent = parseInt(cartCount.textContent) + 1;
        
        // Animation
        cartCount.classList.add("animate__animated", "animate__bounceIn");
        setTimeout(() => {
            cartCount.classList.remove("animate__animated", "animate__bounceIn");
        }, 1000);
    });
});

// Scroll animations
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate__animated", "animate__fadeInUp");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll(".product-card, .category-card").forEach(card => {
        observer.observe(card);
    });
});

// Newsletter form submission
document.querySelector(".newsletter form").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = this.querySelector("input").value;
    
    // Here you would typically send the email to your server
    console.log("Subscribed email:", email);
    
    // Show success message
    const form = this;
    form.innerHTML = `
        <div class="animate__animated animate__fadeIn">
            <p style="color: var(--success-color); font-weight: bold;">
                Thank you for subscribing!
            </p>
        </div>
    `;
});