import React, { createRef, useEffect, useRef, useState } from "react";
import VideoList from "./components/video_list/VideoList";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import styles from  './css/video_list/videoList.module.css'

function App(){

	const [videos,setVideos] =useState([]);

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

	const inputRef = useRef()

	const onClick = (e)=>{
		const word = inputRef.current.value;
		
		const requestOptions = {
			method: 'GET',
			redirect: 'follow'
		  };
	   
		  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${word}}&key=`, requestOptions)
			.then(response => response.json())
			.then(result => setVideos(result.items))
			.catch(error => console.log('error', error));

	}

	return (
		<>
		<div className={styles.searchbar}>
            <span className={styles.logobox}>
                <FontAwesomeIcon icon={faYoutube} className={styles.logoIcon} />
                <span className={styles.logoTitle}>Youtube</span>
            </span>
            <input ref={inputRef} type="text" placeholder='' className={styles.searchInput}/>
            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} onClick={onClick}/>
        </div>
		<VideoList className = {'video-list'} videos ={videos}/>
		</>
	)
}

export default App;