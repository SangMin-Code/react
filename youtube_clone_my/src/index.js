import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import Youtube from './service/youtube';

const key = process.env.REACT_APP_YOUTUBE_API_KEY;
const youtube = new Youtube(key);

ReactDOM.render(
	<React.StrictMode>
		<App youtube={youtube} />
	</React.StrictMode>,
	document.getElementById('root')
);
