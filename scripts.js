document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });





    // Retrieve page from featured item images
    const featuredItems = document.querySelectorAll('.featured-item');

    featuredItems.forEach(item => {
        const img = item.querySelector('img');

        img.addEventListener('click', function() {
            const imageName = this.alt.toLowerCase().replace(/\s+/g, '-'); 
            const pageUrl = `pages/${imageName}.html`; 
            window.location.href = pageUrl;
        });
    });

    // Image slider functionality 
    const sliderImages = document.querySelectorAll('.image-slider img');
    const totalSlides = sliderImages.length;
    let currentSlide = 0;

    function showSlide(slideIndex) {
        sliderImages.forEach((img, index) => {
            if (index === slideIndex) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Initial slide display
    showSlide(currentSlide);
    setInterval(nextSlide, 2000);

    // Contact form submission and validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        if (validateForm()) {
           
            alert('Form submitted successfully!');
        
            form.reset();
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        //  validation
        if (name === '') {
            alert('Please enter your name.');
            return false;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (message === '') {
            alert('Please enter your message.');
            return false;
        }

        return true;
    }

    function isValidEmail(email) {
        // Basic email validation using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Placeholder behavior with JavaScript (new functionality)
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');

    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value !== '') {
                this.classList.add('filled');
            } else {
                this.classList.remove('filled');
            }
        });
    });

    // Back to Top button functionality
    document.getElementById('back-to-top').addEventListener('click', function(event) {
        event.preventDefault();
        navigateToSection('#home'); 
    });

    // Function to scroll to a section
    function navigateToSection(sectionId) {
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    }

    // Social media icons functionality
    const socialMediaLinks = document.querySelectorAll('.social-media-icon');

    socialMediaLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const socialMediaPlatform = this.dataset.platform; 
            alert(`Opening ${socialMediaPlatform} profile`);
            // Implement logic to navigate to the respective social media link
            // Example: window.location.href = 'https://www.facebook.com/yourPage';
        });
    });

// New Arrivals section horizontal scrolling
const newProductsScroll = document.querySelector('.new-products-scroll');
    const leftButton = document.querySelector('.left-button');
    const rightButton = document.querySelector('.right-button');

    // Scroll to the left
    leftButton.addEventListener('click', function() {
        newProductsScroll.scrollBy({
            left: -newProductsScroll.clientWidth,
            behavior: 'smooth'
        });
    });

    // Scroll to the right
    rightButton.addEventListener('click', function() {
        newProductsScroll.scrollBy({
            left: newProductsScroll.clientWidth,
            behavior: 'smooth'
        });
    });
});
