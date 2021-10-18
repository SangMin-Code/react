import { useEffect, useState } from 'react';
import VideoList from './components/video-list/VideoList';




function App() {
	const [videos, setVideos] = useState([]);
	const key = process.env.REACT_APP_YOUTUBE_API_KEY;
	useEffect(()=>{
		const requestOptions = {
			method: 'GET',
			redirect: 'follow'
		  };
		  fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=${key}`, requestOptions)
			.then(response => response.json())
			.then(result => setVideos(result.items))
			.catch(error => console.log('error', error));
		console.log('useEffect');
	},[])

	return <VideoList videos = {videos}/>


}

export default App;
