import VideoItem from "../Video_item/Video_item";
import styles from './video_list.module.css'

const VideoList = ({videos,onVideoClick,display}) =>(
    <ul className={styles.videos}>
        {videos.map((video) => <VideoItem key ={video.id} video = {video} onVideoClick={onVideoClick} display = {display}/>)}
    </ul>
)

export default VideoList