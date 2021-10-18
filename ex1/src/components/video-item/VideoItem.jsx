import React from 'react';
import styles from './videoItem.module.css'

const VideoItem = ({video})=>{
    return (
        <>
            <div className={styles.container}>
                <img src={video.thumbnails.medium.url} alt="thumbnail" className={styles.thumbnail} />
                <div className={styles.videoContent}>
                    <span className={styles.videoTitle}>{video.title}</span>
                    <span className={styles.videoDescription}>{video.description}</span>
                </div>
            </div>
        </>
    )

}

export default VideoItem;