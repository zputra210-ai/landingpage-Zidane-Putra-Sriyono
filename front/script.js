async function loadProfile() {

    try {
        const response = await fetch('/api/profile');
        const profile = await response.json();

        document.getElementById('profile-title').textContent = profile.title;
        document.getElementById('profile-name').textContent = profile.name;
        document.getElementById('profile-description').textContent = profile.description;

    } catch (error) {

        console.error('Error loading profile:', error);

    }

}


const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(event) {

            event.preventDefault();
            const formData = new FormData(contactForm);
            const contactData = Object.fromEntries(formData.entries());

            const status = document.getElementById('contact-status');

            try {

                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(contactData)
                });

                const result = await response.text();

                if (!response.ok) {
                    throw new Error(result);
                }

                status.textContent = result;
                contactForm.reset();

            } 
            catch (error) {
                status.textContent = 'Failed to send message. Please try again.';
                console.error(error);

            }

        });

    }


/* ================================
   MOUSE SPOTLIGHT EFFECT
================================ */

document.addEventListener('pointermove', function(event) {

    // Hanya aktif untuk mouse
    if (event.pointerType !== 'mouse') {
        return;
    }

    document.body.style.setProperty(
        '--mouse-x',
        event.clientX + 'px'
    );

    document.body.style.setProperty(
        '--mouse-y',
        event.clientY + 'px'
    );

    document.body.classList.add('mouse-active');

});


/* ================================
   SCROLL REVEAL ANIMATION
================================ */

const revealElements = document.querySelectorAll(
    '.hero-content, .hero-image, .skills h2, .skills > p, .skills-container, .contact-information, .contact-form'
);

// Memberikan class reveal ke setiap elemen
revealElements.forEach(function(element) {
    element.classList.add('reveal');
});

// Mengamati elemen ketika memasuki layar
const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add('active');

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

// Mengamati semua elemen
revealElements.forEach(function(element) {
    observer.observe(element);
});

loadProfile();
