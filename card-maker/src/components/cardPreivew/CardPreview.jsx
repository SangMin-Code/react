import React from 'react';
import styles from './cardpreview.module.css'
import Card from '../card/Card'


const CardPreview = ({cards}) => {
    return (
        <div className={styles.cardPreview}>
            <h1 className={styles.title}>Card Preview</h1>
            <ul className={styles.cardContainer}>
            {Object.keys(cards).map((key)=>(<Card key={key} card={cards[key]}/>))}
            </ul>
        </div>
    )
};

export default CardPreview;