export function isDesktop() {
	const userAgent = navigator.userAgent.toLowerCase();
	return /windows|macintosh|linux/.test(userAgent);
}
