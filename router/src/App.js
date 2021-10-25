import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home';
function App() {
	return (
		<BrowserRouter>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/profile">Profile</Link>
			</nav>

			<Switch>
				<Route path={['/', '/home']} exact>
					<Home />
				</Route>
				<Route path="/profile">
					<Profile />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
