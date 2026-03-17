// Scroll animasyonları
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.slide-in');
    const screenPosition = window.innerHeight / 1.2;
    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if(elementTop < screenPosition){
            el.style.animationPlayState = 'running';
        }
    });
});

// Yükleme barı animasyonu (%25 Osmaniye)
window.addEventListener('load', () => {
    const bar = document.getElementById('osmaniye-progress');
    setTimeout(() => { // 0.5s gecikme ile animasyon
        bar.style.width = '25%';
        bar.textContent = '25%';
    }, 500);
});
