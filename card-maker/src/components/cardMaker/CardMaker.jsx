import React from 'react';
import styles from './cardmaker.module.css'
import CardInputForm from '../cardInputForm/CardInputForm'

const CardMaker = ({data}) => {

    return (
        <div className={styles.cardMaker}>
            <h1 className={styles.title}>Card Maker</h1>
            <div className={styles.container}>
                {data.map((card,index)=>(
                    <CardInputForm card={card} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default CardMaker;