import { initializeApp } from '@firebase/app';
import { getAuth, signInAnonymously } from '@firebase/auth';
import {
	getFirestore,
	query,
	orderBy,
	onSnapshot,
	collection,
	getDoc,
	getDocs,
	addDoc,
	updateDoc,
	doc,
	serverTimestamp,
	arrayUnion
} from '@firebase/firestore';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const playlistsCollection = 'playlists';

export const authenticateAnonymously = () => {
	return signInAnonymously(getAuth(app));
};

export const createPlaylist = (userName, userId) => {
	console.log(userName, userId);
	const playlistColRef = collection(db, playlistsCollection);
	return addDoc(playlistColRef, {
		created: serverTimestamp(),
		createdBy: userId,
		users: [
			{
				userId: userId,
				name: userName
			}
		]
	});
};

export const getPlaylist = playlistID => {
	const playlistDocRef = doc(db, playlistsCollection, playlistID);
	return getDoc(playlistDocRef);
};

export const getPlaylistItems = playlistID => {
	const videosColRef = collection(db, playlistsCollection, playlistID, 'items');
	return getDocs(videosColRef);
};

export const streamPlaylistVideos = (playlistID, snapshot, error) => {
	const videosColRef = collection(db, playlistsCollection, playlistID, 'items');
	const itemsQuery = query(videosColRef, orderBy('created'));
	return onSnapshot(itemsQuery, snapshot, error);
};

export const addUserToPlaylist = (userName, playlistID, userId) => {
	const groceryDocRef = doc(db, playlistsCollection, playlistID);
	return updateDoc(groceryDocRef, {
		users: arrayUnion({
			userId: userId,
			name: userName
		})
	});
};

export const addPlaylistVideo = (item, playlistID, userId) => {
	return getPlaylistItems(playlistID)
		.then(querySnapshot => querySnapshot.docs)
		.then(playlistVideos => playlistVideos.find(playlistVideo => playlistVideo.data().name.toLowerCase() === item.toLowerCase()))
		.then(matchingItem => {
			if (!matchingItem) {
				const videosColRef = collection(db, playlistsCollection, playlistID, 'items');
				return addDoc(videosColRef, {
					name: item,
					created: serverTimestamp(),
					createdBy: userId
				});
			}
			throw new Error('duplicate-item-error');
		});
};
