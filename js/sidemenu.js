const sidemenu = document.getElementById('sidemenu');
const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const navbar = document.querySelector('nav');

const updateNavbar = () => {
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

window.addEventListener('scroll', updateNavbar);
window.addEventListener('load', updateNavbar);

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
