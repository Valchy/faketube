import { initializeApp } from '@firebase/app';
import { getAuth, signInAnonymously } from '@firebase/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};

// Initialise Firestore app db
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Authenticate without the need of a password
// Returns an session ID which is used later
// for the user name (to help prevent spam of names)
export const authenticateAnonymously = () => {
	return signInAnonymously(getAuth(app));
};
