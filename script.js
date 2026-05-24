/**
 * script.js
 * Handles interactive elements for the portfolio webpage, primarily the dark/light mode toggle.
 */

// Wait for the HTML document to fully parse and load before running scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // Select the theme toggle button element from the DOM
    const themeBtn = document.getElementById('theme-toggle');
    
    // Check if the user previously selected a theme (persisted in localStorage)
    const currentTheme = localStorage.getItem('theme');
    
    // If a theme exists in storage, apply it to the body tag immediately
    if (currentTheme) {
        document.body.setAttribute('data-theme', currentTheme);
    }
    
    // Add a click event listener to the toggle button
    themeBtn.addEventListener('click', () => {
        // Read the current active theme from the body attribute
        let theme = document.body.getAttribute('data-theme');
        
        // If current theme is 'dark', switch to 'light' (default)
        if (theme === 'dark') {
            document.body.removeAttribute('data-theme'); // Removing defaults to light variables
            localStorage.setItem('theme', 'light');      // Save preference
        } else {
            // Otherwise, switch to 'dark'
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');       // Save preference
        }
        
        // Add a quick visual "click" micro-animation
        themeBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            // Reset the transform after a short delay so it snaps back
            themeBtn.style.transform = '';
        }, 150);
    });
});
