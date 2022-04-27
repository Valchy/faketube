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
	deleteDoc,
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
const dbDocument = 'playlists';

// works
export const authenticateAnonymously = () => {
	return signInAnonymously(getAuth(app));
};

// works
export const createPlaylist = (userName, userId) => {
	let a = [db, dbDocument];
	const playlistColRef = collection(...a);
	return addDoc(playlistColRef, {
		created: serverTimestamp(),
		createdBy: userName,
		users: [
			{
				userId: 'awesome',
				name: userName
			}
		]
	});
};

// works
export const getPlaylist = playlistID => {
	const playlistDocRef = doc(db, dbDocument, playlistID);
	return getDoc(playlistDocRef);
};

// works
export const streamPlaylistVideos = (playlistID, snapshot, error) => {
	const videosColRef = collection(db, dbDocument, playlistID, 'videos');
	const itemsQuery = query(videosColRef, orderBy('created'));
	return onSnapshot(itemsQuery, snapshot, error);
};

// works
export const addUserToPlaylist = (userName, playlistID, userId) => {
	const playlistDocRef = doc(db, dbDocument, playlistID);
	return updateDoc(playlistDocRef, {
		users: arrayUnion({
			userId: userId,
			name: userName
		})
	});
};

// only used in add playlist video
const getPlaylistItems = playlistID => {
	const videosColRef = collection(db, dbDocument, playlistID, 'videos');
	return getDocs(videosColRef);
};

// works
export const addPlaylistVideo = (item, playlistID, userId) => {
	return getPlaylistItems(playlistID)
		.then(querySnapshot => querySnapshot.docs)
		.then(playlistVideos => playlistVideos.find(playlistVideo => playlistVideo.data().name.toLowerCase() === item.toLowerCase()))
		.then(matchingItem => {
			if (!matchingItem) {
				const videosColRef = collection(db, dbDocument, playlistID, 'videos');
				return addDoc(videosColRef, {
					name: item,
					created: serverTimestamp(),
					createdBy: userId
				});
			}
			throw new Error('duplicate-item-error');
		});
};

export const deletePlaylistVideo = (playlistID, videoId) => {
	const videosColRef = doc(db, dbDocument, playlistID, 'videos', videoId);
	return deleteDoc(videosColRef);
};
