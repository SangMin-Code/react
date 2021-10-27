
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import styles from './maker.module.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Maker = ({authService}) => {
    const history = useHistory()
    const onLogout = ()=>{
        authService.logout();
    }

    useEffect(()=>{
        
        authService.onAuthChange(user =>{
            if(!user){
                history.push('/')
            }
        })
    })

    return (
        <section className={styles.maker}>
            <Header onLogout = {onLogout}/>
            <Footer/>
        </section>
    )
};

export default Maker;