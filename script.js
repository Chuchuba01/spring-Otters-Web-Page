// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Handle the newsletter form submission
    const newsletterForm = document.querySelector('#newsletter form');
    const emailInput = newsletterForm.querySelector('input[type="email"]');

    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission

        const email = emailInput.value.trim();

        // Basic email validation
        if (email === "") {
            alert("Please enter your email address.");
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
        } else {
            alert("Thank you for subscribing!");
            emailInput.value = ""; // Clear the input field
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
