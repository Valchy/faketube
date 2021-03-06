import { QRCodeSVG } from 'qrcode.react';
import copyToClipboard from '../../utils/copyToClipboard';

export default function QRCode({ url }) {
	if (!url) return;

	return <QRCodeSVG data-testid="qr-code" onClick={() => copyToClipboard(url)} value={url} includeMargin size={200} bgColor="#efefef" />;
}
