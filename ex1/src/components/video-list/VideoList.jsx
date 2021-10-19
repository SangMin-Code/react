import React from 'react';
import styles from './videoList.module.css'
import VideoItem from '../video-item/VideoItem';


const VideoList = ({videos,onVideoClick,display}) => {
    return (
        <ul className={styles.videoList}>
            {videos.map((video) => <VideoItem key ={video.id} video = {video} onVideoClick = {onVideoClick} display={display}/>)}
        </ul>
    );
};

export default VideoList;