import React, { useCallback, useEffect, useState } from 'react';
import styles from './recordMaker.module.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Records from '../records/Records';
import Youtube from '../youtube/Youtube';
import { useHistory } from 'react-router';
import AddForm from '../addForm/AddForm';

const RecordMaker = ({authService,youtubeService,recordRepository}) => {    

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

    // const records = [
    //     {
    //         id: 1,
    //         title: 'default',
    //         comment:'default',
    //         tags:['기본','하르방','제주도'],
    //         thumnail:'/images/default.png',
    //     },
    //     {
    //         id: 2,
    //         title: '고기국수',
    //         comment:'노형동 고기국수 찐한 국물맛이 좋아요',
    //         tags:['고기국수','노형동'],
    //         thumnail:'/images/고기국수.jpg',

    //     },
    //     {
    //         id: 3,
    //         title: '오겹살',
    //         comment:'노형정육식당 이가격에 이런 고기를 준다고 미쳤다',
    //         tags:['돼지고기','노형동'],
    //         thumnail:'/images/노형정육식당.jpg',

    //     },
    //     {
    //         id: 4,
    //         title: '한라산 영실탐방로 ',
    //         comment:'출발높이 해발 1100미터, 도착하면 1700m 2시간30만에 이 높이?',
    //         tags:['한라산'],
    //         thumnail:'/images/영실코스.jpg',

    //     },
    //     {
    //         id: 5,
    //         title: 'default',
    //         comment:'default',
    //         tags:['기본','하르방','제주도'],
    //         thumnail:'/images/default.png',
    //     },
    //     {
    //         id: 6,
    //         title: '고기국수',
    //         comment:'노형동 고기국수 찐한 국물맛이 좋아요',
    //         tags:['고기국수','노형동'],
    //         thumnail:'/images/고기국수.jpg',

    //     },
    //     {
    //         id: 7,
    //         title: '오겹살',
    //         comment:'노형정육식당 이가격에 이런 고기를 준다고 미쳤다',
    //         tags:['돼지고기','노형동'],
    //         thumnail:'/images/노형정육식당.jpg',

    //     },
    //     {
    //         id: 8,
    //         title: '한라산 영실탐방로 ',
    //         comment:'출발높이 해발 1100미터, 도착하면 1700m 2시간30만에 이 높이?',
    //         tags:['한라산'],
    //         thumnail:'/images/영실코스.jpg',

    //     },{
    //         id: 9,
    //         title: 'default',
    //         comment:'default',
    //         tags:['기본','하르방','제주도'],
    //         thumnail:'/images/default.png',
    //     },
    //     {
    //         id: 10,
    //         title: '고기국수',
    //         comment:'노형동 고기국수 찐한 국물맛이 좋아요',
    //         tags:['고기국수','노형동'],
    //         thumnail:'/images/고기국수.jpg',

    //     },
    //     {
    //         id: 11,
    //         title: '오겹살',
    //         comment:'노형정육식당 이가격에 이런 고기를 준다고 미쳤다',
    //         tags:['돼지고기','노형동'],
    //         thumnail:'/images/노형정육식당.jpg',

    //     },
    //     {
    //         id: 12,
    //         title: '한라산 영실탐방로 ',
    //         comment:'출발높이 해발 1100미터, 도착하면 1700m 2시간30만에 이 높이?',
    //         tags:['한라산'],
    //         thumnail:'/images/영실코스.jpg',

    //     },{
    //         id: 13,
    //         title: 'default',
    //         comment:'default',
    //         tags:['기본','하르방','제주도'],
    //         thumnail:'/images/default.png',
    //     },
    //     {
    //         id: 14,
    //         title: '고기국수',
    //         comment:'노형동 고기국수 찐한 국물맛이 좋아요',
    //         tags:['고기국수','노형동'],
    //         thumnail:'/images/고기국수.jpg',

    //     },
    //     {
    //         id: 15,
    //         title: '오겹살',
    //         comment:'노형정육식당 이가격에 이런 고기를 준다고 미쳤다',
    //         tags:['돼지고기','노형동'],
    //         thumnail:'/images/노형정육식당.jpg',

    //     },
    //     {
    //         id: 16,
    //         title: '한라산 영실탐방로 ',
    //         comment:'출발높이 해발 1100미터, 도착하면 1700m 2시간30만에 이 높이?',
    //         tags:['한라산'],
    //         thumnail:'/images/영실코스.jpg',

    //     }
    // ]

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
                        page==='add'&& <AddForm createRecord={createRecord}/>
                    }
                    
                </div>
            <Footer/>
        </section>
    )
};

export default RecordMaker;