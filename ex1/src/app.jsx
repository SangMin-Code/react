import { useEffect, useState } from 'react';
import VideoHeader from './components/header/VideoHeader';
import VideoList from './components/video-list/VideoList';

function App() {
	const [videos, setVideos] = useState([]);
	const key = process.env.REACT_APP_YOUTUBE_API_KEY;
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

	return(
		<>
			<VideoHeader onSearch = {onSearch} onLogoClick = {initVideos}/>
			<VideoList videos = {videos}/>
		</>
	)


}

export default App;
