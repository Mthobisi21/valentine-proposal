const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const container = document.getElementById('container');
const message = document.getElementById('message');
const question = document.getElementById('question');

// Function to move the button to a random spot
function moveButton() {
    // We subtract button size so it doesn't go off-screen
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed'; // Ensures it can move anywhere
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Move on Desktop (Hover)
noBtn.addEventListener('mouseover', moveButton);

// Move on Mobile (Touch)
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents the actual "click" from happening
    moveButton();
});

// Success Event
yesBtn.addEventListener('click', () => {
    question.classList.add('hidden');
    document.getElementById('buttons').classList.add('hidden');
    message.classList.remove('hidden');
    
    startBalloons();
});

function startBalloons() {
    for(let i = 0; i < 50; i++) {
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');
            balloon.style.left = Math.random() * 100 + 'vw';
            // Random cute colors
            const colors = ['#ff69b4', '#ff1493', '#ffc0cb', '#da70d6', '#ffb6c1'];
            balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.appendChild(balloon);
            
            // Cleanup after animation
            setTimeout(() => balloon.remove(), 4000);
        }, i * 100);
    }
}