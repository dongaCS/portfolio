
const projectCards = document.querySelectorAll('.project-card');
const pokeImg = document.getElementById('pokeDex-img')

// flip card
projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.tagName != "BUTTON") {
            card.classList.toggle('flipped')
        }
    });
});

// random pokedex image card
const options = ["red", "blue", "yellow", "green", "black", "brown", "purple", "gray", "white", "pink"];
document.addEventListener('DOMContentLoaded', _ => {
    const r = ~~(Math.random() * options.length);
    document.getElementById('pokeDex-img').src = `./images/pokemon/${options[r]}.png`;
  });