console.log('hello ball');

let arrayOfPredictions = [
    'Not now...',
    'The spirits say yes.',
    'Ask again later.',
    'You may rely on it.',
    'Remember about replacing your timing belt? 😉',
    'Outlook not so good...',
    'It is decidedly so!',
    'Better not tell you now...',
    'Very doubtful...',
    'Yes. Definitely!',
    'You will have to wait...',
    'Most likely.',
];

let ball = document.querySelector('.ball');
let screen = document.querySelector('.screen');

let shakeBall = () => {
    return arrayOfPredictions[Math.floor(Math.random() * arrayOfPredictions.length)];
};

let addEffect = () => {
    ball.classList.add('effect')
    setTimeout(() => {
        ball.classList.remove('effect')
    }, 2000);
};

ball.addEventListener('click', function () {
    screen.innerHTML = '';

    addEffect();
    setTimeout(() => {
        screen.innerHTML = shakeBall();
        setTimeout(() => {
            screen.innerHTML = '';
        }, 15000);
    }, 2000)
});    
