
import React from 'react';
import styles from '../../css/video_item/videoItem.module.css'

const VideoItem = ({video,video:{snippet:item},onVideoClick,display}) => {

        const onClick =(e)=>{
                onVideoClick(video)
        }

        const displayType = display === 'list' ? styles.list : styles.grid;
        return (
        <li className={`${styles.container} ${displayType}`} onClick = {onClick}>
                <div className={styles.video} >
                        <img 
                                className={styles.thumbnail} 
                                src={item.thumbnails.medium.url} 
                                alt="thumbnail"
                        />
                        <div className={styles.metadata}>
                                <p className={styles.title}>{item.title}</p>
                                <p className={styles.channel}>{item.channelTitle}</p>
                        </div>
                </div>
        </li>
        )
}
export default VideoItem;