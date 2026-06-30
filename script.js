// === Custom Cursor ===
const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
});

// === Star Field Generation ===
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.setProperty('--duration', Math.random() * 3 + 1 + 's');
        starsContainer.appendChild(star);
    }
}

// === Confetti Animation ===
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    const colors = ['#ff6b9d', '#b76bff', '#6bd5ff', '#ffeb3b', '#4caf50'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 200 + 'px';
        confetti.style.top = Math.random() * 100 + 'px';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confettiContainer.appendChild(confetti);
    }
}

// === Firecracker Animation ===
function createFirecrackers() {
    const body = document.body;

    // Create multiple crackers at random positions
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const cracker = document.createElement('div');
            cracker.className = 'cracker';
            cracker.style.left = Math.random() * window.innerWidth + 'px';
            cracker.style.top = Math.random() * window.innerHeight + 'px';
            body.appendChild(cracker);

            // Burst and create particles
            setTimeout(() => {
                cracker.classList.add('burst');
                createExplosion(cracker.offsetLeft, cracker.offsetTop);
                setTimeout(() => cracker.remove(), 500);
            }, 100);
        }, i * 200);
    }
}

function createExplosion(x, y) {
    const colors = ['#ff6b9d', '#b76bff', '#6bd5ff', '#ffeb3b'];

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.boxShadow = `0 0 20px ${colors[Math.floor(Math.random() * colors.length)]}`;
        particle.style.animationDelay = Math.random() * 0.5 + 's';
        document.querySelector('.fireworks').appendChild(particle);

        setTimeout(() => particle.remove(), 1000);
    }
}

// === Rabbit Animation ===
function createRabbitScene() {
    const body = document.body;

    // Create rabbit
    const rabbit = document.createElement('div');
    rabbit.className = 'rabbit';
    rabbit.innerHTML = '🐰';
    rabbit.style.left = '-50px';
    rabbit.style.bottom = '50px';
    body.appendChild(rabbit);

    // Create holes
    for (let i = 0; i < 5; i++) {
        const hole = document.createElement('div');
        hole.className = 'hole';
        hole.style.left = (100 + i * 150) + 'px';
        hole.style.bottom = '0';
        body.appendChild(hole);
    }

    // Animate rabbit hopping to holes
    let currentHole = 0;
    const holes = document.querySelectorAll('.hole');

    const hopInterval = setInterval(() => {
        if (currentHole < holes.length) {
            const holePos = holes[currentHole].offsetLeft;
            rabbit.style.transition = 'left 1s ease, bottom 0.5s ease';
            rabbit.style.left = (holePos + 15) + 'px';
            rabbit.style.bottom = '150px';

            // Go into hole
            setTimeout(() => {
                rabbit.style.bottom = '30px';
                rabbit.style.opacity = '0';
            }, 800);

            setTimeout(() => {
                rabbit.style.opacity = '1';
                rabbit.style.bottom = '50px';
            }, 1200);

            currentHole++;
        } else {
            clearInterval(hopInterval);
        }
    }, 1500);
}

// === Owl Animation ===
function createOwlScene() {
    const body = document.body;

    // Create nests
    for (let i = 0; i < 3; i++) {
        const nest = document.createElement('div');
        nest.className = 'nest';
        nest.style.position = 'absolute';
        nest.style.top = (50 + Math.random() * 100) + 'px';
        nest.style.left = (50 + i * 300) + 'px';
        nest.style.fontSize = '2rem';
        nest.innerHTML = '🪺';
        body.appendChild(nest);
    }

    // Create owls
    const owls = [];
    for (let i = 0; i < 3; i++) {
        const owl = document.createElement('div');
        owl.className = 'owl';
        owl.innerHTML = '🦉';
        owl.style.left = (80 + i * 300) + 'px';
        owl.style.top = (80 + Math.random() * 50) + 'px';
        body.appendChild(owl);
        owls.push(owl);
    }

    // Animate owls flying away
    setTimeout(() => {
        owls.forEach((owl, index) => {
            setTimeout(() => {
                owl.classList.add('fly');
            }, index * 300);
        });
    }, 1000);
}

// === Moon Zoom Animation ===
function zoomToMoon() {
    const moon = document.querySelector('.moon');
    moon.classList.add('zoom-in');

    // Create fireworks after zoom
    setTimeout(createFireworks, 1000);
}

// === Fireworks for Celebration ===
function createFireworks() {
    const container = document.querySelector('.fireworks');
    const colors = ['#ff6b9d', '#b76bff', '#6bd5ff', '#ffeb3b', '#4caf50'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight / 2;

            for (let j = 0; j < 40; j++) {
                const particle = document.createElement('div');
                particle.className = 'firework';
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                const angle = (j / 40) * Math.PI * 2;
                const distance = Math.random() * 100 + 50;
                particle.style.boxShadow = `0 0 20px ${colors[Math.floor(Math.random() * colors.length)]}`;
                particle.style.animationDelay = Math.random() * 0.3 + 's';

                // Set custom explosion direction
                const style = document.createElement('style');
                style.innerHTML = `
                    @keyframes explode-custom-${i}-${j} {
                        to {
                            transform: translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
                particle.style.animation = `explode-custom-${i}-${j} 1s ease-out forwards`;

                container.appendChild(particle);
                setTimeout(() => {
                    particle.remove();
                    style.remove();
                }, 1000);
            }
        }, i * 100);
    }
}

// === Popup Event Handlers ===
document.getElementById('start-btn').addEventListener('click', () => {
    // Hide birthday popup
    document.getElementById('birthday-popup').classList.remove('active');

    // Start animations
    createFirecrackers();
    createRabbitScene();

    // After animations, zoom to moon and show love popup
    setTimeout(() => {
        zoomToMoon();
        setTimeout(() => {
            document.getElementById('love-popup').classList.add('active');
        }, 2000);
    }, 3000);
});

// === Love Popup Logic ===
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

// Make "Yes" button float away when hovered/clicked
yesBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);
    yesBtn.style.position = 'absolute';
    yesBtn.style.left = x + 'px';
    yesBtn.style.top = y + 'px';
});

yesBtn.addEventListener('click', () => {
    alert("Hmm, that's not honest! 😉 Try again!");
});

// "No" button reveals the main website
noBtn.addEventListener('click', () => {
    document.getElementById('love-popup').classList.remove('active');
    document.getElementById('main-website').style.opacity = '1';

    // Enable heart trail effect
    enableHeartTrail();

    // Show owls flying
    setTimeout(createOwlScene, 500);
});

// === Heart Trail Effect === */
function enableHeartTrail() {
    document.addEventListener('mousemove', createHeartTrail);
}

function createHeartTrail(e) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.fontSize = '1rem';
    heart.style.animation = 'heartFade 1s ease-out forwards';
    heart.style.zIndex = '9998';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
}

// === Initialize ===
window.addEventListener('load', () => {
    createStars();
    createConfetti();

    // Add CSS for falling confetti
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall {
            to {
                transform: translateY(${window.innerHeight}px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});