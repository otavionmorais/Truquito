/* eslint-disable no-loop-func */
import React from 'react';
import { CARDS } from '../constants/cards';

class GenerateCardsService {

    bottomPlayerCards = [];
    topPlayerCards = [];
    leftPlayerCards = [];
    rightPlayerCards = [];
    allSelectedCards = [];

    constructor() {
        this.selectRandomCards(this.bottomPlayerCards);
        this.selectRandomCards(this.topPlayerCards);
        this.selectRandomCards(this.leftPlayerCards);
        this.selectRandomCards(this.rightPlayerCards);
    }

    selectRandomCards = (arr) => {
        for (let i = 0; i < 3; i++) {
            let selectedIndex = Math.floor(Math.random() * CARDS.length);
            let selectedCard = null;
            do {
                selectedIndex = Math.floor(Math.random() * CARDS.length);
                selectedCard = CARDS[selectedIndex];
            } while (this.allSelectedCards.find(item => item.nome === selectedCard.nome));
            arr.push(selectedCard);
            this.allSelectedCards.push(selectedCard);
        }
    }

    getBottomPlayerCards = () => {
        return this.bottomPlayerCards;
    }

    getTopPlayerCards = () => {
        return this.topPlayerCards;
    }

    getLeftPlayerCards = () => {
        return this.leftPlayerCards;
    }

    getRightPlayerCards = () => {
        return this.rightPlayerCards;
    }

}

export default GenerateCardsService;