import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import { firebaseApp } from './service/firebase';
import AuthService from './service/authService';
import FileUploadService from './service/fileUploadService';
import ImageFileInput from './components/imageFileInput/ImageFileInput';

const authService = new AuthService(firebaseApp);
const fileUploader = new FileUploadService();

const FileInput = (props) => (
	<ImageFileInput {...props} fileUploader={fileUploader} />
);

ReactDOM.render(
	<React.StrictMode>
		<App authService={authService} FileInput={FileInput} />
	</React.StrictMode>,
	document.getElementById('root')
);
