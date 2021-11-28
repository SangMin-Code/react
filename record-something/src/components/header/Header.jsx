import React from 'react';
import styles from './header.module.css';
import Button from '../Button/Button';

const Header = ({onLogout, toBtn, btnName}) => {
    return (
        <header className={styles.header}>
            <div className={styles.buttons}>
                {toBtn && (<Button onBtn = {toBtn} name= {btnName}></Button>)}   
                {onLogout && <Button onBtn={onLogout} name={'Logout'}/>} 
            </div>
            <img className={styles.logo} src="/images/logo.png" alt="logo"/>
            <h1 className={styles.title}>Record Something</h1>
        </header>

    )
};

export default Header;