import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/Login';
import RecordMaker from './components/recordMaker/RecordMaker';

function App({authService,
		youtubeService,
		recordRepository,
		ThumbnailFileInput
		,PicturesFileInput}) {
	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Switch>
					<Route exact path='/'>
						<Login authService={authService}/>
					</Route>
					<Route exact path='/records'>
						<RecordMaker 
							authService={authService} 
							youtubeService={youtubeService}
							recordRepository={recordRepository}
							ThumbnailFileInput={ThumbnailFileInput}
							PicturesFileInput={PicturesFileInput}
						/>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
