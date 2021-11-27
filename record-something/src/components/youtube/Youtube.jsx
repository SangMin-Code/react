import React from 'react';
import styles from './youtube.module.css';
import YoutubeItem from '../youtubeItem/YoutubeItem';

const Youtube = ({onClick,onSearch,youtubeList,searchTag}) => {
    console.log(youtubeList)

    return (
        <section className={styles.container}>
            <div className={styles.tagContainer}>
                <input type='search' className={styles.input} defaultValue={searchTag}/>
                <button className={styles.button}>search</button>
            </div>
            <div className={styles.itemContainer}>
                {/* {youtubeList && youtubeList.map((item)=>(<YoutubeItem item={item} key={item.id.videoId}/>))} */}
            </div>
        </section>
    )
};

export default Youtube;