import styled from 'styled-components';

export const CardContainer = styled.div`
    &:hover {
        transform: scale(1.2);
        transition: transform 0.5s;
    }

    margin: 10px;
    cursor: pointer;
`;

export const Temp = styled.span`
    position: absolute;
    margin: 7px;
    font-size: 12px;
    max-width: 60px;
`;