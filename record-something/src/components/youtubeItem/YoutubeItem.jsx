import React from 'react';
import styles from './youtubeItem.module.css'

const YoutubeItem = ({item}) => {
        const {thumbnails,title,description} =item.snippet;
        const videoId = item.id.videoId;
        const thumbnail = thumbnails.medium.url;

        const onClick = (event)=>{
            window.open(`https://www.youtube.com/watch?v=${videoId}`)
        }

        return (
            <div className={styles.container} onClick ={onClick}>
                <img src={thumbnail} alt="thumbnail" className={styles.thumnails} />
                <div className={styles.content}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        )
};

export default YoutubeItem;