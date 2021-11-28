import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
import AddForm from './components/addForm/AddForm';
import Login from './components/login/Login';
import RecordMaker from './components/recordMaker/RecordMaker';

function App({authService,youtubeService}) {
	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Switch>
					<Route exact path='/'>
						<Login authService={authService}/>
					</Route>
					<Route exact path='/records'>
						<RecordMaker authService={authService} youtubeService={youtubeService}/>
					</Route>
					<Route exact path ='/add'>
						<AddForm authService={authService}/>
					</Route>					
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
