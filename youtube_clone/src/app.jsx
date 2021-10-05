import { useEffect, useState } from 'react';
import styles from './app.module.css';
import Search_header from './components/search_header/Search_header';
import VideioList from './components/Video_list/Video_list'


function App() {

	const [videos,setVideos] = useState([]);
	const search = query =>{
		const requestOptions = {
			method: 'GET',
			redirect: 'follow'
		  };
		  
		  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=`, requestOptions)
			.then(response => response.json())
			.then(result => result.items.map(item=>({...item,id:item.id.videoId})))
			.then(items => setVideos(items))
			.catch(error => console.log('error', error));
	}
	useEffect(()=>{
		const requestOptions = {
			method: 'GET',
			redirect: 'follow'
		  };
		  
		  fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&type=video&regionCode=KR&key=", requestOptions)
			.then(response => response.json())
			.then(result => setVideos(result.items))
			.catch(error => console.log('error', error));

		console.log('useEffect');
	},[]);

	

	return( 
		<div className={styles.app}>	
			<Search_header onSearch = {search}/>
			<VideioList videos = {videos}/>;
		</div>
	)
}

export default App;
