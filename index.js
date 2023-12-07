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
        userNameElement.style.top = '10px';
        userNameElement.style.right = '10px';
        userNameElement.style.color = '#fff'; // Example: Change text color to white
        userNameElement.style.fontWeight = 'bold'; // Example: Make the text bold
        // Additional styles as needed
    }
});