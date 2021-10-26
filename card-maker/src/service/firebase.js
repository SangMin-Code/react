import { initializeApp } from 'firebase/app';
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signOut,
} from 'firebase/auth';

export default class FireBase {
	constructor() {
		this.firebase = initializeApp({
			apiKey: process.env.REACT_APP_API_KEY,
			authDomain: process.env.REACT_APP_AUTH_DOMAIN,
			databaseURL: process.env.REACT_APP_DB_URL,
			projectId: process.env.REACT_APP_PROJECT_ID,
			storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
			messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
			appId: process.env.REACT_APP_APP_ID,
			measurementId: process.env.REACT_APP_MEASUREMENT_ID,
		});
	}

	async googleSignIn() {
		const provider = new GoogleAuthProvider();
		const auth = getAuth();
		const token = await signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential =
					GoogleAuthProvider.credentialFromResult(result);
				return credential.accessToken;
			})
			.catch((error) => {
				// Handle Errors here.
				// const errorCode = error.code;
				// const errorMessage = error.message;
				// The email of the user's account used.
				// const email = error.email;
				// The AuthCredential type that was used.
				// const credential =
				// 	GoogleAuthProvider.credentialFromError(error);
				// ...
			});
		return token;
	}

	googleSignOut() {
		const auth = getAuth();
		signOut(auth)
			.then((result) => {
				console.log(result);
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			});
	}
}
