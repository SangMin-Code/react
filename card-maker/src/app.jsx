import { useState } from 'react';
import styles from './app.module.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import {Switch,BrowserRouter,Route} from 'react-router-dom';
import Login from './pages/Login'
import CardMaker from './pages/CardMaker';

function App({firebase}) {

	const [token, setToken] = useState(null)
	
	const signIn = async ()=>{
		try {
			const token = await firebase.googleSignIn();
			setToken(token);
		} catch (error) {
			console.log(error)
		}
	}
	const signOut = ()=>{
		firebase.googleSignOut()
		setToken(null)
	}
	return (	
		<BrowserRouter>	
		<div className = {token==null ? styles.appLogin : styles.appMaker}>
			<Header token ={token} logOut = {signOut}/>
				<Switch>
					<Route exact path ='/'>
						<Login signIn ={signIn}/>
					</Route>
					<Route exact path = '/test'>
						<CardMaker/>
					</Route>
				</Switch>
			<Footer/>
		</div>
		</BrowserRouter>
	);
}

export default App;
