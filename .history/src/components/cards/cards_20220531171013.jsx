import React from 'react';
import Card from '../card/card';
import styles from './cards.module.css';

const Cards = ({ items }) => {
    return (
        <section className={styles.cards}>
            {items.map(item => (
                <Card key={item.id} title={item.title} imageURL={item.imageURL} description={item.description} />
            ))}
        </section>
    )
}

export default Cards;