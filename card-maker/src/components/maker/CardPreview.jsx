import React from 'react';
import styles from './cardpreview.module.css'

const CardPreview = (props) => {
    return (
        <div className={styles.cardPreview}>
            <h1 className={styles.title}>Card Preview</h1>
            <div className={styles.cards}></div>
        </div>
    )
};

export default CardPreview;