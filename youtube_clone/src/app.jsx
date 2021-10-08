import { useEffect, useState } from 'react';
import styles from './app.module.css';
import Search_header from './components/search_header/Search_header';
import Video_detail from './components/video_detail/Video_detail';
import VideioList from './components/Video_list/Video_list'


// credential 정보 코드에 남기지 않기
// DI로 코드를 구성하여 view에서는 view역할만 하도록 하기 (view에서 로직, 네트워크통신 하지 않도록)
function App({youtube}) {

	const [videos,setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);
	
	
	const selectVideo = (video)=>{
		setSelectedVideo(video);
	}

	const search = query =>{
		
		youtube.search(query)
		.then(videos =>{
			setVideos(videos)
			setSelectedVideo(null);	
		});
		
		console.log('search');
	}
	useEffect(()=>{
		youtube.mostPopular()
		.then(videos =>setVideos(videos))
		
		console.log('useEffect');
	},[]);

	

	return( 
		<div className={styles.app}>	
			<Search_header onSearch = {search}/>
			<section className={styles.content}>
				{selectedVideo &&(
					<div className={styles.detail}>
						<Video_detail video={selectedVideo}/>
					</div>
				) }
				<div className={styles.list}>
					<VideioList 
						videos = {videos} 
						onVideoClick={selectVideo} 
						display = {selectedVideo ? 'list' :'grid'} />;
				</div>
			</section>
		</div>
	)
}

export default App;
