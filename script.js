//blackjack
let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#your-box', 'score': 0},
    'card': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A' ],
}

const YOU =blackjackGame = ['you'];
const DEALER =blackjackGame = ['dealer'];

document.getElementById('blackjack-hit-btn').addEventListener('click', blackjackHit);

function blackjackHit() {
    let cardImage = document.createElement('img');
    cardImage.src = 'images/A.png';
    document.getElementById('your-box').appendChild(cardImage);
}