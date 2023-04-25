const menuBtn = document.querySelector('.menuBtn');
const menuSlide = document.querySelector('nav .center .menu');
const closeBtn = document.querySelector('nav .left a i');

menuBtn.addEventListener('click', () => {
    setTimeout(() => {
        menuSlide.classList.toggle('active');
    }, 250);
    if (closeBtn.classList.contains('ri-menu-4-line')) {
        closeBtn.classList.add('ri-close-line');
        closeBtn.classList.remove('ri-menu-4-line');
    } else {
        closeBtn.classList.add('ri-menu-4-line');
        closeBtn.classList.remove('ri-close-line');
    }
});
