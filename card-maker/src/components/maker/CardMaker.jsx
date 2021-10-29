import React from 'react';
import styles from './cardmaker.module.css'


const CardMaker = ({data}) => {

    return (
        <div className={styles.cardMaker}>
            <h1 className={styles.title}>Card Maker</h1>
            <div className={styles.container}>
                {data.map((card,index)=>(
                    <div className={styles.grid} key={index}>
                        <div className={styles.cell}>{card.name}</div>
                        <div className={styles.cell}>{card.company}</div>
                        <div className={styles.cell}>{card.theme}</div>
                        <div className={styles.cell}>{card.job}</div>
                        <div className={styles.cell}>{card.email}</div>
                        <div className={styles.cell}>{card.comment}</div>
                        <div className={styles.cell}>{card.profile}</div>
                        <div className={styles.cell}>Delete</div>
                    </div>
                ))}
  
            </div>
        </div>
    )
}

export default CardMaker;