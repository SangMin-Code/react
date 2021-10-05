
import React from 'react';
import styles from '../../css/video_item/videoItem.module.css'

const VideoItem = (props) => 
        <li className={styles.videoItem}>{props.video.title}</li>

export default VideoItem;