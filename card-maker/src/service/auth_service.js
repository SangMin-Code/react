import firebase from 'firebase';
import { getAuth, signInWithPopup } from 'firebase/auth';

class AuthService {
	login(providerName) {
		const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
		const auth = getAuth();
		return signInWithPopup(auth, authProvider);
	}
}

export default AuthService;
