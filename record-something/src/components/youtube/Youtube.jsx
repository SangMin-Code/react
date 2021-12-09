import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './youtube.module.css';
import YoutubeItem from '../youtubeItem/YoutubeItem';

const Youtube = ({onSearch,youtubeList,searchTag}) => {
    
    const [search,setSearch] = useState('')
    const searchRef = useRef()
  
    //TODO prop바뀌면 다시 mount되면서 값이 그려지는거아닌가..? 왜 useEffect까지 해줘야하지
    useEffect(()=>{
        setSearch(searchTag)
    },[searchTag])

    const onkeyPress = (event)=>{
        if(event.key ==='Enter'){
            onSearch(event.target.value)
        }   
    }
    const onClick = (event)=>{
        onSearch(searchRef.current.value)
    }
    const onChange = useCallback((event)=>{
        setSearch(event.target.value);
    },[])

    return (
        <section className={styles.container}>
            <div className={styles.tagContainer}>
                <input 
                        ref = {searchRef}
                        type='search' 
                        className={styles.input} 
                        onKeyPress={onkeyPress}
                        value={search}
                        onChange={onChange}
                        />
                <button className={styles.button} onClick ={onClick}>search</button>
            </div>
            <div className={styles.itemContainer}>
                {youtubeList && youtubeList.map((item)=>(<YoutubeItem item={item} key={item.id.videoId}/>))}
            </div>
        </section>
    )
};

export default Youtube;