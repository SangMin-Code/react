import React from 'react';
import styles from './videoList.module.css'
import VideoItem from '../video-item/VideoItem';


const VideoList = (props) => {
    return (
        <ul>
            {props.videos.map((video) => <VideoItem key ={video.id} video = {video.snippet}/>)}
        </ul>
    );
};

export default VideoList;