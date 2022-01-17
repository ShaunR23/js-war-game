
 
 
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
    for( let s = 0; s < this.suit.length; s++ ) {
        for( let n = 0; n < this.name.length; n++ ) {
            cards.push( new Card( n+1, this.name[n], this.suit[s] ) );
        }
    }

    return cards;
}
let myDeck = new Deck()
// console.log(myDeck)
 

 function shuffle(arr) {
     for (let i = arr.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         const temp = arr[i];
         arr[i] = arr[j];
         arr[j] = temp;
     }
 }
shuffle(myDeck)
// console.log(myDeck)


 function Player(playerHand = [], warStack = [], cardInPlay = []) {
    this.playerHand = playerHand
    this.warStack = warStack
    this.cardInPlay = cardInPlay
}

player1 =new Player()
player2= new Player()
player1.playerHand = myDeck.splice(0,26)
player2.playerHand = myDeck.splice(-26)
// newGame.addEventListener('click', function () {

// })


function Game(game) {
    this.game = game
   
    }
    Game.prototype.draw = function(){
        player1.cardInPlay = player1.playerHand.shift()
        player2.cardInPlay = player2.playerHand.shift()
    }


// console.log(player1.cardInPlay)

// console.log(player1.playerHand)





 drawButton.addEventListener('click', function () {
     
    const game = new Game()
    game.draw();
    console.log(player1.playerHand)
    console.log(player2.playerHand)
player2CardInPlay.innerHTML = `Player2 Card: ${player2.cardInPlay.name}${player2.cardInPlay.suit}`;

player1CardInPlay.innerHTML = `Player1 Card: ${player1.cardInPlay.name}${player1.cardInPlay.
suit}`;

player1WarStack.innerHTML = `Player1 War Stack: ${player1.warStack.length}`;

player2WarStack.innerHTML = `Player1 War Stack: ${player2.warStack.length}`;

deckCount1.innerHTML = `Player1 has ${player1.playerHand.length} cards left`;

deckCount2.innerHTML = `Player2 has ${player2.playerHand.length} cards left`;



if (player1.playerHand.length === 0){
     messageBox.textContent = 'player2 wins!!';

}else if (player2.playerhand === 0) {
    messageBox.textContent = 'player1 wins!!';

}else if (player1.cardInPlay.value > player2.cardInPlay.value) {
     messageBox.textContent = 'player1 takes cards'
     
     player1.playerHand.push(player2.cardInPlay)
     player1.playerHand.push(player1.cardInPlay)
     
     
     
}else if (player2.cardInPlay.value > player1.cardInPlay.value) {
     messageBox.textContent = 'player2 takes cards'
     player2.playerHand.push(player1.cardInPlay)
     player2.playerHand.push(player2.cardInPlay)
     
     
     
}else if (player1.cardInPlay.value === player2.cardInPlay.value) {
     messageBox.textContent = "WAR"
     player1.cardInPlay = player1.playerHand.shift()
     player2.cardInPlay = player2.playerHand.shift()
     
     console.log(player1.warStack.push(player1.cardInPlay));

     console.log(player1.warStack);

     player2.warStack.push(player2.cardInPlay);

     console.log(player2.warStack);

     player1.warStack.push(player1.playerHand);

     console.log(player1.playerHand)
     console.log(player1.warStack);

     player1.warStack.push(player1.playerHand);

     console.log(player1.playerHand)
     console.log(player1.warStack);

     player1.warStack.push(player1.playerHand);

     console.log(player1.playerHand)
     console.log(player1.warStack);

     player2.warStack.push(player2.playerHand);

     console.log(player2.playerHand)
     console.log(player2.warStack);

     player2.warStack.push(player2.playerHand);

     console.log(player2.playerHand)
     console.log(player2.warStack);

     player2.warStack.push(player2.playerHand);

     console.log(player2.warStack)
     console.log(player2.playerHand);

     player1WarCard = player1.warStack.shift()
     player2WarCard = player2.warStack.shift()
     console.log(player2WarCard)
     warCardDisplay1.innerHTML = `player1 War Card: ${player1WarCard.name}${player1WarCard.suit}`

     warCardDisplay2.innerHTML = `Player2 War Card: ${player2WarCard.name}${player2WarCard.suit}`

    
    
}

        else if (player1WarCard.value > player2WarCard.value) {
            messageBox.textContent = 'player1 wins war'

            player1.playerHand.push(player2.cardInPlay);

            player1.playerHand.push(player2.warStack);

            console.log(player1.warStack)
            console.log(player2.warStack)
            console.log(player1.playerHand)
        } else {
            messageBox.textContent = 'player2 wins war'
            player2.playerHand.push(player1.cardInPlay)
            
            player2.playerHand.push(player1.warStack);

            console.log(player2.warStack)
            console.log(player1.warStack)
            console.log(player1.playerHand)
            


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
}
 })

 

