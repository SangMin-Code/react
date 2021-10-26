import React from 'react';
import styles from './logIn.module.css'

const LogIn = ({signIn}) => {
    return (
        <div className ={styles.btnContainer}>
            <h2 className={styles.btnTitle}>Login</h2>
            <button className={styles.btn} onClick = {signIn}>Google</button>
		</div>
    )
}

export default LogIn;