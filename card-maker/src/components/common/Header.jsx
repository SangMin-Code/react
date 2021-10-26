import React from 'react';
import styles from './header.module.css'

const Header = (props) => {

    return (
        <header className = {styles.header}>
            <div className={styles.imgContainer}>
                <img className = {styles.logo} 
                src="/images/logo.png" 
                alt="logo" 
                /> 
            </div>
            <button className = {styles.logOutBtn}>
                LogOut
            </button>
            <h2 className = {styles.title}>Business Card Maker</h2>
        </header>
    )
};
            


    

export default Header;