import { useState } from 'react';
import './App.css';
import { useUserMedia } from './use-user-media';
import { shuffleItems } from './utils';

function App() {
	const [cameraSquares, setCameraSquares] = useState<number[]>(
		Array.from({ length: 16 }, (_, index) => index + 1)
	);

	const { stream, error } = useUserMedia({
		video: {
			width: 1920,
			height: 1080,
		},
	});

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
