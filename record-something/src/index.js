import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { FirebaseApp } from './service/firebaseApp';
import AuthService from './service/authService';

const authService = new AuthService(FirebaseApp);

ReactDOM.render(
	<React.StrictMode>
		<App authService={authService} />
	</React.StrictMode>,
	document.getElementById('root')
);
