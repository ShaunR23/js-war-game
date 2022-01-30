const player1Hand = document.querySelector('.player1-hand')
const player2hand = document.querySelectorAll('.player2-hand')
const player1CardInPlay = document.querySelector('.player1-card-in-play')
const player2CardInPlay = document.querySelector('.player2-card-in-play')
const messageBox = document.querySelector('.message-box')
const deckCount1 = document.querySelector('.deck-count1')
const deckCount2 = document.querySelector('.deck-count2')
const drawButton = document.querySelector('.draw')


function Card(value, name, suit) {
    this.value = value;
    this.name = name;
    this.suit = suit;
}


function Deck() {
    this.name = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A'];
    this.suit = ['♦︎', '♠︎', '♣︎', '♥︎'];
    let cards = [];
    for (let s = 0; s < this.suit.length; s++) {
        for (let n = 0; n < this.name.length; n++) {
            cards.push(new Card(n + 1, this.name[n], this.suit[s]));
        }
    }

    return cards;
}


function Player({
    pName
} = pName, hand = []) {
    this.pName = pName;
    this.hand = hand;

}


function Game() {
    alert('Welcome to War!!')
    const player1 = prompt('Enter Name')
    const player2 = prompt('Enter Name')

    this.player1 = new Player({
        pName: player1
    });
    this.player2 = new Player({
        pname: player2
    });
    this.deck = new Deck();
    this.pot = [];


};
Game.prototype.shuffle = function () {
    const deck = this.deck;

    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}

Game.prototype.deal = function () {
    this.shuffle();
    this.player1.hand = this.deck.splice(0, 26)
    this.player2.hand = this.deck.splice(-26)

}

Game.prototype.compare = function () {


    if (this.player1.cardInPlay.value > this.player2.cardInPlay.value) {
        this.player1.hand = [...this.player1.hand, ...this.pot, ]
    } else if (this.player1.cardInPlay.value < this.player2.cardInPlay.value) {
        this.player2.hand = [...this.player2.hand, ...this.pot];
    } else {
        this.pot = [...this.player1.hand.splice(0, 3), ...this.player2.hand.splice(0, 3), ...this.pot];
        return;
    }


    this.pot = [];


}

Game.prototype.draw = function () {


    this.player1.cardInPlay = this.player1.hand.shift();
    this.player2.cardInPlay = this.player2.hand.shift();


    player2CardInPlay.innerHTML = `Player2 Card: ${this.player2.cardInPlay.name}${this.player2.cardInPlay.suit}`;

    player1CardInPlay.innerHTML = `Player1 Card: ${this.player1.cardInPlay.name}${this.player1.cardInPlay.suit}`;


    deckCount1.innerHTML = `Player1 has ${this.player1.hand.length} cards left`;

    deckCount2.innerHTML = `Player2 has ${this.player2.hand.length} cards left`;
    this.pot = [this.player1.cardInPlay, this.player2.cardInPlay, ...this.pot];


    this.compare();


}

const game = new Game()
game.deal()


drawButton.addEventListener('click', function () {

    game.draw()


})
