import VideoItem from "../Video_item/Video_item";


const VideoList = (props) =>(
    <ul>
        {props.videos.map((video) => <VideoItem key ={video.id} video = {video.snippet}/>)}
    </ul>
)

export default VideoList