import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { FirebaseApp } from './service/firebaseApp';
import AuthService from './service/authService';
import YoutubeService from './service/youtubeService';
import RecordRepository from './service/RecordRepository';
import ImageUploader from './service/ImageUploader';
import ThumbnailInput from './components/thumbnailInput/ThumbnailInput';

const imageUploader = new ImageUploader();
const ThumbnailFileInput = memo((props) => (
	<ThumbnailInput {...props} imageUploader={imageUploader} />
));

const authService = new AuthService(FirebaseApp);
const youtubeService = new YoutubeService();
const recordRepository = new RecordRepository();

ReactDOM.render(
	<React.StrictMode>
		<App
			authService={authService}
			youtubeService={youtubeService}
			recordRepository={recordRepository}
			ThumbnailFileInput={ThumbnailFileInput}
		/>
	</React.StrictMode>,
	document.getElementById('root')
);
