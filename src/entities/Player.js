class Player {

    id;
    cards;
    playedCards;

    constructor() {
        this.id = `${Math.random()}${new Date().toISOString()}`
        this.cards = [];
        this.playedCards = [];
    }


    playCard(cardName) {
        const index = this.cards.findIndex((item) => item.nome === cardName);
        if (index !== -1) {
            this.playedCards.push(this.cards[index]);
            this.cards.splice(index, 1);
        }
    }
}

export default Player;