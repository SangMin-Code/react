import styles from './app.module.css';
import Login from './component/login/Login'


function App({authService}) {
	return (
		<div className={styles.app}>
			<Login authService = {authService}/>
		</div>
	)
	
}

export default App;
