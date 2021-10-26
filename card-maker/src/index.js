import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import FireBase from './service/firebase';

const firebase = new FireBase();

ReactDOM.render(
	<React.StrictMode>
		<App firebase={firebase} />
	</React.StrictMode>,
	document.getElementById('root')
);
