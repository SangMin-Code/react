import React from 'react';
import { useHistory } from 'react-router';
import styles from './logIn.module.css'

const LogIn = ({signIn}) => {

    const history = useHistory();
    const onClick = async ()=>{
            await signIn();
            history.push('/test')
    }


    return (
        <div className ={styles.btnContainer}>
            <h2 className={styles.btnTitle}>Login</h2>
            <button className={styles.btn} 
                    onClick = {onClick}>Google</button>
		</div>
    )
}

export default LogIn;