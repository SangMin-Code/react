import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	GithubAuthProvider,
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
}

export default AuthService;
