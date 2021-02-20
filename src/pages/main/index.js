import React, { useCallback, useState } from 'react';
import Card from '../../components/card';
import {
    MainContainer, ScoreContainer, Title, Score, TopCardsContainer,
    BottomCardsContainer, MiddleContainer, LeftCardsContainer, RightCardsContainer, MiddleCardsContainer
} from './styles';
import GenerateCardsService from '../../services/GenerateCardsService';

const Main = () => {

    const [cardsService, setCardsService] = useState(new GenerateCardsService());

    const renderCards = useCallback((cards) => {
        return (
            <>
                {cards.map((item) =>
                    <Card image={item.image} name={item.nome} value={item.valor} />
                )}
            </>)
    }, []);

    return (
        <MainContainer>
            <ScoreContainer>
                <Title>TᖇᑌᑫᑌITO</Title>
                <Score className="zoomInOut">0</Score>
            </ScoreContainer>
            <TopCardsContainer>
                {renderCards(cardsService.getTopPlayerCards())}
            </TopCardsContainer>
            <MiddleContainer>
                <LeftCardsContainer>
                    {renderCards(cardsService.getLeftPlayerCards())}
                </LeftCardsContainer>
                <MiddleCardsContainer>
                    <Card />
                </MiddleCardsContainer>
                <RightCardsContainer>
                    {renderCards(cardsService.getRightPlayerCards())}
                </RightCardsContainer>
            </MiddleContainer>
            <BottomCardsContainer>
                {renderCards(cardsService.getBottomPlayerCards())}
            </BottomCardsContainer>
        </MainContainer>
    );
}


export default Main;