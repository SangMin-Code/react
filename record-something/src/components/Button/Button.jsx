import React from 'react';
import styles from './button.module.css';

const Button = ({name,onBtn}) => {
       
    return (
        <button className ={styles.btn} onClick={onBtn}>{name}</button>
    )
};

export default Button;