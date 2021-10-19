import React from 'react';
import styles from './videoItem.module.css'

const VideoItem = ({video,onVideoClick,display})=>{

    const onClick = (e) =>{
        onVideoClick(video)
    }
    const displayType = display === 'list' ? styles.list : styles.grid;


    return (
            <li className={`${styles.container} ${displayType}`}>
                <div className={styles.video} onClick ={onClick} >
                    <img 
                        src={video.snippet.thumbnails.medium.url} 
                        alt="thumbnail" 
                        className={styles.thumbnail} 
                    />
                    <div className={styles.metadata}>
                        <span className={styles.title}>{video.snippet.title}</span>
                        <span className={styles.channel}>{video.snippet.channelTitle}</span>
                    </div>
                </div>
            </li>
    )

}

export default VideoItem;