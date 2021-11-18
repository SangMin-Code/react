import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/Login';
import CardMaker from './components/cardMaker/CardMaker';

function App({authService}) {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<Login authService={authService}/>
				</Route>
				<Route exact path='/cards'>
					<CardMaker/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
