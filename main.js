



function Deck(){
    const cardSuit = ['♦︎', '♠︎', '♣︎', '♥︎']
    const cardName = ['A','2', '3', '4','5','6','7','8','9','10','J','Q', 'K']
    this.deck = []
    for(let suit=0; suit < cardSuit.length; suit++)
        for(let name=0 ; name< cardName.length; name++)
        this.deck.push(`${cardName[name]}${cardSuit[suit]}`)
        // console.log(deckCards)    
    }

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
        }

    // function deal(){
    //     let hand1 = deck1.deck.splice(0, 26)
    //     let hand2 = deck1.deck.splice(-26)
    //     console.log(hand1)
    // }
    
    
        
let deck1= new Deck()

function firstDeal(){
    let hand1 = []
    
    // if(hand1.length < 26){
    //     deck1.deck.push(hand1)
    // // }
    // if(hand2.length < 26){
    //     deck1.deck.push(hand2)
        
    }
    

shuffle(deck1.deck)
console.log(deck1)

function Card(){
    console.log(deck1.deck)
    this.card= []
    this.card = deck1.deck.pop()
    
}
const drawCard = new Card()
console.log(drawCard)

function Player(){
    this.playerCard = [];
    console.log(new Card)
   
}
const player1 = new Player();
const player2 = new Player();

function Game(){

}