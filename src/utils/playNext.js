export default function playNext(videos, currentId) {
	// Error handling
	if (videos.length <= 1) return null;

	let chosenId = '';

	while (!chosenId || chosenId === currentId) {
		chosenId = videos[Math.floor(Math.random() * videos.length)];
	}

	return chosenId;
}
