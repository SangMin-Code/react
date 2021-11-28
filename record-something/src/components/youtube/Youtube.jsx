import React from 'react';
import styles from './youtube.module.css';
import YoutubeItem from '../youtubeItem/YoutubeItem';

const Youtube = ({onClick,onSearch,youtubeList,searchTag}) => {
    
    const onkeyPress = ()=>{
        return
    }

    const onChange = ()=>{
        return
    }

    return (
        <section className={styles.container}>
            <div className={styles.tagContainer}>
                <input type='search' className={styles.input} value={searchTag} onKeyPress={onkeyPress} onChange={onChange} />
                <button className={styles.button}>search</button>
            </div>
            <div className={styles.itemContainer}>
                {youtubeList && youtubeList.map((item)=>(<YoutubeItem item={item} key={item.id.videoId}/>))}
            </div>
        </section>
    )
};

export default Youtube;