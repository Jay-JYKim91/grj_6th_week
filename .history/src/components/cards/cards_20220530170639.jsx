import React from 'react';
import dummy from '../../db/data.json';
import Card from '../card/card';
import styles from './cards.module.css';

const Cards = () => {
    return (
        <section className={styles.cards}>
            {dummy.items.map(item => (
                <Card />
                // <div class="card">
                //     <img src="./images/beer.png" alt="beer">
                //     <span>여름에 시원한 맥주 최고</span>
                // </div>
            ))}
        </section>
    )
}

export default Cards;