import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { FirebaseApp } from './service/firebaseApp';
import AuthService from './service/authService';
import YoutubeService from './service/youtubeService';
import RecordRepository from './service/RecordRepository';

const APIkey = process.env.REACT_APP_YOUTUBE_KEY;

const authService = new AuthService(FirebaseApp);
const youtubeService = new YoutubeService(APIkey);
const recordRepository = new RecordRepository();
ReactDOM.render(
	<React.StrictMode>
		<App
			authService={authService}
			youtubeService={youtubeService}
			recordRepository={recordRepository}
		/>
	</React.StrictMode>,
	document.getElementById('root')
);
