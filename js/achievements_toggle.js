document.querySelectorAll('.category-header').forEach(header => {
    header.addEventListener('click', () => {
        const category = header.parentElement;
        const icon = header.querySelector('.toggle-icon');

        category.classList.toggle('open');
        icon.textContent = category.classList.contains('open') ? '-' : '+';

        header.setAttribute('aria-expanded', category.classList.contains('open'));
    });
});
