import { useState } from 'react';
import { useUserMedia } from './hooks/use-user-media';
import { shuffleItems } from './utils/shuffle';
import './styles/app.css';

const isDesktop = () => {
	const userAgent = navigator.userAgent.toLowerCase();
	return /windows|macintosh|linux/.test(userAgent);
};

const desktopConstraints = {
	video: {
		width: 1920,
		height: 1080,
	},
	audio: false,
};

const mobileConstraints = {
	video: true,
	audio: false,
};

const constraints = isDesktop() ? desktopConstraints : mobileConstraints;

function App() {
	const [cameraSquares, setCameraSquares] = useState<number[]>(
		Array.from({ length: 16 }, (_, index) => index + 1)
	);

	const { stream, error } = useUserMedia(constraints);

	function onClickRandomize() {
		document.startViewTransition(() => {
			setCameraSquares((prevCameraSquares) => shuffleItems(prevCameraSquares));
		});
	}

	function onClickOrder() {
		document.startViewTransition(() => {
			setCameraSquares((prevCameraSquares) =>
				[...prevCameraSquares].sort((a, b) => a - b)
			);
		});
	}

	return (
		<>
			<div className='controls'>
				<button className='button' onClick={onClickRandomize}>
					Randomize
				</button>

				<button className='button' onClick={onClickOrder}>
					Order
				</button>
			</div>

			{error && <p className='error'>{error.message}</p>}

			<div className='grid'>
				{cameraSquares.map((item) => (
					<div
						key={item}
						className={`item item${item}`}
						style={{ viewTransitionName: `item${item}` }}
					>
						<video
							className='output'
							autoPlay
							muted
							playsInline
							ref={(video) => {
								if (video) {
									video.srcObject = stream;
								}
							}}
						/>
					</div>
				))}
			</div>
		</>
	);
}

export default App;
