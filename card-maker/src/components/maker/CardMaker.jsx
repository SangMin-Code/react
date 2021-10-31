import React from 'react';
import styles from './cardmaker.module.css'


const CardMaker = ({data,options}) => {

    return (
        <div className={styles.cardMaker}>
            <h1 className={styles.title}>Card Maker</h1>
            <div className={styles.container}>
                {data.map((card,index)=>(
                    <div className={styles.grid} key={index}>
                        <div className={`${styles.cell} ${styles.name}`}>{card.name}</div>
                        <div className={`${styles.cell} ${styles.company}`}>{card.company}</div>
                        <select className={`${styles.cell} ${styles.theme}`}>
                            {options.map((option,index)=>(
                                <option key = {index} vlaue={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <div className={`${styles.cell} ${styles.job}`}>{card.job}</div>
                        <div className={`${styles.cell} ${styles.email}`}>{card.email}</div>
                        <div className={`${styles.cell} ${styles.comment}`}>{card.comment}</div>
                        <div className={`${styles.cell} ${styles.profile}`}>{card.profile}</div>
                        <button className={`${styles.cell} ${styles.delete}`}>Delete</button>
                    </div>
                ))}
  
            </div>
        </div>
    )
}

export default CardMaker;