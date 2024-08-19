


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

// Select both heroHeading and heroPara elements
const hiddenElements = document.querySelectorAll('.heroHeading, .heroPara');
hiddenElements.forEach((el) => observer.observe(el));


