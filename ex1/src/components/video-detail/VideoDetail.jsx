import React from 'react';
import styles from './videoDetail.module.css'

const VideoDetail = ({video}) => {
    return (
        <div className ={styles.container}>
            <iframe 
                className={styles.detail}
                title='youtube video player'
                id="ytplayer" 
                type="text/html" 
                width="100%" 
                height="500px"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <h2 className={video.snippet.title}>{video.snippet.title}</h2>
            <h3 className={video.snippet.channelTitle}>{video.snippet.channelTitle}</h3>
            <pre className={styles.description}>{video.snippet.description}</pre>
    </div>
    )
};
            
    
export default VideoDetail;