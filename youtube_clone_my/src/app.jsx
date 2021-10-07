import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/VideoList";

import SearchHeader from "./components/search_header/SearchHeader";
import VideoDetail from "./components/video_item/VideoDetail";

import styles from './app.module.css'

function App({youtube}){

	const [videos,setVideos] =useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null)
	
	useEffect(()=>{
		youtube.mostPopular()
		.then(videos =>setVideos(videos))
	},[]);
	
	const selecteVideo = (videoId)=>{
		setSelectedVideo(videoId);
	}

	const onSearch = (query)=>{
		youtube.search(query)
		.then(videos =>setVideos(videos))
	}
	

 
	return (
			<div style ={styles.app}>
				<SearchHeader onSearch = {onSearch}/>
				<div className ={styles.session}>
					{selectedVideo && 
						(
						<div className={styles.detail} >
							<VideoDetail video= {selectedVideo}/>
						</div>
						)					
					}
					<div className={styles.list}>
					<VideoList 
						className = {'video-list'} 
						videos ={videos} 
						onVideoClick = {selecteVideo}
						display = {selectedVideo ? 'list' : 'grid'}/>
					</div>
				</div>
			</div>
		)
	
}

export default App;