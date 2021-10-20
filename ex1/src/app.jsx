import { useCallback, useEffect, useState } from 'react';
import VideoHeader from './components/header/VideoHeader';
import VideoList from './components/video-list/VideoList';
import styles from './app.module.css'
import VideoDetail from './components/video-detail/VideoDetail';


function App({youtube}) {
	const [videos, setVideos] = useState([]);
	const [video, setVideo] = useState(null);

	const initVideos = useCallback(()=>{
		youtube.mostPopular()
		.then(videos => {
			setVideos(videos)
		})		
	},[youtube])
	
	useEffect(()=>{
		initVideos()
	},[youtube,initVideos])

	const onSearch = useCallback( query =>{
		youtube.search(query)
		.then(videos =>{
			setVideos(videos)
			setVideo(null);
		})
	},[youtube])

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
