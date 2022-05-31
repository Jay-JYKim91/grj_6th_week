import React from 'react';
import styles from './card.module.css';

const Card = ({ title, description, imageURL}) => {
    return (
        <div>
            <img src={imageURL} alt={title} />
            <span>{description}</span>
        </div>
    )
}

export default Card;