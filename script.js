// JavaScript for form validation
document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        event.preventDefault();  // Prevent form submission if validation fails
    }
});

// JavaScript for simple animations
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#333';
    } else {
        header.style.backgroundColor = '#4CAF50';
    }
});

