const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start-button');
const gameOverScreen = document.getElementById('game-over-screen');
const finalScoreDisplay = document.getElementById('final-score');
const restartButton = document.getElementById('restart-button');

let score = 0;
let timeLeft = 30;
let gameInterval;
let faceInterval;
let facesOnScreen = []; // Pitää kirjaa aktiivisista kasvoista

const faceImages = ['jassu', 'jepu']; // Kuvat vastaavat CSS-luokkia

function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = `Pisteet: ${score}`;
    timerDisplay.textContent = `Aika: ${timeLeft}`;
    gameArea.innerHTML = ''; // Tyhjennä vanhat kasvot
    gameOverScreen.classList.add('hidden');
    startButton.classList.add('hidden'); // Piilota aloitusnappi

    gameInterval = setInterval(updateGame, 1000); // Päivitä peliä sekunnin välein
    faceInterval = setInterval(spawnFace, 1000); // Luo uusia kasvoja sekunnin välein
}

function updateGame() {
    timeLeft--;
    timerDisplay.textContent = `Aika: ${timeLeft}`;

    if (timeLeft <= 0) {
        endGame();
    }
}

function spawnFace() {
    // Poista vanhat kasvot, jos niitä on liikaa tai ne ovat liian vanhoja
    if (facesOnScreen.length > 5) { // Esim. max 5 kasvoa kerrallaan
        const oldFace = facesOnScreen.shift(); // Poista vanhin
        oldFace.remove();
    }

    const faceType = faceImages[Math.floor(Math.random() * faceImages.length)];
    const face = document.createElement('div');
    face.classList.add('face', faceType);

    // Satunnainen sijainti pelialueella
    const maxX = gameArea.clientWidth - 80; // Vähennä kasvojen leveys
    const maxY = gameArea.clientHeight - 80; // Vähennä kasvojen korkeus
    face.style.left = `${Math.random() * maxX}px`;
    face.style.top = `${Math.random() * maxY}px`;

    face.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = `Pisteet: ${score}`;
        face.remove(); // Poista klikattu naama
        facesOnScreen = facesOnScreen.filter(f => f !== face); // Poista myös listalta
    });

    gameArea.appendChild(face);
    facesOnScreen.push(face);

    // Kasvojen katoaminen itsestään, jos ei klikata
    setTimeout(() => {
        if (face.parentNode === gameArea) { // Varmista, että on vielä ruudulla
            face.remove();
            facesOnScreen = facesOnScreen.filter(f => f !== face);
        }
    }, 1500); // Kasvot katoavat 1.5 sekunnissa
}

function endGame() {
    clearInterval(gameInterval);
    clearInterval(faceInterval);
    gameArea.innerHTML = ''; // Poista kaikki kasvot
    finalScoreDisplay.textContent = score;
    gameOverScreen.classList.remove('hidden');
    startButton.classList.remove('hidden'); // Näytä aloitusnappi uudelleen
    facesOnScreen = [];
}

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);
