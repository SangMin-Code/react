import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

class AuthService {
	constructor() {
		this.auth = getAuth();
	}

	async asyncSignUp(email, password) {
		try {
			const result = await createUserWithEmailAndPassword(
				this.auth,
				email,
				password
			);
			console.log(result);
			return result;
		} catch (error) {
			console.log(error);
		}
	}
}

export default AuthService;
