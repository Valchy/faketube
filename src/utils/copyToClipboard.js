import { showError, showSuccess } from '../services/swal';

function fallbackCopyTextToClipboard(text) {
	var textArea = document.createElement('textarea');
	textArea.value = text;

	// Avoid scrolling to bottom
	textArea.style.position = 'fixed';
	textArea.style.top = '0';
	textArea.style.left = '0';

	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();

	document.execCommand('copy');
	document.body.removeChild(textArea);
}

export default function copyToClipboard(text) {
	try {
		if (!navigator.clipboard) fallbackCopyTextToClipboard(text);
		else navigator.clipboard.writeText(text);

		showSuccess('URL copied to clipboard');
	} catch (err) {
		showError();
	}
}
