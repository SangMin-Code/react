import './app.css';
import Login from './component/login/Login'


function App({authService}) {
	return <Login authService = {authService}/>;
}

export default App;
