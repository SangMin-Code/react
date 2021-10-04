import { useEffect, useState } from 'react';
import './app.css';
import VideioList from './components/Video_list/Video_list'


function App() {

	const [videos,setVideos] = useState([]);

	useEffect(()=>{
		const requestOptions = {
			method: 'GET',
			redirect: 'follow'
		  };
		  
		  fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=", requestOptions)
			.then(response => response.json())
			.then(result => setVideos(result.items))
			.catch(error => console.log('error', error));

		console.log('useEffect');
	},[]);

	

	return <VideioList videos = {videos}/>;
}

export default App;
