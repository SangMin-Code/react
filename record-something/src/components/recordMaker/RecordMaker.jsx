import React, { useCallback, useEffect, useState } from 'react';
import styles from './recordMaker.module.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Records from '../records/Records';
import Youtube from '../youtube/Youtube';
import { useHistory } from 'react-router';
import AddForm from '../addForm/AddForm';

const RecordMaker = ({authService,youtubeService,
            recordRepository,ThumbnailFileInput,
            PicturesFileInput}) => {    

    // auth
    const history = useHistory();
    const historyState = history?.location?.state;
    // TODO Object로 Id, URL을 state로 두면 왜 오류가나는지?
    const [userId, setUserId] = useState(historyState && historyState.id);
    const [userPhotoURL , setUserPhotoURL] = useState(historyState && historyState.url);
    
    const [searchTag, setSearchTag] = useState('제주맛집');
    const [youtubeList, setYoutubeList] = useState([]);

    const [page, setPage]=useState('list');
    const [btnName, setBtnName] =useState('add');

    const [records, setRecords] = useState([]);

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
    }

    const createRecord = (record)=>{
        recordRepository.saveReocrd(userId,record)
        toList();
    }

    useEffect(()=>{
        if(!userId){
            return
        }
        const stopSync = recordRepository.syncRecord(userId,records=>{
            setRecords(records);
        })
        return ()=>stopSync();
    },[userId,recordRepository]);


    // Youtube 
    const search = useCallback((query)=>{
        youtubeService.search(query)
            .then(resoponse =>setYoutubeList(resoponse))
    },[youtubeService])

    useEffect(()=>{
        search(searchTag)    
    },[search,searchTag])


    //addForm
    const toAdd = ()=>{
        setPage('add');
        setBtnName('list');
    }
    const toList = ()=>{
        setPage('list');
        setBtnName('add');
    }

    return (
        <section className={styles.maker}>
            <Header onLogout = {onLogout} toBtn={page==='list' ? toAdd : toList } btnName = {btnName} />
                <div className={styles.container}>
                    {
                        page==='list'&& (
                            <>
                            <Records 
                                onTagClick = {onTagClick} 
                                records={records}
                                
                                />
                            <Youtube 
                                youtubeList={youtubeList} 
                                searchTag ={searchTag} 
                                records={records}/>
                            </>
                        )
                    }
                    {
                        page==='add'&& <AddForm 
                                            createRecord={createRecord} 
                                            ThumbnailFileInput={ThumbnailFileInput}
                                            PicturesFileInput={PicturesFileInput}/>
                    }
                    
                </div>
            <Footer/>
        </section>
    )
};

export default RecordMaker;