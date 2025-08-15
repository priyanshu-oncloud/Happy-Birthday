document.addEventListener('DOMContentLoaded', () => {
    const confettiContainer = document.querySelector('.confetti-container');
    const numberOfConfetti = 150;
    const colors = ['#e85d75', '#f9b3c1', '#f9d771', '#87ceeb', '#98fb98'];

    for (let i = 0; i < numberOfConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Stagger the animation start times
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        
        // Randomize animation duration for a more natural fall
        confetti.style.animationDuration = `${3 + Math.random() * 2}s`;

        confettiContainer.appendChild(confetti);
    }
});

