import React from 'react';
import styles from './cardpreview.module.css'
import Card from '../card/Card'


const CardPreview = ({data}) => {
    return (
        <div className={styles.cardPreview}>
            <h1 className={styles.title}>Card Preview</h1>
            <ul className={styles.cardContainer}>
                {data.map((card,index)=>(<Card data={card} key={index}/>))}
            </ul>
        </div>
    )
};

export default CardPreview;