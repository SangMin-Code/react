import React from 'react';
import styles from './youtube.module.css';

const Youtube = ({onClick,onSearch,youtubeList,searchTag}) => {
    console.log(youtubeList)

    return (
        <section className={styles.container}>
            <div className={styles.tagContainer}>
                <input type='search' className={styles.input} value={searchTag}/>
                <button className={styles.button}>search</button>
            </div>
            {youtubeList.map((item)=>(<youtubeItem item={item} onClick={onClick} key={item.id.videoId}/>))}
        </section>
    )
};

export default Youtube;