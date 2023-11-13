const ball = document.getElementById('ball');
let ballX = 0;
let ballY = 0;

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            ballY -= 10;
            break;
        case 'ArrowDown':
            ballY += 10;
            break;
        case 'ArrowLeft':
            ballX -= 10;
            break;
        case 'ArrowRight':
            ballX += 10;
            break;
        default:
            break;
    }

    ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
});
