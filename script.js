document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino');
    const obstacle = document.querySelector('.obstacle');

    let isJumping = false;
    let gravity = 0.9;
    let isGameOver = false;

    function control(e) {
        if (e.keyCode === 32) {
            if (!isJumping) {
                isJumping = true;
                jump();
            }
        }
    }

    document.addEventListener('keydown', control);

    function jump() {
        let position = 0;
        let timerId = setInterval(() => {
            // move up
            if (position >= 150) {
                clearInterval(timerId);
                // move down
                let downTimerId = setInterval(() => {
                    if (position <= 0) {
                        clearInterval(downTimerId);
                        isJumping = false;
                    }
                    position -= 5;
                    position = position * gravity;
                    dino.style.bottom = position + 'px';
                }, 20);
            }
            position += 30;
            position = position * gravity;
            dino.style.bottom = position + 'px';
        }, 20);
    }

    function generateObstacle() {
        let obstaclePosition = 800;
        let randomTime = Math.random() * 4000;

        if (isGameOver) return;
        
        obstacle.style.left = obstaclePosition + 'px';
        
        let timerId = setInterval(() => {
            if (obstaclePosition > 0 && obstaclePosition < 60 && dino.style.bottom === '0px') {
                clearInterval(timerId);
                alert('Game Over');
                isGameOver = true;
                // remove all children
                while (gameContainer.firstChild) {
                    gameContainer.removeChild(gameContainer.lastChild);
                }
            }
            obstaclePosition -= 10;
            obstacle.style.left = obstaclePosition + 'px';
        }, 20);

        setTimeout(generateObstacle, randomTime);
    }

    generateObstacle();
});
