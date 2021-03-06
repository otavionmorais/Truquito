/* eslint-disable no-loop-func */
import React from 'react';
import { CARDS } from '../constants/cards';

class GenerateCardsService {

    bottomPlayer = null;
    topPlayer = null;
    leftPlayer = null;
    rightPlayer = null;
    allSelectedCards = [];


    constructor({ bottomPlayer, topPlayer, leftPlayer, rightPlayer }) {
        this.bottomPlayer = bottomPlayer;
        this.topPlayer = topPlayer;
        this.leftPlayer = leftPlayer;
        this.rightPlayer = rightPlayer;
        this.selectRandomCards(bottomPlayer);
        this.selectRandomCards(topPlayer);
        this.selectRandomCards(leftPlayer);
        this.selectRandomCards(rightPlayer);
    }

    selectRandomCards = (player) => {
        const arr = player.cards;
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

}

export default GenerateCardsService;