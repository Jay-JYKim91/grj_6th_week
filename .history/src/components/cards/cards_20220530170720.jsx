import React from 'react';
import dummy from '../../db/data.json';
import Card from '../card/card';
import styles from './cards.module.css';

const Cards = () => {
    return (
        <section className={styles.cards}>
            {dummy.items.map(item => (
                <Card title={item.title} imageURL={item.imageURL} description={item.description} />
            ))}
        </section>
    )
}

export default Cards;