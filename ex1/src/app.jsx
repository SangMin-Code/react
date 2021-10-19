import { useEffect, useState } from 'react';
import VideoHeader from './components/header/VideoHeader';
import VideoList from './components/video-list/VideoList';
import styles from './app.module.css'
import VideoDetail from './components/video-detail/VideoDetail';


function App() {
	const key = process.env.REACT_APP_YOUTUBE_API_KEY;
	const [videos, setVideos] = useState([]);
	const [video, setVideo] = useState(null);

	const requestOptions = {
		method: 'GET',
		redirect: 'follow'
	  };

	useEffect(()=>{
		initVideos()
	},[])
	
	const initVideos = ()=>{
		fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=${key}`, requestOptions)
		  .then(response => response.json())
		  .then(result => setVideos(result.items))
		  .catch(error => console.log('error', error));
	}

	const onSearch = (query) =>{		
		fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&regionCode=KR&q=${query}&key=${key}`, requestOptions)
		  .then(response => response.json())
		  .then(result => result.items.map(video=>({...video,id:video.id.videoId})))
		  .then(result => setVideos(result))
		  .catch(error => console.log('error', error));
	}

	const onVideoClick = (video)=>{
		setVideo(video)
	}

	return(
		<div className = {styles.app}>
			<VideoHeader onSearch = {onSearch} onLogoClick = {initVideos}/>
			<section className={styles.content}>
				{
					video && (
						<div className={styles.detail}>
							<VideoDetail video = {video}/>
						</div>
					)
				}
				<div className={styles.list}>
					<VideoList 
						videos = {videos} 
						onVideoClick ={onVideoClick} 
						display = {video ? "list" : "grid"}/>
				</div>
			</section>
		</div>
	)


}

export default App;
