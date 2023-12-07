document.addEventListener('DOMContentLoaded', function() {
    const signedUpUserName = localStorage.getItem('signedUpUserName');
    const userInfo = document.getElementById('user-info');

    if (signedUpUserName) {
        const userNameElement = document.createElement('span');
        userNameElement.textContent = `Welcome, ${signedUpUserName}!`;
        userNameElement.classList.add('user-name');
        userInfo.appendChild(userNameElement);
    }
});