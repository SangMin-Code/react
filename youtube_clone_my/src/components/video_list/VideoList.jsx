import VideoItem from '../video_item/VideoItem'
import styles from '../../css/video_list/videoList.module.css'


const VideoList = (props) => {
    return (
        <ul className = {styles.videoList}>
           {props.videos.map((video)=><VideoItem key={video.id} video={video} />)} 
        </ul>
    );
};

export default VideoList;