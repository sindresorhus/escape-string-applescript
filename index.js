export default function escapeStringAppleScript(string) {
	if (typeof string !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof string}`);
	}

	return string.replace(/[\\"]/g, '\\$&');
}
