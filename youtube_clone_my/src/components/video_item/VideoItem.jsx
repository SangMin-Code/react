
import React from 'react';
import styles from '../../css/video_item/videoItem.module.css'

const VideoItem = ({video:{snippet:item}}) => 
        <li className={styles.container}>
                <div className={styles.video}>
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
export default VideoItem;