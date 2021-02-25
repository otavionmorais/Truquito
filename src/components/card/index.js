/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { CardContainer, Temp } from './styles';


const Card = ({ image, name, value }) => {
    return (
        <CardContainer>
            <Temp>{name}</Temp>
            <img src={image}
                style={{ border: '1px solid black', borderRadius: 10, backgroundColor: image ? undefined : 'green' }} width={70} height={100} />
        </CardContainer>
    );
}

export default Card;