import { useState, useEffect } from 'react';

export const useUserMedia = (constraints: MediaStreamConstraints) => {
	const [stream, setStream] = useState<MediaStream | null>(null);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		if (stream) return;

		const getUserMedia = async () => {
			try {
				const _stream = await navigator.mediaDevices.getUserMedia(constraints);

				setStream(_stream);
			} catch (error) {
				if (error instanceof Error) {
					setError(error);
				}
			}
		};

		getUserMedia();
	}, [constraints, stream, error]);

	return { stream, error };
};
