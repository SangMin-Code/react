import React, { useCallback, useEffect, useState } from 'react';
import styles from './recordMaker.module.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Records from '../records/Records';
import Youtube from '../youtube/Youtube';
import { useHistory } from 'react-router';

const RecordMaker = ({authService}) => {    

    const history = useHistory();
    const historyState = history?.location?.state;
    const [userId, setUserId] = useState(historyState && historyState.id);
    const [userPhotoURL , setUserPhotoURL] = useState(historyState && historyState.url);
    
    const onLogout = useCallback(()=>{
        authService.logout();
    },[authService]);

    useEffect(()=>{
        authService.onAuthChange(user =>{
            if(user){
                setUserId(user.uid);
                setUserPhotoURL(user.photoURL);
            }else{
                history.push('/');
            }
        })
    },[authService,history,userId,userPhotoURL])

    return (
        <section className={styles.maker}>
            <Header onLogout = {onLogout}/>
                <div className={styles.container}>
                    <Records/>
                    <Youtube/>
                </div>
            <Footer/>
        </section>
    )
};

export default RecordMaker;