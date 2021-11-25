import React, { useCallback, useEffect, useState } from 'react';
import styles from './recordMaker.module.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Records from '../records/Records';
import Youtube from '../youtube/Youtube';
import { useHistory } from 'react-router';

const RecordMaker = ({authService,youtubeService}) => {    

    // auth
    const history = useHistory();
    const historyState = history?.location?.state;
    // TODO Object로 Id, URL을 state로 두면 왜 오류가나는지?
    const [userId, setUserId] = useState(historyState && historyState.id);
    const [userPhotoURL , setUserPhotoURL] = useState(historyState && historyState.url);
    
    const [searchTag, setSearchTag] = useState('제주맛집');
    const [youtubeList, setYoutubeList] = useState([]);

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

    //records
    const onTagClick = (tag)=>{
        setSearchTag(tag);
        search(tag)
    }


    // Youtube 
    const search = useCallback((query)=>{
        youtubeService.search(query)
            .then(resoponse =>setYoutubeList(resoponse))
    },[youtubeService])

    useEffect(()=>{
        search(searchTag)    
    })



    return (
        <section className={styles.maker}>
            <Header onLogout = {onLogout}/>
                <div className={styles.container}>
                    <Records onTagClick = {onTagClick}/>
                    <Youtube youtubeList={youtubeList} searchTag ={searchTag}/>
                </div>
            <Footer/>
        </section>
    )
};

export default RecordMaker;