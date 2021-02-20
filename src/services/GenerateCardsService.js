import React from 'react';

class GenerateCardsService {

    bottomPlayerCards = [];
    topPlayerCards = [];
    leftPlayerCards = [];
    topPlayerCards = [];

    constructor() {

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