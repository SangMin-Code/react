import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	GithubAuthProvider,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';

class AuthService {
	constructor() {
		this.googleProvider = new GoogleAuthProvider();
		this.gitHubProvider = new GithubAuthProvider();
		this.auth = getAuth();
	}

	login(providerName) {
		const authProvider = this.getProvider(providerName);
		return signInWithPopup(this.auth, authProvider);
	}

	logout() {
		signOut(this.auth);
	}

	getProvider(providerName) {
		switch (providerName) {
			case 'Google':
				return this.googleProvider;
			case 'Github':
				return this.gitHubProvider;
			default:
				console.log('error');
				throw new Error(`not supported provider ${providerName}`);
		}
	}

	onAuthChange(onUserChanged) {
		onAuthStateChanged(this.auth, (user) => {
			onUserChanged(user);
		});
	}
}

export default AuthService;
