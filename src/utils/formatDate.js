export default function formatDate(seconds) {
	return new Date(seconds * 1000).toLocaleString('en-US').split(', ')[0];
}
