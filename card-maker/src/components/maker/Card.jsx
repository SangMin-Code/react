import React from 'react';
import styles from './card.module.css';


const Card = ({data}) => (
            <li className ={styles.card}>
                <div className={styles.imgContainer}>
                    <img className={styles.profile} src="/images/default_logo.png" alt="profile" />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.name}>{data.name}</h1>
                    <div className={styles.company}>{data.company}</div>
                    <div className={styles.job}>{data.job}</div>
                    <div className={styles.email}>{data.email}</div>
                    <div className={styles.comment}>{data.comment}</div>
                </div>
            </li>
    );

export default Card;