import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { FirebaseApp } from './service/firebaseApp';
import AuthService from './service/authService';
import YoutubeService from './service/youtubeService';

const APIkey = process.env.REACT_APP_YOUTUBE_KEY;

const authService = new AuthService(FirebaseApp);
const youtubeService = new YoutubeService(APIkey);

ReactDOM.render(
	<React.StrictMode>
		<App authService={authService} youtubeService={youtubeService} />
	</React.StrictMode>,
	document.getElementById('root')
);
