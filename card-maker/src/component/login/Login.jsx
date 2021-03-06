import React, { useEffect } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import styles from './login.module.css'
import { useHistory } from 'react-router';


const Login = ({authService}) => {
    const history = useHistory();
    const goToMaker = (userId)=>{
        history.push({
            pathname:'/maker',
            state:{id:userId},
        });
    };


    const onLogin = (event)=>{
        authService
        .login(event.currentTarget.textContent)
        .then(data=>goToMaker(data.user.uid))
    }


    useEffect(()=>{
        authService
            .onAuthChange(user =>{
                console.log(user)
                user && goToMaker(user.uid)
            })
    })

    return (
        <section className={styles.login}>
            <Header/>
                <section>
                    <h1>Login</h1>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <button className={styles.button} onClick = {onLogin}>
                                Google 
                            </button >
                        </li>
                        <li>
                            <button className={styles.button} onClick = {onLogin}>
                                Github
                            </button>
                        </li>
                    </ul>
                </section>
            <Footer/>
        </section>
    )

};

export default Login;