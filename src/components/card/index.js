import React from 'react';
import { CardContainer } from './styles';


const Card = ({image, name, value}) => {
    return (
        <CardContainer>
            <img src={image} style={{border: '1px solid black', borderRadius: 10}} width={70} height={100} />
        </CardContainer>
    );
}

export default Card;