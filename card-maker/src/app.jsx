import styles from './app.module.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import FireBase from './firebase';

function App() {
	const firebase = new FireBase();
	const singIn = ()=>{
		const token = firebase.googleSignIn()
		console.log(token)
	}
	const signOut = ()=>{
		firebase.googleSignOut()
	}


	return (
		<div className = {styles.app}>
			<Header/>
			<div className ={styles.btnContainer}>
				<h2 className={styles.btnTitle}>Login</h2>
				<button className={styles.btn} onClick = {singIn}>Google</button>
				<button className={styles.btn} onClick = {signOut}>LogOut</button>
			</div>
			<Footer/>
		</div>
	);
}

export default App;
