
const projectCards = document.querySelectorAll('.project-card');
const pokeImg = document.getElementById('pokeDex-img')
const roast = document.getElementById('roast')
const roastButton = document.getElementById('roast-me')

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

roastButton.addEventListener('click', async () => {
    const url = "https://cors-anywhere.herokuapp.com/https://roast-api.dongacs.workers.dev/";
    fetch(url, { mode: 'cors' })
        .then(response => response.json())
        .then(data => roast.textContent = `"` + data.roast + `"`)
        .catch(error => console.error('Fetch error:', error));
});