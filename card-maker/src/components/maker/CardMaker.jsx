import React from 'react';
import styles from './cardmaker.module.css'


const CardMaker = (props) => {

    return (
        <div className={styles.cardMaker}>
            <h1 className={styles.title}>Card Maker</h1>
            <div className={styles.cards}></div>
        </div>
    )
}

export default CardMaker;