import { isDesktop } from '../utils/device-checker';

const desktopConstraints = {
	video: {
		width: { min: 1280, ideal: 1920, max: 2560 },
		height: { min: 720, ideal: 1080, max: 1440 },
	},
	audio: false,
} satisfies MediaStreamConstraints;

const mobileConstraints = {
	video: { facingMode: { exact: 'user' } },
	audio: false,
} satisfies MediaStreamConstraints;

export const constraints = isDesktop() ? desktopConstraints : mobileConstraints;
