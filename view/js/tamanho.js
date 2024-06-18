document.addEventListener('DOMContentLoaded', () => {
    const increaseBtn = document.getElementById('fontIncrease');
    const decreaseBtn = document.getElementById('fontDecrease');
    let fontSize = 1;

    increaseBtn.addEventListener('click', () => {
        if (fontSize < 2) { // Limite máximo de 2x
            fontSize += 0.1;
            adjustFontSize(fontSize);
        }
    });

    decreaseBtn.addEventListener('click', () => {
        if (fontSize > 0.5) { // Limite mínimo de 0.5x
            fontSize -= 0.1;
            adjustFontSize(fontSize);
        }
    });

    function adjustFontSize(size) {
        document.querySelectorAll('h1, h2, h3, p, .quiz, .container, .card').forEach(el => {
            el.style.fontSize = `${size}em`;
        });
    }
});
