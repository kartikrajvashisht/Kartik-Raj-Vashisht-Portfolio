if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.onload = function () {
    window.scrollTo(0, 0);
};

document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    setTimeout(() => {
        follower.style.left = (e.clientX - 16) + 'px';
        follower.style.top = (e.clientY - 16) + 'px';
    }, 100);
});

// Reveal animations on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // optional, improves performance
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section > div').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
});
