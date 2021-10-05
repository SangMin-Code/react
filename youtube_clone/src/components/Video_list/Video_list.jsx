import VideoItem from "../Video_item/Video_item";
import styles from './video_list.module.css'

const VideoList = (props) =>(
    <ul className={styles.videos}>
        {props.videos.map((video) => <VideoItem key ={video.id} video = {video}/>)}
    </ul>
)

export default VideoList