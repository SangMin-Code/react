import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/Login';
import AlcoholMaker from './components/alcoholMaker/AlcoholMaker';
import FoodMaker from './components/foodMaker/FoodMaker';


function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<Login/>
				</Route>
				<Route exact path='/alcohol'>
					<AlcoholMaker/>
				</Route>
				<Route exact path='/food'>
					<FoodMaker/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
