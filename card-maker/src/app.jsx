import styles from './app.module.css';
import Login from './component/login/Login'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Maker from './component/maker/Maker';

function App({FileInput,authService,cardRepository}) {
	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Login authService = {authService}/>
					</Route>
					<Route exact path="/maker">
						<Maker 
							authService = {authService} 
							FileInput={FileInput}
							cardRepository = {cardRepository}
							/>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	)
	
}

export default App;
