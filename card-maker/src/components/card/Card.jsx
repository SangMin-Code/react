import React from 'react';
import styles from './card.module.css';

const DEFAULT_URL = '/images/default_logo.png'

const Card = ({data}) => {
    const {name,company,theme,job,email,comment,fileName,fileURL } = data
    const url = fileURL || DEFAULT_URL;

    return (
            <li className ={`${styles.card} ${getTheme(theme)}`}>
                <div className={styles.imgContainer}>
                    <img className={styles.profile} src={url} alt="profile" />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.name}>{name}</h1>
                    <p className={styles.company}>{company}</p>
                    <p className={styles.job}>{job}</p>
                    <p className={styles.email}>{email}</p>
                    <p className={styles.comment}>{comment}</p>
                </div>
            </li>
            )
    };


function getTheme(theme){
    switch(theme) {
        case 'Dark' :
            return styles.dark;
        case 'Light' :
            return styles.light;
        case 'Colorful' :
            return styles.colorful;
            default :
            throw new Error(`Cannot find theme:${theme}`)
    }
}

export default Card;