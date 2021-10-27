import React from 'react';
import { useHistory } from 'react-router';
import styles from './header.module.css'

const Header = ({token,logOut}) => {
    const history = useHistory()
    
    const onClick = ()=>{
        logOut()
        history.push('/')
        alert('log out')

    }

    return (
        <header className = {styles.header}>
            <div className={styles.imgContainer}>
                <img className = {styles.logo} 
                src="/images/logo.png" 
                alt="logo" 
                /> 
            </div>
            {token &&
                <button className = {styles.logOutBtn}
                    onClick = {onClick}>
                LogOut
                </button>
            }
            <h2 className = {styles.title}>Business Card Maker</h2>
        </header>
    )
};
            


    

export default Header;