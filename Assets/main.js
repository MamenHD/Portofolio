document.addEventListener('alpine:init', () => {
    Alpine.data('navObserver', () => ({
        init() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.activeSection = entry.target.id;
                    }
                });
            }, { threshold: 0.5 });
            document.querySelectorAll('section[id]').forEach(section => {
                observer.observe(section);
            });
        },

        handleScroll() {
            this.scrolled = window.scrollY > 50;
        }
    }));
});