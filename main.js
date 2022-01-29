const player1Hand = document.querySelector('.player1-hand')
const player2hand = document.querySelectorAll('.player2-hand')
const player1WarStack = document.querySelector('.player1-war-stack')
const player2WarStack = document.querySelector('.player2-war-stack')
const player1CardInPlay = document.querySelector('.player1-card-in-play')
const player2CardInPlay = document.querySelector('.player2-card-in-play')
const warCardDisplay1 = document.querySelector('.War-Card1')
const warCardDisplay2 = document.querySelector('.War-Card2')
const messageBox = document.querySelector('.message-box')
const deckCount1 = document.querySelector('.deck-count1')
const deckCount2 = document.querySelector('.deck-count2')
const resetButton = document.querySelector('.reset')
const drawButton = document.querySelector('.draw')
const newGame = document.querySelector('.New-Game')


function Card(value, name, suit) {
    this.value = value;
    this.name = name;
    this.suit = suit;
}


function Deck() {
    this.name = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A']
    this.suit = ['♦︎', '♠︎', '♣︎', '♥︎']
    let cards = []
    for (let s = 0; s < this.suit.length; s++) {
        for (let n = 0; n < this.name.length; n++) {
            cards.push(new Card(n + 1, this.name[n], this.suit[s]));
        }
    }

    return cards;
}

// console.log(myDeck)




// console.log(myDeck)


function Player({pName} = pName,hand = [], cardInPlay = []) {
    this.pName = pName;
    this.hand = hand
    this.cardInPlay = cardInPlay
}






function Game() {
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
        this.player1.hand = [...this.player1.hand, ...this.pot]
    } else if (this.player1.cardInPlay.value < this.player2.cardInPlay.value) {
        this.player2.hand = [...this.player2.hand, ...this.pot];
    } else {
        this.pot = [...this.player1.hand.splice(0, 3), ...this.player2.hand.splice(0, 3), ...this.pot];
        return;
    }
    this.pot = [];
}

Game.prototype.draw = function () {
    this.player1.cardInPlay = this.player1.hand.shift()
    this.player2.cardInPlay = this.player2.hand.shift()

    player2CardInPlay.innerHTML = `Player2 Card: ${this.player2.cardInPlay.name}${this.player2.cardInPlay.suit}`;

    player1CardInPlay.innerHTML = `Player1 Card: ${this.player1.cardInPlay.name}${this.player1.cardInPlay.
suit}`;

    this.pot = [this.player1.cardInPlay, this.player2.cardInPlay, ...this.pot];
    this.compare();

    deckCount1.innerHTML = `Player1 has ${this.player1.hand.length} cards left`;

    deckCount2.innerHTML = `Player2 has ${this.player2.hand.length} cards left`;

}

Game.prototype.play = function () {
    this.deal();

    // while (this.player1.hand.length > 0 && this.player2.hand.length > 0) {
    //     this.draw();
    // }
}



drawButton.addEventListener('click', function () {

    const game = new Game()
    game.play();
    game.draw();

   


    



    // if (player1.playerHand.length === 0){
    //      messageBox.textContent = 'player2 wins!!';

    // }else if (player2.playerhand === 0) {
    //     messageBox.textContent = 'player1 wins!!';

    // }else if (player1.cardInPlay.value > player2.cardInPlay.value) {
    //      messageBox.textContent = 'player1 takes cards'

    //      player1.playerHand.push(player2.cardInPlay)
    //      player1.playerHand.push(player1.cardInPlay)



    // }else if (player2.cardInPlay.value > player1.cardInPlay.value) {
    //      messageBox.textContent = 'player2 takes cards'
    //      player2.playerHand.push(player1.cardInPlay)
    //      player2.playerHand.push(player2.cardInPlay)



    // }else if (player1.cardInPlay.value === player2.cardInPlay.value) {
    //      messageBox.textContent = "WAR"
    //      player1.cardInPlay = player1.playerHand.shift()
    //      player2.cardInPlay = player2.playerHand.shift()

    //      console.log(player1.warStack.push(player1.cardInPlay));

    //      console.log(player1.warStack);

    //      player2.warStack.push(player2.cardInPlay);

    //      console.log(player2.warStack);

    //      player1.warStack.push(player1.playerHand);

    //      console.log(player1.playerHand)
    //      console.log(player1.warStack);

    //      player1.warStack.push(player1.playerHand);

    //      console.log(player1.playerHand)
    //      console.log(player1.warStack);

    //      player1.warStack.push(player1.playerHand);

    //      console.log(player1.playerHand)
    //      console.log(player1.warStack);

    //      player2.warStack.push(player2.playerHand);

    //      console.log(player2.playerHand)
    //      console.log(player2.warStack);

    //      player2.warStack.push(player2.playerHand);

    //      console.log(player2.playerHand)
    //      console.log(player2.warStack);

    //      player2.warStack.push(player2.playerHand);

    //      console.log(player2.warStack)
    //      console.log(player2.playerHand);

    //      player1WarCard = player1.warStack.shift()
    //      player2WarCard = player2.warStack.shift()
    //      console.log(player2WarCard)
    //      warCardDisplay1.innerHTML = `player1 War Card: ${player1WarCard.name}${player1WarCard.suit}`

    //      warCardDisplay2.innerHTML = `Player2 War Card: ${player2WarCard.name}${player2WarCard.suit}`



    // }

    //         else if (player1WarCard.value > player2WarCard.value) {
    //             messageBox.textContent = 'player1 wins war'

    //             player1.playerHand.push(player2.cardInPlay);

    //             player1.playerHand.push(player2.warStack);

    //             console.log(player1.warStack)
    //             console.log(player2.warStack)
    //             console.log(player1.playerHand)
    //         } else {
    //             messageBox.textContent = 'player2 wins war'
    //             player2.playerHand.push(player1.cardInPlay)

    //             player2.playerHand.push(player1.warStack);

    //             console.log(player2.warStack)
    //             console.log(player1.warStack)
    //             console.log(player1.playerHand)



    //  resetButton.addEventListener('click', function () {
    //     deckCount1.innerHTML = `Player1 has 0 cards left`
    //     deckCount2.innerHTML = `Player2 has 0 cards left`
    //     player2CardInPlay.innerHTML = `Player2 Card:`
    //     player1CardInPlay.innerHTML = `Player1 Card:`
    //     player1WarStack.innerHTML = `Player1 War Stack:`
    //     player2WarStack.innerHTML = `Player1 War Stack:`
    //      player1.playerHand = []
    //      player1.playerHand = []
    //      player1.warStack = []
    //      player1.cardInPlay = []
    //      player2.warStack = []
    //      player2.cardInPlay = []
    //  })
})
