import React from 'react';
import styles from './header.module.css';
import Button from '../Button/Button';

const Header = ({onLogout}) => {
    return (
        <header className={styles.header}>
            <div className={styles.buttons}>   
                {onLogout && <Button onBtn={onLogout} name={'Logout'}/>} 
            </div>
            <img className={styles.logo} src="/images/logo.png" alt="logo"/>
            <h1 className={styles.title}>Record Something</h1>
        </header>

    )
};

export default Header;