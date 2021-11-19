import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';

class AuthService {
	constructor() {
		this.auth = getAuth();
		this.googleProvider = new GoogleAuthProvider();
	}

	login() {
		return signInWithPopup(this.auth, this.googleProvider);
	}

	logout() {
		signOut(this.auth);
	}

	onAuthChange(onUserChanged) {
		onAuthStateChanged(this.auth, (user) => {
			onUserChanged(user);
		});
	}
}

export default AuthService;
