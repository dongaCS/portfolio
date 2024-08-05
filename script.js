
const projectCards = document.querySelectorAll('.project-card');

// flip card
projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.tagName != "BUTTON") {
            card.classList.toggle('flipped')
        }
    });
});
