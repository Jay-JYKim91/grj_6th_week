import React from 'react';
import styles from './card.module.css';

const Card = ({ title, description, imageURL}) => {
    return (
        <div>
            <img src="./images/beer.png" alt="beer">
            <span>여름에 시원한 맥주 최고</span>
        </div>
    )
}

export default Card;