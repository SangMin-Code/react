import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/Login';
import RecordMaker from './components/recordMaker/RecordMaker';

function App({authService}) {
	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Switch>
					<Route exact path='/'>
						<Login authService={authService}/>
					</Route>
					<Route exact path='/records'>
						<RecordMaker authService={authService}/>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
