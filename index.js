document.addEventListener('DOMContentLoaded', function() {
    const signedUpUserName = localStorage.getItem('signedUpUserName');
    const userInfo = document.getElementById('user-info');

    if (signedUpUserName) {
        const userNameElement = document.createElement('span');
        userNameElement.textContent = `Welcome, ${signedUpUserName}!`;
        userNameElement.classList.add('user-name');
        userInfo.appendChild(userNameElement);

        // Move the user's name to the top right corner
        userNameElement.style.position = 'absolute';
        userNameElement.style.top = '60px';
        userNameElement.style.right = '10px';
        userNameElement.style.color = '#040403'; // Example: Change text color to white
        userNameElement.style.fontWeight = 'bold'; // Example: Make the text bold
        // Additional styles as needed
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-formm');
    const sendMessageBtn = document.getElementById('send-message-btn');
    const messageStatus = document.getElementById('contact-message-status');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Simulate sending the message (Dummy functionality)
        setTimeout(function() {
            // Display success message after 2 seconds (simulating a successful send)
            messageStatus.textContent = 'Message sent successfully!';
            contactForm.reset(); // Clear the form fields
        }, 2000); // Adjust timing as needed for simulation
    });
});
