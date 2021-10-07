import React from 'react';
import styles from './video_detail.module.css'

const Video_detail = ({video}) =>(
    <section className={styles.detail}>
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
    </section>
); 
export default Video_detail;