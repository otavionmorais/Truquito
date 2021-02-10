import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: column;
    background-color: rgba(0, 0, 0, 0.9);
    justify-content: center;
    min-width: 700px;
    min-height: 450px;
`;

export const ScoreContainer = styled.div`
    display: flex;
    flex-flow: row;
    width: 90%;
    align-self: center;
    height: 10%;
    min-height: 50px;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
`

export const Title = styled.span`
    font-size: 20px;
    color: white;
`;

export const Score = styled.span`
    font-size: 15px;
    color: white;
`;

export const TopCardsContainer = styled.div`
    align-self: center;
    margin-bottom: auto;
    margin-top: 0;
    display: flex;
`;

export const BottomCardsContainer = styled.div`
    align-self: center;
    margin-bottom: 10px;
    margin-top: auto;
    display: flex;
`;

export const MiddleContainer = styled.div`
    display: flex;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const LeftCardsContainer = styled.div`
    align-self: flex-start;
    transform: rotate(90deg);
    display: flex;
`;

export const RightCardsContainer = styled.div`
    align-self: flex-end;
    transform: rotate(-90deg);
    display: flex;    
`;

export const MiddleCardsContainer = styled.div`
    align-self: center;    
`;