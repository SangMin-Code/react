import VideoItem from '../video_item/VideoItem'
import styles from '../../css/video_list/videoList.module.css'


const VideoList = (props) => {
    console.log(styles.item)
    
    return (
        <ul className = {styles.videoList}>
           {props.videos.map((video)=><VideoItem key={video.id} video={video.snippet} />)} 
        </ul>
    );
};

export default VideoList;