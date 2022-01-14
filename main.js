 const player1Hand = document.querySelector('.player1-hand')
 const player2hand = document.querySelectorAll('.player2-hand')
 const player1WarStack = document.querySelector('.player1-war-stack')
 const player2WarStack = document.querySelector('.player2-war-stack')
 const player1CardInPlay = document.querySelector('.player1-card-in-play')
 const player2CardInPlay = document.querySelector('.player2-card-in-play')
 const messageBox = document.querySelector('.message-box')

 const drawButton = document.querySelector('.draw')
 const newGame = document.querySelector('.New-Game')




 function Deck() {
     const cardSuit = ['♦︎', '♠︎', '♣︎', '♥︎']
     const cardName = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
     this.deck = []
     for (let suit = 0; suit < cardSuit.length; suit++)
         for (let name = 0; name < cardName.length; name++)
             this.deck.push(`${cardName[name]}${cardSuit[suit]}`)
        
 }

 function shuffle(arr) {
     for (let i = arr.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         const temp = arr[i];
         arr[i] = arr[j];
         arr[j] = temp;
     }
 }






 let deck1 = new Deck()

 function firstDeal() {
     player1.playerHand = deck1.deck.splice(0, 26)
     player2.playerHand = deck1.deck.splice(-26)
 }



 shuffle(deck1.deck)
 console.log(deck1.deck)



 function Card(value) {
     console.log(deck1.deck)
     // this.card= []
     this.value = value
     this.card = deck1.deck.shift()
     //  this.value = Card.value
    

    switch (this.card) {
        case 'A♠︎':
        case 'A♣︎':
        case 'A♥︎':
        case 'A♦︎':
            this.value = 14
            break;
        case 'K♠︎':
        case 'K♣︎':
        case 'K♥︎':
        case 'K♦︎':
            this.value = 13
            break;
        case 'Q♠︎':
        case 'Q♣︎':
        case 'Q♥︎':
        case 'Q♦︎':
            this.value = 12
            break;
        case 'J♠︎':
        case 'J♣︎':
        case 'J♥︎':
        case 'J♦︎':
            this.value = 11
            break;
        case '10♠︎':
        case '10♣︎':
        case '10♥︎':
        case '10♦︎':
            this.value = 10
            break;
        case '9♠︎':
        case '9♣︎':
        case '9♥︎':
        case '9♦︎':
            this.value = 9
            break;
        case '8♠︎':
        case '8♣︎':
        case '8♥︎':
        case '8♦︎':
            this.value = 8
            break;
        case '7♠︎':
        case '7♣︎':
        case '7♥︎':
        case '7♦︎':
            this.value = 7
            break;
        case '6♠︎':
        case '6♣︎':
        case '6♥︎':
        case '6♦︎':
            this.value = 6
            break;
        case '5♠︎':
        case '5♣︎':
        case '5♥︎':
        case '5♦︎':
            this.value = 5
            break;
        case '4♠︎':
        case '4♣︎':
        case '4♥︎':
        case '4♦︎':
            this.value = 4
            break;
        case '3♠︎':
        case '3♣︎':
        case '3♥︎':
        case '3♦︎':
            this.value = 3
            break;
        case '2♠︎':
        case '2♣︎':
        case '2♥︎':
        case '2♦︎':
            this.value = 2
            break;
     }
     console.log

 }
 const drawCard = new Card()
 console.log(new Card)
 
 drawButton.addEventListener('click', function () {
     return drawCard
 })

 function Player() {
     this.playerHand = [];
     this.warStack = []
     this.cardInPlay = []

 }



 const player1 = new Player();
 const player2 = new Player();
 console.log(player1)
 console.log(player2)


 function Game() {

     if (player1.playerhand === [])
         messageBox.textContent = 'player2 wins!!'
     if (player2.playerhand === []) {
         messageBox.textContent = 'player1 wins!!'
     } else if (player1.cardInPlay > player2.cardInPlay) {
         messageBox.textContent = 'player1 takes cards'
         player1.cardInPlay.push(player1.playerHand)
         player2.cardInPlay.push(player1.playerHand)
     } else if (player2.cardInPlay > player1.cardInPlay) {
         messageBox.textContent = 'player2 takes cards'
         player1.cardInPlay.push(player2.playerHand)
         player2.cardInPlay.push(player2.playerHand)
     } else if (player1.cardInPlay === player2CardInPlay) {
         messageBox.textContent = "WAR"
         player1.cardInPlay.push(player1.warStack)
         player2.cardInPlay.push(player2.warStack)
         player1.playerHand.push(player1.warStack)
         player1.playerHand.push(player1.warStack)
         player1.playerHand.push(player1.warStack)
         player2.playerHand.push(player2.warStack)
         player2.playerHand.push(player2.warStack)
         player1.playerHand.push(player2.warStack)
         player1.playerHand.push(player1.cardInPlay)
         player2.playerHand.push(player2.cardInPlay)
     } else if (player1.cardInPlay > player2.cardInPlay) {
         messageBox.textContent = 'player1 takes cards'
         player1.cardInPlay.push(player1.playerHand)
         player2.cardInPlay.push(player1.playerHand)
     } else {
         messageBox.textContent = 'player2 takes cards'
         player1.cardInPlay.push(player2.playerHand)
         player2.cardInPlay.push(player2.playerHand)


     }
 }

 newGame.addEventListener('click', function () {
     player1.playerHand = []
     player1.warStack = []
     player1.cardInPlay = []
     player2.playerHand = []
     player2.warStack = []
     player2.cardInPlay = []
 })