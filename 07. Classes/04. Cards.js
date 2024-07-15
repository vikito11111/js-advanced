let result = (function() {
    const faces = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    const suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    }

    class Card {   
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this.innerFace;
        }

        get suit() {
            return this.innerSuit;
        }

        set face(f) {
            if (faces.includes(f.toString())) {
                this.innerFace = f;
            }
            else {
                throw new Error('No such face');
            }
        }

        set suit(s) {
            if (Object.values(suits).includes(s)) {
                this.innerSuit = s;
            }
            else {
                throw new Error('No such suit');
            }
        }
    }

    return {
        Suits: suits,
        Card: Card
    }
})();

let Card = result.Card;
let suit = result.Suits;
let card = new Card("2", suit.HEARTS);
console.log(card.face, card.suit);