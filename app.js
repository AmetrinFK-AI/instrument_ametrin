const btn = document.querySelector('.card1');
const btn1 = document.querySelector('.card2');
const btn2 = document.querySelector('.card3');
const btn3 = document.querySelector('.card4');
const btn4 = document.querySelector('.card5');
const btn5 = document.querySelector('.card8');
const card6 = document.querySelector('.card6');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');
const quizModal = document.getElementById('quizModal');
const quizCloseBtn = document.querySelector('.quiz-close-btn');

if (btn) {
    btn.addEventListener('click', () => {
        quizModal.style.display = 'block';
    });

    btn.addEventListener('click', () => {
        window.open('https://platform.openai.com/playground/complete')
    });
}

if (quizCloseBtn) {
    quizCloseBtn.addEventListener('click', () => {
        quizModal.style.display = 'none';
    });
}

window.addEventListener('click', (event) => {
    if (event.target === quizModal) {
        quizModal.style.display = 'none';
    }
});

if (btn1) {
    btn1.addEventListener('click', () => {
        window.open('http://192.168.3.216:9100')
    });
}

if (btn2) {
    btn2.addEventListener('click', () => {
        window.open('http://192.168.3.216:5000')
    });
}

if (btn3) {
    btn3.addEventListener('click', () => {
        window.open('http://192.168.3.216:9200')
    });
}

if (btn4) {
    btn4.addEventListener('click', () => {
        window.location.href = 'prompt/prompt.html';
    });

    btn4.addEventListener('click', () => {
        window.open('prompt/prompt.html', '_blank');
    });
}

if (btn5) {
    btn5.addEventListener('click', () => {
        window.location.href = 'http://192.168.3.216:1020';
    });
}

if (card6) {
    card6.addEventListener('click', () => {
        modal.style.display = 'block';
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});