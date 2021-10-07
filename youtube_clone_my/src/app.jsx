import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/VideoList";

import SearchHeader from "./components/search_header/SearchHeader";

function App({youtube}){

	const [videos,setVideos] =useState([]);
	
	useEffect(()=>{
		youtube.mostPopular()
		.then(videos =>setVideos(videos))
	},[]);

	const onSearch = (query)=>{
		youtube.search(query)
		.then(videos =>setVideos(videos))
	}

	return (
		<>
			<SearchHeader onSearch = {onSearch}/>
			<VideoList className = {'video-list'} videos ={videos}/>
		</>
	)
}

export default App;