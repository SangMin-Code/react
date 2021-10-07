import VideoItem from '../video_item/VideoItem'
import styles from '../../css/video_list/videoList.module.css'



const VideoList = ({videos,onVideoClick,display }) => {
    
    return (
        <ul className = {styles.videoList}>
           {videos.map((video)=><VideoItem key={video.id} video={video} onVideoClick={onVideoClick} display ={display}/>)} 
        </ul>
    );
};

export default VideoList;