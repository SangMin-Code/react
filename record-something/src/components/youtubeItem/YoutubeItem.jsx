import React from 'react';
import styles from './youtubeItem.module.css'

const YoutubeItem = ({item, onClick}) => {
        const {thumnails,title,description,id} =item.snippet;
        
        const onClick = (event)=>{
            window.open(`https://www.youtube.com/watch?v=${id.videoId}`)
        }

        <div className={styles.container} onClick ={onClick}>
            <img src="" alt="" className={styles.thumnails} />
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
};

export default YoutubeItem;