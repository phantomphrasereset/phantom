// JavaScript for menu-toggle functionality

// Select the menu toggle button and the navigation menu
const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('.nav-list');

// Add an event listener to toggle the visibility of the navigation menu
menuToggle.addEventListener('click', () => {
    // Toggle a class to show or hide the menu
    navList.classList.toggle('visible');

    // Optionally, change the button icon (e.g., between hamburger and close icons)
    if (navList.classList.contains('visible')) {
        menuToggle.innerHTML = '&#10005;'; // X icon
    } else {
        menuToggle.innerHTML = '&#9776;'; // Hamburger icon
    }
});
