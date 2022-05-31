import React from 'react';
import styles from './card.module.css';

const Card = ({ id, title, description, imageURL}) => {
    return (
        <div className={styles.card} key={id}>
            <img src={imageURL} alt={title} />
            <span>{description}</span>
        </div>
    )
}

export default Card;