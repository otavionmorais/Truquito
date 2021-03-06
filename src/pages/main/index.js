import React, { useCallback, useState } from 'react';
import Card from '../../components/card';
import {
    MainContainer, ScoreContainer, Title, Score, TopCardsContainer,
    BottomCardsContainer, MiddleContainer, LeftCardsContainer, RightCardsContainer, MiddleCardsContainer
} from './styles';
import GenerateCardsService from '../../services/GenerateCardsService';
import Player from '../../entities/Player';

const Main = () => {

    const [bottomPlayer, setBottomPlayer] = useState(new Player());
    const [topPlayer, setTopPlayer] = useState(new Player());
    const [leftPlayer, setLeftPlayer] = useState(new Player());
    const [rightPlayer, setRightPlayer] = useState(new Player());
    const [cardsService, setCardsService] = useState(
        new GenerateCardsService({ bottomPlayer, topPlayer, leftPlayer, rightPlayer })
    );

    const renderCards = useCallback((player) => {
        console.log(player)
        return (
            <>
                {player.cards.map((item) =>
                    <div onClick={() => {
                        player.playCard(item.nome);
                    }}>
                        <Card
                            image={item.image}
                            name={item.nome}
                            value={item.valor}
                        />
                    </div>
                )}
            </>)
    }, []);

    const renderGame = useCallback(() => {
        return (
            <>
                <TopCardsContainer>
                    {renderCards(cardsService.topPlayer)}
                </TopCardsContainer>
                <MiddleContainer>
                    <LeftCardsContainer>
                        {renderCards(cardsService.leftPlayer)}
                    </LeftCardsContainer>
                    <MiddleCardsContainer>
                        <Card />
                    </MiddleCardsContainer>
                    <RightCardsContainer>
                        {renderCards(cardsService.rightPlayer)}
                    </RightCardsContainer>
                </MiddleContainer>
                <BottomCardsContainer>
                    {renderCards(cardsService.bottomPlayer)}
                </BottomCardsContainer>
            </>
        );
    }, [cardsService, renderCards]);

    return (
        <MainContainer>
            <ScoreContainer>
                <Title>TᖇᑌᑫᑌITO</Title>
                <Score className="zoomInOut">0</Score>
            </ScoreContainer>
            {renderGame()}
        </MainContainer>
    );
}


export default Main;