const scrollWrapper = document.querySelector('.tools-scroll-wrapper');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

// Update visibility of left/right scroll arrows based on scroll position
const updateArrowVisibility = () => {
    const maxScrollLeft = scrollWrapper.scrollWidth - scrollWrapper.clientWidth;
    scrollLeftBtn.style.display = scrollWrapper.scrollLeft > 0 ? 'block' : 'none';
    scrollRightBtn.style.display = scrollWrapper.scrollLeft < maxScrollLeft ? 'block' : 'none';
};

// Scroll left by 250px smoothly on left button click
scrollLeftBtn.addEventListener('click', () => {
    scrollWrapper.scrollBy({ left: -250, behavior: 'smooth' });
});

// Scroll right by 250px smoothly on right button click
scrollRightBtn.addEventListener('click', () => {
    scrollWrapper.scrollBy({ left: 250, behavior: 'smooth' });
});

// Update arrow visibility on scroll and window resize
scrollWrapper.addEventListener('scroll', updateArrowVisibility);
window.addEventListener('resize', updateArrowVisibility);

// Initial arrow visibility check
updateArrowVisibility();