
const projectCards = document.querySelectorAll('.project-card');

// flip card
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});
