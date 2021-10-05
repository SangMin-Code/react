import React from 'react'
import styles from './video_item.module.css'
//props를 deconstructing
// props 안의 video를 받음 {video:newName}
// props 안의 video 아느이 snippet을 deconstructing
const VideoItem = ({video : {snippet}})=>
    <li className = {styles.container}>
        <div className={styles.video}>
            <img className = {styles.thumbnail}
            src={snippet.thumbnails.medium.url} 
            alt="video thumbnail"
            />
            <div className={styles.metadata}>
                <p className = {styles.title}>{snippet.title}</p>
                <p className = {styles.channel}>{snippet.channelTitle}</p>
            </div>
         </div>
    </li>
;

export default VideoItem;