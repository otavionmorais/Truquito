import React, { useCallback } from 'react';
import Card from '../../components/card';
import {MainContainer, ScoreContainer, Title, Score, TopCardsContainer, 
    BottomCardsContainer, MiddleContainer, LeftCardsContainer, RightCardsContainer, MiddleCardsContainer}from './styles';

const Main = () => {

    const topPlayerCards =  useCallback(() => {
        return(
            <>
                <Card />
                <Card />
                <Card />
            </>
        )
    }, []);

    const bottomPlayerCards =  useCallback(() => {
        return(
            <>
                <Card />
                <Card />
            </>
        )
    }, []);

    const leftPlayerCards =  useCallback(() => {
        return(
            <>
                <Card />
                <Card />
                <Card />
            </>
        )
    }, []);

    const rightPlayerCards =  useCallback(() => {
        return(
            <>
                <Card />
                <Card />
                <Card />
            </>
        )
    }, []);

    return (
        <MainContainer>
            <ScoreContainer>
                <Title>TᖇᑌᑫᑌITO</Title>
                <Score className="zoomInOut">0</Score>
            </ScoreContainer>
            <TopCardsContainer>
                {topPlayerCards()}
            </TopCardsContainer>
            <MiddleContainer>
                <LeftCardsContainer>
                    {leftPlayerCards()}
                </LeftCardsContainer>
                <MiddleCardsContainer>
                    <Card />
                </MiddleCardsContainer>
                <RightCardsContainer>
                    {rightPlayerCards()}
                </RightCardsContainer>
            </MiddleContainer>
            <BottomCardsContainer>
                {bottomPlayerCards()}
            </BottomCardsContainer>
        </MainContainer>
    );
}


export default Main;