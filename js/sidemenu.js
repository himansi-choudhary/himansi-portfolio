const sidemenu = document.getElementById('sidemenu');
const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');

// Open side menu
menuOpen.addEventListener('click', () => {
    sidemenu.style.right = '0';
});

// Close side menu
menuClose.addEventListener('click', () => {
    sidemenu.style.right = '-200px';
});

// Close menu when any nav link is clicked
document.querySelectorAll('#sidemenu li a').forEach(link => {
    link.addEventListener('click', () => {
        sidemenu.style.right = '-200px';
    });
});
