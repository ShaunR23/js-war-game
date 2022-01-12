



function Deck(){
    const cardSuit = ['♦︎', '♠︎', '♣︎', '♥︎']
    const cardValue = ['A','2', '3', '4','5','6','7','8','9','10','J','Q', 'K']
    this.deck = []
    for(let suit=0; suit < cardSuit.length; suit++)
        for(let value=0 ; value < cardValue.length; value++)
        this.deck.push(`${cardValue[value]}${cardSuit[suit]}`)
        // console.log(deckCards)    
    }

    // function shuffle(arr) {
    //     for (let i = arr.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         const temp = arr[i];
    //         array[i] = arr[j];
    //         array[j] = temp;
    //       }
    //     }
    
    
        
const deck1= new Deck()

const deck2 = new Deck()
// shuffle(deck1)
console.log(deck1)

function Card(){

}

function Player(){

}

function Game(){

}