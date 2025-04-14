function toggleMenu(event) {
    if (event) {
        event.stopPropagation();
    }
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('menu-overlay');
    const isMenuOpen = !menu.classList.contains('translate-x-full');
    
    if (isMenuOpen) {
        // Close menu
        menu.classList.add('translate-x-full');
        overlay.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    } else {
        // Open menu
        menu.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
    }
}

// Handle clicks outside the menu
document.addEventListener('click', function(event) {
    const menu = document.getElementById('mobile-menu');
    const menuButton = document.querySelector('.menu-toggle');
    const overlay = document.getElementById('menu-overlay');

    if (!menu.classList.contains('translate-x-full') && // menu is open
        !menu.contains(event.target) && // click not on menu
        !menuButton.contains(event.target)) { // click not on menu button
        toggleMenu();
    }
}); 