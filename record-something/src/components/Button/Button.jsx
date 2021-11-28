import React from 'react';
import styles from './button.module.css';

const Button = ({name,onBtn}) => {
    
    const onClick = ()=>{
        onBtn();   
    }
    
    return (
        <button className ={styles.btn} onClick={onClick}>{name}</button>
    )
};

export default Button;