window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.slide-in');
    const screenPosition = window.innerHeight / 1.2;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if(elementTop < screenPosition) {
            el.style.animationPlayState = 'running';
        }
    });
});
