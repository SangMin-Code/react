import React from 'react';
import styles from '../../css/video_detail/video_detail.module.css'


const VideoDetail = ({video}) => {
    return (
        <>
        <iframe 
            className={styles.detail}
            id="ytplayer" 
            type="text/html" 
            width="100%" 
            height="500px"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameborder="0"
            allowFullScreen
            ></iframe>
            <h2 className={video.snippet.title}></h2>
            <h3 className={video.snippet.channelTitle}></h3>
            <pre className={styles.description}>{video.snippet.description}</pre>
        </>
    );
};

export default VideoDetail;