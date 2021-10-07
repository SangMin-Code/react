import { useEffect, useState } from 'react';
import styles from './app.module.css';
import Search_header from './components/search_header/Search_header';
import VideioList from './components/Video_list/Video_list'


// credential 정보 코드에 남기지 않기
// DI로 코드를 구성하여 view에서는 view역할만 하도록 하기 (view에서 로직, 네트워크통신 하지 않도록)
function App({youtube}) {

	const [videos,setVideos] = useState([]);
	const search = query =>{
		
		youtube.search(query)
		.then(videos =>setVideos(videos))
		
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
			<VideioList videos = {videos}/>;
		</div>
	)
}

export default App;
